
  import prisma from  "../../prisma/prisma";
  
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
