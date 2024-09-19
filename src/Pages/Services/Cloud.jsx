import React from 'react';
import Serviceslide from '../../Components/Body/Serviceslide';
import ContactUs from '../ContactUs/Contactus';
import C1 from "/src/assets/service-image2.jpg"
import C2 from "/src/assets/imagesmocro.jpg"
import C3 from "/src/assets/downloadgsuit.jpg"
import C4 from "/src/assets/imagesoffice.jpg"
import C5 from "/src/assets/downloadcloudsto.jpg"
import C6 from "/src/assets/downloadaws.png"
// Define slide data for the Cybersecurity page
const CloudSlides = [
  {
    imgSrc:C2, 
    heading: " Microsoft Azure:",
    description: " Techcybe IT Solutions offers expertise in Microsoft Azure, a powerful cloud computing platform, providing businesses with scalable infrastructure, data storage, and a wide range of services for application development, deployment, and management"
  },
  {
    imgSrc: C6,
    heading: "AWS:",
    description: "We specialize in Amazon Web Services (AWS), providing businesses with secure, reliable, and scalable cloud computing solutions, including virtual servers, storage, databases, and various cloud-based services to meet diverse business needs."
  },
  {
    imgSrc:C3 ,
    heading: "GSuite:",
    description: "   We support businesses in utilizing GSuite, Google’s cloud-based productivity suite, which includes Gmail, Google Drive, Google Docs, and collaboration tools for efficient communication, document creation, and collaboration among teams."
  },
{
    imgSrc: C4 ,
    heading:"Office 365:",
    description:"Techcybe IT Solutions assists organizations in leveraging Microsoft Office 365, a cloud-based productivity suite, offering tools like Word, Excel, PowerPoint, and collaborative features like email, file sharing, and video conferencing."
},
{
    imgSrc: C5 ,
    heading:"Cloud Storage:",
    description:"Techcybe IT Solutions provides cloud storage solutions, enabling businesses to securely store and access their data from anywhere, offering scalability, backup, and disaster recovery options while reducing reliance on physical storage infrastructure"
}

  // Add more slides as needed
];

function Cloud() {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        <h1 className='ms-5 mt-5 fw-bold' style={{ fontSize: '5vw' }}>
        Cloud Solutions
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
          <Serviceslide slides={CloudSlides} />
        </div>

        <div >
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Cloud;
