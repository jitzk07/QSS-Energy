import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#B0D129] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Section: Location, Phone */}
          <div className="flex space-x-6 items-center">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5 7 11 7 11s7-6 7-11c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm4 0h2v2h-2zm0-4h2v2h-2z" />
              </svg>
              <span className="ml-2 text-sm">123 Street, City</span>
            </span>

            <span className="flex items-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27 7.5 7.5 0 002.36.39 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 7.5 7.5 0 00.39 2.36 1 1 0 01-.27 1.09l-2.2 2.2z" />
              </svg>
              <span className="ml-2 text-sm">+1 234 567 890</span>
            </span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-pinterest-p text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <nav className="bg-white py-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#">
              <img src="./qss-logo.png" alt="Logo" className="h-8 w-auto" />
            </a>

            {/* Hamburger Menu */}
            <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-[#B0D129]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`${
                isMenuOpen ? 'absolute top-full left-0 w-full bg-white shadow-md z-50' : 'hidden'
              } lg:flex lg:flex-grow lg:justify-end`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-6 text-center">
                <li>
                  <a className="block text-black hover:text-[#91B421] font-bold py-2" href="#Home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="block text-black hover:text-[#91B421] font-bold py-2" href="#AboutUs">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="block text-black hover:text-[#91B421] font-bold py-2" href="#Service">
                    Services
                  </a>
                </li>
                {/* <li>
                  <a className="block text-black hover:text-[#91B421] font-bold py-2" href="/pricing">
                    Pricing
                  </a>
                </li> */}
                <li>
                  <a className="block text-black hover:text-[#91B421] font-bold py-2" href="#ContactUs">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
