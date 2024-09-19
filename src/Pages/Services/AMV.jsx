import React from 'react';
import Serviceslide from '../../Components/Body/Serviceslide';
import ContactUs from '../ContactUs/Contactus';

// Define slide data for the Cybersecurity page
const AMVSlides = [
  {
    imgSrc: "https://techcybe.com/assets/images/service/service-image3.jpg",
    heading: "Advanced Threat Detection",
    description: "We offer cutting-edge threat detection services to identify and respond to potential security threats before they can impact your business."
  },
  {
    imgSrc: "https://techcybe.com/assets/images/service/service-image3.jpg",
    heading: "Risk Assessment & Management",
    description: "Our risk assessment services help you understand your vulnerabilities and implement effective risk management strategies to safeguard your assets."
  },
  {
    imgSrc: "https://techcybe.com/assets/images/service/service-image3.jpg",
    heading: "Incident Response",
    description: "In the event of a security breach, our incident response team is ready to swiftly address and mitigate the damage, ensuring minimal disruption to your operations."
  },
  // Add more slides as needed
];

function AMV() {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        <h1 className='ms-5 mt-5 fw-bold' style={{ fontSize: '5vw' }}>
        AMC Service & IT Support
        </h1>
        <hr />

        <div className="row py-5 mt-3 bg-dark d-flex align-items-center justify-content-center">
          <div className="col-sm-5 p-4 d-flex justify-content-center">
            <img
              className='img-fluid'
              src="https://techcybe.com/assets/images/service/service-image3.jpg"
              alt="Cybersecurity"
              width={450}
            />
          </div>
          <div className="col-sm-6 p-4 text-white mt-4">
            <p>
              Our Cybersecurity Solutions are designed to protect your business from digital threats and ensure the integrity, confidentiality, and availability of your data. We provide comprehensive security assessments, threat detection, and incident response services tailored to your specific needs. Our team utilizes advanced tools and best practices to safeguard your systems from cyber attacks, ensuring your operations run smoothly and your sensitive information remains secure. Whether you're looking to enhance your current security measures or need a complete security overhaul, our experts are here to help you build a robust cybersecurity strategy.
            </p>
            <button
              type="submit"
              className="btn-light btn mb-4 w-50 d-flex align-items-center justify-content-center p-2 mt-4"
              style={{ borderRadius: "50px" }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='text-center'>Our Services</h1>
          <h3 className='text-center mt-4'>CYBERSECURITY SOLUTIONS</h3>
          <div className="row mt-5 d-flex align-items-center justify-content-center">
            <div className="col-sm-6 px-5">
              <p>
                In today’s digital landscape, robust cybersecurity is more crucial than ever. Our Cybersecurity Solutions are designed to provide comprehensive protection against a wide range of cyber threats. We offer a suite of services including advanced threat detection, risk assessment, and incident response to safeguard your organization’s digital assets. Our approach involves deploying cutting-edge technologies and implementing best practices to protect against potential breaches, data loss, and cyber-attacks. By continuously monitoring your systems and adapting to emerging threats, we ensure your business remains secure and resilient in the face of ever-evolving cyber risks. Trust us to fortify your defenses and maintain the integrity and confidentiality of your critical information.
              </p>
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
          <Serviceslide slides={AMVSlides} />
        </div>

        <div >
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default AMV;
