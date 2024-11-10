import "dotenv/config";
import { setupTemporalWorker } from "./temporal/worker";
import { setupTemporalClient } from "./temporal/client";
import bootstrap from "./temporal/bootstrap";

const start = async () => {
  try {
    await setupTemporalClient();
    await bootstrap();
    await setupTemporalWorker();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
