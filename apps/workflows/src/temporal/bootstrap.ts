import { getTemporalConfig, setupTemporalClient } from "./client";
import Long from 'long';

export enum ScheduledWorkflowType {
  VerifyTransactions = "VerifyTransactions",
  EnsureNodes = "EnsureNodes",
}

import { Connection } from '@temporalio/client';

async function bootstrapNamespace({ namespace, workflowExecutionRetentionPeriod }: { namespace: string, workflowExecutionRetentionPeriod: number }) {
  const connection = await Connection.connect();
  const workflowService = connection.workflowService;

  try {
    await workflowService.describeNamespace({ namespace });
    console.log(`Namespace "${namespace}" already exists. Skipping registration...`);
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
      } catch (error) {
        console.error(`Error registering namespace "${namespace}":`, error);
        throw error
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

export default async function bootstrap() {
    await bootstrapNamespace(getTemporalConfig());
    await bootstrapScheduledWorkflows();
}
