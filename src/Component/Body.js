import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi";
import FoodBanner from "./FoodBanner";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";




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
      console.log(jsn.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setfoodBann(jsn?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
      setresCard(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setdResCard(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      
      
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
      <hr className="mt-10 mx-30 bg-gray-50 opacity-20 w-270"></hr>
        <h1 className="text-2xl font-bold mt-15 mx-10 ">Top restaurant chains in Mysore</h1>
        <div className="flex box-border  flex-wrap mt-5 ml-20">
        {
         dResCard.map((tcard)=>{
            return <Link key={tcard.info.id} to={"/rest-menu/"+tcard.info.id}> <ResturantCard  resData={tcard} /></Link>
         })
        }


        </div>




    </div>







    )
}



export default Body;