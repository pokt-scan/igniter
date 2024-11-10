import { getTemporalConfig, setupTemporalClient } from "./client";

export enum ScheduledWorkflowType {
  VerifyTransactions = "VerifyTransactions",
  EnsureNodes = "EnsureNodes",
}

export default async function bootstrapScheduledWorkflows() {
  const client = await setupTemporalClient();
  const config = getTemporalConfig();

  for (const type in ScheduledWorkflowType) {
    const workflowType = ScheduledWorkflowType[type];
    try {
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
    }
  }
}
