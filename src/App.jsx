import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import About from './components/About'
function App() {
 

  return (
    <>
        <Navbar />
         <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
      </main>
    </>
  )
}

export default App
