FROM node:20-bookworm-slim AS base
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true

RUN corepack enable

RUN apt-get update && apt-get install -y \
    git \
    python3 \
    python3-pip \
    build-essential \
    libc6 \
    libc6-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN pnpm install
RUN pnpm run -r build
RUN pnpm prune --prod
RUN pnpm store prune

FROM base AS client-web
COPY --from=build /usr/src/app /prod/client-web
WORKDIR /prod/client-web
EXPOSE 3000
CMD [ "pnpm", "--filter=client-web", "start" ]

FROM base AS client-api
COPY --from=build /usr/src/app /prod/client-api
WORKDIR /prod/client-api
EXPOSE 3001
CMD [ "pnpm", "--filter=client-api", "start" ]

FROM base AS workflows
COPY --from=build /usr/src/app /prod/workflows
WORKDIR /prod/workflows
CMD [ "pnpm", "--filter=workflows", "start" ]
