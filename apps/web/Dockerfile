FROM oven/bun:1 as builder
WORKDIR /app

COPY package.json bun.lockb ./
COPY apps/web/package.json ./apps/web/
COPY packages/ ./packages/

RUN bun install --frozen-lockfile

COPY apps/web/ ./apps/web/

WORKDIR /app/apps/web
RUN bun run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]