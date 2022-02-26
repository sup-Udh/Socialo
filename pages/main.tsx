import { useSession, signIn, signOut } from "next-auth/react"


import React, {useState, useEffect} from "react";

export default function Component() {



  const { data: session } = useSession()




  if (session){
    return (
      
      <>
      <div className="text-center">
        <h1>
        Signed in as {session?.user?.email}

        </h1>
        <div className="flex items-center justify-center  content-evenly ">
          <div>
          <img className="rounded-full"src={session?.user?.image || ""} alt="avatar"  height={100} width={100}/></div>


        </div>

        <h2>Hey! this is {session?.user?.name}</h2>

        <h2>My cool id!- {session.user?.id}</h2>

  </div>


     

        

        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
          }
  
  // if the session was not detected?
  return (
    <>
    <h1 className="text-center mt-[10px]">Hey There! Your Not Logged Into Your Account!</h1>
     <br />
     <div className="grid grid-cols-2 gap-4 place-content-center h-48 ...">
  <div></div>
  <div>
  <button onClick={() => signIn("Github")}>Sign in</button>

  </div>
</div>


    </>
  )
  
  
  }
