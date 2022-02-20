import { useSession, signIn, signOut } from "next-auth/react"


export default function Component() {
  
  const { data: session } = useSession()
  if (session) {

    return (
      <>
        Signed in as {session?.user?.email} <br />
        Your name is {session?.user?.name} <br />

        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("Github")}>Sign in</button>
    </>
  )
  
}