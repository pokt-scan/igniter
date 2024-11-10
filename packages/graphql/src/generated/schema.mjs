/* eslint-disable graphile-export/export-instances, graphile-export/export-methods, graphile-export/exhaustive-deps */
import { PgDeleteSingleStep, PgExecutor, PgSelectStep, PgUnionAllStep, TYPES, assertPgClassSingleStep, enumCodec, listOfCodec, makeRegistry, pgDeleteSingle, pgInsertSingle, pgSelectFromRecord, pgUpdateSingle, recordCodec } from "@dataplan/pg";
import { ConnectionStep, EdgeStep, ObjectStep, SafeError, __ValueStep, assertEdgeCapableStep, assertExecutableStep, assertPageInfoCapableStep, connection, constant, context, first, getEnumValueConfig, makeGrafastSchema, object, rootValue } from "grafast";
import { GraphQLError, Kind } from "graphql";
import { sql } from "pg-sql2";
import { inspect } from "util";
const executor = new PgExecutor({
  name: "main",
  context() {
    const ctx = context();
    return object({
      pgSettings: "pgSettings" != null ? ctx.get("pgSettings") : constant(null),
      withPgClient: ctx.get("withPgClient")
    });
  }
});
const walletIdentifier = sql.identifier("public", "Wallet");
const spec_wallet = {
  name: "wallet",
  identifier: walletIdentifier,
  attributes: Object.assign(Object.create(null), {
    id: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    address: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    userId: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    createdAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    updatedAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    }
  }),
  description: undefined,
  extensions: {
    oid: "16459",
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "Wallet"
    },
    tags: Object.create(null)
  },
  executor: executor
};
const walletCodec = recordCodec(spec_wallet);
const stakeConfigIdentifier = sql.identifier("public", "StakeConfig");
const spec_stakeConfig = {
  name: "stakeConfig",
  identifier: stakeConfigIdentifier,
  attributes: Object.assign(Object.create(null), {
    id: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    amount: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    outputAddress: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    userId: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    createdAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    updatedAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    }
  }),
  description: undefined,
  extensions: {
    oid: "16468",
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "StakeConfig"
    },
    tags: Object.create(null)
  },
  executor: executor
};
const stakeConfigCodec = recordCodec(spec_stakeConfig);
const userIdentifier = sql.identifier("public", "User");
const spec_user = {
  name: "user",
  identifier: userIdentifier,
  attributes: Object.assign(Object.create(null), {
    id: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    email: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    isAdmin: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    address: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    createdAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    updatedAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    }
  }),
  description: undefined,
  extensions: {
    oid: "16417",
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "User"
    },
    tags: Object.create(null)
  },
  executor: executor
};
const userCodec = recordCodec(spec_user);
const providerIdentifier = sql.identifier("public", "Provider");
const spec_provider = {
  name: "provider",
  identifier: providerIdentifier,
  attributes: Object.assign(Object.create(null), {
    id: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    endpoint: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    logo: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    website: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    revShare: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    createdAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    updatedAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    }
  }),
  description: undefined,
  extensions: {
    oid: "16427",
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "Provider"
    },
    tags: Object.create(null)
  },
  executor: executor
};
const providerCodec = recordCodec(spec_provider);
const transactionTypeCodec = enumCodec({
  name: "transactionType",
  identifier: sql.identifier("public", "TransactionType"),
  values: ["SEND", "STAKE", "UPSTAKE", "UNSTAKE"],
  description: undefined,
  extensions: {
    oid: "16398",
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "TransactionType"
    },
    tags: Object.create(null)
  }
});
const nodeStatusCodec = enumCodec({
  name: "nodeStatus",
  identifier: sql.identifier("public", "NodeStatus"),
  values: ["STAKED", "UNSTAKED", "UNSTAKING"],
  description: undefined,
  extensions: {
    oid: "16408",
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "NodeStatus"
    },
    tags: Object.create(null)
  }
});
const poktNodeIdentifier = sql.identifier("public", "PoktNode");
const pgCatalogTextArrayCodec = listOfCodec(TYPES.text, {
  extensions: {
    oid: "1009",
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_text"
    },
    tags: Object.create(null)
  },
  typeDelim: ",",
  description: undefined,
  name: "pgCatalogTextArray"
});
const spec_poktNode = {
  name: "poktNode",
  identifier: poktNodeIdentifier,
  attributes: Object.assign(Object.create(null), {
    id: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    address: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    userId: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    status: {
      description: undefined,
      codec: nodeStatusCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    stakeAmount: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    balance: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    chains: {
      description: undefined,
      codec: pgCatalogTextArrayCodec,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    createdAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    updatedAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    }
  }),
  description: undefined,
  extensions: {
    oid: "16447",
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "PoktNode"
    },
    tags: Object.create(null)
  },
  executor: executor
};
const poktNodeCodec = recordCodec(spec_poktNode);
const transactionIdentifier = sql.identifier("public", "Transaction");
const transactionStatusCodec = enumCodec({
  name: "transactionStatus",
  identifier: sql.identifier("public", "TransactionStatus"),
  values: ["PENDING", "SUCCESS", "FAILED"],
  description: undefined,
  extensions: {
    oid: "16390",
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "TransactionStatus"
    },
    tags: Object.create(null)
  }
});
const spec_transaction = {
  name: "transaction",
  identifier: transactionIdentifier,
  attributes: Object.assign(Object.create(null), {
    id: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    type: {
      description: undefined,
      codec: transactionTypeCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    from: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    to: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    verified: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    hash: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    status: {
      description: undefined,
      codec: transactionStatusCodec,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    amount: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    providerId: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    },
    createdAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true
      }
    },
    updatedAt: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {},
        canSelect: true,
        canInsert: true,
        canUpdate: true,
        isIndexed: false
      }
    }
  }),
  description: undefined,
  extensions: {
    oid: "16436",
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "Transaction"
    },
    tags: Object.create(null)
  },
  executor: executor
};
const transactionCodec = recordCodec(spec_transaction);
const WalletUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_Wallet_Wallet = {
  executor: executor,
  name: "Wallet",
  identifier: "main.public.Wallet",
  from: walletIdentifier,
  codec: walletCodec,
  uniques: WalletUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "Wallet"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {},
    canSelect: true,
    canInsert: true,
    canUpdate: true,
    canDelete: true
  }
};
const StakeConfigUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_StakeConfig_StakeConfig = {
  executor: executor,
  name: "StakeConfig",
  identifier: "main.public.StakeConfig",
  from: stakeConfigIdentifier,
  codec: stakeConfigCodec,
  uniques: StakeConfigUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "StakeConfig"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {},
    canSelect: true,
    canInsert: true,
    canUpdate: true,
    canDelete: true
  }
};
const UserUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_User_User = {
  executor: executor,
  name: "User",
  identifier: "main.public.User",
  from: userIdentifier,
  codec: userCodec,
  uniques: UserUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "User"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {},
    canSelect: true,
    canInsert: true,
    canUpdate: true,
    canDelete: true
  }
};
const ProviderUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_Provider_Provider = {
  executor: executor,
  name: "Provider",
  identifier: "main.public.Provider",
  from: providerIdentifier,
  codec: providerCodec,
  uniques: ProviderUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "Provider"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {},
    canSelect: true,
    canInsert: true,
    canUpdate: true,
    canDelete: true
  }
};
const TransactionUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_Transaction_Transaction = {
  executor: executor,
  name: "Transaction",
  identifier: "main.public.Transaction",
  from: transactionIdentifier,
  codec: transactionCodec,
  uniques: TransactionUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "Transaction"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {},
    canSelect: true,
    canInsert: true,
    canUpdate: true,
    canDelete: true
  }
};
const PoktNodeUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: Object.create(null)
  }
}];
const registryConfig_pgResources_PoktNode_PoktNode = {
  executor: executor,
  name: "PoktNode",
  identifier: "main.public.PoktNode",
  from: poktNodeIdentifier,
  codec: poktNodeCodec,
  uniques: PoktNodeUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "public",
      name: "PoktNode"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {},
    canSelect: true,
    canInsert: true,
    canUpdate: true,
    canDelete: true
  }
};
const registry = makeRegistry({
  pgExecutors: Object.assign(Object.create(null), {
    main: executor
  }),
  pgCodecs: Object.assign(Object.create(null), {
    wallet: walletCodec,
    uuid: TYPES.uuid,
    text: TYPES.text,
    timestamp: TYPES.timestamp,
    stakeConfig: stakeConfigCodec,
    int4: TYPES.int,
    user: userCodec,
    bool: TYPES.boolean,
    provider: providerCodec,
    float8: TYPES.float,
    transactionType: transactionTypeCodec,
    nodeStatus: nodeStatusCodec,
    poktNode: poktNodeCodec,
    pgCatalogTextArray: pgCatalogTextArrayCodec,
    transaction: transactionCodec,
    transactionStatus: transactionStatusCodec
  }),
  pgResources: Object.assign(Object.create(null), {
    Wallet: registryConfig_pgResources_Wallet_Wallet,
    StakeConfig: registryConfig_pgResources_StakeConfig_StakeConfig,
    User: registryConfig_pgResources_User_User,
    Provider: registryConfig_pgResources_Provider_Provider,
    Transaction: registryConfig_pgResources_Transaction_Transaction,
    PoktNode: registryConfig_pgResources_PoktNode_PoktNode
  }),
  pgRelations: Object.assign(Object.create(null), {
    poktNode: Object.assign(Object.create(null), {
      userByMyUserId: {
        localCodec: poktNodeCodec,
        remoteResourceOptions: registryConfig_pgResources_User_User,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["userId"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }),
    provider: Object.assign(Object.create(null), {
      transactionsByTheirProviderId: {
        localCodec: providerCodec,
        remoteResourceOptions: registryConfig_pgResources_Transaction_Transaction,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["providerId"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          },
          isIndexed: false
        }
      }
    }),
    stakeConfig: Object.assign(Object.create(null), {
      userByMyUserId: {
        localCodec: stakeConfigCodec,
        remoteResourceOptions: registryConfig_pgResources_User_User,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["userId"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }),
    transaction: Object.assign(Object.create(null), {
      providerByMyProviderId: {
        localCodec: transactionCodec,
        remoteResourceOptions: registryConfig_pgResources_Provider_Provider,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["providerId"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }),
    user: Object.assign(Object.create(null), {
      poktNodesByTheirUserId: {
        localCodec: userCodec,
        remoteResourceOptions: registryConfig_pgResources_PoktNode_PoktNode,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["userId"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      walletsByTheirUserId: {
        localCodec: userCodec,
        remoteResourceOptions: registryConfig_pgResources_Wallet_Wallet,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["userId"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      stakeConfigsByTheirUserId: {
        localCodec: userCodec,
        remoteResourceOptions: registryConfig_pgResources_StakeConfig_StakeConfig,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["userId"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          },
          isIndexed: false
        }
      }
    }),
    wallet: Object.assign(Object.create(null), {
      userByMyUserId: {
        localCodec: walletCodec,
        remoteResourceOptions: registryConfig_pgResources_User_User,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["userId"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    })
  })
});
const resource_WalletPgResource = registry.pgResources["Wallet"];
const resource_StakeConfigPgResource = registry.pgResources["StakeConfig"];
const resource_UserPgResource = registry.pgResources["User"];
const resource_ProviderPgResource = registry.pgResources["Provider"];
const resource_TransactionPgResource = registry.pgResources["Transaction"];
const resource_PoktNodePgResource = registry.pgResources["PoktNode"];
const applyOrderToPlan = ($select, $value, TableOrderByType) => {
  if (!("evalLength" in $value)) {
    return;
  }
  const length = $value.evalLength();
  if (length == null) {
    return;
  }
  for (let i = 0; i < length; i++) {
    const order = $value.at(i).eval();
    if (order == null) continue;
    const config = getEnumValueConfig(TableOrderByType, order);
    const plan = config?.extensions?.grafast?.applyPlan;
    if (typeof plan !== "function") {
      console.error(`Internal server error: invalid orderBy configuration: expected function, but received ${inspect(plan)}`);
      throw new SafeError("Internal server error: invalid orderBy configuration");
    }
    plan($select);
  }
};
function UUIDSerialize(value) {
  return "" + value;
}
const coerce = string => {
  if (!/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i.test(string)) {
    throw new GraphQLError("Invalid UUID, expected 32 hexadecimal characters, optionally with hypens");
  }
  return string;
};
export const typeDefs = /* GraphQL */`"""The root query type which gives access points into the data universe."""
type Query {
  """
  Exposes the root query type nested one level down. This is helpful for Relay 1
  which can only query top level fields if they are in a particular form.
  """
  query: Query!

  """Get a single \`Wallet\`."""
  walletByRowId(rowId: UUID!): Wallet

  """Get a single \`StakeConfig\`."""
  stakeConfigByRowId(rowId: UUID!): StakeConfig

  """Get a single \`User\`."""
  userByRowId(rowId: UUID!): User

  """Get a single \`Provider\`."""
  providerByRowId(rowId: UUID!): Provider

  """Get a single \`Transaction\`."""
  transactionByRowId(rowId: UUID!): Transaction

  """Get a single \`PoktNode\`."""
  poktNodeByRowId(rowId: UUID!): PoktNode

  """Reads and enables pagination through a set of \`Wallet\`."""
  allWallets(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Wallet\`."""
    orderBy: [WalletOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: WalletCondition
  ): WalletConnection

  """Reads and enables pagination through a set of \`StakeConfig\`."""
  allStakeConfigs(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`StakeConfig\`."""
    orderBy: [StakeConfigOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: StakeConfigCondition
  ): StakeConfigConnection

  """Reads and enables pagination through a set of \`User\`."""
  allUsers(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`User\`."""
    orderBy: [UserOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: UserCondition
  ): UserConnection

  """Reads and enables pagination through a set of \`Provider\`."""
  allProviders(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Provider\`."""
    orderBy: [ProviderOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ProviderCondition
  ): ProviderConnection

  """Reads and enables pagination through a set of \`Transaction\`."""
  allTransactions(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Transaction\`."""
    orderBy: [TransactionOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: TransactionCondition
  ): TransactionConnection

  """Reads and enables pagination through a set of \`PoktNode\`."""
  allPoktNodes(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`PoktNode\`."""
    orderBy: [PoktNodeOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PoktNodeCondition
  ): PoktNodeConnection
}

type Wallet {
  rowId: UUID!
  address: String!
  userId: UUID!
  createdAt: Datetime
  updatedAt: Datetime

  """Reads a single \`User\` that is related to this \`Wallet\`."""
  userByUserId: User
}

"""
A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122).
"""
scalar UUID

"""
A point in time as described by the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
to unexpected results.
"""
scalar Datetime

type User {
  rowId: UUID!
  email: String
  name: String
  isAdmin: Boolean!
  address: String!
  createdAt: Datetime
  updatedAt: Datetime

  """Reads and enables pagination through a set of \`PoktNode\`."""
  poktNodesByUserId(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`PoktNode\`."""
    orderBy: [PoktNodeOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PoktNodeCondition
  ): PoktNodeConnection!

  """Reads and enables pagination through a set of \`Wallet\`."""
  walletsByUserId(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Wallet\`."""
    orderBy: [WalletOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: WalletCondition
  ): WalletConnection!
}

"""A connection to a list of \`PoktNode\` values."""
type PoktNodeConnection {
  """A list of \`PoktNode\` objects."""
  nodes: [PoktNode]!

  """
  A list of edges which contains the \`PoktNode\` and cursor to aid in pagination.
  """
  edges: [PoktNodeEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`PoktNode\` you could get from the connection."""
  totalCount: Int!
}

type PoktNode {
  rowId: UUID!
  address: String!
  userId: UUID!
  status: NodeStatus!
  stakeAmount: Float!
  balance: Float!
  chains: [String]
  createdAt: Datetime
  updatedAt: Datetime

  """Reads a single \`User\` that is related to this \`PoktNode\`."""
  userByUserId: User
}

enum NodeStatus {
  STAKED
  UNSTAKED
  UNSTAKING
}

"""A \`PoktNode\` edge in the connection."""
type PoktNodeEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`PoktNode\` at the end of the edge."""
  node: PoktNode
}

"""A location in a connection that can be used for resuming pagination."""
scalar Cursor

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: Cursor

  """When paginating forwards, the cursor to continue."""
  endCursor: Cursor
}

"""Methods to use when ordering \`PoktNode\`."""
enum PoktNodeOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  ADDRESS_ASC
  ADDRESS_DESC
  USER_ID_ASC
  USER_ID_DESC
}

"""
A condition to be used against \`PoktNode\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input PoktNodeCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: UUID

  """Checks for equality with the object’s \`address\` field."""
  address: String

  """Checks for equality with the object’s \`userId\` field."""
  userId: UUID
}

"""A connection to a list of \`Wallet\` values."""
type WalletConnection {
  """A list of \`Wallet\` objects."""
  nodes: [Wallet]!

  """
  A list of edges which contains the \`Wallet\` and cursor to aid in pagination.
  """
  edges: [WalletEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Wallet\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Wallet\` edge in the connection."""
type WalletEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Wallet\` at the end of the edge."""
  node: Wallet
}

"""Methods to use when ordering \`Wallet\`."""
enum WalletOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  ADDRESS_ASC
  ADDRESS_DESC
  USER_ID_ASC
  USER_ID_DESC
}

"""
A condition to be used against \`Wallet\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input WalletCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: UUID

  """Checks for equality with the object’s \`address\` field."""
  address: String

  """Checks for equality with the object’s \`userId\` field."""
  userId: UUID
}

type StakeConfig {
  rowId: UUID!
  amount: Int!
  outputAddress: String!
  userId: UUID!
  createdAt: Datetime
  updatedAt: Datetime

  """Reads a single \`User\` that is related to this \`StakeConfig\`."""
  userByUserId: User
}

type Provider {
  rowId: UUID!
  name: String!
  endpoint: String!
  logo: String!
  website: String!
  revShare: Float!
  createdAt: Datetime
  updatedAt: Datetime
}

type Transaction {
  rowId: UUID!
  type: TransactionType!
  from: String!
  to: String
  verified: Boolean!
  hash: String!
  status: TransactionStatus!
  amount: Float!
  providerId: UUID
  createdAt: Datetime
  updatedAt: Datetime

  """Reads a single \`Provider\` that is related to this \`Transaction\`."""
  providerByProviderId: Provider
}

enum TransactionType {
  SEND
  STAKE
  UPSTAKE
  UNSTAKE
}

enum TransactionStatus {
  PENDING
  SUCCESS
  FAILED
}

"""A connection to a list of \`StakeConfig\` values."""
type StakeConfigConnection {
  """A list of \`StakeConfig\` objects."""
  nodes: [StakeConfig]!

  """
  A list of edges which contains the \`StakeConfig\` and cursor to aid in pagination.
  """
  edges: [StakeConfigEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`StakeConfig\` you could get from the connection."""
  totalCount: Int!
}

"""A \`StakeConfig\` edge in the connection."""
type StakeConfigEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`StakeConfig\` at the end of the edge."""
  node: StakeConfig
}

"""Methods to use when ordering \`StakeConfig\`."""
enum StakeConfigOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""
A condition to be used against \`StakeConfig\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input StakeConfigCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: UUID
}

"""A connection to a list of \`User\` values."""
type UserConnection {
  """A list of \`User\` objects."""
  nodes: [User]!

  """
  A list of edges which contains the \`User\` and cursor to aid in pagination.
  """
  edges: [UserEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`User\` you could get from the connection."""
  totalCount: Int!
}

"""A \`User\` edge in the connection."""
type UserEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`User\` at the end of the edge."""
  node: User
}

"""Methods to use when ordering \`User\`."""
enum UserOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  EMAIL_ASC
  EMAIL_DESC
  ADDRESS_ASC
  ADDRESS_DESC
}

"""
A condition to be used against \`User\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input UserCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: UUID

  """Checks for equality with the object’s \`email\` field."""
  email: String

  """Checks for equality with the object’s \`address\` field."""
  address: String
}

"""A connection to a list of \`Provider\` values."""
type ProviderConnection {
  """A list of \`Provider\` objects."""
  nodes: [Provider]!

  """
  A list of edges which contains the \`Provider\` and cursor to aid in pagination.
  """
  edges: [ProviderEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Provider\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Provider\` edge in the connection."""
type ProviderEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Provider\` at the end of the edge."""
  node: Provider
}

"""Methods to use when ordering \`Provider\`."""
enum ProviderOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""
A condition to be used against \`Provider\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input ProviderCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: UUID
}

"""A connection to a list of \`Transaction\` values."""
type TransactionConnection {
  """A list of \`Transaction\` objects."""
  nodes: [Transaction]!

  """
  A list of edges which contains the \`Transaction\` and cursor to aid in pagination.
  """
  edges: [TransactionEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Transaction\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Transaction\` edge in the connection."""
type TransactionEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Transaction\` at the end of the edge."""
  node: Transaction
}

"""Methods to use when ordering \`Transaction\`."""
enum TransactionOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  FROM_ASC
  FROM_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
}

"""
A condition to be used against \`Transaction\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input TransactionCondition {
  """Checks for equality with the object’s \`rowId\` field."""
  rowId: UUID

  """Checks for equality with the object’s \`from\` field."""
  from: String

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime
}

"""
The root mutation type which contains root level fields which mutate data.
"""
type Mutation {
  """Creates a single \`Wallet\`."""
  createWallet(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateWalletInput!
  ): CreateWalletPayload

  """Creates a single \`StakeConfig\`."""
  createStakeConfig(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateStakeConfigInput!
  ): CreateStakeConfigPayload

  """Creates a single \`User\`."""
  createUser(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateUserInput!
  ): CreateUserPayload

  """Creates a single \`Provider\`."""
  createProvider(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateProviderInput!
  ): CreateProviderPayload

  """Creates a single \`Transaction\`."""
  createTransaction(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateTransactionInput!
  ): CreateTransactionPayload

  """Creates a single \`PoktNode\`."""
  createPoktNode(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePoktNodeInput!
  ): CreatePoktNodePayload

  """Updates a single \`Wallet\` using a unique key and a patch."""
  updateWalletByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateWalletByRowIdInput!
  ): UpdateWalletPayload

  """Updates a single \`StakeConfig\` using a unique key and a patch."""
  updateStakeConfigByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateStakeConfigByRowIdInput!
  ): UpdateStakeConfigPayload

  """Updates a single \`User\` using a unique key and a patch."""
  updateUserByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateUserByRowIdInput!
  ): UpdateUserPayload

  """Updates a single \`Provider\` using a unique key and a patch."""
  updateProviderByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateProviderByRowIdInput!
  ): UpdateProviderPayload

  """Updates a single \`Transaction\` using a unique key and a patch."""
  updateTransactionByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateTransactionByRowIdInput!
  ): UpdateTransactionPayload

  """Updates a single \`PoktNode\` using a unique key and a patch."""
  updatePoktNodeByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePoktNodeByRowIdInput!
  ): UpdatePoktNodePayload

  """Deletes a single \`Wallet\` using a unique key."""
  deleteWalletByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteWalletByRowIdInput!
  ): DeleteWalletPayload

  """Deletes a single \`StakeConfig\` using a unique key."""
  deleteStakeConfigByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteStakeConfigByRowIdInput!
  ): DeleteStakeConfigPayload

  """Deletes a single \`User\` using a unique key."""
  deleteUserByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteUserByRowIdInput!
  ): DeleteUserPayload

  """Deletes a single \`Provider\` using a unique key."""
  deleteProviderByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteProviderByRowIdInput!
  ): DeleteProviderPayload

  """Deletes a single \`Transaction\` using a unique key."""
  deleteTransactionByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteTransactionByRowIdInput!
  ): DeleteTransactionPayload

  """Deletes a single \`PoktNode\` using a unique key."""
  deletePoktNodeByRowId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePoktNodeByRowIdInput!
  ): DeletePoktNodePayload
}

"""The output of our create \`Wallet\` mutation."""
type CreateWalletPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Wallet\` that was created by this mutation."""
  wallet: Wallet

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Wallet\`. May be used by Relay 1."""
  walletEdge(
    """The method to use when ordering \`Wallet\`."""
    orderBy: [WalletOrderBy!]! = [PRIMARY_KEY_ASC]
  ): WalletEdge
}

"""All input for the create \`Wallet\` mutation."""
input CreateWalletInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Wallet\` to be created by this mutation."""
  wallet: WalletInput!
}

"""An input for mutations affecting \`Wallet\`"""
input WalletInput {
  rowId: UUID
  address: String!
  userId: UUID!
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our create \`StakeConfig\` mutation."""
type CreateStakeConfigPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`StakeConfig\` that was created by this mutation."""
  stakeConfig: StakeConfig

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`StakeConfig\`. May be used by Relay 1."""
  stakeConfigEdge(
    """The method to use when ordering \`StakeConfig\`."""
    orderBy: [StakeConfigOrderBy!]! = [PRIMARY_KEY_ASC]
  ): StakeConfigEdge
}

"""All input for the create \`StakeConfig\` mutation."""
input CreateStakeConfigInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`StakeConfig\` to be created by this mutation."""
  stakeConfig: StakeConfigInput!
}

"""An input for mutations affecting \`StakeConfig\`"""
input StakeConfigInput {
  rowId: UUID
  amount: Int!
  outputAddress: String!
  userId: UUID!
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our create \`User\` mutation."""
type CreateUserPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`User\` that was created by this mutation."""
  user: User

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`User\`. May be used by Relay 1."""
  userEdge(
    """The method to use when ordering \`User\`."""
    orderBy: [UserOrderBy!]! = [PRIMARY_KEY_ASC]
  ): UserEdge
}

"""All input for the create \`User\` mutation."""
input CreateUserInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`User\` to be created by this mutation."""
  user: UserInput!
}

"""An input for mutations affecting \`User\`"""
input UserInput {
  rowId: UUID
  email: String
  name: String
  isAdmin: Boolean
  address: String!
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our create \`Provider\` mutation."""
type CreateProviderPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Provider\` that was created by this mutation."""
  provider: Provider

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Provider\`. May be used by Relay 1."""
  providerEdge(
    """The method to use when ordering \`Provider\`."""
    orderBy: [ProviderOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ProviderEdge
}

"""All input for the create \`Provider\` mutation."""
input CreateProviderInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Provider\` to be created by this mutation."""
  provider: ProviderInput!
}

"""An input for mutations affecting \`Provider\`"""
input ProviderInput {
  rowId: UUID
  name: String!
  endpoint: String!
  logo: String!
  website: String!
  revShare: Float!
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our create \`Transaction\` mutation."""
type CreateTransactionPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Transaction\` that was created by this mutation."""
  transaction: Transaction

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Transaction\`. May be used by Relay 1."""
  transactionEdge(
    """The method to use when ordering \`Transaction\`."""
    orderBy: [TransactionOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TransactionEdge
}

"""All input for the create \`Transaction\` mutation."""
input CreateTransactionInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Transaction\` to be created by this mutation."""
  transaction: TransactionInput!
}

"""An input for mutations affecting \`Transaction\`"""
input TransactionInput {
  rowId: UUID
  type: TransactionType!
  from: String!
  to: String
  verified: Boolean
  hash: String!
  status: TransactionStatus
  amount: Float!
  providerId: UUID
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our create \`PoktNode\` mutation."""
type CreatePoktNodePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PoktNode\` that was created by this mutation."""
  poktNode: PoktNode

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PoktNode\`. May be used by Relay 1."""
  poktNodeEdge(
    """The method to use when ordering \`PoktNode\`."""
    orderBy: [PoktNodeOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PoktNodeEdge
}

"""All input for the create \`PoktNode\` mutation."""
input CreatePoktNodeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`PoktNode\` to be created by this mutation."""
  poktNode: PoktNodeInput!
}

"""An input for mutations affecting \`PoktNode\`"""
input PoktNodeInput {
  rowId: UUID
  address: String!
  userId: UUID!
  status: NodeStatus!
  stakeAmount: Float
  balance: Float
  chains: [String]
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our update \`Wallet\` mutation."""
type UpdateWalletPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Wallet\` that was updated by this mutation."""
  wallet: Wallet

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Wallet\`. May be used by Relay 1."""
  walletEdge(
    """The method to use when ordering \`Wallet\`."""
    orderBy: [WalletOrderBy!]! = [PRIMARY_KEY_ASC]
  ): WalletEdge
}

"""All input for the \`updateWalletByRowId\` mutation."""
input UpdateWalletByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!

  """
  An object where the defined keys will be set on the \`Wallet\` being updated.
  """
  walletPatch: WalletPatch!
}

"""
Represents an update to a \`Wallet\`. Fields that are set will be updated.
"""
input WalletPatch {
  rowId: UUID
  address: String
  userId: UUID
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our update \`StakeConfig\` mutation."""
type UpdateStakeConfigPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`StakeConfig\` that was updated by this mutation."""
  stakeConfig: StakeConfig

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`StakeConfig\`. May be used by Relay 1."""
  stakeConfigEdge(
    """The method to use when ordering \`StakeConfig\`."""
    orderBy: [StakeConfigOrderBy!]! = [PRIMARY_KEY_ASC]
  ): StakeConfigEdge
}

"""All input for the \`updateStakeConfigByRowId\` mutation."""
input UpdateStakeConfigByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!

  """
  An object where the defined keys will be set on the \`StakeConfig\` being updated.
  """
  stakeConfigPatch: StakeConfigPatch!
}

"""
Represents an update to a \`StakeConfig\`. Fields that are set will be updated.
"""
input StakeConfigPatch {
  rowId: UUID
  amount: Int
  outputAddress: String
  userId: UUID
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our update \`User\` mutation."""
type UpdateUserPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`User\` that was updated by this mutation."""
  user: User

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`User\`. May be used by Relay 1."""
  userEdge(
    """The method to use when ordering \`User\`."""
    orderBy: [UserOrderBy!]! = [PRIMARY_KEY_ASC]
  ): UserEdge
}

"""All input for the \`updateUserByRowId\` mutation."""
input UpdateUserByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!

  """
  An object where the defined keys will be set on the \`User\` being updated.
  """
  userPatch: UserPatch!
}

"""Represents an update to a \`User\`. Fields that are set will be updated."""
input UserPatch {
  rowId: UUID
  email: String
  name: String
  isAdmin: Boolean
  address: String
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our update \`Provider\` mutation."""
type UpdateProviderPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Provider\` that was updated by this mutation."""
  provider: Provider

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Provider\`. May be used by Relay 1."""
  providerEdge(
    """The method to use when ordering \`Provider\`."""
    orderBy: [ProviderOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ProviderEdge
}

"""All input for the \`updateProviderByRowId\` mutation."""
input UpdateProviderByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!

  """
  An object where the defined keys will be set on the \`Provider\` being updated.
  """
  providerPatch: ProviderPatch!
}

"""
Represents an update to a \`Provider\`. Fields that are set will be updated.
"""
input ProviderPatch {
  rowId: UUID
  name: String
  endpoint: String
  logo: String
  website: String
  revShare: Float
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our update \`Transaction\` mutation."""
type UpdateTransactionPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Transaction\` that was updated by this mutation."""
  transaction: Transaction

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Transaction\`. May be used by Relay 1."""
  transactionEdge(
    """The method to use when ordering \`Transaction\`."""
    orderBy: [TransactionOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TransactionEdge
}

"""All input for the \`updateTransactionByRowId\` mutation."""
input UpdateTransactionByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!

  """
  An object where the defined keys will be set on the \`Transaction\` being updated.
  """
  transactionPatch: TransactionPatch!
}

"""
Represents an update to a \`Transaction\`. Fields that are set will be updated.
"""
input TransactionPatch {
  rowId: UUID
  type: TransactionType
  from: String
  to: String
  verified: Boolean
  hash: String
  status: TransactionStatus
  amount: Float
  providerId: UUID
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our update \`PoktNode\` mutation."""
type UpdatePoktNodePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PoktNode\` that was updated by this mutation."""
  poktNode: PoktNode

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PoktNode\`. May be used by Relay 1."""
  poktNodeEdge(
    """The method to use when ordering \`PoktNode\`."""
    orderBy: [PoktNodeOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PoktNodeEdge
}

"""All input for the \`updatePoktNodeByRowId\` mutation."""
input UpdatePoktNodeByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!

  """
  An object where the defined keys will be set on the \`PoktNode\` being updated.
  """
  poktNodePatch: PoktNodePatch!
}

"""
Represents an update to a \`PoktNode\`. Fields that are set will be updated.
"""
input PoktNodePatch {
  rowId: UUID
  address: String
  userId: UUID
  status: NodeStatus
  stakeAmount: Float
  balance: Float
  chains: [String]
  createdAt: Datetime
  updatedAt: Datetime
}

"""The output of our delete \`Wallet\` mutation."""
type DeleteWalletPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Wallet\` that was deleted by this mutation."""
  wallet: Wallet

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Wallet\`. May be used by Relay 1."""
  walletEdge(
    """The method to use when ordering \`Wallet\`."""
    orderBy: [WalletOrderBy!]! = [PRIMARY_KEY_ASC]
  ): WalletEdge
}

"""All input for the \`deleteWalletByRowId\` mutation."""
input DeleteWalletByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!
}

"""The output of our delete \`StakeConfig\` mutation."""
type DeleteStakeConfigPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`StakeConfig\` that was deleted by this mutation."""
  stakeConfig: StakeConfig

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`StakeConfig\`. May be used by Relay 1."""
  stakeConfigEdge(
    """The method to use when ordering \`StakeConfig\`."""
    orderBy: [StakeConfigOrderBy!]! = [PRIMARY_KEY_ASC]
  ): StakeConfigEdge
}

"""All input for the \`deleteStakeConfigByRowId\` mutation."""
input DeleteStakeConfigByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!
}

"""The output of our delete \`User\` mutation."""
type DeleteUserPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`User\` that was deleted by this mutation."""
  user: User

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`User\`. May be used by Relay 1."""
  userEdge(
    """The method to use when ordering \`User\`."""
    orderBy: [UserOrderBy!]! = [PRIMARY_KEY_ASC]
  ): UserEdge
}

"""All input for the \`deleteUserByRowId\` mutation."""
input DeleteUserByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!
}

"""The output of our delete \`Provider\` mutation."""
type DeleteProviderPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Provider\` that was deleted by this mutation."""
  provider: Provider

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Provider\`. May be used by Relay 1."""
  providerEdge(
    """The method to use when ordering \`Provider\`."""
    orderBy: [ProviderOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ProviderEdge
}

"""All input for the \`deleteProviderByRowId\` mutation."""
input DeleteProviderByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!
}

"""The output of our delete \`Transaction\` mutation."""
type DeleteTransactionPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Transaction\` that was deleted by this mutation."""
  transaction: Transaction

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Transaction\`. May be used by Relay 1."""
  transactionEdge(
    """The method to use when ordering \`Transaction\`."""
    orderBy: [TransactionOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TransactionEdge
}

"""All input for the \`deleteTransactionByRowId\` mutation."""
input DeleteTransactionByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!
}

"""The output of our delete \`PoktNode\` mutation."""
type DeletePoktNodePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PoktNode\` that was deleted by this mutation."""
  poktNode: PoktNode

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PoktNode\`. May be used by Relay 1."""
  poktNodeEdge(
    """The method to use when ordering \`PoktNode\`."""
    orderBy: [PoktNodeOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PoktNodeEdge
}

"""All input for the \`deletePoktNodeByRowId\` mutation."""
input DeletePoktNodeByRowIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  rowId: UUID!
}`;
export const plans = {
  Query: {
    __assertStep() {
      return true;
    },
    query() {
      return rootValue();
    },
    walletByRowId: {
      plan(_$root, args) {
        return resource_WalletPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    stakeConfigByRowId: {
      plan(_$root, args) {
        return resource_StakeConfigPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    userByRowId: {
      plan(_$root, args) {
        return resource_UserPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    providerByRowId: {
      plan(_$root, args) {
        return resource_ProviderPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    transactionByRowId: {
      plan(_$root, args) {
        return resource_TransactionPgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    poktNodeByRowId: {
      plan(_$root, args) {
        return resource_PoktNodePgResource.get({
          id: args.get("rowId")
        });
      },
      args: {
        rowId: undefined
      }
    },
    allWallets: {
      plan() {
        return connection(resource_WalletPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("WalletOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allStakeConfigs: {
      plan() {
        return connection(resource_StakeConfigPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("StakeConfigOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allUsers: {
      plan() {
        return connection(resource_UserPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("UserOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allProviders: {
      plan() {
        return connection(resource_ProviderPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("ProviderOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allTransactions: {
      plan() {
        return connection(resource_TransactionPgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("TransactionOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    allPoktNodes: {
      plan() {
        return connection(resource_PoktNodePgResource.find());
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("PoktNodeOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    }
  },
  Wallet: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    address($record) {
      return $record.get("address");
    },
    userId($record) {
      return $record.get("userId");
    },
    createdAt($record) {
      return $record.get("createdAt");
    },
    updatedAt($record) {
      return $record.get("updatedAt");
    },
    userByUserId($record) {
      return resource_UserPgResource.get({
        id: $record.get("userId")
      });
    }
  },
  UUID: {
    serialize: UUIDSerialize,
    parseValue(value) {
      return coerce("" + value);
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        // ERRORS: add name to this error
        throw new GraphQLError(`${"UUID" ?? "This scalar"} can only parse string values (kind = '${ast.kind}')`);
      }
      return coerce(ast.value);
    }
  },
  Datetime: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Datetime" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  User: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    email($record) {
      return $record.get("email");
    },
    name($record) {
      return $record.get("name");
    },
    isAdmin($record) {
      return $record.get("isAdmin");
    },
    address($record) {
      return $record.get("address");
    },
    createdAt($record) {
      return $record.get("createdAt");
    },
    updatedAt($record) {
      return $record.get("updatedAt");
    },
    poktNodesByUserId: {
      plan($record) {
        const $records = resource_PoktNodePgResource.find({
          userId: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("PoktNodeOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    },
    walletsByUserId: {
      plan($record) {
        const $records = resource_WalletPgResource.find({
          userId: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, arg) {
            $connection.setFirst(arg.getRaw());
          }
        },
        last: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setLast(val.getRaw());
          }
        },
        offset: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setOffset(val.getRaw());
          }
        },
        before: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setBefore(val.getRaw());
          }
        },
        after: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val) {
            $connection.setAfter(val.getRaw());
          }
        },
        orderBy: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $connection, val, info) {
            const $value = val.getRaw();
            const $select = $connection.getSubplan();
            applyOrderToPlan($select, $value, info.schema.getType("WalletOrderBy"));
            return null;
          }
        },
        condition: {
          autoApplyAfterParentPlan: true,
          applyPlan(_condition, $connection) {
            const $select = $connection.getSubplan();
            return $select.wherePlan();
          }
        }
      }
    }
  },
  PoktNodeConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  PoktNode: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    address($record) {
      return $record.get("address");
    },
    userId($record) {
      return $record.get("userId");
    },
    status($record) {
      return $record.get("status");
    },
    stakeAmount($record) {
      return $record.get("stakeAmount");
    },
    balance($record) {
      return $record.get("balance");
    },
    chains($record) {
      return $record.get("chains");
    },
    createdAt($record) {
      return $record.get("createdAt");
    },
    updatedAt($record) {
      return $record.get("updatedAt");
    },
    userByUserId($record) {
      return resource_UserPgResource.get({
        id: $record.get("userId")
      });
    }
  },
  PoktNodeEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  Cursor: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Cursor" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  PageInfo: {
    __assertStep: assertPageInfoCapableStep,
    hasNextPage($pageInfo) {
      return $pageInfo.hasNextPage();
    },
    hasPreviousPage($pageInfo) {
      return $pageInfo.hasPreviousPage();
    },
    startCursor($pageInfo) {
      return $pageInfo.startCursor();
    },
    endCursor($pageInfo) {
      return $pageInfo.endCursor();
    }
  },
  PoktNodeOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        PoktNodeUniques[0].attributes.forEach(attributeName => {
          const attribute = poktNodeCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        PoktNodeUniques[0].attributes.forEach(attributeName => {
          const attribute = poktNodeCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ADDRESS_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "address",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ADDRESS_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "address",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    USER_ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "userId",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    USER_ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "userId",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  PoktNodeCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_poktNode.attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "address",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "address",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_poktNode.attributes.address.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "userId",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "userId",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_poktNode.attributes.userId.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  WalletConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  WalletEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  WalletOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        WalletUniques[0].attributes.forEach(attributeName => {
          const attribute = walletCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        WalletUniques[0].attributes.forEach(attributeName => {
          const attribute = walletCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ADDRESS_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "address",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ADDRESS_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "address",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    USER_ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "userId",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    USER_ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "userId",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  WalletCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_wallet.attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "address",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "address",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_wallet.attributes.address.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "userId",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "userId",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_wallet.attributes.userId.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  StakeConfig: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    amount($record) {
      return $record.get("amount");
    },
    outputAddress($record) {
      return $record.get("outputAddress");
    },
    userId($record) {
      return $record.get("userId");
    },
    createdAt($record) {
      return $record.get("createdAt");
    },
    updatedAt($record) {
      return $record.get("updatedAt");
    },
    userByUserId($record) {
      return resource_UserPgResource.get({
        id: $record.get("userId")
      });
    }
  },
  Provider: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    name($record) {
      return $record.get("name");
    },
    endpoint($record) {
      return $record.get("endpoint");
    },
    logo($record) {
      return $record.get("logo");
    },
    website($record) {
      return $record.get("website");
    },
    revShare($record) {
      return $record.get("revShare");
    },
    createdAt($record) {
      return $record.get("createdAt");
    },
    updatedAt($record) {
      return $record.get("updatedAt");
    }
  },
  Transaction: {
    __assertStep: assertPgClassSingleStep,
    rowId($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    from($record) {
      return $record.get("from");
    },
    to($record) {
      return $record.get("to");
    },
    verified($record) {
      return $record.get("verified");
    },
    hash($record) {
      return $record.get("hash");
    },
    status($record) {
      return $record.get("status");
    },
    amount($record) {
      return $record.get("amount");
    },
    providerId($record) {
      return $record.get("providerId");
    },
    createdAt($record) {
      return $record.get("createdAt");
    },
    updatedAt($record) {
      return $record.get("updatedAt");
    },
    providerByProviderId($record) {
      return resource_ProviderPgResource.get({
        id: $record.get("providerId")
      });
    }
  },
  StakeConfigConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  StakeConfigEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  StakeConfigOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        StakeConfigUniques[0].attributes.forEach(attributeName => {
          const attribute = stakeConfigCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        StakeConfigUniques[0].attributes.forEach(attributeName => {
          const attribute = stakeConfigCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  StakeConfigCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_stakeConfig.attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UserConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  UserEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  UserOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        UserUniques[0].attributes.forEach(attributeName => {
          const attribute = userCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        UserUniques[0].attributes.forEach(attributeName => {
          const attribute = userCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    EMAIL_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "email",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    EMAIL_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "email",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ADDRESS_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "address",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    ADDRESS_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "address",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  UserCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_user.attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    email: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "email",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "email",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_user.attributes.email.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "address",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "address",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_user.attributes.address.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  ProviderConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  ProviderEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ProviderOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        ProviderUniques[0].attributes.forEach(attributeName => {
          const attribute = providerCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        ProviderUniques[0].attributes.forEach(attributeName => {
          const attribute = providerCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  ProviderCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_provider.attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  TransactionConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint);
    }
  },
  TransactionEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  TransactionOrderBy: {
    NATURAL: {
      applyPlan() {}
    },
    PRIMARY_KEY_ASC: {
      applyPlan(step) {
        TransactionUniques[0].attributes.forEach(attributeName => {
          const attribute = transactionCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "ASC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    PRIMARY_KEY_DESC: {
      applyPlan(step) {
        TransactionUniques[0].attributes.forEach(attributeName => {
          const attribute = transactionCodec.attributes[attributeName];
          step.orderBy({
            codec: attribute.codec,
            fragment: sql`${step}.${sql.identifier(attributeName)}`,
            direction: "DESC",
            ...(undefined != null ? {
              nulls: undefined ? "LAST" : "FIRST"
            } : null)
          });
        });
        step.setOrderIsUnique();
      }
    },
    ID_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    ID_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "id",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (true) {
          plan.setOrderIsUnique();
        }
      }
    },
    FROM_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "from",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    FROM_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "from",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    CREATED_AT_ASC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "createdAt",
          direction: "ASC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    },
    CREATED_AT_DESC: {
      applyPlan(plan) {
        if (!(plan instanceof PgSelectStep) && !(plan instanceof PgUnionAllStep)) {
          throw new Error("Expected a PgSelectStep or PgUnionAllStep when applying ordering value");
        }
        plan.orderBy({
          attribute: "createdAt",
          direction: "DESC",
          ...(undefined != null ? {
            nulls: undefined ? "LAST" : "FIRST"
          } : null)
        });
        if (false) {
          plan.setOrderIsUnique();
        }
      }
    }
  },
  TransactionCondition: {
    rowId: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_transaction.attributes.id.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    from: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "from",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "from",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_transaction.attributes.from.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($condition, val) {
        if (val.getRaw().evalIs(null)) {
          $condition.where({
            type: "attribute",
            attribute: "createdAt",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "createdAt",
            callback(expression) {
              return sql`${expression} = ${$condition.placeholder(val.get(), spec_transaction.attributes.createdAt.codec)}`;
            }
          });
        }
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  Mutation: {
    __assertStep: __ValueStep,
    createWallet: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_WalletPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    createStakeConfig: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_StakeConfigPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    createUser: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_UserPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    createProvider: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_ProviderPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    createTransaction: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_TransactionPgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    createPoktNode: {
      plan(_, args) {
        const plan = object({
          result: pgInsertSingle(resource_PoktNodePgResource, Object.create(null))
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          autoApplyAfterParentPlan: true,
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    updateWalletByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(resource_WalletPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    updateStakeConfigByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(resource_StakeConfigPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    updateUserByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(resource_UserPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    updateProviderByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(resource_ProviderPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    updateTransactionByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(resource_TransactionPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    updatePoktNodeByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgUpdateSingle(resource_PoktNodePgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    deleteWalletByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(resource_WalletPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    deleteStakeConfigByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(resource_StakeConfigPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    deleteUserByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(resource_UserPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    deleteProviderByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(resource_ProviderPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    deleteTransactionByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(resource_TransactionPgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    },
    deletePoktNodeByRowId: {
      plan(_$root, args) {
        const plan = object({
          result: pgDeleteSingle(resource_PoktNodePgResource, {
            id: args.get(['input', "rowId"])
          })
        });
        args.apply(plan);
        return plan;
      },
      args: {
        input: {
          applyPlan(_, $object) {
            return $object;
          }
        }
      }
    }
  },
  CreateWalletPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    wallet($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    walletEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = WalletUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_WalletPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("WalletOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateWalletInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      },
      autoApplyAfterParentApplyPlan: true
    },
    wallet: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      },
      autoApplyAfterParentApplyPlan: true
    }
  },
  WalletInput: {
    "__inputPlan": function WalletInput_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($insert, val) {
        $insert.set("address", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($insert, val) {
        $insert.set("userId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateStakeConfigPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    stakeConfig($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    stakeConfigEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = StakeConfigUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_StakeConfigPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("StakeConfigOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateStakeConfigInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      },
      autoApplyAfterParentApplyPlan: true
    },
    stakeConfig: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      },
      autoApplyAfterParentApplyPlan: true
    }
  },
  StakeConfigInput: {
    "__inputPlan": function StakeConfigInput_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    amount: {
      applyPlan($insert, val) {
        $insert.set("amount", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    outputAddress: {
      applyPlan($insert, val) {
        $insert.set("outputAddress", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($insert, val) {
        $insert.set("userId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateUserPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    user($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    userEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = UserUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_UserPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("UserOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateUserInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      },
      autoApplyAfterParentApplyPlan: true
    },
    user: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      },
      autoApplyAfterParentApplyPlan: true
    }
  },
  UserInput: {
    "__inputPlan": function UserInput_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    email: {
      applyPlan($insert, val) {
        $insert.set("email", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($insert, val) {
        $insert.set("name", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    isAdmin: {
      applyPlan($insert, val) {
        $insert.set("isAdmin", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($insert, val) {
        $insert.set("address", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateProviderPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    provider($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    providerEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = ProviderUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_ProviderPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("ProviderOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateProviderInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      },
      autoApplyAfterParentApplyPlan: true
    },
    provider: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      },
      autoApplyAfterParentApplyPlan: true
    }
  },
  ProviderInput: {
    "__inputPlan": function ProviderInput_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($insert, val) {
        $insert.set("name", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    endpoint: {
      applyPlan($insert, val) {
        $insert.set("endpoint", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    logo: {
      applyPlan($insert, val) {
        $insert.set("logo", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    website: {
      applyPlan($insert, val) {
        $insert.set("website", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    revShare: {
      applyPlan($insert, val) {
        $insert.set("revShare", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreateTransactionPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    transaction($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    transactionEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = TransactionUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_TransactionPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("TransactionOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreateTransactionInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      },
      autoApplyAfterParentApplyPlan: true
    },
    transaction: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      },
      autoApplyAfterParentApplyPlan: true
    }
  },
  TransactionInput: {
    "__inputPlan": function TransactionInput_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    type: {
      applyPlan($insert, val) {
        $insert.set("type", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    from: {
      applyPlan($insert, val) {
        $insert.set("from", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    to: {
      applyPlan($insert, val) {
        $insert.set("to", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    verified: {
      applyPlan($insert, val) {
        $insert.set("verified", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    hash: {
      applyPlan($insert, val) {
        $insert.set("hash", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    status: {
      applyPlan($insert, val) {
        $insert.set("status", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    amount: {
      applyPlan($insert, val) {
        $insert.set("amount", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    providerId: {
      applyPlan($insert, val) {
        $insert.set("providerId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  CreatePoktNodePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    poktNode($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    poktNodeEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = PoktNodeUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_PoktNodePgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PoktNodeOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  CreatePoktNodeInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      },
      autoApplyAfterParentApplyPlan: true
    },
    poktNode: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      },
      autoApplyAfterParentApplyPlan: true
    }
  },
  PoktNodeInput: {
    "__inputPlan": function PoktNodeInput_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($insert, val) {
        $insert.set("address", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($insert, val) {
        $insert.set("userId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    status: {
      applyPlan($insert, val) {
        $insert.set("status", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    stakeAmount: {
      applyPlan($insert, val) {
        $insert.set("stakeAmount", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    balance: {
      applyPlan($insert, val) {
        $insert.set("balance", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    chains: {
      applyPlan($insert, val) {
        $insert.set("chains", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateWalletPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    wallet($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    walletEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = WalletUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_WalletPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("WalletOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateWalletByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined,
    walletPatch: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      }
    }
  },
  WalletPatch: {
    "__inputPlan": function WalletPatch_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($insert, val) {
        $insert.set("address", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($insert, val) {
        $insert.set("userId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateStakeConfigPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    stakeConfig($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    stakeConfigEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = StakeConfigUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_StakeConfigPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("StakeConfigOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateStakeConfigByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined,
    stakeConfigPatch: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      }
    }
  },
  StakeConfigPatch: {
    "__inputPlan": function StakeConfigPatch_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    amount: {
      applyPlan($insert, val) {
        $insert.set("amount", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    outputAddress: {
      applyPlan($insert, val) {
        $insert.set("outputAddress", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($insert, val) {
        $insert.set("userId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateUserPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    user($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    userEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = UserUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_UserPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("UserOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateUserByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined,
    userPatch: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      }
    }
  },
  UserPatch: {
    "__inputPlan": function UserPatch_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    email: {
      applyPlan($insert, val) {
        $insert.set("email", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($insert, val) {
        $insert.set("name", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    isAdmin: {
      applyPlan($insert, val) {
        $insert.set("isAdmin", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($insert, val) {
        $insert.set("address", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateProviderPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    provider($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    providerEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = ProviderUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_ProviderPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("ProviderOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateProviderByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined,
    providerPatch: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      }
    }
  },
  ProviderPatch: {
    "__inputPlan": function ProviderPatch_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    name: {
      applyPlan($insert, val) {
        $insert.set("name", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    endpoint: {
      applyPlan($insert, val) {
        $insert.set("endpoint", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    logo: {
      applyPlan($insert, val) {
        $insert.set("logo", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    website: {
      applyPlan($insert, val) {
        $insert.set("website", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    revShare: {
      applyPlan($insert, val) {
        $insert.set("revShare", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdateTransactionPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    transaction($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    transactionEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = TransactionUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_TransactionPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("TransactionOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdateTransactionByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined,
    transactionPatch: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      }
    }
  },
  TransactionPatch: {
    "__inputPlan": function TransactionPatch_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    type: {
      applyPlan($insert, val) {
        $insert.set("type", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    from: {
      applyPlan($insert, val) {
        $insert.set("from", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    to: {
      applyPlan($insert, val) {
        $insert.set("to", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    verified: {
      applyPlan($insert, val) {
        $insert.set("verified", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    hash: {
      applyPlan($insert, val) {
        $insert.set("hash", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    status: {
      applyPlan($insert, val) {
        $insert.set("status", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    amount: {
      applyPlan($insert, val) {
        $insert.set("amount", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    providerId: {
      applyPlan($insert, val) {
        $insert.set("providerId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  UpdatePoktNodePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    poktNode($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    poktNodeEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = PoktNodeUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_PoktNodePgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PoktNodeOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  UpdatePoktNodeByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined,
    poktNodePatch: {
      applyPlan($object) {
        const $record = $object.getStepForKey("result");
        return $record.setPlan();
      }
    }
  },
  PoktNodePatch: {
    "__inputPlan": function PoktNodePatch_inputPlan() {
      return object(Object.create(null));
    },
    rowId: {
      applyPlan($insert, val) {
        $insert.set("id", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    address: {
      applyPlan($insert, val) {
        $insert.set("address", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    userId: {
      applyPlan($insert, val) {
        $insert.set("userId", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    status: {
      applyPlan($insert, val) {
        $insert.set("status", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    stakeAmount: {
      applyPlan($insert, val) {
        $insert.set("stakeAmount", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    balance: {
      applyPlan($insert, val) {
        $insert.set("balance", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    chains: {
      applyPlan($insert, val) {
        $insert.set("chains", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    createdAt: {
      applyPlan($insert, val) {
        $insert.set("createdAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    },
    updatedAt: {
      applyPlan($insert, val) {
        $insert.set("updatedAt", val.get());
      },
      autoApplyAfterParentInputPlan: true,
      autoApplyAfterParentApplyPlan: true
    }
  },
  DeleteWalletPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    wallet($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    walletEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = WalletUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_WalletPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("WalletOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteWalletByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined
  },
  DeleteStakeConfigPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    stakeConfig($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    stakeConfigEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = StakeConfigUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_StakeConfigPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("StakeConfigOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteStakeConfigByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined
  },
  DeleteUserPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    user($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    userEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = UserUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_UserPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("UserOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteUserByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined
  },
  DeleteProviderPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    provider($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    providerEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = ProviderUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_ProviderPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("ProviderOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteProviderByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined
  },
  DeleteTransactionPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    transaction($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    transactionEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = TransactionUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_TransactionPgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("TransactionOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeleteTransactionByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined
  },
  DeletePoktNodePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      return $mutation.getStepForKey("clientMutationId", true) ?? constant(null);
    },
    poktNode($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    poktNodeEdge: {
      plan($mutation, args, info) {
        const $result = $mutation.getStepForKey("result", true);
        if (!$result) {
          return constant(null);
        }
        const $select = (() => {
          if ($result instanceof PgDeleteSingleStep) {
            return pgSelectFromRecord($result.resource, $result.record());
          } else {
            const spec = PoktNodeUniques[0].attributes.reduce((memo, attributeName) => {
              memo[attributeName] = $result.get(attributeName);
              return memo;
            }, Object.create(null));
            return resource_PoktNodePgResource.find(spec);
          }
        })();
        // Perform ordering
        const $value = args.getRaw("orderBy");
        applyOrderToPlan($select, $value, info.schema.getType("PoktNodeOrderBy"));
        const $connection = connection($select);
        // NOTE: you must not use `$single = $select.single()`
        // here because doing so will mark the row as unique, and
        // then the ordering logic (and thus cursor) will differ.
        const $single = $select.row(first($select));
        return new EdgeStep($connection, $single);
      },
      args: {
        orderBy: undefined
      }
    }
  },
  DeletePoktNodeByRowIdInput: {
    clientMutationId: {
      applyPlan($input, val) {
        $input.set("clientMutationId", val.get());
      }
    },
    rowId: undefined
  }
};
export const schema = makeGrafastSchema({
  typeDefs: typeDefs,
  plans: plans
});