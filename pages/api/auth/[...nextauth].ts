import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// Google 
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID, // process.env.GITHUB_ID
      clientSecret: process.env.GITHUB_SECRET, // process.env.GITHUB_SECRET
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID!, // process.env.GOOGLE_ID
    //   clientSecret: process.env.GOOGLE_SECRET!, // process.env.GOOGLE_SECRET
    // }),



    
  ],
})

// {"web":{"client_id":"738177854751-d3igeh48bvfku7ir1ffn6jpnidb3lst2.apps.googleusercontent.com","project_id":"eastern-map-279914","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3000/api/auth/callback/google"],"javascript_origins":["http://localhost:3000"]}}