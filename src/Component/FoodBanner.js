import { bann_img } from "../utills/constrains";

const FoodBanner=(props)=>
{
    const {banData}=props;
    const {imageId}=banData;
    return(

     <div className="">
     <img className="w-38 h-29 m-1 " src={bann_img+imageId}></img>
    </div>

        
    )
}
export default FoodBanner;