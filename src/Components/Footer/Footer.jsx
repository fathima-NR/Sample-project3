import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png";
function Footer() {
  return (
    <footer className="footer bg-dark ">
      <div className="row text-white gap-5 mx-2">
        <div className="col-sm-3 pe-4">
          <img src={logo} alt="Logo" width={250} />
          <p className='fw-bold ms-2 mt-3'>
          TechCybe IT Solutions LLC, Sharjah Media Free Zone, UAE
            <br />
          info@techcybe.com 
            <br />
            P: +971 56 542 6856
          </p>
          <p className='mt-5 mb-5 fw-bold ms-2'>
          © Techcybe - IT Solutions All Copyright 2024


          </p>
        </div>
        <div className="col-sm-2 mt-3  pe-4">
          <h6 className='fw-bold fs-4'>Quick Links</h6>
          <ul className='list-unstyled mt-3 fw-bold' style={{ fontSize: "15px" }}>
            <li className='mt-2'><Link to="/Services" className="text-decoration-none link">Services</Link></li>
            <li className='mt-2'><Link to="/Contactus" className="text-decoration-none link">Contact Us</Link></li>
            <li className='mt-2'><Link to="/Aboutus" className="text-decoration-none link">About Us</Link></li>
          </ul>
        </div>
        <div className="col-sm-3 text-start mt-3  pe-4">
          <h6 className='fw-bold fs-4'>Services</h6>
          <ul className='list-unstyled mt-3 fw-bold' style={{ fontSize: "15px" }}>
            
            <li className='mt-2'><Link to="/Cyber" className="text-decoration-none link">Cybersecurity Solutions</Link></li>
            <li className='mt-2'><Link to="/IT" className="text-decoration-none link">IT Infrastructure</Link></li>
            <li className='mt-2'><Link to="/AMV" className="text-decoration-none link">AMC Service & IT Support</Link></li>
            <li className='mt-2'><Link to="/EVL" className="text-decoration-none link">ELV & Network Security System</Link></li>
            <li className='mt-2'><Link to="/Cloud" className="text-decoration-none link">Cloud Solutions</Link></li>
            <li className='mt-2'><Link to="/Web" className="text-decoration-none link">Website Design and Development</Link></li>
          </ul>
        </div>
        <div className="col-sm-2 mt-3 ">
          <h6 className='text-start' style={{ fontSize: "14px" }}>Have a project?</h6>
          <div className="d-flex justify-content-start"><Link to="/Contactus">
            <button className="flash-effect mt-3 p-3 fw-bold">Get A Free Quote</button></Link>
          </div>
          <div className='d-flex justify-content-start mt-3'>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <span className="icon-circle"><FaFacebookF /></span>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <span className="icon-circle"><FaInstagram /></span>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <span className="icon-circle"><FaTwitter /></span>
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
