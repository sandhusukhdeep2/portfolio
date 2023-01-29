import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <Nav>
        <a href='https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/'><AiOutlineHome/></a>
        <a href='https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/'><AiOutlineUser/></a>
        <a href='https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/'><BiBook/></a>
        <a href='https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/'><RiServiceLine/></a>
        <a href='https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/'><BiMessageSquareDetail/></a>
    </Nav>
  )
}

export default Nav
