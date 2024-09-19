import React from 'react';
import Serviceslide from '../../Components/Body/Serviceslide';
import ContactUs from '../ContactUs/Contactus';

import It2 from "/src/assets/downloadserver.jpg"
import It3 from "/src/assets/downloadbackup.jpg"
import It4 from "/src/assets/imagesinteli.jpg"
import It5 from "/src/assets/downloadwifi.jpg"
import It6 from "/src/assets/downloadfirewall.jpg"
const ITSlides = [
  {
    imgSrc: It2,
    heading: "Servers:",
    description: "Techcybe IT Solutions offers reliable server solutions to support efficient data processing and application hosting for businesses of all sizes."
  },
  {
    imgSrc: It3,
    heading: "Backup & Storage:",
    description: "    We provide secure backup and storage services to protect valuable data and ensure business continuity."
  },
  {
    imgSrc: It4,
    heading:"Intelligent Network Automation:",
    description:" Our intelligent network automation solutions optimize network operations, enhance efficiency, and reduce manual tasks for improved productivity."
  },
  {
    imgSrc: It5,
    heading:"Wi-Fi Infrastructure:",
    description:"   Techcybe IT Solutions designs and deploys robust Wi-Fi infrastructures to provide seamless connectivity and enhanced user experience."
  },  
  {
    imgSrc: It6,
    heading:"Advanced Firewall:",
    description:"Our advanced firewall solutions safeguard networks against unauthorized access and protect against cyber threats."
  }
  // Add more slides as needed
];

function IT() {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        <h1 className='ms-5 mt-5 fw-bold' style={{ fontSize: '5vw' }}>
        IT INFRASTRUCTURE
        </h1>
        <hr />
        <div className="row py-5 mt-3 bg-dark d-flex align-items-center justify-content-center">
          <div className="col-sm-5 p-4 d-flex justify-content-center">
            <img
              className='img-fluid'
              src="https://techcybe.com/assets/images/service/service-image6.jpg"
              alt=""
              width={450}
            />
          </div>
          <div className="col-sm-6 p-4 text-white mt-4">
            <p>Our Website Design and Development services are designed to create a powerful online presence for your business. Our process involves understanding your brand, your target audience, and your business goals to create a website that aligns with your vision. We offer a range of services from initial design and development to ongoing maintenance and optimization, ensuring your site remains up-to-date and performs at its best. Whether you need a simple informational site or a complex e-commerce platform, our team uses the latest technologies and best practices to deliver a high-quality, responsive website that drives engagement and conversions</p>
            <button type="submit" className="btn-light btn mb-4 w-50 d-flex align-items-center justify-content-center p-2 mt-4" style={{ borderRadius: "50px" }}>
              Let's Talk
            </button>
          </div>
        </div>
        <div className='mt-5'>
          <h1 className='text-center'>Our Services</h1>
          <h3 className='text-center mt-4'>IT INFRASTRUCTURE</h3>
          <div className="row mt-5 d-flex align-items-center justify-content-center">
            <div className="col-sm-6 px-5">
              <p>Our Website Design and Development services focus on creating dynamic and effective websites tailored to your business needs. We combine aesthetic design with functional performance to build websites that engage visitors and drive results. From conceptual design to full-scale development, we ensure every aspect of your site reflects your brand identity and meets user expectations. Our team is experienced in developing responsive websites that look great on all devices and are optimized for speed and search engines. Whether you’re looking for a sleek corporate site, an interactive portfolio, or a comprehensive e-commerce solution, we deliver high-quality, scalable websites that support your business goals and enhance your online presence.</p>
            </div>
            <div className="col-sm-5 px-4">
              <h3 className='pb-2'>Why Choose Us?</h3>
              <ul>
                <li className='mt-2'>Enhance productivity, efficiency, and reliability</li>
                <li className='mt-2'>Advance Technologies</li>
                <li className='mt-2'>24*7 Infrastructure Monitoring & Tech Support</li>
                <li className='mt-2'>Certified experts with in-depth knowledge</li>
                <li className='mt-2'>Multi Technology Integration</li>
                <li className='mt-2'>Inexpensive</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <Serviceslide slides={ITSlides} />
        </div>
        <div >
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default IT;
