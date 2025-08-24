import { useParams } from "react-router";
import useCard_Menu from "../utills/useCard_Menu";
import { FcRating } from "react-icons/fc";
import ShimmerUi from "./ShimmerUi";


const Card_Menu=()=>{

 
    const {resid}=useParams();

    const cMenu=useCard_Menu(resid);


    if(cMenu.length===0)
    {
        return <ShimmerUi/>
    }

   

    const {text} =cMenu?.cards[0]?.card?.card;

    const {avgRating,totalRatingsString,costForTwoMessage,cuisines,areaName}=cMenu?.cards[2].card?.card?.info;

    const {slaString}=cMenu?.cards[2].card?.card?.info?.sla;
    

return(

    <div className=" pl-13">
    
    <div className="font-bold text-2xl mt-14 pl-42 ">
        
        <h1>{text}</h1>
    </div>

    <div className="ml-38 mt-7 border-t-gray-15 w-180 h-45 shadow-orange-50 border-t-3 border-15 rounded-2xl shadow-xl  border-solid border-gray-300 ">
     <div className="font-black text-sm ml-3 mt-4 mb-1">  
     <h2 className="ml-8 text-md">{avgRating} ({totalRatingsString}) {costForTwoMessage} </h2>
     <FcRating className="-mt-6 size-7  "/>
     </div> 
     <h3 className="text-orange-500 underline ml-9">{cuisines.join(",")}</h3>
     <div className="ml-9 mt-2 font-medium mb-2">
     <h3 className=" text-black font-medium ">Outlet</h3>
     <h3 className="font-extralight -mt-6 ml-15"> {areaName}</h3>

     </div>
     
     <h3 className="font-semibold ml-9 ">{slaString}</h3>

    </div>

    </div>






)






}


export default Card_Menu;