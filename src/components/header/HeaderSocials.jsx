import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/search/results/all/?keywords=David%20Mountou&origin=GLOBAL_SEARCH_HEADER&sid=u-t' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/briandave-dev' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials