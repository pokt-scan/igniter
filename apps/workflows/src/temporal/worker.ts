import { NativeConnection, Worker } from "@temporalio/worker";
import { JsonRpcProvider } from "@pokt-foundation/pocketjs-provider";
import { PrismaClient } from "@prisma/client";
import { createActivities } from "./activities";
import {TEMPORAL_NAMESPACE, TEMPORAL_TASK_QUEUE, TEMPORAL_URL} from "./constants";

export async function setupTemporalWorker() {
  // Step 1: Establish a connection with Temporal server.
  //
  // Worker code uses `@temporalio/worker.NativeConnection`.
  // (But in your application code it's `@temporalio/client.Connection`.)

  const connection = await NativeConnection.connect({
    address: TEMPORAL_URL,
    // TLS and gRPC metadata configuration goes here.
  });
  // Step 2: Register Workflows and Activities with the Worker and specify your
  // namespace and Task Queue.

  const rpcProvider = new JsonRpcProvider({
    rpcUrl: process.env.POKT_RPC_URL,
  });

  const prisma = new PrismaClient();

  const worker = await Worker.create({
    connection,
    namespace: TEMPORAL_NAMESPACE,
    taskQueue: TEMPORAL_TASK_QUEUE,
    // Workflows are registered using a path as they run in a separate JS context.
    workflowsPath: require.resolve("./workflows"),
    activities: createActivities(rpcProvider, prisma),
  });

  // Step 3: Start accepting tasks on the `background-check` queue
  //
  // The worker runs until it encounters an unexepected error or the process receives a shutdown signal registered on
  // the SDK Runtime object.
  //
  // By default, worker logs are written via the Runtime logger to STDERR at INFO level.
  //
  // See https://typescript.temporal.io/api/classes/worker.Runtime#install to customize these defaults.
  await worker.run();
}
