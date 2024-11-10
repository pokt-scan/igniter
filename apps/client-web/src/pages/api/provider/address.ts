import { NextApiRequest, NextApiResponse } from "next";
import * as ed from "@noble/ed25519";
import { sha256 } from "js-sha256";

function publicKeyFromPrivateHex(private_key: string): string {
  const private_key_buffer = Buffer.from(private_key, "hex");

  return publicKeyFromPrivateBuffer(private_key_buffer).toString("hex");
}

function publicKeyFromPrivateBuffer(private_key: Buffer): Buffer {
  return Buffer.from(private_key.slice(32, private_key.length));
}

// Mock function to generate node addresses
const generateNodeAddresses = async (count: number) => {
  const addresses = [];
  for (let i = 0; i < count; i++) {
    const privKey = ed.utils.randomPrivateKey();
    const publicKey = await ed.getPublicKeyAsync(privKey);

    const hash = sha256.create();
    hash.update(publicKey.buffer);
    const address = Buffer.from(hash.hex(), "hex").slice(0, 20);
    addresses.push({
      address: address.toString("hex"),
      pubKey: ed.etc.bytesToHex(publicKey),
    });
  }
  return addresses;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { count } = req.query;

  const numCount = parseInt(count as string, 10);
  if (isNaN(numCount) || numCount <= 0) {
    return res.status(400).json({ error: "Invalid count parameter" });
  }

  const addresses = await generateNodeAddresses(numCount);

  res.status(200).json({ addresses });
}
