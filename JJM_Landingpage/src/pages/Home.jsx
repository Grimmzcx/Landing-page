import React from "react";
import jjmbg1 from '../assets/img/jjmbg1.jpg'
import card1 from '../assets/img/card1.jpg'
import bulok3 from '../assets/img/bulok3.jpg'
import { Link } from 'react-scroll';
import Footer from "../components/Footer"
import calamansi from '../assets/img/calamansi.jpg'
import conditioner from '../assets/img/conditioner.jpg'
import limon from '../assets/img/limon.jpg'
import paste from '../assets/img/paste.jpg'

function Home(){
    return(
        <>
        <div className="bg-fixed bg-cover bg-center "style={{ backgroundImage: `url(${jjmbg1})` }}>
            <section data-aos="fade-up" id='1' className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-center" >
                <div className="bg-white/70 p-8 rounded-lg">
                    <h1 className="text-5xl font-bold mb-4 text-black lg:text-6xl" >Welcome</h1>
                    <p className="text-lg text-gray-700 mb-6">To JJM Soap and Detergent Manufacturing.</p>
                    <Link to="2" smooth={true} duration={1000} className="btn btn-outline btn-accent ease-out duration-300 my-5 text-black">Products</Link>
                </div>
            </section>

            <section data-aos="fade-up" id='2' className="bg-cover bg-center bg-no-repeat h-screen min-w-min flex flex-col justify-center items-center text-center">
                    <div className="bg-white/70 p-8 rounded-lg">
                        <h2 className="flex flex-col justify-center items-center text-4xl font-bold mb-4 text-black">Products</h2>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <div className="flex justify-center">
                            <img className="p-8 rounded-t-lg h-64" src={calamansi} alt="" />\
                            </div>
                            </a>
                            <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Liquid</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱28</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                            </div>
                        </div>

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <div className="flex justify-center">
                                <img className="p-8 rounded-t-lg h-64" src={limon} alt="" />
                                </div>
                            </a>
                            <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Lemon Dishwashing Liquid</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱25</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                            </div>
                            </div>
                        </div>

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <div className="flex justify-center">
                            <img className="p-8 rounded-t-lg h-64" src={conditioner} alt="" />
                            </div>
                            </a>
                            <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Antibac Fabric Conditioner</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱35</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                            </div>
                        </div>

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                            <div className="flex justify-center">
                            <img className="p-8 rounded-t-lg h-64" src={paste} alt="" />
                            </div>
                            </a>
                            <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Paste</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱55</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>  

                    <section data-aos="fade-up" id='3' className="bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-center  "> 
                    <div className='bg-white/70 rounded-lg '>
                        <div className="w-30 px-50 text-center sm:p-8   ">     
                            <h5 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-900  ">About</h5>
                            <div href="#" className="flex  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={card1} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                        <h2 className="mt-4 text-lg text-black">
                        Basta Best Buy at Best Quality JJM nayan!
                        </h2>
                        <p className="mt-4">
                            We take pride in our state-of-the-art manufacturing processes, which prioritize sustainability and quality at every step. 
                            By using biodegradable ingredients, recyclable packaging, and reducing waste, we are working towards a cleaner, greener future.
                        </p>
                        </div>
                            </div>
                            <div className="flex lg:flex-row-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mt-4 ">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={bulok3} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                            <h2 className="text-lg font-bold mb-2 text-black">Contact Us</h2>
                            <ul className="space-y-2">
                                <li>📍 Bulacan, Philippines · San Jose del Monte, Philippines</li>
                                <li>✉️ negosyongpaunlad@gmail.com</li>
                            </ul>
                            </div>
                         </div>
                            </div>  
                        </div>
                    </section>

                    <section data-aos="fade-up" id='4' className="bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-center max-w-2xl mx-auto ">
                        <div className="w-30 px-50 text-center sm:p-8 h-[50vh] bg-white/70 rounded-lg">
                            <h5 className="mb-2 text-3xl font-bold text-gray-900 ">Mission</h5>
                            <p className="mb-5 text-base text-gray-900 sm:text-lg ">We are committed to delivering safe and effective solutions that meet the everyday needs of our customers, while reducing our environmental footprint through responsible sourcing, innovative formulations, and minimal waste.</p>
                        
                        <div className="w-30 px-50 text-center sm:p-8   ">
                            <h5 className="mb-2 text-3xl font-bold text-gray-900 ">Vission</h5>
                            <p className="mb-5 text-base text-gray-900 sm:text-lg ">We strive to create a future where every household has access to sustainable cleaning solutions that improve lives, protect health, and preserve the planet for generations to come.</p>
                        </div>
                        </div>    
                    </section>

                    <section data-aos="fade-up" id='5' className="bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-center">
                    <div className="w-30 px-50 text-center sm:p-8  bg-white/70 rounded-lg">
                            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-900">Contact Us</h5>
                            <p className="mb-5 text-base text-gray-900 sm:text-lg ">We love to hear from you! Please fill out the form below and we will get in touch as soon as possible.</p>
                            <form className="space-y-6">
                            <div>
                            <label htmlFor="email" className="block text-gray-700">Your Email</label>
                            <input type="email" id="email" className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"placeholder="Enter your email"
                            />
                            </div>
                            <div>
                            <label htmlFor="message" className="block text-gray-700">Your Message</label>
                            <textarea id="message" rows="4" className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"placeholder="Enter your message"></textarea>
                            </div>                    
                            <div className="text-center">
                            <button type="submit" className="bg-[#1E3740] text-white px-6 py-2 rounded-lg hover:bg-[#0d1e23] transition duration-300"> Send Message
                            </button>
                            </div>
                            </form>                           
                        </div>
                    </section>
      <Footer/>
      </div>
      
        </>
    )
}
export default Home