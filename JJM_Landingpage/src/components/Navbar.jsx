import React from "react";
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-scroll';

function Navbar(){
    return(
        <>
         <div className="navbar bg-emerald-400 text-black sticky top-0 z-50">
        <div className="flex-1">
        <a href="/"className=" text-xl text-green-500"><img src={logo} className=' rounded-full w-10 h-10'/></a>
        <div>
            <h1 className="text-green-600 text-2xl font-bold mx-4">JJM</h1>
            <p className="text-black text-sm mx-4">Soap and Detergents Manufacturing</p>
        </div>
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