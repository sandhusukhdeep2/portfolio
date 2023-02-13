import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Experience from './components/experience/Experience'

const app = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Contact/>
      <Experience/>
    </>
  )
}

export default app