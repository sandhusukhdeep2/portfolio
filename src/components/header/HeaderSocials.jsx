import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/" target="__blank"><BsLinkedin/></a>
      <a href="https://github.com/sandhusukhdeep2" target="__blank"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/sukhdeep-singh-sandhu-a2abb94b/" target="__blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
