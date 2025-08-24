import { card_img } from "../utills/constrains";
import { FcRating } from "react-icons/fc";

const ResturantCard=(props)=>
{
    const{info}=props.resData;
    const{cloudinaryImageId,name,avgRating,cuisines,areaName}=info;
    const{slaString}=info?.sla;
    return(
        <div className="ml-3 h-80 w-63 mb-5 mt-3 mr-6  ">
            <img className="w-63 h-40 rounded-lg" src={card_img+cloudinaryImageId}></img>
            
            <div className="box-border mt-3 pl-3">
            <h2 className="font-bold">{name}</h2>
            <div className="mt-2 mb-1 font-semibold">
                <FcRating className=" bg-green-600 rounded-xl   size-5.5 -mb-6" />
            <h3 className="ml-7 ">{avgRating} {slaString}</h3>
            </div>
            <h4 className="text-md ">{cuisines.join(",")}</h4>
            <h4 className="mt-3">{areaName}</h4>
            </div>
        </div>
    )
}












export default ResturantCard;