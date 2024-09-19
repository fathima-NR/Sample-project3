import React from 'react';
import Serviceslide from '../../Components/Body/Serviceslide';
import ContactUs from '../ContactUs/Contactus';
import E1 from "/src/assets/downloadcctv.jpg"
import E2 from "/src/assets/downloadbiomas.jpg"
import E3 from "/src/assets/service-image4.jpg"
import E4 from "/src/assets/imagesinteli.jpg"
import E5 from "/src/assets/downloadoptic.jpg"
// Define slide data for the Cybersecurity page
const EVLSlides = [
  {
    imgSrc: E1,
    heading: "CCTV:",
    description: "  Techcybe IT Solutions offers comprehensive CCTV solutions for video surveillance, providing businesses with monitoring capabilities to enhance security and deter potential threats. Our CCTV systems include high-definition cameras, recording devices, and remote access features for real-time monitoring and playback of recorded footage."
  },
  {
    imgSrc:E4,
    heading: "Intelligent Cabling:",
    description: "Techcybe IT Solutions implements intelligent cabling solutions that optimize network infrastructure. This includes structured cabling systems that are well-organized, labeled, and easily manageable, reducing downtime, simplifying troubleshooting, and enabling future scalability and flexibility."
  },
  {
    imgSrc:  E2,
    heading: " Biometric & Access Controllers:",
    description: "We specialize in biometric and access control solutions, enabling organizations to manage physical access to their premises. Our systems utilize biometric identification methods like fingerprint or facial recognition, combined with access controllers, to ensure secure and efficient access management."
  },
  {
  imgSrc: E5,
  heading:"Fiber Optics Cabling:",
  description:"We provide fiber optics cabling solutions, leveraging the high-speed and long-distance capabilities of fiber optics to deliver reliable and efficient data transmission. Fiber optics offer enhanced bandwidth, immunity to electromagnetic interference, and secure data transfer, making it ideal for businesses with demanding network requirements or those seeking future-proof connectivity solutions."}
  // Add more slides as needed
];

function EVL() {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        <h1 className='ms-5 mt-5 fw-bold' style={{ fontSize: '5vw' }}>
        ELV & Network Security System
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
          <Serviceslide slides={EVLSlides} />
        </div>

        <div  >
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default EVL;
