import React from "react";
import jjmbg1 from '../assets/img/jjmbg1.jpg'
import card1 from '../assets/img/card1.jpg'
import bulok3 from '../assets/img/bulok3.jpg'
import { Link } from 'react-scroll';
import Footer from "../components/Footer";


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

                    <section data-aos="fade-up" id='2' className="bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-center " >
                    <div className=" bg-white/70 p-8 rounded-lg">
                    <h2 className="flex flex-col justify-center items-center text-4xl font-bold mb-4 text-black" >Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto ">
                        <div className="rounded-lg p-4  bg-gray-800 max-w-2xl ">
                            <h3 className="text-xl font-bold text-emerald-400">JJM Calamansi Dishwashing Liquid</h3>
                            <button className="btn btn-outline btn-accent my-5" onClick={() => document.getElementById('my_modal_1').showModal()}>
                            See Products
                            </button>
                            <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">JJM Calamansi Dishwashing Liquid</h3>
                                <div className="flex items-center justify-center">
                                <img src='' />
                                </div>
                            <p className="pt-5">28 Pesos</p>
                            <p className="">Description</p>
                            <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 shadow-lg " >
                    <h3 className="text-xl font-bold text-emerald-400">JJM Lemon Dishwashing</h3>
                    <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_2').showModal()}>See Products</button>
                        <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">JJM Lemon Dishwashing</h3>
                            <div className='flex items-center justify-center '>
                            <img src='' />
                            </div>
                            <p className="pt-5">25 Pesos</p>
                            <p className="">Description</p>
                            
                            <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 shadow-lg" >
                    <h3 className="text-xl font-bold text-emerald-400">JJM Antibac Fabric </h3>
                    <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>See Products</button>
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">JJM Antibac Fabric</h3>
                            <div className='flex items-center justify-center '>
                            <img src='' />
                            </div>
                            <p className="pt-5">35 Pesos</p>
                            <p className="">Description</p>
                            
                            <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                    <h3 className="text-xl font-bold text-emerald-400">JJM Calamansi Dishwashing Paste</h3>
                    <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_4').showModal()}>See Products</button>
                        <dialog id="my_modal_4" className="modal">
                        <div className="modal-box ">
                            <h3 className="font-bold text-lg mb-5">JJM Calamansi</h3>
                            <div className='flex items-center justify-center '>
                            <img src='' />
                            </div>
                            <p className="pt-5">55 Pesos</p>
                            <p className="">Description</p>
                            <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>   
                            </div>
                            </div>
                            </dialog>
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
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-grey-600">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                            </div>
                            <div className="flex lg:flex-row-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mt-4 ">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={bulok3} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-grey-600">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
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