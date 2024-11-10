import {
  PrismaClient,
  TransactionStatus,
  TransactionType,
  NodeStatus,
} from "@prisma/client";

export const createActivities = (rpcProvider, prisma: PrismaClient) => ({
  async fetchPendingTransactions() {
    return prisma.transaction.findMany({
      where: {
        status: TransactionStatus.PENDING,
      },
    });
  },
  async fetchTransactionByTypes(types: TransactionType[]) {
    return prisma.transaction.findMany({
      where: {
        type: {
          in: types,
        },
      },
    });
  },
  async updateTransactionsStatus(hashes: Array<string>) {
    await prisma.transaction.updateMany({
      where: {
        hash: {
          in: hashes,
        },
      },
      data: {
        status: TransactionStatus.SUCCESS,
      },
    });
  },
  async fetchTransactionStatus(hashes: Array<string>): Promise<any> {
    const results = await Promise.all(
      hashes.map(async (hash) => {
        try {
          const tx = await rpcProvider.getTransaction(hash);
          return {
            hash,
            tx,
            error: null,
          };
        } catch (error) {
          return {
            hash,
            tx: null,
            error: error.message || "Unknown error",
          };
        }
      })
    );
    return results;
  },
  async fetchNodeStatus(addresses: Array<string>): Promise<any> {
    const results = await Promise.all(
      addresses.map(async (address) => {
        try {
          const node = await rpcProvider.getNode({ address });
          const balance = await rpcProvider.getBalance(address);

          return {
            address,
            node,
            balance: parseInt(balance),
            error: null,
          };
        } catch (error) {
          return {
            address,
            node: null,
            balance: 0,
            error: error.message || "Unknown error",
          };
        }
      })
    );
    return results;
  },
  async updateNodeStatus(transactions: Array<any>, nodeStatus) {
    for (const tx of transactions) {
      const user = await prisma.user.findUnique({
        where: {
          address: tx.from,
        },
      });

      let status;

      if (tx.type === TransactionType.STAKE) {
        if (tx.status === TransactionStatus.PENDING) {
          status = NodeStatus.UNSTAKED;
        } else if (tx.status === TransactionStatus.SUCCESS) {
          status = NodeStatus.STAKED;
        }
      } else if (tx.type === TransactionType.UNSTAKE) {
        if (tx.status === TransactionStatus.PENDING) {
          status = NodeStatus.STAKED;
        } else if (tx.status === "success") {
          status = NodeStatus.UNSTAKED;
        }
      }

      let balance = 0,
        chains = [];
      const networkStatus = nodeStatus.find((node) => node.address === tx.to);

      if (networkStatus.node) {
        balance = networkStatus.node.balance;
        chains = networkStatus.node.chains;
      }

      await prisma.poktNode.upsert({
        where: {
          address: tx.to,
        },
        update: {
          status,
          ...(status === NodeStatus.STAKED && { balance, chains }),
        },
        create: {
          address: tx.to,
          userId: user.id,
          stakeAmount: tx.amount,
          createdAt: tx.createdAt,
          status,
        },
      });
    }
  },
});
