import { Client, Connection } from "@temporalio/client";
import {
  TEMPORAL_NAMESPACE,
  TEMPORAL_TASK_QUEUE,
  TEMPORAL_URL,
  TEMPORAL_WORKFLOW_RETENTION,
} from "./constants";

declare global {
  // eslint-disable-next-line no-var
  var temporal: Client;
}

const checkEnvVariables = (vars: string[]) => {
  //check if all env variables are set
  vars.forEach((v) => {
    if (!process.env[v]) {
      throw new Error(`Missing env variable: ${v}`);
    }
  });
};

export const getTemporal = () => global.temporal;

export const getTemporalConfig = () => {
  return {
    taskQueue: TEMPORAL_TASK_QUEUE,
    namespace: TEMPORAL_NAMESPACE,
    workflowExecutionRetentionPeriod: TEMPORAL_WORKFLOW_RETENTION,
  };
};

export const setupTemporalClient = async (): Promise<Client> => {
  if (global.temporal) return global.temporal;

  if (process.env.NODE_ENV === "production") {
    checkEnvVariables([
      "TEMPORAL_URL",
      "TEMPORAL_NAMESPACE",
      "TEMPORAL_TASK_QUEUE",
    ]);
  }

  console.log(`Setting UP Temporal Client`);

  const connection = await Connection.connect({
    address: TEMPORAL_URL,
  });

  console.log(`Connected to Temporal at ${TEMPORAL_URL}`);

  const client = new Client({
    connection,
    namespace: TEMPORAL_NAMESPACE,
  });

  console.log(`Temporal Client created`);

  global.temporal = client;

  return client;
};
