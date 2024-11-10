import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
   * 3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
   * that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
   * to unexpected results.
   */
  Datetime: { input: any; output: any; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

/** All input for the create `PoktNode` mutation. */
export type CreatePoktNodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `PoktNode` to be created by this mutation. */
  poktNode: PoktNodeInput;
};

/** The output of our create `PoktNode` mutation. */
export type CreatePoktNodePayload = {
  __typename?: 'CreatePoktNodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PoktNode` that was created by this mutation. */
  poktNode?: Maybe<PoktNode>;
  /** An edge for our `PoktNode`. May be used by Relay 1. */
  poktNodeEdge?: Maybe<PoktNodeEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PoktNode` mutation. */
export type CreatePoktNodePayloadPoktNodeEdgeArgs = {
  orderBy?: Array<PoktNodeOrderBy>;
};

/** All input for the create `Provider` mutation. */
export type CreateProviderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Provider` to be created by this mutation. */
  provider: ProviderInput;
};

/** The output of our create `Provider` mutation. */
export type CreateProviderPayload = {
  __typename?: 'CreateProviderPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Provider` that was created by this mutation. */
  provider?: Maybe<Provider>;
  /** An edge for our `Provider`. May be used by Relay 1. */
  providerEdge?: Maybe<ProviderEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Provider` mutation. */
export type CreateProviderPayloadProviderEdgeArgs = {
  orderBy?: Array<ProviderOrderBy>;
};

/** All input for the create `StakeConfig` mutation. */
export type CreateStakeConfigInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `StakeConfig` to be created by this mutation. */
  stakeConfig: StakeConfigInput;
};

/** The output of our create `StakeConfig` mutation. */
export type CreateStakeConfigPayload = {
  __typename?: 'CreateStakeConfigPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `StakeConfig` that was created by this mutation. */
  stakeConfig?: Maybe<StakeConfig>;
  /** An edge for our `StakeConfig`. May be used by Relay 1. */
  stakeConfigEdge?: Maybe<StakeConfigEdge>;
};


/** The output of our create `StakeConfig` mutation. */
export type CreateStakeConfigPayloadStakeConfigEdgeArgs = {
  orderBy?: Array<StakeConfigOrderBy>;
};

/** All input for the create `Transaction` mutation. */
export type CreateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Transaction` to be created by this mutation. */
  transaction: TransactionInput;
};

/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayload = {
  __typename?: 'CreateTransactionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was created by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionEdge>;
};


/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Array<TransactionOrderBy>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

/** All input for the create `Wallet` mutation. */
export type CreateWalletInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Wallet` to be created by this mutation. */
  wallet: WalletInput;
};

/** The output of our create `Wallet` mutation. */
export type CreateWalletPayload = {
  __typename?: 'CreateWalletPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Wallet` that was created by this mutation. */
  wallet?: Maybe<Wallet>;
  /** An edge for our `Wallet`. May be used by Relay 1. */
  walletEdge?: Maybe<WalletEdge>;
};


/** The output of our create `Wallet` mutation. */
export type CreateWalletPayloadWalletEdgeArgs = {
  orderBy?: Array<WalletOrderBy>;
};

