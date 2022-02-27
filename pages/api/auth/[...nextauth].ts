import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// Google 
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";



let GITHUB_ID = process.env.GITHUB_ID
let GITHUB_SECRET = process.env.GITHUB_SECRET
let GOOGLE_ID = process.env.GOOGLE_ID
let GOOGLE_SECRET = process.env.GOOGLE_SECRET

const prisma = new PrismaClient()
// import google provider



export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: GITHUB_ID, // process.env.GITHUB_ID
      clientSecret: GITHUB_SECRET, // process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: GOOGLE_ID!, // process.env.GOOGLE_ID
      clientSecret: GOOGLE_SECRET!, // process.env.GOOGLE_SECRET
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
  secret: process.env.NEXTAUTH_SECRET,



});