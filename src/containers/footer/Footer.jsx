import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

function Footer() {
  return (
    <div className='muddy_footer section_padding'>
      <div className='muddy_footer-heading'>
        <div className='gradient_text'>Do you want to step into the future before others?</div>
      </div>

      <div className='muddy_footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='muddy_footer-links'>
        <div className='muddy_footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className='muddy_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='muddy_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='muddy_footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='muddy_footer-copyright'>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
