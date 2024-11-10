import "dotenv/config";
import { setupTemporalWorker } from "./temporal/worker";
import { setupTemporalClient } from "./temporal/client";
import bootstrapScheduledWorkflows from "./temporal/bootstrap";

const start = async () => {
  try {
    await setupTemporalClient();
    await bootstrapScheduledWorkflows();
    await setupTemporalWorker();
  } catch (err) {
    process.exit(1);
  }
};
start();
