import { useRouter } from 'next/router'
import prisma from '../../prisma/prisma';



export default function GetPid({users} : {users:any}) {
  const router = useRouter();
  var  { pid }  = router.query;
  

      return(
        <div>
          {/* Prints the pid as usual. */}
            <p>Post: {pid}</p>
            <br />
            <h1>Hey! This is{users.name}</h1>
            <br />
            <h2>My cool id is {users.id}</h2>
            <br /> 
            <h3>My cool email is {users.email}</h3>
            {/* image */}
            <img src={users.image} alt="avatar" />
            
        </div>
      
        
      
      )
      
    }

  

    // static path
    export async function getStaticPaths() {
        const users = await prisma.user.findMany();
        const paths = users.map(user => {
            return {
                params: {
                    pid: user.id
                }
            }
        })
        return {
            paths,
            fallback: false
        }
    }

    // static props
    export async function getStaticProps({params}: {params: {pid: string}}) {
        const users = await prisma.user.findUnique({
            where: {
                id: params.pid
            },
        })
        return {
            props: {
                users
            }
        }
    }