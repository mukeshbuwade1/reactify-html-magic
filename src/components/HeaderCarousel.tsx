
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface HeaderCarouselProps {
  interval?: number;
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({ interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Set up auto rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === 1 ? 0 : 1));
    }, interval);
    
    return () => clearInterval(timer);
  }, [interval]);
  
  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? 1 : 0));
  };
  
  const handleNext = () => {
    setActiveIndex((current) => (current === 1 ? 0 : 1));
  };


  const StaticData= ({info, title, buttonTitle, buttonLink})=>{
    return(
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-3">{info}</h4>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">{title}</h1>
                <a href={buttonLink||"#"} className="btn btn-primary py-2 px-4 md:py-3 md:px-5 mt-2 bg-white">{buttonTitle}</a>
              </div>
            </div>
    )
  }

  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="relative overflow-hidden">
        <div className="relative w-full" style={{ height: '600px' }}>
          {/* First Slide */}
          <div 
            className={`absolute w-full h-full transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: activeIndex === 0 ? 1 : 0 }}
          >
            <img className="w-full h-full object-cover" src="/img/carousel-1.jpg" alt="Image" />
            <StaticData title={"Let's Discover The World Together"} info={"Tours & Travel"} buttonTitle={"Book Now"} buttonLink={"#"}/>
          </div>
          
          {/* Second Slide */}
          <div 
            className={`absolute w-full h-full transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: activeIndex === 1 ? 1 : 0 }}
          >
            <img className="w-full h-full object-cover" src="/img/carousel-2.jpg" alt="Image" />
            <StaticData title={"Discover Amazing Places With Us"} info={"Tours & Travel"} buttonTitle={"Book Now"} buttonLink={"#"}/>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-dark text-white w-[45px] h-[45px] flex items-center justify-center"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-dark text-white w-[45px] h-[45px] flex items-center justify-center"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousel;
