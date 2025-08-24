import { useEffect, useState } from "react"


const useStatuss=()=>
{


    const [intStatus,setintStatus]=useState();

    useEffect(()=>{
     
       window.addEventListener("online",()=>{
              setintStatus("online");
        })

       window.addEventListener("offline",()=>{
            setintStatus("offline");
        })
      
       

       

    },[])

    return intStatus;

}


export default useStatuss;