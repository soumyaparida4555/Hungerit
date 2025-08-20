import { useState } from "react";
import { logo } from "../utills/constrains";
import { Link } from "react-router-dom";








const Header=()=>
{
    const [btnLogin,setbtnLogin]=useState("Login");
    


    return <div className=" border-4 border-solid border-white h-20 shadow-lg flex justify-evenly">

        <div>
        <img className="w-19 mx-3" src={logo} alt="logo"></img>
        </div>
    
       <div className="flex ">
        
        
       <input className="w-100 border-t-10 bg-white h-15 mx-28  border-5 mb-8 mt-2 border-solid border-white shadow-md rounded-l " type="search" placeholder="Search foods"/> 
        
        
    
        <ul className="flex  ">
        
        <li className="px-5 pt-4">Home</li>
        <li className="px-5 pt-4">Contact</li>
        <li className="px-5 pt-4">About</li>
        
       <Link to={"/login"}> <li className="px-5 size-8 pr-4 mt-4 pb-4 w-19 rounded-md bg-green-500 " type="submit" onClick={()=>{
          return btnLogin=="Login"?setbtnLogin("Logout"):setbtnLogin("Login");
       }}>{btnLogin}</li></Link>
        
        </ul>
        
        </div>

        


    </div>
}


export default Header;