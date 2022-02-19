import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import linkedin provider


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID, // process.env.GITHUB_ID
      clientSecret: process.env.GITHUB_SECRET, // process.env.GITHUB_SECRET
    }),
    // ...add more providers here
    
  ],
})