import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Cooking from './servicePages/CookingDisplay/CookingDisplay'
import Cleaning from './servicePages/CleaningDisplay/CleaningDisplay'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cleaning' element={<Cleaning />} />
          <Route path='/cooking' element={<Cooking />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
