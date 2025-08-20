import { card_img } from "../utills/constrains";
const ResturantCard=(props)=>
{
    const{info}=props.resData;
    const{cloudinaryImageId,name,avgRatingString,cuisines,areaName}=info;
    const{slaString}=info?.sla;
    return(
        <div className="ml-4 mb-5 mt-3 ">
            <img className="w-60 h-40 rounded-lg" src={card_img+cloudinaryImageId}></img>
            
            <h2>{name}</h2>
            <h3>{avgRatingString}{slaString}</h3>
            <h4 className="text-sm size-7 text-gray-  ">{cuisines.join(",")}</h4>
            <h4 className="mt-3">{areaName}</h4>
            </div>
        
    )
}












export default ResturantCard;