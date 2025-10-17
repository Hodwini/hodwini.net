# syntax=docker/dockerfile:1.7-labs

# Pin Bun version compatible with your app
ARG BUN_VERSION=1.2.22

FROM oven/bun:${BUN_VERSION} AS base
WORKDIR /app
ENV NODE_ENV=production

# Install deps separately for better layer caching
FROM base AS deps
COPY package.json bun.lock* ./
RUN --mount=type=cache,target=/root/.bun \
    if [ -f bun.lockb ]; then \
      bun install --frozen-lockfile; \
    else \
      bun install; \
    fi

# Build server binary and bundle client assets
FROM base AS builder
COPY . .
# Bring installed dependencies from deps stage (cache mount isn't persisted)
COPY --from=deps /app/node_modules /app/node_modules

# Build a native server binary (fast startup, small runtime surface)
RUN --mount=type=cache,target=/root/.bun \
    bun build src/index.ts --compile --target bun --outfile /app/server

# Bundle client for the browser and rewrite HTML entry
RUN --mount=type=cache,target=/root/.bun \
    bun build ./src/web/index.tsx --outfile /app/web/index.js --target browser --minify --sourcemap=none
COPY src/web/index.html /app/web/index.html
RUN sed -i 's|/web/index.tsx|/web/index.js|g' /app/web/index.html

# Runtime image: minimal Debian with non-root user
FROM debian:bookworm-slim AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    WEB_ROOT=/app/web
WORKDIR /app

# Create an unprivileged user
RUN useradd -r -u 10001 bun && \
    apt-get update && apt-get install -y --no-install-recommends ca-certificates curl && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/server /app/server
COPY --from=builder /app/web /app/web

USER 10001
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD curl -fsS http://127.0.0.1:${PORT}/api/hello || exit 1

CMD ["/app/server"]
