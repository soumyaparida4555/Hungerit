import { Link } from "react-router-dom";
import { login_img } from "../utills/constrains";


const LoginPage=()=>
{
    return (
             
  
                  <div>     
                
            <div className="h-105 w-120 bg-white border-25 border-solid border-white shadow-2xl  mx-100 mt-17 ">
            
            <div className="flex justify-between" >
             <h1 className="text-2xl text-start mb-10  font-black">Login</h1>

             <img src={login_img} className="w-30 -mt-2"></img>
             
             </div>
             
             <p className="-mt-12">Or <Link to={"/create-account"} className="text-orange-500"> create an account </Link> </p>

             <hr className="w-12 mt-5 font-bold"></hr>
             
               
             <div className="mt-5">
            
            
            <input type="tel"  placeholder="Phone number" className="h-18 p-5   w-90 border-2 border-white shadow-lg hover:text-orange-500 pb-3"/>
          
            <br></br>
            <button className="bg-orange-500 rounded-md p-3 w-90 mt-8 text-white" type="submit">Login</button>
              
              <p className="text-gray-700 mt-7 text-sm">By clicking on Login, I accept the <Link to={"/terms-and-conditions"}> <b>Terms & Conditions & Privacy Policy </b> </Link></p>

            </div>


        </div>
        </div>
    )
}

export default LoginPage;