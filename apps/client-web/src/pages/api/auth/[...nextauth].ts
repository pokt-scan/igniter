import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiwpMessage } from '@poktscan/vault-siwp';
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@igniter/db";

export const authOptions = (req: NextApiRequest, res: NextApiResponse) => {
  return {
    providers: [
      CredentialsProvider({
        id: "siwp",
        name: "POKT",
        credentials: {
          message: {
            label: "Message",
            type: "text",
            placeholder: "0x0",
          },
          signature: {
            label: "Signature",
            type: "text",
            placeholder: "0x0",
          },
          publicKey: {
            label: "Public Key",
            type: "text",
            placeholder: "0x0",
          },
        },
        async authorize(credentials) {
          try {
            const siwp = new SiwpMessage(
              JSON.parse(credentials?.message || "{}")
            );
            const nextAuthUrl = new URL(process.env.NEXTAUTH_URL ?? '');

            const result = await siwp.verify({
              signature: credentials?.signature || "",
              domain: nextAuthUrl.host,
              publicKey: credentials?.publicKey || "",
            });

            if (result.success) {
              const user = await prisma.user.upsert({
                where: { address: siwp.address },
                update: {},
                create: {
                  address: siwp.address,
                },
              });

              return {
                id: user.id,
                address: user.address,
              };
            }

            return null;
          } catch (e: any) {
            console.log(e.message);
            return null;
          }
        },
      }),
    ],
    pages: {
      signIn: "/landing",
      error: "/landing",
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token.user;
        return session;
      },
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req, res));
};
