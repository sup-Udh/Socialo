import prisma
 from "../../prisma/prisma"
export default function Test({users} : {users:any}
    ) {
    return(
        <div>
            <h1>{users.name}</h1>
        </div>
    )
}

export async function getStaticProps(){
    const users = await prisma.user.findUnique({
        where: {
            id: "ckzwfx6510006o0dorc3xdqfg"
        },
    })
    console.log(users)
    return {
        props: {
            users
        }
    }

}