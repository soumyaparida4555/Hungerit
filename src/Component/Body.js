import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi";
import FoodBanner from "./FoodBanner";
import ResturantCard from "./ResturantCard";




const Body=()=>
{
   
    const [foodBann,setfoodBann]=useState([]);
     const [resCard,setresCard]=useState([]);
     const [dResCard,setdResCard]=useState([]);

    useEffect(()=>{
       makeSwigCall();
    },[])

    const makeSwigCall=async ()=>
    {
     const call=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.3243113&lng=76.5863882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const jsn=await call.json();
      console.log(jsn);
      setfoodBann(jsn?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
      setresCard(jsn?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setdResCard(jsn?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

 if(foodBann.length==0)
 {
    return <ShimmerUi/>
 }

    return(

    <div>

     <div >
      <h1 className="mt-15 mx-10 text-2xl font-bold">What's on your mind?</h1>
      <div className="flex flex-wrap mt-6 mx-3 bg-white ml-20">
         { foodBann.map((fdban)=>{
           return <FoodBanner key={fdban.id} banData={fdban}/>
         })}
      </div>
     </div>
      <hr className="mt-10 mx-30 w-270"></hr>
    <div className=" ml-10">
      <h1 className="mt-10 mb-5 mx-5 text-2xl font-bold"> Restaurants with online food delivery in Mysore</h1>
      <div className=" flex flex-wrap  pl-15">
         {dResCard.map((rcard)=>{
            if(resCard.length==0)
            {
               return <ShimmerUi/>
            }
            return <ResturantCard key={rcard?.info?.id} resData={rcard}/>
         })}

      </div>
    </div>




    </div>







    )
}



export default Body;