/** All input for the `deletePoktNodeByRowId` mutation. */
export type DeletePoktNodeByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `PoktNode` mutation. */
export type DeletePoktNodePayload = {
  __typename?: 'DeletePoktNodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PoktNode` that was deleted by this mutation. */
  poktNode?: Maybe<PoktNode>;
  /** An edge for our `PoktNode`. May be used by Relay 1. */
  poktNodeEdge?: Maybe<PoktNodeEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PoktNode` mutation. */
export type DeletePoktNodePayloadPoktNodeEdgeArgs = {
  orderBy?: Array<PoktNodeOrderBy>;
};

/** All input for the `deleteProviderByRowId` mutation. */
export type DeleteProviderByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Provider` mutation. */
export type DeleteProviderPayload = {
  __typename?: 'DeleteProviderPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Provider` that was deleted by this mutation. */
  provider?: Maybe<Provider>;
  /** An edge for our `Provider`. May be used by Relay 1. */
  providerEdge?: Maybe<ProviderEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Provider` mutation. */
export type DeleteProviderPayloadProviderEdgeArgs = {
  orderBy?: Array<ProviderOrderBy>;
};

/** All input for the `deleteStakeConfigByRowId` mutation. */
export type DeleteStakeConfigByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `StakeConfig` mutation. */
export type DeleteStakeConfigPayload = {
  __typename?: 'DeleteStakeConfigPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `StakeConfig` that was deleted by this mutation. */
  stakeConfig?: Maybe<StakeConfig>;
  /** An edge for our `StakeConfig`. May be used by Relay 1. */
  stakeConfigEdge?: Maybe<StakeConfigEdge>;
};


/** The output of our delete `StakeConfig` mutation. */
export type DeleteStakeConfigPayloadStakeConfigEdgeArgs = {
  orderBy?: Array<StakeConfigOrderBy>;
};

/** All input for the `deleteTransactionByRowId` mutation. */
export type DeleteTransactionByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayload = {
  __typename?: 'DeleteTransactionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was deleted by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionEdge>;
};


/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Array<TransactionOrderBy>;
};

/** All input for the `deleteUserByRowId` mutation. */
export type DeleteUserByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

/** All input for the `deleteWalletByRowId` mutation. */
export type DeleteWalletByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Wallet` mutation. */
export type DeleteWalletPayload = {
  __typename?: 'DeleteWalletPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Wallet` that was deleted by this mutation. */
  wallet?: Maybe<Wallet>;
  /** An edge for our `Wallet`. May be used by Relay 1. */
  walletEdge?: Maybe<WalletEdge>;
};


/** The output of our delete `Wallet` mutation. */
export type DeleteWalletPayloadWalletEdgeArgs = {
  orderBy?: Array<WalletOrderBy>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `PoktNode`. */
  createPoktNode?: Maybe<CreatePoktNodePayload>;
  /** Creates a single `Provider`. */
  createProvider?: Maybe<CreateProviderPayload>;
  /** Creates a single `StakeConfig`. */
  createStakeConfig?: Maybe<CreateStakeConfigPayload>;
  /** Creates a single `Transaction`. */
  createTransaction?: Maybe<CreateTransactionPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `Wallet`. */
  createWallet?: Maybe<CreateWalletPayload>;
  /** Deletes a single `PoktNode` using a unique key. */
  deletePoktNodeByRowId?: Maybe<DeletePoktNodePayload>;
  /** Deletes a single `Provider` using a unique key. */
  deleteProviderByRowId?: Maybe<DeleteProviderPayload>;
  /** Deletes a single `StakeConfig` using a unique key. */
  deleteStakeConfigByRowId?: Maybe<DeleteStakeConfigPayload>;
  /** Deletes a single `Transaction` using a unique key. */
  deleteTransactionByRowId?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByRowId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `Wallet` using a unique key. */
  deleteWalletByRowId?: Maybe<DeleteWalletPayload>;
  /** Updates a single `PoktNode` using a unique key and a patch. */
  updatePoktNodeByRowId?: Maybe<UpdatePoktNodePayload>;
  /** Updates a single `Provider` using a unique key and a patch. */
  updateProviderByRowId?: Maybe<UpdateProviderPayload>;
  /** Updates a single `StakeConfig` using a unique key and a patch. */
  updateStakeConfigByRowId?: Maybe<UpdateStakeConfigPayload>;
  /** Updates a single `Transaction` using a unique key and a patch. */
  updateTransactionByRowId?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByRowId?: Maybe<UpdateUserPayload>;
  /** Updates a single `Wallet` using a unique key and a patch. */
  updateWalletByRowId?: Maybe<UpdateWalletPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePoktNodeArgs = {
  input: CreatePoktNodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProviderArgs = {
  input: CreateProviderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStakeConfigArgs = {
  input: CreateStakeConfigInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWalletArgs = {
  input: CreateWalletInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePoktNodeByRowIdArgs = {
  input: DeletePoktNodeByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProviderByRowIdArgs = {
  input: DeleteProviderByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStakeConfigByRowIdArgs = {
  input: DeleteStakeConfigByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionByRowIdArgs = {
  input: DeleteTransactionByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByRowIdArgs = {
  input: DeleteUserByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWalletByRowIdArgs = {
  input: DeleteWalletByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePoktNodeByRowIdArgs = {
  input: UpdatePoktNodeByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProviderByRowIdArgs = {
  input: UpdateProviderByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStakeConfigByRowIdArgs = {
  input: UpdateStakeConfigByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionByRowIdArgs = {
  input: UpdateTransactionByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByRowIdArgs = {
  input: UpdateUserByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWalletByRowIdArgs = {
  input: UpdateWalletByRowIdInput;
};

export enum NodeStatus {
  Staked = 'STAKED',
  Unstaked = 'UNSTAKED',
  Unstaking = 'UNSTAKING'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type PoktNode = {
  __typename?: 'PoktNode';
  address: Scalars['String']['output'];
  balance: Scalars['Float']['output'];
  chains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  rowId: Scalars['UUID']['output'];
  stakeAmount: Scalars['Float']['output'];
  status: NodeStatus;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `User` that is related to this `PoktNode`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `PoktNode` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PoktNodeCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `PoktNode` values. */
export type PoktNodeConnection = {
  __typename?: 'PoktNodeConnection';
  /** A list of edges which contains the `PoktNode` and cursor to aid in pagination. */
  edges: Array<Maybe<PoktNodeEdge>>;
  /** A list of `PoktNode` objects. */
  nodes: Array<Maybe<PoktNode>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PoktNode` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `PoktNode` edge in the connection. */
export type PoktNodeEdge = {
  __typename?: 'PoktNodeEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PoktNode` at the end of the edge. */
  node?: Maybe<PoktNode>;
};

/** An input for mutations affecting `PoktNode` */
export type PoktNodeInput = {
  address: Scalars['String']['input'];
  balance?: InputMaybe<Scalars['Float']['input']>;
  chains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  stakeAmount?: InputMaybe<Scalars['Float']['input']>;
  status: NodeStatus;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `PoktNode`. */
export enum PoktNodeOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `PoktNode`. Fields that are set will be updated. */
export type PoktNodePatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['Float']['input']>;
  chains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  stakeAmount?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<NodeStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type Provider = {
  __typename?: 'Provider';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  endpoint: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  revShare: Scalars['Float']['output'];
  rowId: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  website: Scalars['String']['output'];
};

/**
 * A condition to be used against `Provider` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ProviderCondition = {
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Provider` values. */
export type ProviderConnection = {
  __typename?: 'ProviderConnection';
  /** A list of edges which contains the `Provider` and cursor to aid in pagination. */
  edges: Array<Maybe<ProviderEdge>>;
  /** A list of `Provider` objects. */
  nodes: Array<Maybe<Provider>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Provider` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Provider` edge in the connection. */
export type ProviderEdge = {
  __typename?: 'ProviderEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Provider` at the end of the edge. */
  node?: Maybe<Provider>;
};

/** An input for mutations affecting `Provider` */
export type ProviderInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  endpoint: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  revShare: Scalars['Float']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  website: Scalars['String']['input'];
};

/** Methods to use when ordering `Provider`. */
export enum ProviderOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Provider`. Fields that are set will be updated. */
export type ProviderPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  revShare?: InputMaybe<Scalars['Float']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `PoktNode`. */
  allPoktNodes?: Maybe<PoktNodeConnection>;
  /** Reads and enables pagination through a set of `Provider`. */
  allProviders?: Maybe<ProviderConnection>;
  /** Reads and enables pagination through a set of `StakeConfig`. */
  allStakeConfigs?: Maybe<StakeConfigConnection>;
  /** Reads and enables pagination through a set of `Transaction`. */
  allTransactions?: Maybe<TransactionConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UserConnection>;
  /** Reads and enables pagination through a set of `Wallet`. */
  allWallets?: Maybe<WalletConnection>;
  /** Get a single `PoktNode`. */
  poktNodeByRowId?: Maybe<PoktNode>;
  /** Get a single `Provider`. */
  providerByRowId?: Maybe<Provider>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Get a single `StakeConfig`. */
  stakeConfigByRowId?: Maybe<StakeConfig>;
  /** Get a single `Transaction`. */
  transactionByRowId?: Maybe<Transaction>;
  /** Get a single `User`. */
  userByRowId?: Maybe<User>;
  /** Get a single `Wallet`. */
  walletByRowId?: Maybe<Wallet>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPoktNodesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PoktNodeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PoktNodeOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllProvidersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProviderCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProviderOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStakeConfigsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StakeConfigCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakeConfigOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TransactionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllWalletsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<WalletCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WalletOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPoktNodeByRowIdArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProviderByRowIdArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStakeConfigByRowIdArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionByRowIdArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByRowIdArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWalletByRowIdArgs = {
  rowId: Scalars['UUID']['input'];
};

export type StakeConfig = {
  __typename?: 'StakeConfig';
  amount: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  outputAddress: Scalars['String']['output'];
  rowId: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `User` that is related to this `StakeConfig`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `StakeConfig` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StakeConfigCondition = {
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `StakeConfig` values. */
export type StakeConfigConnection = {
  __typename?: 'StakeConfigConnection';
  /** A list of edges which contains the `StakeConfig` and cursor to aid in pagination. */
  edges: Array<Maybe<StakeConfigEdge>>;
  /** A list of `StakeConfig` objects. */
  nodes: Array<Maybe<StakeConfig>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `StakeConfig` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `StakeConfig` edge in the connection. */
export type StakeConfigEdge = {
  __typename?: 'StakeConfigEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `StakeConfig` at the end of the edge. */
  node?: Maybe<StakeConfig>;
};

/** An input for mutations affecting `StakeConfig` */
export type StakeConfigInput = {
  amount: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  outputAddress: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `StakeConfig`. */
export enum StakeConfigOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `StakeConfig`. Fields that are set will be updated. */
export type StakeConfigPatch = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  outputAddress?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  from: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  /** Reads a single `Provider` that is related to this `Transaction`. */
  providerByProviderId?: Maybe<Provider>;
  providerId?: Maybe<Scalars['UUID']['output']>;
  rowId: Scalars['UUID']['output'];
  status: TransactionStatus;
  to?: Maybe<Scalars['String']['output']>;
  type: TransactionType;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  verified: Scalars['Boolean']['output'];
};

/**
 * A condition to be used against `Transaction` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TransactionCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `from` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Transaction` values. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges which contains the `Transaction` and cursor to aid in pagination. */
  edges: Array<Maybe<TransactionEdge>>;
  /** A list of `Transaction` objects. */
  nodes: Array<Maybe<Transaction>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Transaction` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Transaction` edge in the connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Transaction` at the end of the edge. */
  node?: Maybe<Transaction>;
};

/** An input for mutations affecting `Transaction` */
export type TransactionInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  from: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  providerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<TransactionStatus>;
  to?: InputMaybe<Scalars['String']['input']>;
  type: TransactionType;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Methods to use when ordering `Transaction`. */
export enum TransactionOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FromAsc = 'FROM_ASC',
  FromDesc = 'FROM_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Transaction`. Fields that are set will be updated. */
export type TransactionPatch = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<TransactionStatus>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TransactionType>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TransactionStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum TransactionType {
  Send = 'SEND',
  Stake = 'STAKE',
  Unstake = 'UNSTAKE',
  Upstake = 'UPSTAKE'
}

/** All input for the `updatePoktNodeByRowId` mutation. */
export type UpdatePoktNodeByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `PoktNode` being updated. */
  poktNodePatch: PoktNodePatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `PoktNode` mutation. */
export type UpdatePoktNodePayload = {
  __typename?: 'UpdatePoktNodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PoktNode` that was updated by this mutation. */
  poktNode?: Maybe<PoktNode>;
  /** An edge for our `PoktNode`. May be used by Relay 1. */
  poktNodeEdge?: Maybe<PoktNodeEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `PoktNode` mutation. */
export type UpdatePoktNodePayloadPoktNodeEdgeArgs = {
  orderBy?: Array<PoktNodeOrderBy>;
};

/** All input for the `updateProviderByRowId` mutation. */
export type UpdateProviderByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Provider` being updated. */
  providerPatch: ProviderPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Provider` mutation. */
export type UpdateProviderPayload = {
  __typename?: 'UpdateProviderPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Provider` that was updated by this mutation. */
  provider?: Maybe<Provider>;
  /** An edge for our `Provider`. May be used by Relay 1. */
  providerEdge?: Maybe<ProviderEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Provider` mutation. */
export type UpdateProviderPayloadProviderEdgeArgs = {
  orderBy?: Array<ProviderOrderBy>;
};

/** All input for the `updateStakeConfigByRowId` mutation. */
export type UpdateStakeConfigByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `StakeConfig` being updated. */
  stakeConfigPatch: StakeConfigPatch;
};

/** The output of our update `StakeConfig` mutation. */
export type UpdateStakeConfigPayload = {
  __typename?: 'UpdateStakeConfigPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `StakeConfig` that was updated by this mutation. */
  stakeConfig?: Maybe<StakeConfig>;
  /** An edge for our `StakeConfig`. May be used by Relay 1. */
  stakeConfigEdge?: Maybe<StakeConfigEdge>;
};


/** The output of our update `StakeConfig` mutation. */
export type UpdateStakeConfigPayloadStakeConfigEdgeArgs = {
  orderBy?: Array<StakeConfigOrderBy>;
};

/** All input for the `updateTransactionByRowId` mutation. */
export type UpdateTransactionByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayload = {
  __typename?: 'UpdateTransactionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Transaction` that was updated by this mutation. */
  transaction?: Maybe<Transaction>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionEdge>;
};


/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Array<TransactionOrderBy>;
};

/** All input for the `updateUserByRowId` mutation. */
export type UpdateUserByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

/** All input for the `updateWalletByRowId` mutation. */
export type UpdateWalletByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Wallet` being updated. */
  walletPatch: WalletPatch;
};

/** The output of our update `Wallet` mutation. */
export type UpdateWalletPayload = {
  __typename?: 'UpdateWalletPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Wallet` that was updated by this mutation. */
  wallet?: Maybe<Wallet>;
  /** An edge for our `Wallet`. May be used by Relay 1. */
  walletEdge?: Maybe<WalletEdge>;
};


/** The output of our update `Wallet` mutation. */
export type UpdateWalletPayloadWalletEdgeArgs = {
  orderBy?: Array<WalletOrderBy>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `PoktNode`. */
  poktNodesByUserId: PoktNodeConnection;
  rowId: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads and enables pagination through a set of `Wallet`. */
  walletsByUserId: WalletConnection;
};


export type UserPoktNodesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PoktNodeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PoktNodeOrderBy>>;
};


export type UserWalletsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<WalletCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WalletOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `User` values. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<Maybe<UserEdge>>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  address: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `User`. */
export enum UserOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  rowId: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `User` that is related to this `Wallet`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/** A condition to be used against `Wallet` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type WalletCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Wallet` values. */
export type WalletConnection = {
  __typename?: 'WalletConnection';
  /** A list of edges which contains the `Wallet` and cursor to aid in pagination. */
  edges: Array<Maybe<WalletEdge>>;
  /** A list of `Wallet` objects. */
  nodes: Array<Maybe<Wallet>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Wallet` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Wallet` edge in the connection. */
export type WalletEdge = {
  __typename?: 'WalletEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Wallet` at the end of the edge. */
  node?: Maybe<Wallet>;
};

/** An input for mutations affecting `Wallet` */
export type WalletInput = {
  address: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `Wallet`. */
export enum WalletOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `Wallet`. Fields that are set will be updated. */
export type WalletPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PoktNodeFragmentFragment = { __typename?: 'PoktNode', rowId: any, address: string, userId: any, status: NodeStatus, stakeAmount: number, balance: number, chains?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null };

export type GetPoktNodeQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPoktNodeQuery = { __typename?: 'Query', poktNodeByRowId?: { __typename?: 'PoktNode', rowId: any, address: string, userId: any, status: NodeStatus, stakeAmount: number, balance: number, chains?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type GetPoktNodeByUserIdQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type GetPoktNodeByUserIdQuery = { __typename?: 'Query', allPoktNodes?: { __typename?: 'PoktNodeConnection', nodes: Array<{ __typename?: 'PoktNode', rowId: any, address: string, userId: any, status: NodeStatus, stakeAmount: number, balance: number, chains?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type ListPoktNodesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type ListPoktNodesQuery = { __typename?: 'Query', allPoktNodes?: { __typename?: 'PoktNodeConnection', totalCount: number, nodes: Array<{ __typename?: 'PoktNode', rowId: any, address: string, userId: any, status: NodeStatus, stakeAmount: number, balance: number, chains?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: any | null, endCursor?: any | null } } | null };

export type CreatePoktNodeMutationVariables = Exact<{
  input: CreatePoktNodeInput;
}>;


export type CreatePoktNodeMutation = { __typename?: 'Mutation', createPoktNode?: { __typename?: 'CreatePoktNodePayload', poktNode?: { __typename?: 'PoktNode', rowId: any, address: string, userId: any, status: NodeStatus, stakeAmount: number, balance: number, chains?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export type ProviderFragmentFragment = { __typename?: 'Provider', rowId: any, name: string, logo: string, website: string, revShare: number, createdAt?: any | null, updatedAt?: any | null };

export type GetProviderQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetProviderQuery = { __typename?: 'Query', providerByRowId?: { __typename?: 'Provider', rowId: any, name: string, logo: string, website: string, revShare: number, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListProvidersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type ListProvidersQuery = { __typename?: 'Query', allProviders?: { __typename?: 'ProviderConnection', totalCount: number, nodes: Array<{ __typename?: 'Provider', rowId: any, name: string, logo: string, website: string, revShare: number, createdAt?: any | null, updatedAt?: any | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: any | null, endCursor?: any | null } } | null };

export type CreateProviderMutationVariables = Exact<{
  input: CreateProviderInput;
}>;


export type CreateProviderMutation = { __typename?: 'Mutation', createProvider?: { __typename?: 'CreateProviderPayload', provider?: { __typename?: 'Provider', rowId: any, name: string, logo: string, website: string, revShare: number, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export type TransactionFragmentFragment = { __typename?: 'Transaction', rowId: any, type: TransactionType, from: string, verified: boolean, hash: string, status: TransactionStatus, createdAt?: any | null, updatedAt?: any | null };

export type GetTransactionQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetTransactionQuery = { __typename?: 'Query', transactionByRowId?: { __typename?: 'Transaction', rowId: any, type: TransactionType, from: string, verified: boolean, hash: string, status: TransactionStatus, createdAt?: any | null, updatedAt?: any | null } | null };

export type GetTransactionByUserIdQueryVariables = Exact<{
  userAddress: Scalars['String']['input'];
}>;


export type GetTransactionByUserIdQuery = { __typename?: 'Query', allTransactions?: { __typename?: 'TransactionConnection', nodes: Array<{ __typename?: 'Transaction', rowId: any, type: TransactionType, from: string, verified: boolean, hash: string, status: TransactionStatus, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type ListTransactionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type ListTransactionsQuery = { __typename?: 'Query', allTransactions?: { __typename?: 'TransactionConnection', totalCount: number, nodes: Array<{ __typename?: 'Transaction', rowId: any, type: TransactionType, from: string, verified: boolean, hash: string, status: TransactionStatus, createdAt?: any | null, updatedAt?: any | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: any | null, endCursor?: any | null } } | null };

export type CreateTransactionMutationVariables = Exact<{
  input: CreateTransactionInput;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction?: { __typename?: 'CreateTransactionPayload', transaction?: { __typename?: 'Transaction', rowId: any, type: TransactionType, from: string, verified: boolean, hash: string, status: TransactionStatus, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export type UserFragmentFragment = { __typename?: 'User', rowId: any, email?: string | null, name?: string | null, isAdmin: boolean, createdAt?: any | null, updatedAt?: any | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', userByRowId?: { __typename?: 'User', rowId: any, email?: string | null, name?: string | null, isAdmin: boolean, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListUsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type ListUsersQuery = { __typename?: 'Query', allUsers?: { __typename?: 'UserConnection', totalCount: number, nodes: Array<{ __typename?: 'User', rowId: any, email?: string | null, name?: string | null, isAdmin: boolean, createdAt?: any | null, updatedAt?: any | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: any | null, endCursor?: any | null } } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', user?: { __typename?: 'User', rowId: any, email?: string | null, name?: string | null, isAdmin: boolean, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export const PoktNodeFragmentFragmentDoc = gql`
    fragment PoktNodeFragment on PoktNode {
  rowId
  address
  userId
  status
  stakeAmount
  balance
  chains
  createdAt
  updatedAt
}
    `;
export const ProviderFragmentFragmentDoc = gql`
    fragment ProviderFragment on Provider {
  rowId
  name
  logo
  website
  revShare
  createdAt
  updatedAt
}
    `;
export const TransactionFragmentFragmentDoc = gql`
    fragment TransactionFragment on Transaction {
  rowId
  type
  from
  verified
  hash
  status
  createdAt
  updatedAt
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  rowId
  email
  name
  isAdmin
  createdAt
  updatedAt
}
    `;
export const GetPoktNodeDocument = gql`
    query GetPoktNode($id: UUID!) {
  poktNodeByRowId(rowId: $id) {
    ...PoktNodeFragment
  }
}
    ${PoktNodeFragmentFragmentDoc}`;

/**
 * __useGetPoktNodeQuery__
 *
 * To run a query within a React component, call `useGetPoktNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoktNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoktNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPoktNodeQuery(baseOptions: Apollo.QueryHookOptions<GetPoktNodeQuery, GetPoktNodeQueryVariables> & ({ variables: GetPoktNodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPoktNodeQuery, GetPoktNodeQueryVariables>(GetPoktNodeDocument, options);
      }
export function useGetPoktNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPoktNodeQuery, GetPoktNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPoktNodeQuery, GetPoktNodeQueryVariables>(GetPoktNodeDocument, options);
        }
export function useGetPoktNodeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPoktNodeQuery, GetPoktNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPoktNodeQuery, GetPoktNodeQueryVariables>(GetPoktNodeDocument, options);
        }
export type GetPoktNodeQueryHookResult = ReturnType<typeof useGetPoktNodeQuery>;
export type GetPoktNodeLazyQueryHookResult = ReturnType<typeof useGetPoktNodeLazyQuery>;
export type GetPoktNodeSuspenseQueryHookResult = ReturnType<typeof useGetPoktNodeSuspenseQuery>;
export type GetPoktNodeQueryResult = Apollo.QueryResult<GetPoktNodeQuery, GetPoktNodeQueryVariables>;
export const GetPoktNodeByUserIdDocument = gql`
    query GetPoktNodeByUserId($userId: UUID!) {
  allPoktNodes(condition: {userId: $userId}) {
    nodes {
      ...PoktNodeFragment
    }
  }
}
    ${PoktNodeFragmentFragmentDoc}`;

/**
 * __useGetPoktNodeByUserIdQuery__
 *
 * To run a query within a React component, call `useGetPoktNodeByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoktNodeByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoktNodeByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPoktNodeByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables> & ({ variables: GetPoktNodeByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables>(GetPoktNodeByUserIdDocument, options);
      }
export function useGetPoktNodeByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables>(GetPoktNodeByUserIdDocument, options);
        }
export function useGetPoktNodeByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables>(GetPoktNodeByUserIdDocument, options);
        }
export type GetPoktNodeByUserIdQueryHookResult = ReturnType<typeof useGetPoktNodeByUserIdQuery>;
export type GetPoktNodeByUserIdLazyQueryHookResult = ReturnType<typeof useGetPoktNodeByUserIdLazyQuery>;
export type GetPoktNodeByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetPoktNodeByUserIdSuspenseQuery>;
export type GetPoktNodeByUserIdQueryResult = Apollo.QueryResult<GetPoktNodeByUserIdQuery, GetPoktNodeByUserIdQueryVariables>;
export const ListPoktNodesDocument = gql`
    query ListPoktNodes($first: Int, $after: Cursor, $last: Int, $before: Cursor) {
  allPoktNodes(first: $first, after: $after, last: $last, before: $before) {
    nodes {
      ...PoktNodeFragment
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    ${PoktNodeFragmentFragmentDoc}`;

/**
 * __useListPoktNodesQuery__
 *
 * To run a query within a React component, call `useListPoktNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPoktNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPoktNodesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useListPoktNodesQuery(baseOptions?: Apollo.QueryHookOptions<ListPoktNodesQuery, ListPoktNodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPoktNodesQuery, ListPoktNodesQueryVariables>(ListPoktNodesDocument, options);
      }
export function useListPoktNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPoktNodesQuery, ListPoktNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPoktNodesQuery, ListPoktNodesQueryVariables>(ListPoktNodesDocument, options);
        }
export function useListPoktNodesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListPoktNodesQuery, ListPoktNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPoktNodesQuery, ListPoktNodesQueryVariables>(ListPoktNodesDocument, options);
        }
export type ListPoktNodesQueryHookResult = ReturnType<typeof useListPoktNodesQuery>;
export type ListPoktNodesLazyQueryHookResult = ReturnType<typeof useListPoktNodesLazyQuery>;
export type ListPoktNodesSuspenseQueryHookResult = ReturnType<typeof useListPoktNodesSuspenseQuery>;
export type ListPoktNodesQueryResult = Apollo.QueryResult<ListPoktNodesQuery, ListPoktNodesQueryVariables>;
export const CreatePoktNodeDocument = gql`
    mutation CreatePoktNode($input: CreatePoktNodeInput!) {
  createPoktNode(input: $input) {
    poktNode {
      ...PoktNodeFragment
    }
  }
}
    ${PoktNodeFragmentFragmentDoc}`;
export type CreatePoktNodeMutationFn = Apollo.MutationFunction<CreatePoktNodeMutation, CreatePoktNodeMutationVariables>;

/**
 * __useCreatePoktNodeMutation__
 *
 * To run a mutation, you first call `useCreatePoktNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePoktNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPoktNodeMutation, { data, loading, error }] = useCreatePoktNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePoktNodeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePoktNodeMutation, CreatePoktNodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePoktNodeMutation, CreatePoktNodeMutationVariables>(CreatePoktNodeDocument, options);
      }
export type CreatePoktNodeMutationHookResult = ReturnType<typeof useCreatePoktNodeMutation>;
export type CreatePoktNodeMutationResult = Apollo.MutationResult<CreatePoktNodeMutation>;
export type CreatePoktNodeMutationOptions = Apollo.BaseMutationOptions<CreatePoktNodeMutation, CreatePoktNodeMutationVariables>;
export const GetProviderDocument = gql`
    query GetProvider($id: UUID!) {
  providerByRowId(rowId: $id) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;

/**
 * __useGetProviderQuery__
 *
 * To run a query within a React component, call `useGetProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProviderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProviderQuery(baseOptions: Apollo.QueryHookOptions<GetProviderQuery, GetProviderQueryVariables> & ({ variables: GetProviderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProviderQuery, GetProviderQueryVariables>(GetProviderDocument, options);
      }
export function useGetProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProviderQuery, GetProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProviderQuery, GetProviderQueryVariables>(GetProviderDocument, options);
        }
export function useGetProviderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProviderQuery, GetProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProviderQuery, GetProviderQueryVariables>(GetProviderDocument, options);
        }
export type GetProviderQueryHookResult = ReturnType<typeof useGetProviderQuery>;
export type GetProviderLazyQueryHookResult = ReturnType<typeof useGetProviderLazyQuery>;
export type GetProviderSuspenseQueryHookResult = ReturnType<typeof useGetProviderSuspenseQuery>;
export type GetProviderQueryResult = Apollo.QueryResult<GetProviderQuery, GetProviderQueryVariables>;
export const ListProvidersDocument = gql`
    query ListProviders($first: Int, $after: Cursor, $last: Int, $before: Cursor) {
  allProviders(first: $first, after: $after, last: $last, before: $before) {
    nodes {
      ...ProviderFragment
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    ${ProviderFragmentFragmentDoc}`;

/**
 * __useListProvidersQuery__
 *
 * To run a query within a React component, call `useListProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProvidersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useListProvidersQuery(baseOptions?: Apollo.QueryHookOptions<ListProvidersQuery, ListProvidersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProvidersQuery, ListProvidersQueryVariables>(ListProvidersDocument, options);
      }
export function useListProvidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProvidersQuery, ListProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProvidersQuery, ListProvidersQueryVariables>(ListProvidersDocument, options);
        }
export function useListProvidersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListProvidersQuery, ListProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProvidersQuery, ListProvidersQueryVariables>(ListProvidersDocument, options);
        }
export type ListProvidersQueryHookResult = ReturnType<typeof useListProvidersQuery>;
export type ListProvidersLazyQueryHookResult = ReturnType<typeof useListProvidersLazyQuery>;
export type ListProvidersSuspenseQueryHookResult = ReturnType<typeof useListProvidersSuspenseQuery>;
export type ListProvidersQueryResult = Apollo.QueryResult<ListProvidersQuery, ListProvidersQueryVariables>;
export const CreateProviderDocument = gql`
    mutation CreateProvider($input: CreateProviderInput!) {
  createProvider(input: $input) {
    provider {
      ...ProviderFragment
    }
  }
}
    ${ProviderFragmentFragmentDoc}`;
export type CreateProviderMutationFn = Apollo.MutationFunction<CreateProviderMutation, CreateProviderMutationVariables>;

/**
 * __useCreateProviderMutation__
 *
 * To run a mutation, you first call `useCreateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProviderMutation, { data, loading, error }] = useCreateProviderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProviderMutation(baseOptions?: Apollo.MutationHookOptions<CreateProviderMutation, CreateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProviderMutation, CreateProviderMutationVariables>(CreateProviderDocument, options);
      }
export type CreateProviderMutationHookResult = ReturnType<typeof useCreateProviderMutation>;
export type CreateProviderMutationResult = Apollo.MutationResult<CreateProviderMutation>;
export type CreateProviderMutationOptions = Apollo.BaseMutationOptions<CreateProviderMutation, CreateProviderMutationVariables>;
export const GetTransactionDocument = gql`
    query GetTransaction($id: UUID!) {
  transactionByRowId(rowId: $id) {
    ...TransactionFragment
  }
}
    ${TransactionFragmentFragmentDoc}`;

/**
 * __useGetTransactionQuery__
 *
 * To run a query within a React component, call `useGetTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTransactionQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables> & ({ variables: GetTransactionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
      }
export function useGetTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
        }
export function useGetTransactionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
        }
export type GetTransactionQueryHookResult = ReturnType<typeof useGetTransactionQuery>;
export type GetTransactionLazyQueryHookResult = ReturnType<typeof useGetTransactionLazyQuery>;
export type GetTransactionSuspenseQueryHookResult = ReturnType<typeof useGetTransactionSuspenseQuery>;
export type GetTransactionQueryResult = Apollo.QueryResult<GetTransactionQuery, GetTransactionQueryVariables>;
export const GetTransactionByUserIdDocument = gql`
    query GetTransactionByUserId($userAddress: String!) {
  allTransactions(
    condition: {from: $userAddress}
    first: 4
    orderBy: CREATED_AT_DESC
  ) {
    nodes {
      ...TransactionFragment
    }
  }
}
    ${TransactionFragmentFragmentDoc}`;

/**
 * __useGetTransactionByUserIdQuery__
 *
 * To run a query within a React component, call `useGetTransactionByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionByUserIdQuery({
 *   variables: {
 *      userAddress: // value for 'userAddress'
 *   },
 * });
 */
export function useGetTransactionByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables> & ({ variables: GetTransactionByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables>(GetTransactionByUserIdDocument, options);
      }
export function useGetTransactionByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables>(GetTransactionByUserIdDocument, options);
        }
export function useGetTransactionByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables>(GetTransactionByUserIdDocument, options);
        }
export type GetTransactionByUserIdQueryHookResult = ReturnType<typeof useGetTransactionByUserIdQuery>;
export type GetTransactionByUserIdLazyQueryHookResult = ReturnType<typeof useGetTransactionByUserIdLazyQuery>;
export type GetTransactionByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetTransactionByUserIdSuspenseQuery>;
export type GetTransactionByUserIdQueryResult = Apollo.QueryResult<GetTransactionByUserIdQuery, GetTransactionByUserIdQueryVariables>;
export const ListTransactionsDocument = gql`
    query ListTransactions($first: Int, $after: Cursor, $last: Int, $before: Cursor) {
  allTransactions(first: $first, after: $after, last: $last, before: $before) {
    nodes {
      ...TransactionFragment
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    ${TransactionFragmentFragmentDoc}`;

/**
 * __useListTransactionsQuery__
 *
 * To run a query within a React component, call `useListTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTransactionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useListTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<ListTransactionsQuery, ListTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTransactionsQuery, ListTransactionsQueryVariables>(ListTransactionsDocument, options);
      }
export function useListTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTransactionsQuery, ListTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTransactionsQuery, ListTransactionsQueryVariables>(ListTransactionsDocument, options);
        }
export function useListTransactionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListTransactionsQuery, ListTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListTransactionsQuery, ListTransactionsQueryVariables>(ListTransactionsDocument, options);
        }
export type ListTransactionsQueryHookResult = ReturnType<typeof useListTransactionsQuery>;
export type ListTransactionsLazyQueryHookResult = ReturnType<typeof useListTransactionsLazyQuery>;
export type ListTransactionsSuspenseQueryHookResult = ReturnType<typeof useListTransactionsSuspenseQuery>;
export type ListTransactionsQueryResult = Apollo.QueryResult<ListTransactionsQuery, ListTransactionsQueryVariables>;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($input: CreateTransactionInput!) {
  createTransaction(input: $input) {
    transaction {
      ...TransactionFragment
    }
  }
}
    ${TransactionFragmentFragmentDoc}`;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, options);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($id: UUID!) {
  userByRowId(rowId: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const ListUsersDocument = gql`
    query ListUsers($first: Int, $after: Cursor, $last: Int, $before: Cursor) {
  allUsers(first: $first, after: $after, last: $last, before: $before) {
    nodes {
      ...UserFragment
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export function useListUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersSuspenseQueryHookResult = ReturnType<typeof useListUsersSuspenseQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;