import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import About from './components/about/About'

const app = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Contact/>
    </>
  )
}

export default app