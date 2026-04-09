FROM oven/bun:1.2

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

CMD ["sh", "-c", "bun serve ./dist --single --port ${PORT:-3000}"]
