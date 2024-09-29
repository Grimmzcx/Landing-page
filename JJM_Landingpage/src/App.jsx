import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // 1 sec
      offset: 200, // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Smoothness
      once: true, // Whether animation should happen only once or every scroll
    });
  }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </>
  )
}

export default App
