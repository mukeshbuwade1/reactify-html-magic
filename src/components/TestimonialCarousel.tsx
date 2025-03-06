
import React from 'react';
import OwlCarousel from './OwlCarousel';

const TestimonialCarousel: React.FC = () => {
  const carouselOptions = {
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  };

  return (
    <OwlCarousel options={carouselOptions} className="testimonial-carousel">
      {[1, 2, 3, 4].map((testimonial, index) => (
        <div key={index} className="testimonial-item">
          <div className="text-center">
            <img className="mx-auto rounded-full w-24 h-24 object-cover" src={`/img/testimonial-${testimonial}.jpg`} alt="Client" />
            <div className="bg-white p-4 mt-[-20px] relative shadow-md">
              <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <h5 className="truncate">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default TestimonialCarousel;
