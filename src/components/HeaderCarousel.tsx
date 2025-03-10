
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useBookNowDialog } from '../hooks/useBookNowDialog';

interface HeaderCarouselProps {
  interval?: number;
  bookNowClick?:(e: React.MouseEvent)=>void
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({ interval = 5000 ,bookNowClick}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openDialog } = useBookNowDialog();
  
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

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // bookNowClick();
  };

  return (
    <div className="container-fluid p-0 relative">
      <div id="header-carousel" className="relative overflow-hidden" style={{ height: '100vh', maxHeight: '800px' }}>
        <div className="relative w-full h-full">
          {/* First Slide */}
          <div 
            className={`absolute w-full h-full transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: activeIndex === 0 ? 1 : 0 }}
          >
            <img className="w-full h-full object-cover" src="/img/carousel-1.jpg" alt="Image" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="carousel-caption absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="p-3 max-w-4xl mx-auto">
                <h4 className="text-white text-uppercase mb-3 text-lg md:text-xl font-semibold">TOURS & TRAVEL</h4>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight">Let's Discover The World Together</h1>
                <a href="#" onClick={bookNowClick} className="bg-primary text-white py-3 px-8 inline-block mt-4 text-lg font-medium hover:bg-opacity-90 transition-all">Book Now</a>
              </div>
            </div>
          </div>
          
          {/* Second Slide */}
          <div 
            className={`absolute w-full h-full transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: activeIndex === 1 ? 1 : 0 }}
          >
            <img className="w-full h-full object-cover" src="/img/carousel-2.jpg" alt="Image" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="carousel-caption absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="p-3 max-w-4xl mx-auto">
                <h4 className="text-white text-uppercase mb-3 text-lg md:text-xl font-semibold">TOURS & TRAVEL</h4>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight">Discover Amazing Places With Us</h1>
                <a href="#" onClick={bookNowClick} className="bg-primary text-white py-3 px-8 inline-block mt-4 text-lg font-medium hover:bg-opacity-90 transition-all">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 w-[45px] h-[45px] flex items-center justify-center  bg-[#00000044]  text-white hover:bg-[#00000088]"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 w-[45px] h-[45px] flex items-center justify-center bg-[#00000044]  text-white hover:bg-[#00000088]"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousel;
