import { bann_img } from "../utills/constrains";

const FoodBanner=(props)=>
{
    const {banData}=props;
    const {imageId}=banData;
    return(

     <div className="">
     <img className="w-27 h-27 m-0.5  " src={bann_img+imageId}></img>
    </div>

        
    )
}
export default FoodBanner;