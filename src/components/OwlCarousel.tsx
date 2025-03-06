
import React, { useEffect, useRef, ReactNode } from 'react';

interface OwlCarouselProps {
  children: ReactNode;
  options?: any;
  className?: string;
}

const OwlCarousel: React.FC<OwlCarouselProps> = ({ 
  children, 
  options = {}, 
  className = '' 
}) => {
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
              autoplayTimeout: 5000,
              ...options
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
  }, [options]);

  return (
    <div ref={carouselRef} className={`owl-carousel ${className}`}>
      {children}
    </div>
  );
};

export default OwlCarousel;
