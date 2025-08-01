import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
