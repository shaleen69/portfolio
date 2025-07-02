import React, { useState } from 'react';
import './App.css'
import { LoadingScreen } from './componets/LoadingScreen';
import { Navbar } from './componets/Navbar';
import { MobileMenu } from './componets/sections/MobileMenu';
import { Home } from './componets/sections/Home';
import { About } from './componets/sections/About';
import { Projects } from './componets/sections/Projects';
import { Contact } from './componets/sections/Contact';
import { Footer } from './componets/sections/Footer';
import "./index.css"
export default function App() {

  const [isLoaded,setIsLoaded] =useState(false);
  const [menuOpen,setMenuOpen]=useState(false);  // menuopen true means phone wala box khulega
  return (
    <>
       {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>} 
        <div className={`min-h-screen transition-opacity duration-700 && ${isLoaded ? "opacity-100":"opacity-0"} bg-black text-gray-100`}
        >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
        </>
  )
  
}

//data here passed is logged in user i.e all 5 employee data which we pass in employee and then it passes to its children
