import React from 'react'
import SocialContact from '../../common/social-contact'
import "./about.css"
// import SocialContact from '../../common/social-contact'
function About() {
  return (
    <div className='about'>

      <div className='about-top'>
        <div className='about-info'>
          Hey There , Im <br /><span className='info-name'>Amritanshu Prashar</span>.<br /> I love experimenting with the web.
        </div>
        <div className='about-photo'>
          <img src={require("../../../assets/coding.png")} className='picture' ></img>
        </div>
      </div>

      <SocialContact />

    </div>
  )
}

export default About