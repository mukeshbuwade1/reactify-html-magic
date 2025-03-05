
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhoneAlt, faAngleDoubleUp, faMapMarkerAlt, 
  faCalendarAlt, faUser, faStar, faCheck, faAngleRight,
  faMoneyCheckAlt, faAward, faGlobe, faRoute, faTicketAlt, faHotel
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/globals.css';

const Index = () => {
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Topbar Start */}
      <div className="hidden lg:block bg-light pt-3">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="m-0"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@example.com</p>
              <p className="text-body px-3">|</p>
              <p className="m-0"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />+012 345 6789</p>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-primary px-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-primary px-3">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-primary px-3">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-primary px-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-primary pl-3">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="relative">
        <div className="container mx-auto relative py-3">
          <nav className="bg-light shadow-lg py-3 px-5">
            <div className="flex justify-between items-center">
              <a href="/" className="navbar-brand">
                <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
              </a>
              <button className="lg:hidden">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="hidden lg:flex items-center">
                <a className="px-3 py-2 nav-item nav-link active" href="/">Home</a>
                <a className="px-3 py-2 nav-item nav-link" href="/about">About</a>
                <a className="px-3 py-2 nav-item nav-link" href="/service">Services</a>
                <a className="px-3 py-2 nav-item nav-link" href="/package">Tour Packages</a>
                <div className="relative nav-item dropdown group">
                  <a href="#" className="px-3 py-2 nav-link dropdown-toggle">Pages</a>
                  <div className="absolute hidden group-hover:block mt-1 bg-white border-0 rounded-none w-48 z-10">
                    <a className="block px-4 py-2 dropdown-item hover:bg-light" href="/blog">Blog Grid</a>
                    <a className="block px-4 py-2 dropdown-item hover:bg-light" href="/single">Blog Detail</a>
                    <a className="block px-4 py-2 dropdown-item hover:bg-light" href="/destination">Destination</a>
                    <a className="block px-4 py-2 dropdown-item hover:bg-light" href="/guide">Travel Guides</a>
                    <a className="block px-4 py-2 dropdown-item hover:bg-light" href="/testimonial">Testimonial</a>
                  </div>
                </div>
                <a className="px-3 py-2 nav-item nav-link" href="/contact">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Carousel Start */}
      <div className="relative p-0">
        <div id="header-carousel" className="carousel">
          <div className="carousel-inner">
            <div className="relative carousel-item active">
              <img className="w-full h-[600px] object-cover" src="/img/carousel-1.jpg" alt="Image" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="p-3 max-w-[900px]">
                  <h4 className="text-white text-uppercase mb-3">Tours & Travel</h4>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Let's Discover The World Together</h1>
                  <a href="#" className="btn btn-primary py-2 px-4 md:py-3 md:px-5 mt-2">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* Booking Start */}
      <div className="container mx-auto -mt-20 z-10 relative pb-5">
        <div className="bg-light shadow p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-1">
              <select className="w-full p-4 border" style={{ height: "47px" }}>
                <option value="">Destination</option>
                <option value="1">Destination 1</option>
                <option value="2">Destination 2</option>
                <option value="3">Destination 3</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <DatePicker
                selected={departDate}
                onChange={(date: Date) => setDepartDate(date)}
                className="w-full p-4 border"
                placeholderText="Depart Date"
              />
            </div>
            <div className="md:col-span-1">
              <DatePicker
                selected={returnDate}
                onChange={(date: Date) => setReturnDate(date)}
                className="w-full p-4 border"
                placeholderText="Return Date"
              />
            </div>
            <div className="md:col-span-1">
              <select className="w-full p-4 border" style={{ height: "47px" }}>
                <option value="">Duration</option>
                <option value="1">Duration 1</option>
                <option value="2">Duration 2</option>
                <option value="3">Duration 3</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <button className="w-full bg-primary text-white p-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* About Start */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[500px] relative">
            <img className="absolute w-full h-full object-cover" src="/img/about.jpg" alt="About" />
          </div>
          <div className="pt-5 pb-5">
            <div className="bg-white p-8 shadow-lg my-5">
              <h6 className="text-primary uppercase" style={{ letterSpacing: "5px" }}>About Us</h6>
              <h1 className="text-3xl mb-3">We Provide Best Tour Packages In Your Budget</h1>
              <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <img className="w-full" src="/img/about-1.jpg" alt="" />
                </div>
                <div>
                  <img className="w-full" src="/img/about-2.jpg" alt="" />
                </div>
              </div>
              <a href="#" className="bg-primary text-white px-4 py-2 inline-block mt-1">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="container mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h5>Competitive Pricing</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon icon={faAward} className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h5>Best Services</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon icon={faGlobe} className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h5>Worldwide Coverage</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Destination Start */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6 className="text-primary uppercase" style={{ letterSpacing: "5px" }}>Destination</h6>
          <h1 className="text-3xl">Explore Top Destination</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: "destination-1.jpg", name: "United States", cities: "100 Cities" },
            { img: "destination-2.jpg", name: "United Kingdom", cities: "100 Cities" },
            { img: "destination-3.jpg", name: "Australia", cities: "100 Cities" },
            { img: "destination-4.jpg", name: "India", cities: "100 Cities" },
            { img: "destination-5.jpg", name: "South Africa", cities: "100 Cities" },
            { img: "destination-6.jpg", name: "Indonesia", cities: "100 Cities" }
          ].map((dest, index) => (
            <div key={index} className="destination-item relative overflow-hidden mb-4">
              <img className="w-full h-60 object-cover" src={`/img/${dest.img}`} alt={dest.name} />
              <a href="#" className="destination-overlay text-white no-underline">
                <h5 className="text-white">{dest.name}</h5>
                <span>{dest.cities}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Destination End */}

      {/* Service Start */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6 className="text-primary uppercase" style={{ letterSpacing: "5px" }}>Services</h6>
          <h1 className="text-3xl">Tours & Travel Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="service-item bg-white text-center mb-4 py-5 px-4">
            <FontAwesomeIcon icon={faRoute} className="text-3xl mx-auto mb-4" />
            <h5 className="mb-2">Travel Guide</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
          <div className="service-item bg-white text-center mb-4 py-5 px-4">
            <FontAwesomeIcon icon={faTicketAlt} className="text-3xl mx-auto mb-4" />
            <h5 className="mb-2">Ticket Booking</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
          <div className="service-item bg-white text-center mb-4 py-5 px-4">
            <FontAwesomeIcon icon={faHotel} className="text-3xl mx-auto mb-4" />
            <h5 className="mb-2">Hotel Booking</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Packages Start */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6 className="text-primary uppercase" style={{ letterSpacing: "5px" }}>Packages</h6>
          <h1 className="text-3xl">Perfect Tour Packages</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((pkg, index) => (
            <div key={index} className="package-item bg-white mb-4 shadow-sm">
              <img className="w-full h-48 object-cover" src={`/img/package-${pkg}.jpg`} alt="" />
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <small className="m-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" />Thailand
                  </small>
                  <small className="m-0">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-primary mr-2" />3 days
                  </small>
                  <small className="m-0">
                    <FontAwesomeIcon icon={faUser} className="text-primary mr-2" />2 Person
                  </small>
                </div>
                <a href="#" className="text-lg font-medium no-underline hover:text-primary">
                  Discover amazing places of the world with us
                </a>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <h6 className="m-0">
                      <FontAwesomeIcon icon={faStar} className="text-primary mr-2" />4.5 <small>(250)</small>
                    </h6>
                    <h5 className="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Packages End */}

      {/* Registration Start */}
      <div className="py-12 my-12 bg-registration">
        <div className="container mx-auto py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="mb-5 lg:mb-0">
              <div className="mb-4">
                <h6 className="text-primary uppercase" style={{ letterSpacing: "5px" }}>Mega Offer</h6>
                <h1 className="text-white">
                  <span className="text-primary">30% OFF</span> For Honeymoon
                </h1>
              </div>
              <p className="text-white">
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-none text-white m-0">
                <li className="py-2">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-3" />
                  Labore eos amet dolor amet diam
                </li>
                <li className="py-2">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-3" />
                  Etsea et sit dolor amet ipsum
                </li>
                <li className="py-2">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-3" />
                  Diam dolor diam elitripsum vero.
                </li>
              </ul>
            </div>
            <div>
              <div className="card border-0">
                <div className="bg-primary text-center p-4">
                  <h1 className="text-white m-0">Sign Up Now</h1>
                </div>
                <div className="bg-white p-5 rounded-b">
                  <form>
                    <div className="mb-4">
                      <input type="text" className="w-full p-4 border" placeholder="Your name" required />
                    </div>
                    <div className="mb-4">
                      <input type="email" className="w-full p-4 border" placeholder="Your email" required />
                    </div>
                    <div className="mb-4">
                      <select className="w-full p-4 border">
                        <option selected>Select a destination</option>
                        <option value="1">Destination 1</option>
                        <option value="2">Destination 2</option>
                        <option value="3">Destination 3</option>
                      </select>
                    </div>
                    <div>
                      <button className="w-full bg-primary text-white py-3" type="submit">Sign Up Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Registration End */}

      {/* Footer Start */}
      <div className="bg-dark text-white-50 py-5 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
            <div className="mb-5">
              <a href="/" className="navbar-brand">
                <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
              </a>
              <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
              <h6 className="text-white uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>Follow Us</h6>
              <div className="flex">
                <a className="btn btn-outline-primary mr-2" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-primary mr-2" href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-primary mr-2" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="btn btn-outline-primary" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="text-white uppercase mb-4" style={{ letterSpacing: "5px" }}>Our Services</h5>
              <div className="flex flex-col">
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />About
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Destination
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Services
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Packages
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Guides
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Testimonial
                </a>
                <a className="text-white-50" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Blog
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="text-white uppercase mb-4" style={{ letterSpacing: "5px" }}>Useful Links</h5>
              <div className="flex flex-col">
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />About
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Destination
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Services
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Packages
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Guides
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Testimonial
                </a>
                <a className="text-white-50" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />Blog
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="text-white uppercase mb-4" style={{ letterSpacing: "5px" }}>Contact Us</h5>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />123 Street, New York, USA
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />+012 345 67890
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@example.com
              </p>
              <h6 className="text-white uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>Newsletter</h6>
              <div className="w-full">
                <div className="flex">
                  <input type="text" className="w-2/3 p-4 border-0" placeholder="Your Email" />
                  <div className="w-1/3">
                    <button className="w-full h-full bg-primary text-white px-3">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white border-t py-4 border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="text-center lg:text-left mb-3 lg:mb-0">
              <p className="m-0 text-white-50">
                Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="m-0 text-white-50">
                Designed by <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      {showBackToTop && (
        <a onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top cursor-pointer">
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </a>
      )}
    </div>
  );
};

export default Index;
