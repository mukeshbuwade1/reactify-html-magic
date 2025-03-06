
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface HeaderCarouselProps {
  interval?: number;
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({ interval = 5000 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const owlInitialized = useRef(false);

  useEffect(() => {
    // Load jQuery and OwlCarousel only once
    if (typeof window !== 'undefined' && !owlInitialized.current) {
      const loadCarousel = async () => {
        try {
          // @ts-ignore
          const $ = window.jQuery || await import('jquery').then(module => module.default);
          window.jQuery = $;
          
          await import('owl.carousel');
          
          if (carouselRef.current && $) {
            const $carousel = $(carouselRef.current);
            
            $carousel.owlCarousel({
              items: 1,
              loop: true,
              autoplay: true,
              autoplayTimeout: interval,
              nav: true,
              dots: false,
              navText: [
                '<div class="btn btn-dark" style="width: 45px; height: 45px; display: flex; align-items: center; justify-content: center;"><span class="carousel-control-prev-icon"></span></div>',
                '<div class="btn btn-dark" style="width: 45px; height: 45px; display: flex; align-items: center; justify-content: center;"><span class="carousel-control-next-icon"></span></div>'
              ],
              responsive: {
                0: { items: 1 }
              }
            });
            
            owlInitialized.current = true;
          }
        } catch (error) {
          console.error('Failed to load carousel:', error);
        }
      };
      
      loadCarousel();
    }
    
    return () => {
      // Clean up when component unmounts
      if (typeof window !== 'undefined' && carouselRef.current) {
        try {
          const $ = window.jQuery;
          if ($) {
            $(carouselRef.current).owlCarousel('destroy');
          }
        } catch (error) {
          console.error('Error cleaning up carousel:', error);
        }
      }
    };
  }, [interval]);

  return (
    <div className="container-fluid p-0">
      <div ref={carouselRef} id="header-carousel" className="owl-carousel">
        <div className="carousel-item position-relative">
          <img className="w-full h-[600px] object-cover" src="/img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
              <h4 className="text-white text-uppercase mb-3">Tours & Travel</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Let's Discover The World Together</h1>
              <a href="#" className="btn btn-primary py-2 px-4 md:py-3 md:px-5 mt-2">Book Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <img className="w-full h-[600px] object-cover" src="/img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
              <h4 className="text-white text-uppercase mb-3">Tours & Travel</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Discover Amazing Places With Us</h1>
              <a href="#" className="btn btn-primary py-2 px-4 md:py-3 md:px-5 mt-2">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
