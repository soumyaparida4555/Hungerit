import  React, { lazy, Suspense } from "react";
import {createRoot} from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import LoginPage from "./Component/LoginPage";
import CreateAccount from "./Component/CreateAccount";
import TermCondition from "./Component/TermCondition";
import Home from "./Component/Home";

import TermCondition from "./Component/TermCondition";








const App=()=>{
    return(
        <div className="">
            
            <Header/>
            
            <Outlet/>
            
        </div>
    )
}

 const Card_Menu = lazy(()=>(import('./Component/Card_Menu')))


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
           },
           {
            path:"/Home",
            element:<Home/>
           },
           {
            path:"/Term-conditions",
            element:<TermCondition/>,
            
           },
           {
            path:"/rest-menu/:resid",
            element:<Suspense fallback={<div>Loading................</div>}><Card_Menu/></Suspense>
           }
           

        ]
    }

   
])







const ele=createRoot(document.querySelector("#parent"));

ele.render(<RouterProvider router={rout}/>);