import { useSession, signIn, signOut } from "next-auth/react"
import prisma from "../prisma/prisma"
import axios from "axios";

import React, {useState, useEffect} from "react";

export default function Component() {


  const { data: session } = useSession()
  console.log(session)

  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("/api/prismaGet")
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[] )

  if (session){
    return (
      
      <>
        Signed in as {session?.user?.email} <br />
        Your name is {session?.user?.name} <br />
        <br />
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.email}
            </li>
          ))}
        </ul>

        

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