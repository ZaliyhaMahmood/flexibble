import { SessionInterface } from "@/common.types";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, //means that it can be undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // jwt: {
  //   encode: ({ secret, token }) => {},
  //   decode: ({ secret, token }) => {},
  // },
  theme: {
    colorScheme: "light",
    logo: "/logo.png",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        //get the user if they exist

        //if they don't exist create them
        return true;
      } catch (error: any) {
        console.log("error: ", error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
}
