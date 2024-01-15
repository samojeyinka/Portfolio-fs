import React from 'react'
import {BiLogoWhatsappSquare,BiPhoneCall,BiLogoGmail} from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <div className="other-c">
        <h4><i><BiLogoWhatsappSquare/></i>+2348122624063</h4>
        <h4><i><BiPhoneCall/></i>+2349131710995</h4>
        <h4><i><BiLogoGmail/></i>samuelojeyinka@gmail.com</h4>
      </div>
      <div className="form-con">
        <form>
          <textarea name="message" placeholder="How may I help you?"/>
          <button type='submit'>Send</button>
        </form>
      </div>
    </>
  )
}

export default Contact