import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home/Home'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <div className='font-poppins'>
      <ScrollToTop/>
      <Navbar/>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App