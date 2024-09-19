import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import service from "/src/assets/service-image6.jpg"
import service1 from "/src/assets/service-image3.jpg"
import service2 from "/src/assets/service-image1.jpg"
import service3 from "/src/assets/service-image5.jpg"
import service4 from "/src/assets/service-image2.jpg"
import service5 from "/src/assets/service-image4.jpg"
import sercice6 from "/src/assets/service-image6.jpg"
const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Services() {
  // Custom hook for detecting visibility of each section
  const { ref: rowRef1, inView: rowInView1 } = useInView({ triggerOnce: true });
  const { ref: rowRef2, inView: rowInView2 } = useInView({ triggerOnce: true });
  const { ref: rowRef3, inView: rowInView3 } = useInView({ triggerOnce: true });
  const { ref: rowRef4, inView: rowInView4 } = useInView({ triggerOnce: true });
  const { ref: rowRef5, inView: rowInView5 } = useInView({ triggerOnce: true });
  const { ref: rowRef6, inView: rowInView6 } = useInView({ triggerOnce: true });

  return (
    <div style={{ marginTop: '100px' }}>
      <div className='mx-5'>
        <motion.h1
          className='ms-5 mt-5 '
          style={{ fontSize: '8vw' }}
          initial="hidden"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h1>
        <hr />
        <motion.div
          className='d-flex justify-content-center mt-5'
          initial="hidden"
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={service} alt="" width={"85%"} style={{ height: "auto" }} />
        </motion.div>
      </div>

      {/* Cybersecurity Solutions */}
      <motion.h1
        className="mt-5  border-bottom border-dark border-1 pb-4 mx-5"
        style={{ fontSize: "5vw" }}
        initial="hidden"
        animate={rowInView1 ? "visible" : "hidden"}
        variants={headingVariants}
      >
        CYBERSECURITY SOLUTIONS
      </motion.h1>
      <motion.div
        className="row d-flex justify-content-center mt-5 pb-5  flex-column-reverse flex-sm-row"
        initial="hidden"
        animate={rowInView1 ? "visible" : "hidden"}
        variants={rowVariants}
        ref={rowRef1}
      >
        <div className="col-sm-6 px-4 pt-4">
          <p>In today's digital landscape, protecting your information is more crucial than ever. Our Cybersecurity Solutions offer robust protection against evolving cyber threats, ensuring your data and systems remain secure. From advanced threat detection to comprehensive risk management, we provide tailored strategies that safeguard your business and personal information from malicious attacks and data breaches. Trust us to fortify your digital defenses with cutting-edge technology and expert knowledge.</p>
          <Link to="/Cyber"><button className='btn btn-dark rounded-pill px-5 mt-5'>Read More</button></Link>
        </div>
        <div className="col-sm-4 px-3 ">
          <motion.img
            src={service1}
            alt=""
            width={400}
            
            initial="hidden"
            className='img-fluid'
            animate={rowInView1 ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
      </motion.div>

      {/* IT Infrastructure */}
      <motion.h1
        className="mt-5 ms-5 ps-5 border-bottom border-dark border-1 pb-4 mx-5"
        style={{ fontSize: "5vw" }}
        initial="hidden"
        animate={rowInView2 ? "visible" : "hidden"}
        variants={headingVariants}
      >
        IT INFRASTRUCTURE
      </motion.h1>
      <motion.div
        className="row  d-flex justify-content-center mt-5 pb-5"
        initial="hidden"
        animate={rowInView2 ? "visible" : "hidden"}
        variants={rowVariants}
        ref={rowRef2}
      >
        <div className="col-sm-4 px-3">
          <motion.img
            src={service2}
            alt=""
             className='img-fluid'
            width={400}
            initial="hidden"
            animate={rowInView2 ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
        <div className="col-sm-6 px-4 pt-4">
          <p>Our IT Infrastructure solutions offer robust support to keep your systems running smoothly. We provide everything from network management to hardware and software solutions, ensuring that your IT infrastructure is reliable and efficient. Our services are tailored to meet the specific needs of your business, helping you stay competitive and productive.</p>
         <Link to="/IT"> <button className='btn btn-dark rounded-pill  px-5 mt-5'>Read More</button></Link>
        </div>
      </motion.div>

      {/* AMC Service & IT Support */}
      <motion.h1
        className="mt-5 ms-5 ps-5 border-bottom border-dark border-1 pb-4 mx-5"
        style={{ fontSize: "5vw" }}
        initial="hidden"
        animate={rowInView3 ? "visible" : "hidden"}
        variants={headingVariants}
      >
        AMC SERVICE & IT SUPPORT
      </motion.h1>
      <motion.div
        className="row  d-flex justify-content-center mt-5 pb-5  flex-column-reverse flex-sm-row"
        initial="hidden"
        animate={rowInView3 ? "visible" : "hidden"}
        variants={rowVariants}
        ref={rowRef3}
      >
        <div className="col-sm-6 px-4 pt-4">
          <p>Our AMC Service & IT Support ensures that your technology is always functioning at its best. We offer regular maintenance and support services to prevent issues before they arise and to quickly address any problems that do occur. Our goal is to keep your systems running smoothly and to provide you with peace of mind, knowing that expert help is always available.</p>
        <Link to="/AMV"><button className='btn btn-dark rounded-pill  px-5 mt-5'>Read More</button></Link>
        </div>
        <div className="col-sm-4 px-3">
          <motion.img
            src={service3}
            alt=""
             className='img-fluid'
            width={400}
            initial="hidden"
            animate={rowInView3 ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
      </motion.div>

      {/* Cloud Solutions */}
      <motion.h1
        className="mt-5 ms-5 ps-5 border-bottom border-dark border-1 pb-4 mx-5"
        style={{ fontSize: "5vw" }}
        initial="hidden"
        
        animate={rowInView4 ? "visible" : "hidden"}
        variants={headingVariants}
      >
        CLOUD SOLUTIONS
      </motion.h1>
      <motion.div
        className="row d-flex justify-content-center mt-5 pb-5"
        initial="hidden"
        animate={rowInView4 ? "visible" : "hidden"}
        variants={rowVariants}
        ref={rowRef4}
      >
        <div className="col-sm-4 px-3">
          <motion.img
            src={service4}
             className='img-fluid'
            width={400}
            initial="hidden"
            animate={rowInView4 ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
        <div className=" col-sm-6 px-4 pt-4">
          <p>Our Cloud Solutions offer scalable and flexible options to manage your data and applications efficiently. We provide tailored solutions that ensure high availability, security, and performance for your cloud infrastructure. Whether you need public, private, or hybrid cloud solutions, our expertise will help you optimize your cloud environment and support your business goals.</p>
         <Link to="Cloud"> <button className='btn btn-dark rounded-pill  px-5 mt-5'>Read More</button></Link>
        </div>
      </motion.div>

      {/* Website Design and Development */}
      <motion.h1
        className="mt-5 ms-5 ps-5 border-bottom border-dark border-1 pb-4 mx-5"
        style={{ fontSize: "5vw" }}
        initial="hidden"
        animate={rowInView5 ? "visible" : "hidden"}
        variants={headingVariants}
      >
        WEBSITE DESIGN AND DEVELOPMENT
      </motion.h1>
      <motion.div
        className="row d-flex justify-content-center mt-5 pb-5  flex-column-reverse flex-sm-row"
        initial="hidden"
        animate={rowInView5 ? "visible" : "hidden"}
        variants={rowVariants}
        ref={rowRef5}
      >
        <div className="col-sm-6 px-4 pt-4">
          <p>Our Website Design and Development services provide you with a strong online presence. We create visually appealing and highly functional websites tailored to your business needs. From design and development to deployment and maintenance, our team ensures that your website stands out and performs optimally across all devices.</p>
         <Link to="/Web"> <button className='btn btn-dark rounded-pill  px-5 mt-5'>Read More</button></Link>
        </div>
        <div className="col-sm-4 px-3">
          <motion.img
            src={service5}
            alt=""
            width={400}
            initial="hidden"
             className='img-fluid'
            animate={rowInView5 ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
      </motion.div>

      {/* ELV & Network Security System */}
      <motion.h1
        className="mt-5 ms-5 ps-5 border-bottom border-dark border-1 pb-4 mx-5"
        style={{ fontSize: "5vw" }}

        initial="hidden"
        animate={rowInView6 ? "visible" : "hidden"}
        variants={headingVariants}
      >
        ELV & Network Security System
      </motion.h1>
      <motion.div
        className="row  d-flex justify-content-center mt-5 pb-5"
        initial="hidden"
        animate={rowInView6 ? "visible" : "hidden"}
        variants={rowVariants}
        ref={rowRef6}
      >
        <div className="col-sm-4 px-3">
          <motion.img
            src={service}
            alt=""
            width={400}
            initial="hidden"
            className='img-fluid'
            animate={rowInView6 ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
        <div className="col-sm-6 px-4 pt-4">
          <p>Our IT Infrastructure solutions offer robust support to keep your systems running smoothly. We provide everything from network management to hardware and software solutions, ensuring that your IT infrastructure is reliable and efficient. Our services are tailored to meet the specific needs of your business, helping you stay competitive and productive.</p>
         <Link to="/EVL"><button className='btn btn-dark rounded-pill  px-5 mt-5'>Read More</button></Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
