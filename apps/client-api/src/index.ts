import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { grafserv } from "postgraphile/grafserv/fastify/v4";
import { pgl } from "./graphile/postgraphile";
import { setupTemporalWorker } from "../../workflows/src/temporal/worker";
import { setupTemporalClient } from "../../workflows/src/temporal/client";
import bootstrapScheduledWorkflows from "../../workflows/src/temporal/bootstrap";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

const corsOrigins =
  process.env.NODE_ENV !== "production"
    ? ["http://localhost:3000"]
    : [/igniter.poktscan.com/i];

const gqlServer = pgl.createServ(grafserv);

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: corsOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
});

gqlServer.addTo(fastify).catch((e) => {
  console.error(e);
  process.exit(1);
});

const start = async () => {
  try {
    // await setupTemporalClient();
    // await bootstrapScheduledWorkflows();
    await fastify.listen({ port, host: "0.0.0.0" });
    // await setupTemporalWorker();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
