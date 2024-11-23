FROM oven/bun:latest

COPY . /app
WORKDIR /app

ARG PORT=3000
EXPOSE $PORT

ENV NODE_ENV=production
ENV time_zone=Asia/Seoul
ENV PORT=$PORT

RUN bun install

RUN bun run build

CMD ["bun", "run", "--bun", "start"]
