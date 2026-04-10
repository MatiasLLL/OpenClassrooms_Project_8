FROM oven/bun:1.2

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install
COPY . .
RUN bun run build
RUN bun add -g serve

CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-8080}"]
