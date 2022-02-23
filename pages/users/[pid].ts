import { useRouter } from 'next/router'
import axios from "axios";


export default function GetPid(){
  const router = useRouter();
  var  { pid }  = router.query;
  

      return(
        "Post:" + pid
      )
    }
  

