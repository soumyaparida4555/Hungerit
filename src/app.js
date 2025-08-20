import  React from "react";
import {createRoot} from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import LoginPage from "./Component/LoginPage";
import CreateAccount from "./Component/CreateAccount";
import TermCondition from "./Component/TermCondition";








const App=()=>{
    return(
        <div className="">
            
            <Header/>
            <Outlet/>
        </div>
    )
}




const rout=createBrowserRouter([
    {
        path:"/",
        element:<App/>,


        children:[
        
            {
             path:"/",
             element:<Body/>
            },
        
           {
            path:"/login",
            element:<LoginPage/>
           },
           {
            path:"/create-account",
            element:<CreateAccount/>
           }
           ,{
            path:"/terms-and-conditions",
            element:<TermCondition/>
           }

        ]
    }

   
])







const ele=createRoot(document.querySelector("#parent"));

ele.render(<RouterProvider router={rout}/>);