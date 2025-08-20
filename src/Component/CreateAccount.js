
import { Link } from "react-router-dom";



const CreateAccount=()=>
{
    return(

        <div className="c-account mt-2">
                 
                     <div className="h-145 w-118 bg-white border-25 border-solid  border-white shadow-2xl   mx-200 ">
                     
                     <div className="" >
                      <h1 className="text-2xl text-start mb-5  font-black">Sign up</h1>
   
                      <p className=" pr-3">Or <Link to={"/login"} className="text-orange-500  "> login to your account</Link> </p>
         
                      <hr className="w-12 mt-3 font-bold"></hr>
                      
                       </div> 
                      <div className="mt-5 ">
                     
                     
                     <input type="tel"  placeholder="Phone number" className="h-18 p-5   w-90 border-1 border-solid border-gray-300  hover:text-orange-500 pb-3 "/>
                     <input type="Name"  placeholder="Name" className="h-18 p-5   w-90 border-1 border-solid border-gray-300  hover:text-orange-500 pb-3"/>
                      <input type="email"  placeholder="Email" className="h-18 p-5   w-90 border-1 border-solid   border-gray-300  hover:text-orange-500 pb-3"/>
                     
                     <h2 className="text-blue-400 mt-3">Have a referral code?</h2>

                     <br></br>
                     <button className="bg-orange-500 rounded-sm p-3 w-90 mt-1 text-white" type="submit">CONTINUE</button>
                       
                       <p className="text-gray-700 mt-7 text-sm">By  creating an account, I accept the <Link to={"/terms-and-conditions"}> <b>Terms & Conditions & Privacy Policy </b> </Link></p>
         
                     </div>
         
         
                 </div>
        </div>
    )
}

export default CreateAccount;