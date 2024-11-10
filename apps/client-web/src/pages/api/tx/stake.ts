import { NextApiRequest, NextApiResponse } from "next";

const KEY: string = "/x.nodes.MsgProtoStake8";
const AMINO_KEY: string = "pos/8.0MsgStake";
const DEFAULT_PORT: string = "443";
const DEFAULT_PROTOCOL: string = "https:";

function sortKeysRecursively(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortKeysRecursively);
  }

  const sortedKeys = Object.keys(obj).sort();
  const sortedObj: Record<string, any> = {};

  sortedKeys.forEach((key) => {
    sortedObj[key] = sortKeysRecursively(obj[key]);
  });

  return sortedObj;
}

function stringifyObjectWithSort(obj: Record<string, any>): string {
  const sortedObj = sortKeysRecursively(obj);
  const jsonString = JSON.stringify(sortedObj);
  return jsonString;
}

function getParsedServiceURL(serviceURL: {
  protocol: any;
  hostname: any;
  port: any;
}): string {
  return `${serviceURL.protocol ? serviceURL.protocol : DEFAULT_PROTOCOL}//${
    serviceURL.hostname
  }:${serviceURL.port ? serviceURL.port : DEFAULT_PORT}`;
}

function stakeSignDocMsgObj(
  pubKey: string,
  outputAddress: string,
  chains: string[],
  amount: string,
  serviceURL: URL,
  rewardDelegators: {}
) {
  return {
    type: AMINO_KEY,
    value: {
      chains: chains,
      output_address: outputAddress,
      public_key: {
        type: "crypto/ed25519_public_key",
        value: pubKey,
      },
      reward_delegators: rewardDelegators,
      service_url: getParsedServiceURL(serviceURL),
      value: amount,
    },
  };
}

function txStdSignDoc(chainID: any, memo: any, msg: any, entropy) {
  const stdSignDoc = {
    chain_id: chainID,
    entropy,
    fee: [
      {
        amount: "10000",
        denom: "upokt",
      },
    ],
    memo,
    msg,
  };

  // Use stringifyObject instead JSON.stringify to get a deterministic result.
  return Buffer.from(stringifyObjectWithSort(stdSignDoc), "utf-8").toString(
    "hex"
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // query params amount, chains, serviceURL, outputAddress, and rewardDelegators
    const {
      chainID,
      memo,
      pubKey,
      amount,
      chains,
      serviceURL,
      outputAddress,
      rewardDelegators,
    } = req.body;

    const stakeMsg = stakeSignDocMsgObj(
      pubKey as string,
      outputAddress as string,
      chains as string[],
      amount as string,
      new URL(serviceURL as string),
      rewardDelegators
    );

    const entropy = Number(
      BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString()
    ).toString();

    const txMsg = txStdSignDoc(chainID, memo, stakeMsg, entropy);

    res.status(200).json({ txMsg, entropy });
  } catch (e) {
    console.error("stake err", e);
    res.status(500).json({ error: e.message });
  }
}
