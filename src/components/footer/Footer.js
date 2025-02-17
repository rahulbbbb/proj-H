import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
    <div className="footer__container container">
      <h2 className='footer__title'>Nova Tech Solutions</h2>
  
      <ul className='footer__list'>
        <li>
          <a href="#about" className='footer__link'>About</a>
        </li>
        <li>
          <a href="#services" className='footer__link'>Services</a>
        </li>
        <li>
          <a href="#contact" className='footer__link'>Contact</a>
        </li>
        <li>
          <a href="#testimonial" className='footer__link'>Testimonials</a>
        </li>
      </ul>
  
      <div className='footer__social'>
        <a href="https://github.com/rahulbbbb" className='footer__social-icon' target='_blank' rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rahul-bankoti/" className='footer__social-icon' target='_blank' rel="noreferrer">
          <CiLinkedin />
        </a>
        <a href="https://www.instagram.com/being_bankoti/" className='footer__social-icon' target='_blank' rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
  
      <span className='footer__copy'>
        &#169; Nova Tech Solutions. All rights reserved
      </span>
    </div>
  </footer>
  )
}

export default Footer