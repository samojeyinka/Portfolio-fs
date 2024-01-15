import React from 'react';
import Footer from '../components/Footer'
import ContactPart from '../components/Contact';
import Header from '../components/Header'
import '../assets/stylesheets/contact.css'

const Contact = () => {
  return (
    <section className="contact-page">
    <Header/>
      <ContactPart/>
      <br/>
      <br/>
      <Footer/>
    </section>
  )
}

export default Contact