import { useState,  useLayoutEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Cooking from './servicePages/CookingDisplay/CookingDisplay'
import Cleaning from './servicePages/CleaningDisplay/CleaningDisplay'
import BookCooking from './BookingOrder/BookCooking/BookCooking'
import BookCleaning from './BookingOrder/BookCleaning/BookCleaning'
import ScrollToTop from './ScrollToTop'
import BeautyDisplay from './servicePages/BeautyDisplay/BeautyDisplay'
import TechnicianDisplay from './servicePages/TechnicianDisplay/TechnicianDisplay'
import BookingInformation from './BookingOrder/BookingInformation/BookingInformation'
import LaundryBooking from './BookingOrder/LaundryBooking/LaundryBooking'
import CarpenterBooking from './BookingOrder/CarpenterBooking/CarpenterBooking'
import WelderBooking from './BookingOrder/WelderBooking/WelderBooking'
import PlumberBooking from './BookingOrder/PlumberBooking/PlumberBooking'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cleaning' element={<Cleaning />} />
          <Route path='/cooking' element={<Cooking />} />
          <Route path='/BookCooking' element={<BookCooking />} />
          <Route path='/BookCleaning' element={<BookCleaning />} />
          <Route path='/beauty' element={<BeautyDisplay />} />
          <Route path='/BookingInformation' element={<BookingInformation />} />
          <Route path='/technician' element={<TechnicianDisplay />} />
          <Route path='/laundry' element={<LaundryBooking />} />
          <Route path='/carpenter'  element={<CarpenterBooking />} />
          <Route path='/plumber' element={<PlumberBooking />} />
          <Route path='/welder' element={<WelderBooking />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
