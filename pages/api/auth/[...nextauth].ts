import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// Google 
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";


const prisma = new PrismaClient()
// import google provider



export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: "a9cb322df4f92f4ae260", // process.env.GITHUB_ID
      clientSecret: "68b4833091c42cdb61f542d104310c013e1c8dfe", // process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: "d3igeh48bvfku7ir1ffn6jpnidb3lst2.apps.googleusercontent.com", // process.env.GOOGLE_ID
      clientSecret: "eTNNTN_iVneczu1MaTHdNEOUT5SA", // process.env.GOOGLE_SECRET
    }),

    



    
  ],

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        (session.user as any).id = token.sub;

      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});