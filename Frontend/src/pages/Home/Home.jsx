import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import AppDownload from '../../components/AppDownload/AppDownload'
import ServiceDispaly from '../../components/ServiceDisplay/ServiceDispaly'

const Home = () => {
  return (
    <div>
      <Header />
      <ServiceDispaly />
      <AppDownload />
    </div>
  )
}

export default Home
