import { useState } from "react";
import { logo } from "../utills/constrains";
import { Link } from "react-router-dom";








const Header=()=>
{
    const [btnLogin,setbtnLogin]=useState("Sign in");
    


    return <div className=" border-4 border-solid border-white h-20 shadow-lg flex justify-evenly">

        <div>
        <img className="w-19 mx-3" src={logo} alt="logo"></img>
        </div>
    
       <div className="flex ">
        
        
       <input className="w-100 border-t-10 bg-white h-15 mx-28  border-5 mb-8 mt-2 border-solid border-white shadow-md rounded-l " type="search" placeholder="Search foods"/> 
        
        
    
        <ul className="flex  ">
        
       <Link to={"/Home"}> <li className="px-5 pt-4">Home</li></Link>
        <li className="px-5 pt-4">Contact</li>
        <li className="px-5 pt-4">About</li>
        
       <Link to={"/login"}> <li className="  ml-4 p-2 pl-6.5 font-bold mt-2  w-25 h-12 rounded-lg bg-black text-white " type="submit" onClick={()=>{
          return btnLogin=="Sign in"?setbtnLogin("Sign out"):setbtnLogin("Sign in");
       }}>{btnLogin}</li></Link>
        
        </ul>
        
        </div>

        


    </div>
}


export default Header;