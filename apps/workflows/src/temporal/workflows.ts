import { proxyActivities } from "@temporalio/workflow";
import type { createActivities } from "./activities";
import { TransactionType } from "@prisma/client";

export interface VerifyTransactionsArgs {}

export async function VerifyTransactions(
  args: VerifyTransactionsArgs
): Promise<boolean> {
  const {
    fetchPendingTransactions,
    fetchTransactionStatus,
    updateTransactionsStatus,
  } = proxyActivities<ReturnType<typeof createActivities>>({
    startToCloseTimeout: "10s",
    retry: {
      maximumAttempts: 3,
    },
  });

  const transactions = await fetchPendingTransactions();

  const hashes = transactions.map((tx) => tx.hash);

  const results = await fetchTransactionStatus(hashes);

  const success = results.filter((result) => result?.tx?.tx_result?.code === 0);

  const txHashes = success.map((result) => result.hash);

  if (success.length) await updateTransactionsStatus(txHashes);

  return;
}

export async function EnsureNodes() {
  const { fetchTransactionByTypes, updateNodeStatus, fetchNodeStatus } =
    proxyActivities<ReturnType<typeof createActivities>>({
      startToCloseTimeout: "10s",
      retry: {
        maximumAttempts: 3,
      },
    });

  const transactions = await fetchTransactionByTypes([
    TransactionType.STAKE,
    TransactionType.UNSTAKE,
  ]);

  const addresses = transactions.map((tx) => tx.to);

  const nodeStatus = await fetchNodeStatus(addresses);

  if (transactions.length) {
    await updateNodeStatus(transactions, nodeStatus);
  }

  return;
}
