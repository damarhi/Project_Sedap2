import {Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/tailwind.css";



export default function GuestLayout(){
    return(
    <div id="app-container" className="min-h-screen flex">
      
        <div id="layout-wrapper"className="flex flex-row flex-1 w-full">
          
          <div id="main-content"className="flex-1">
           <Navbar />
           <br /><br /><br />
          <Outlet/>
           <section id="Contact" className="scroll-mt-20">   <Footer/></section>
        
          </div>
        </div>
    
    </div>
    )
}