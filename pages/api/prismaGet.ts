
  import prisma from  "../../prisma/prisma";
  // async fucntion named as test 
//   export default 
export default function PrismaReqHandler(){

  // Running a simple async function that get's the data from the postgress database given from the prisma url
    
    async function Test(){
        const user = await prisma.user.findUnique({
          where: {
	// where the id is-
            id: "ckzwfx6510006o0dorc3xdqfg"
          },
        })

// printing the results
    
        
      }
      // calling the async function
    
      Test()
    

}
