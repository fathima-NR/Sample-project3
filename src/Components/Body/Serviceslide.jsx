import React, { useState } from 'react';

function Serviceslide({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const { imgSrc, heading, description } = slides[currentSlide];

  return (
    <div>
      <div className="row py-5 mt-3 bg-dark d-flex align-items-center justify-content-center">
        <div className="col-sm-5 p-4 d-flex justify-content-center">
          <img
            className='img-fluid'
            src={imgSrc}
            alt={heading}
            width={500}
            style={{ height: "auto" }}
          />
        </div>
        <div className="col-sm-6 px-4 p-3 text-white">
          <h1>{heading}</h1>
          <p className='mt-4 '>{description}</p>
          <button
            type="submit"
            className="btn-light btn mb-4 w-50 d-flex align-items-center justify-content-center p-2 mt-4"
            style={{ borderRadius: "50px" }}
          >
            Let's Talk
          </button>
          <div className='d-flex justify-content-start'>
            <button
              className='btn btn-light fw-bold mx-1'
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className='btn btn-light fw-bold mx-1'
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serviceslide;
