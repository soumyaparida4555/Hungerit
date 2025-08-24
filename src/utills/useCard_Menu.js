import { useEffect, useState } from "react"
import { card_menu } from "./constrains";


const useCard_Menu=(resid)=>{

const [cMenu,setcMenu]=useState([]);

useEffect(()=>{
     menuApi();
},[]);

async function menuApi()
{
    const api=await fetch(card_menu+resid);
    const jsn=await api.json();

    setcMenu(jsn?.data);
}

return cMenu;

}



export default useCard_Menu;