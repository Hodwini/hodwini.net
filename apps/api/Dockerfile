FROM oven/bun:1 as base
WORKDIR /app

COPY package.json bin.lock ./
COPY apps/api/package.json ./apps/api/
COPY packages/ ./packages/

RUN bun install --frozen-locks

COPY apps/api ./apps/api/

WORKDIR /app/apps/api
EXPOSE 3000

CMD ["bun", "run", "src/index.ts"]