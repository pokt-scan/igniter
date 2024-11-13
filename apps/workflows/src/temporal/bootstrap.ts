import { getTemporalConfig, setupTemporalClient } from "./client";
import Long from "long";

export enum ScheduledWorkflowType {
  VerifyTransactions = "VerifyTransactions",
  EnsureNodes = "EnsureNodes",
}

async function bootstrapNamespace() {
  const client = await setupTemporalClient();
  const config = getTemporalConfig();
  const workflowService = client.workflowService;

  const { namespace, workflowExecutionRetentionPeriod } = config;

  try {
    await workflowService.describeNamespace({ namespace });
    console.log(
      `Namespace "${namespace}" already exists. Skipping registration...`
    );
  } catch (error: any) {
    if (error.details.match(/not found/i)) {
      try {
        console.log(`Namespace "${namespace}" does not exist. Registering...`);
        await workflowService.registerNamespace({
          namespace,
          workflowExecutionRetentionPeriod: {
            seconds: Long.fromNumber(workflowExecutionRetentionPeriod),
          },
        });
        console.log(
          `Namespace "${namespace}" registered successfully, waiting 20s for it to be fully registered...`
        );
        await new Promise((resolve) => setTimeout(resolve, 20000));
      } catch (error) {
        console.error(`Error registering namespace "${namespace}":`, error);
        throw error;
      }
    } else {
      console.error(`Error describing namespace "${namespace}":`, error);
      throw error;
    }
  }
}

async function bootstrapScheduledWorkflows() {
  const client = await setupTemporalClient();
  const config = getTemporalConfig();

  for (const type in ScheduledWorkflowType) {
    const workflowType = ScheduledWorkflowType[type];
    try {
      await client.connection.workflowService.describeSchedule({
        namespace: config.namespace,
        scheduleId: `${workflowType}-scheduled`,
      });
      console.log(
        `Scheduled workflow "${workflowType}" already exists. Skipping registration...`
      );
    } catch (error: unknown) {
      try {
        console.log(
          `Scheduled workflow "${workflowType}" does not exist. Registering...`
        );
        await client.schedule.create({
          action: {
            type: "startWorkflow",
            workflowType,
            taskQueue: config.taskQueue,
          },
          scheduleId: `${workflowType}-scheduled`,
          spec: {
            intervals: [{ every: "2m" }],
          },
        });
      } catch (error) {
        console.error(`Error scheduling ${workflowType}`, error);
        throw error;
      }
    }
  }
}

export default async function bootstrap() {
  await bootstrapNamespace();
  await bootstrapScheduledWorkflows();
}
