# syntax=docker/dockerfile:1.7

FROM oven/bun:1.1.26 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM deps AS build
COPY . .
RUN bun run build

FROM oven/bun:1.1.26-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4173

COPY --from=build /app/dist ./dist
# Lightweight static server via serve@14
RUN bun add --global serve@14.2.3

EXPOSE 4173
CMD ["bunx", "serve", "dist", "--single", "--listen", "0.0.0.0:4173"]
