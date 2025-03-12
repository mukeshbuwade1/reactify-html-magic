import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ isHome }:{ isHome?:boolean }) {
  const nav = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <nav className={`navbar top-0 lg:top-12 bg-transparent`}>
        <div
          className={`container mx-auto shadow-md bg-white shadow-2xl w-full lg:w-4/5`}
        >
          <div className="flex justify-between items-center py-3 px-4">
            <a href="/" className="navbar-brand flex-shrink-0">
              <img
                className="hidden sm:flex h-[30px]"
                src="https://gqluohyewtjcjbntjfym.supabase.co/storage/v1/object/sign/logos/fullLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9mdWxsTG9nby5wbmciLCJpYXQiOjE3NDE1ODUzNTUsImV4cCI6MTg5OTI2NTM1NX0.5_NtBChxFgWPnW9yUcjHZlRrqn0p2Nwpx5RwUbhZcfc"
              />
              <img
                className="flex sm:hidden h-[30px]"
                src="https://gqluohyewtjcjbntjfym.supabase.co/storage/v1/object/sign/logos/fullLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9mdWxsTG9nby5wbmciLCJpYXQiOjE3NDE1ODUzNTUsImV4cCI6MTg5OTI2NTM1NX0.5_NtBChxFgWPnW9yUcjHZlRrqn0p2Nwpx5RwUbhZcfc"
              />
            </a>
            <button className="lg:hidden text-dark" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            <div className="hidden lg:flex items-center">
              <a className="px-4 py-2 nav-item nav-link active" href="/">
                Home
              </a>
              {isHome && (
                <>
                  <a className="px-4 py-2 nav-item nav-link" href="#about">
                    About
                  </a>
                  <a className="px-4 py-2 nav-item nav-link" href="#service">
                    Services
                  </a>
                  <a className="px-4 py-2 nav-item nav-link" href="#destination">
                    Tour Packages
                  </a>
                </>
              )}
              {/* <div className="relative nav-item dropdown group">
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
              </div> */}
              <span
                className="px-4 py-2 nav-item nav-link"
                onClick={() => nav("/contact")}
              >
                Contact
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          <a className="block px-4 py-2 nav-item nav-link active" onClick={toggleMobileMenu} href="/">
            Home
          </a>
          {isHome && (
                <>
          <a className="block px-4 py-2 nav-item nav-link" onClick={toggleMobileMenu} href="#about">
            About
          </a>
          <a className="block px-4 py-2 nav-item nav-link" onClick={toggleMobileMenu} href="#service">
            Services
          </a>
          <a className="block px-4 py-2 nav-item nav-link" onClick={toggleMobileMenu} href="#destination">
            Tour Packages
          </a>
          </>
              )}
          {/* <a className="block px-4 py-2 nav-item nav-link" href="/pages">
            Pages
          </a> */}
          <a className="block px-4 py-2 nav-item nav-link"  onClick={() => {toggleMobileMenu();nav("/contact")}}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}
