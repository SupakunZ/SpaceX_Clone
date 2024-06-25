import React from 'react'
import Header from '../common/Header'
import Home from './Home'
import { DataPages } from '../data/datadummy'
import Footer from '../common/Footer'

const HomePage = () => {
  return (
    <>
        <Header/>
        {DataPages.map((item,i) => (
            <Home launch={item.launch} title={item.title} btn={item.button} video={item.video} desktop={item.desktop} mobile={item.mobile}/>
        ))}
        <Footer/>
    </>
  )
}

export default HomePage