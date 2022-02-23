import { useRouter } from 'next/router'
import prisma from '../../prisma/prisma';



export default function GetPid() {
  const router = useRouter();
  var  { pid }  = router.query;
  

      return(
        <div>
            <p>Post: {pid}</p>
            <br />

        </div>
      
        
      )
    }


