import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import People from '../../Components/Body/People';
import "./About.css"
import group1 from "/src/assets/group1.webp"
import aboutimg from "/src/assets/about-two-image1.jpg"
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Aboutus() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          imageObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image section is visible
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
          contentObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the content section is visible
    );

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          sectionObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      imageObserver.disconnect();
      contentObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <div className='mx-4'>
        <motion.h1
          className='ms-5 mt-5  '
          style={{ fontSize: '8vw' }}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          About Us
        </motion.h1>
        <hr />
        <motion.div
          className='d-flex justify-content-center align-items-center mt-5'
          initial="hidden"
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img className='img-fluid group-img' src={group1} alt="" width={"100%"} style={{ height: "auto" }} />
        </motion.div>
      </div>

      <div className="row mx-3 d-flex align-items-center" style={{ marginTop: "150px" }}>
        <div className="col-sm-5 d-flex justify-content-center ">
          <motion.img
            ref={imageRef}
            className='img-fluid group-img'
            src={aboutimg}
            alt=""
            width={400}
            style={{ height: "400px" }}
            initial="hidden"
            animate={isImageVisible ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
        <div className="col-sm-7 pt-3">
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={isContentVisible ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h3>Techcybe</h3>
            <p>In a rapidly changing world, continuous evolution is essential. That’s where we step in. As a Modern Technology Solutions and Integrated Service Management Organization, we leverage technology to address intricate business challenges and provide exceptional value to our clients.</p>
            <p>Our commitment to customers sets us apart. We intentionally cultivate a reputable organization and an attractive workplace. Through our collective efforts and innovative use of technology services, we aim to make a positive impact on our clients and communities. Every day, we work toward achieving this objective. Our dedicated pre-sales and post-sales support team ensure that you have the right technology that meets your requirements and exceeds your expectations. Combined with our commitment, knowledge and expertise; we can effectively deliver powerful business solutions.</p>
          </motion.div>
        </div>
      </div>

      <div ref={sectionRef} style={{ marginTop: "100px" }}>
        <div className="row pt-5 mx-3">
          <div className="connecting-line"></div>

          {/* Vision Section */}
          <motion.div
            className="col-sm-4 d-flex flex-column justify-content-center align-items-center"
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="dot-heading">
              <h3 className="text-start">Vision</h3>
              <p className="text-start text-muted mt-4">To empower businesses with innovative technology solutions that drive growth and efficiency, seamlessly integrating technology into their operations for enhanced performance and success.</p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="col-sm-4 d-flex flex-column justify-content-center align-items-center"
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
          >
            <div className="dot-heading">
              <h3 className="text-start">Values</h3>
              <p className="text-start text-muted mt-4">At our company, integrity and excellence guide everything we do. We are committed to delivering impactful, high-quality solutions that address our clients’ needs.</p>
            </div>
          </motion.div>

          {/* Strategy Section */}
          <motion.div
            className="col-sm-4 d-flex flex-column justify-content-center align-items-center"
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ delay: 0.9 }}
          >
            <div className="dot-heading">
              <h3 className="text-start">Strategy</h3>
              <p className="text-start text-muted mt-4">We believe every business deserves a technology solution that aligns with its unique goals. By understanding our clients’ specific needs and challenges, .</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <People />
      </div>
    </div>
  );
}

export default Aboutus;
