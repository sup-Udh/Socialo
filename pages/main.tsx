import { useSession, signIn, signOut } from "next-auth/react"
import prisma from "../prisma/prisma"
export default function Component() {

  // async fucntion named as test 

  async function Test(){
    const user = await prisma.user.findUnique({
      where: {
        id: 'ckzwfx6510006o0dorc3xdqfg',
      },
    })

    console.log(user)
    
  }

  Test()


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