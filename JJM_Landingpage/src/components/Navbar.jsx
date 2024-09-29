import React from "react";
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-scroll';

function Navbar(){
    return(
        <>
         <div className="navbar bg-emerald-400 text-black sticky top-0 z-50">
        <div className="flex-1">
        <a href="/"className=" text-xl text-green-500"><img src={   logo} className=' rounded w-10 h-10'/></a>
        <span className="self-center text-2xl font-semibold whitespace-nowrap mx-3 text-black">JJM</span>
        </div>
        <div className="font-bold">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="2" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">Products</Link></li>
            <li><Link to="3" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">About</Link></li>
            <li><Link to="4" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">Mission</Link></li>
            <li><Link to="5" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">Contact Us</Link></li>
            
            </ul>
        </div>
        </div>
        </>
    )

}
export default Navbar;