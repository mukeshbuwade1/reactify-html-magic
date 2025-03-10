import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faAngleDoubleUp,
  faMapMarkerAlt,
  faBars,
  faAngleRight,
  faCheck,
  faRoute,
  faTicketAlt,
  faHotel,
  faUser,
  faStar,
  faCalendarAlt,
  faMoneyBillWave,
  faTrophy,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/globals.css";
import HeaderCarousel from "../components/HeaderCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BookingForm from "../components/BookingForm";
import BookNowDialog from "../components/BookNowDialog";
import { useBookNowDialog } from "../hooks/useBookNowDialog";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, openDialog, closeDialog } = useBookNowDialog();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDialog();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Book Now Dialog */}
      <BookNowDialog isOpen={isOpen} onClose={closeDialog} />
      
      {/* Topbar Start */}
      <div className="hidden lg:block topbar pb-10" >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="m-0">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                info@mapmytour.in
              </p>
              <p className="text-body px-3">|</p>
              <p className="m-0">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                +91 9424971195
              </p>
            </div>
            <div className="flex items-center">
              <a href="https://www.facebook.com/share/18D6nkSw6Z/?mibextid=wwXIfr" target="_blank" className="text-primary px-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.linkedin.com/company/106526320/admin/dashboard/" target="_blank" className="text-primary px-3">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.instagram.com/mapmytour.in" target="_blank" className="text-primary px-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com/@mapmytour?si=pE_7wImIWIk7nhMq" target="_blank" className="text-primary pl-3">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav
        className={`navbar top-0 lg:top-12 bg-transparent`}
      >
        <div className={`container mx-auto shadow-md bg-white shadow-2xl w-full lg:w-4/5`} style={{
          
        }}>
          <div className="flex justify-between items-center py-3 px-4">
            <a href="/" className="navbar-brand flex-shrink-0">
              <img className="hidden sm:flex h-[30px]" src="https://gqluohyewtjcjbntjfym.supabase.co/storage/v1/object/sign/logos/fullLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9mdWxsTG9nby5wbmciLCJpYXQiOjE3NDE1ODUzNTUsImV4cCI6MTg5OTI2NTM1NX0.5_NtBChxFgWPnW9yUcjHZlRrqn0p2Nwpx5RwUbhZcfc"/>
              <img className="flex sm:hidden h-[30px]" src="https://gqluohyewtjcjbntjfym.supabase.co/storage/v1/object/sign/logos/logoIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9sb2dvSWNvbi5wbmciLCJpYXQiOjE3NDE1ODY0MDMsImV4cCI6MTc1NDU0NjQwM30.vYYPoSuivLsQ6NlVPqqZrghhsS89k1ekl1sg1ppXWeU" />
            </a>
            <button
              className="lg:hidden text-dark"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            <div className="hidden lg:flex items-center">
              <a className="px-4 py-2 nav-item nav-link active" href="/">
                Home
              </a>
              <a className="px-4 py-2 nav-item nav-link" href="/about">
                About
              </a>
              <a className="px-4 py-2 nav-item nav-link" href="/service">
                Services
              </a>
              <a className="px-4 py-2 nav-item nav-link" href="/package">
                Tour Packages
              </a>
              <div className="relative nav-item dropdown group">
                <a href="#" className="px-4 py-2 nav-link dropdown-toggle">
                  Pages
                </a>
                <div className="absolute hidden group-hover:block mt-1 bg-white border-0 rounded-none w-48 z-10 shadow-lg">
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/blog"
                  >
                    Blog Grid
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/single"
                  >
                    Blog Detail
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/destination"
                  >
                    Destination
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/guide"
                  >
                    Travel Guides
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/testimonial"
                  >
                    Testimonial
                  </a>
                </div>
              </div>
              <a className="px-4 py-2 nav-item nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          <a className="block px-4 py-2 nav-item nav-link active" href="/">
            Home
          </a>
          <a className="block px-4 py-2 nav-item nav-link" href="/about">
            About
          </a>
          <a className="block px-4 py-2 nav-item nav-link" href="/service">
            Services
          </a>
          <a className="block px-4 py-2 nav-item nav-link" href="/package">
            Tour Packages
          </a>
          <a className="block px-4 py-2 nav-item nav-link" href="/pages">
            Pages
          </a>
          <a className="block px-4 py-2 nav-item nav-link" href="/contact">
            Contact
          </a>
        </div>
      )}
      {/* Navbar End */}

      {/* Carousel Start */}
      <HeaderCarousel bookNowClick={handleBookNowClick} />
      {/* Carousel End */}

      {/* Booking Start */}
      <BookingForm />
      {/* Booking End */}

      {/* About Start */}
      <div className="container mx-auto py-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div className="h-[700px] relative z-0">
            <img
              className="absolute w-full h-full object-cover"
              src="/img/about.jpg"
              alt="About"
            />
          </div>
          <div className="lg:-ml-10 z-10 flex items-center justify-center">
            <div className="bg-white p-8 shadow-lg my-auto">
              <h6
                className="text-primary uppercase"
                style={{ letterSpacing: "5px" }}
              >
                About Us
              </h6>
              <h1 className="text-4xl mb-3 font-semibold">
                We Provide Best Tour Packages In Your Budget
              </h1>
              <p className="font-light text-gray-500">
              At MapMyTour, we make travel hassle-free and memorable! Our expertly curated tour packages ensure you experience the best destinations with ease. Whether you need a local travel guide, flight or train tickets, or comfortable hotel stays, we've got you covered. Let us handle the details while you enjoy the journey! 🌍✈️🏨
              </p>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <img className="w-full" src="/img/about-1.jpg" alt="" />
                </div>
                <div>
                  <img className="w-full" src="/img/about-2.jpg" alt="" />
                </div>
              </div>
              <a
                href="#"
                className="bg-primary text-white px-4 py-2 inline-block mt-1"
                onClick={handleBookNowClick}
              >
                Book Now
              </a>
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
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-2xl text-white"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Competitive Pricing</h5>
              <p className="m-0 text-gray-500">
              Get the best travel deals at unbeatable prices without compromising on quality.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon
                icon={faTrophy}
                className="text-2xl text-white"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Best Services</h5>
              <p className="m-0 text-gray-500">
              Enjoy hassle-free travel with our expert support, premium packages, and customer-first approach
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                className="text-2xl text-white"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Worldwide Coverage</h5>
              <p className="m-0 text-gray-500">
              Explore destinations across the globe with our extensive travel network and services
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Destination Start */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1 className="text-3xl">Explore Top Destination</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: "destination-1.jpg",
              name: "United States",
              cities: "100 Cities",
            },
            {
              img: "destination-2.jpg",
              name: "United Kingdom",
              cities: "100 Cities",
            },
            {
              img: "destination-3.jpg",
              name: "Australia",
              cities: "100 Cities",
            },
            { img: "destination-4.jpg", name: "India", cities: "100 Cities" },
            {
              img: "destination-5.jpg",
              name: "South Africa",
              cities: "100 Cities",
            },
            {
              img: "destination-6.jpg",
              name: "Indonesia",
              cities: "100 Cities",
            },
          ].map((dest, index) => (
            <div
              key={index}
              className="destination-item relative overflow-hidden mb-4"
            >
              <img
                className="w-full h-60 object-cover"
                src={`/img/${dest.img}`}
                alt={dest.name}
              />
              <a
                href="#"
                className="destination-overlay text-white no-underline"
              >
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
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Services
          </h6>
          <h1 className="text-3xl">Tours & Travel Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="service-item bg-white text-center px-6 flex items-center justify-center flex-col">
            <FontAwesomeIcon icon={faRoute} className="text-3xl mx-auto mb-4" />
            <h5 className="mb-2 font-medium text-xl">Travel Guide</h5>
            <p className="m-0 text-gray-500">
            Explore new destinations with expert travel guides who provide insights, local knowledge, and seamless experiences.
            </p>
          </div>
         <div className="service-item bg-white text-center px-6 flex items-center justify-center flex-col">
            <FontAwesomeIcon
              icon={faTicketAlt}
              className="text-3xl mx-auto mb-4"
            />
           <h5 className="mb-2 font-medium text-xl">Ticket Booking</h5>
            <p className="m-0 text-gray-500">
            Book flights, trains, and buses effortlessly with our reliable service, ensuring the best prices and smooth travel.
            </p>
          </div>
         <div className="service-item bg-white text-center px-6 flex items-center justify-center flex-col">
            <FontAwesomeIcon icon={faHotel} className="text-3xl mx-auto mb-4" />
           <h5 className="mb-2 font-medium text-xl">Hotel Booking</h5>
            <p className="m-0 text-gray-500">
            Find and book top-rated hotels with great amenities, ensuring a comfortable and stress-free stay
            </p>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Packages Start */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Packages
          </h6>
          <h1 className="text-3xl">Perfect Tour Packages</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((pkg, index) => (
            <div key={index} className="package-item bg-white mb-4 shadow-sm">
              <img
                className="w-full h-48 object-cover"
                src={`/img/package-${pkg}.jpg`}
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <small className="m-0">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-primary mr-2"
                    />
                    Thailand
                  </small>
                  <small className="m-0">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-primary mr-2"
                    />
                    3 days
                  </small>
                  <small className="m-0">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary mr-2"
                    />
                    2 Person
                  </small>
                </div>
                <a
                  href="#"
                  className="text-lg font-medium no-underline hover:text-primary"
                >
                  Discover amazing places of the world with us
                </a>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <h6 className="m-0">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-primary mr-2"
                      />
                      4.5 <small>(250)</small>
                    </h6>
                    <h5 className="m-0">$350</h5>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <a 
                  href="#" 
                  className="bg-primary text-white w-full py-2 inline-block text-center"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </a>
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
              <div className="mb-4 ">
                <h6
                  className="text-primary uppercase bg-[rgba(255,255,255,0.7)] inline px-2"
                  style={{ letterSpacing: "5px" }}
                >
                  Mega Offer
                </h6>
                <h1 className="text-white text-4xl mt-2 font-semibold">
                  Get up to <span style={{
                    color:"rgba(245, 49, 49)"
                  }} >50% </span>Discount
                </h1>
              </div>
              <p className="text-white">
              Save big on your next trip with our exclusive discounts! Enjoy up to 50% off on tour packages, tickets, and hotels. Book now and make your dream vacation affordable!
              </p>
              <ul className="list-none text-white m-0 mt-3">
                <li className="py-1">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-primary mr-3"
                  />
                  Exclusive tour package discounts
                </li>
                <li className="py-1">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-primary mr-3"
                  />
                  Lowest prices on flight, train, and bus tickets
                </li>
                <li className="py-1">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-primary mr-3"
                  />
                  Great deals on premium hotel stays
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  onClick={handleBookNowClick}
                  className="bg-primary text-white py-3 px-6 inline-block"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div>
            <div className="card border-0">
                <div className="bg-primary text-center p-4">
                  <h1 className="text-white m-0">Get A Call Back</h1>
                </div>
                <div className="bg-white p-5 rounded-b">
                  <form>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="w-full p-4 border"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="number"
                        className="w-full p-4 border"
                        placeholder="Your Mobile Number"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="w-full p-4 border"
                        placeholder="Destination"
                        required
                      />
                    </div>
                    {/* <div className="mb-4">
                      <select className="w-full p-4 border">
                        <option selected>Select a destination</option>
                        {
                          [
                            {
                            id:1,
                            destinationName:"Destination 1"
                          },
                            {
                            id:2,
                            destinationName:"Destination 2"
                          },
                            {
                            id:3,
                            destinationName:"Destination 3"
                          },
                        ].map((e)=>{
return(
  <option value={e.id}>{e.destinationName}</option>
)
                          })
                        }
                      </select>
                    </div> */}
                    <div>
                      <button
                        className="w-full bg-primary text-white py-3"
                        type="submit"
                      >
                        Request Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Registration End */}

      {/* Team Start */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Guides
          </h6>
          <h1 className="text-3xl">Our Travel Guides</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((guide, index) => (
            <div key={index} className="team-item bg-white mb-4 group">
              <div className="relative overflow-hidden">
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                  src={`/img/team-${guide}.jpg`}
                  alt="Guide"
                />
                <div className="team-social absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 hover:bg-[rgba(0,0,0,0.5)] transition duration-500">
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h5 className="truncate font-semibold">Mukesh Buwade</h5>
                <p className="m-0 text-gray-500">Guide</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Team End */}

      {/* Testimonial Start */}
      {/* <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h6>
          <h1 className="text-3xl">What Say Our Clients</h1>
        </div>
        <TestimonialCarousel />
      </div> */}
      {/* Testimonial End */}

      {/* Blog Start */}
      {/* <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Blog
          </h6>
          <h1 className="text-3xl">Latest From Our Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((blog, index) => (
            <div key={index} className="blog-item">
              <div className="relative">
                <img
                  className="w-full h-60 object-cover"
                  src={`/img/blog-${blog}.jpg`}
                  alt="Blog"
                />
                <div className="blog-date absolute top-4 right-4 bg-primary text-white w-16 h-16 flex flex-col items-center justify-center">
                  <h6 className="font-bold mb-0">01</h6>
                  <small className="uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="flex mb-2">
                  <a className="text-primary uppercase no-underline" href="#">
                    Admin
                  </a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary uppercase no-underline" href="#">
                    Tours & Travel
                  </a>
                </div>
                <a
                  className="text-xl font-medium no-underline hover:text-primary"
                  href="#"
                >
                  Dolor justo sea kasd lorem clita justo diam amet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* Blog End */}

      {/* Footer Start */}
      <div className="bg-dark text-white-50 py-5 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
            <div className="mb-5">
              <a href="/" className="navbar-brand" >
                {/* <h1 className="text-primary">
                  <span className="text-white">TRAVEL</span>ER
                </h1> */}
                <img src="https://gqluohyewtjcjbntjfym.supabase.co/storage/v1/object/sign/logos/logoWithPunchLine.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9sb2dvV2l0aFB1bmNoTGluZS5wbmciLCJpYXQiOjE3NDE1OTE3MjIsImV4cCI6MTg5OTI3MTcyMn0.2VDuzFc8T7wi6p-P6loRzozVYVZGPllBlVKUEj0jP1I"
                className="h-[50px] bg-gray-100"
                />
              </a>
              <p>
              Our expertly curated tour packages ensure you experience the best destinations with ease.
              </p>
              <h6
                className="text-white uppercase mt-4 mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Follow Us
              </h6>
              <div className="flex">
                {/* <a className="btn btn-outline-primary mr-2" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a> */}
                {/* <a className="btn btn-outline-primary mr-2" href="https://www.facebook.com/share/18D6nkSw6Z/?mibextid=wwXIfr" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a> */}
                <a className="btn btn-outline-primary mr-2" href="https://www.linkedin.com/company/106526320/admin/dashboard/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="btn btn-outline-primary mr-2" href="https://www.instagram.com/mapmytour.in" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-primary" href="https://youtube.com/@mapmytour?si=pE_7wImIWIk7nhMq" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5
                className="text-white uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                Our Services
              </h5>
              <div className="flex flex-col">
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Holidays Package
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                 Cab Service
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Ticket Booking
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Guide Service
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Air Ticket
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Destination Wedding
                </a>
                <a className="text-white-50" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Event Management
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5
                className="text-white uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                Useful Links
              </h5>
              <div className="flex flex-col">
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Privacy Policy 
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Terms & Conditions
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Cancellation & Refund Policy
                </a>
                
              </div>
            </div>
            <div className="mb-5" >
              <h5
                className="text-white uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                Contact Us
              </h5>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Panchsheel Nagar, Chhindwara - 480001 (Near of Sdo Office Chhindwara Collectorate Office)
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                (+91) 8858399439 / 9424971195
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                info@mapmytour.in
              </p>
              <h6
                className="text-white uppercase mt-4 mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Newsletter
              </h6>
              <div className="w-full">
                <div className="flex">
                  <input
                    type="text"
                    className="w-2/3 p-4 border-0"
                    placeholder="Your Email"
                  />
                  <div className="w-1/3">
                    <button className="w-full h-full bg-primary text-white px-3">
                      Sign Up
                    </button>
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
                Copyright &copy; <a href="#">M<span style={{color:"rgb(245, 49, 49)"}}>a</span>pMyTour</a>. All Rights Reserved.
              </p>
            </div>
            <div className="text-center lg:text-right">
              {/* <p className="m-0 text-white-50">
                Designed by <a href="https://htmlcodex.com">HTML Codex</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      {showBackToTop && (
        <a
          onClick={scrollToTop}
          className="btn btn-lg btn-primary btn-lg-square back-to-top cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </a>
      )}
    </div>
  );
};

export default Index;
