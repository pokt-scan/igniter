export const TEMPORAL_NAMESPACE = process.env.TEMPORAL_NAMESPACE ?? 'igniter';
export const TEMPORAL_TASK_QUEUE = process.env.TEMPORAL_TASK_QUEUE ?? 'igniter-operations';
export const TEMPORAL_URL = process.env.TEMPORAL_URL ?? 'localhost:7233';
export const TEMPORAL_WORKFLOW_RETENTION = Number(process.env.TEMPORAL_WORKFLOW_RETENTION) ?? 86400;
