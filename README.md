# Igniter

_tl;dr ._


# Quick Start

## Pre-requisites

The igniter repository offers all the necessary tools to get started with a deployment. Clone it by running:

```bash
git clone https://github.com/pokt-scan/igniter && cd igniter
```

### PostgreSQL

Igniter uses [PostGraphile](https://www.graphile.org/postgraphile/) to expose a GraphQL API over a PostgreSQL database. It is recommended to run the latest version for best results. For more details about supported versions see [here](https://www.graphile.org/postgraphile/requirements/#postgresql-use-latest).

### Temporal.io

Igniter uses [Temporal.io](https://temporal.io/) to manage the execution of background tasks.

## Running the pre-requisites

A docker-compose file is provided to run the necessary services. To start the services, run:

```bash
docker-compose --profile pre-requisites up -d
```
This will start a PostgreSQL database and a Temporal.io server. The PostgreSQL database will be available at `localhost:5432` and the Temporal.io server will be available at `localhost:7233`.

Additionally, you can start the temporal admin tools and the temporal.io web UI by running:

```bash
docker-compose --profile pre-requisites-admin up -d
``` 

### Initializing the PostgreSQL database

Once the pre-requisites are running, you need to install the project dependencies and run push the schema to the database.

TODO: Fix issue need to install yarn globally.

```bash
corepack enable
```

```bash
pnpm install
```

```bash
pnpm --filter=db prisma:push
```

### Build the platform images


```bash
docker-compose --profile igniter build
```

### Start the platform

```bash
docker-compose --profile igniter up -d
```
