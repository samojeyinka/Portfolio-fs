import React from 'react'
import abi from '../assets/images/abi.png'
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoWhatsapp } from 'react-icons/bi'
import {BiEnvelope} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="about-flex">
        <div className="about-left">
          <h2 className="about-title">
            I’m Samuel Ojeyinka. I live in Osogbo Nigeria,Crafting Tomorrow's Code Today.
          </h2>
          <div className="about-text">
            <p>As a dynamic full-stack developer with a focus on Ruby on Rails, Node.js/Express, and React, I bring three years of proven experience in creating scalable web applications. My expertise lies in backend development, and I am particularly passionate about utilizing Ruby on Rails to build robust and efficient systems. I have a track record of successfully dockerizing both frontend and backend components of applications, ensuring seamless deployment and scalability.

In addition to my proficiency in writing tests using RSpec, I am well-versed in working with SQL databases and NoSQL technologies. My commitment to high-security authentication practices and experience in deploying applications on cloud platforms like Heroku, as well as rendering and managing VPS, showcases my dedication to maintaining the integrity and reliability of the projects I undertake.

Currently seeking opportunities in Ruby on Rails full-stack or backend roles, I am open to networking with like-minded professionals to explore how I can contribute to the success of your team. Let's discuss how my skills and passion for web development can add value to your projects.</p>
          </div>
        </div>
        <div className="about-right">
          <div className="image-box">
            <img src={abi}/>
          </div>
          <div className="social-box">
            <div className="social-icons">
              <i className="s-icon">
              <Link to={'https://github.com/samojeyinka'} target='_blank'><BiLogoGithub /></Link>
              </i>
              <i className="s-icon">
              <Link to={'https://twitter.com/sam_ojeyinka'} target='_blank'><BiLogoTwitter /></Link>
              </i>
              <i className="s-icon">
              <Link to={'https://www.linkedin.com/in/ojeyinka-samuel/'} target='_blank'><BiLogoLinkedinSquare /></Link>
              </i>
              <i className="s-icon">
              <Link to={'https://wa.me/2348122624063'} target='_blank'> <BiLogoWhatsapp /></Link>
              </i>
            </div>

            <div className="social-cmd">
              <h4>Follow on GitHub</h4>
              <h4>Follow on Twitter</h4>
              <h4>Follow on LinkedIn</h4>
              <h4>Chat on Whatsapp</h4>
            </div>
          </div>
          <div className="email-touch">
          <i className='et-icon'><BiEnvelope/></i>
          <h4>samuelojeyinka@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About