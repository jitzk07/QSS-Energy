import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer id="ContactUs" className="bg-[#B0D129] py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Menus Section */}
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <h5 className="text-lg font-bold mb-4">MENUS</h5>
              <ul className="list-none mb-0">
                <li className="mb-2">
                  <a className="hover:text-[#2c3e50] transition" href="#Home">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-[#2c3e50] transition" href="#AboutUs">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-[#2c3e50] transition" href="#Service">
                    Service
                  </a>
                </li>
                {/* <li className="mb-2">
                  <a className="hover:text-[#2c3e50] transition" href="#">
                    Pricing
                  </a>
                </li> */}
                <li className="mb-2">
                  <a className="hover:text-[#2c3e50] transition" href="#ContactUs">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <h5 className="text-lg font-bold mb-4">CONTACT US</h5>
              <ul className="list-none mb-0">
                <li className="mb-2">
                  <a
                    className="hover:text-[#2c3e50] transition"
                    href="tel:+919598989391"
                  >
                    +91-9599898391
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="hover:text-[#2c3e50] transition"
                    href="mailto:admin@incognitodevs.com"
                  >
                    admin@incognitodevs.com
                  </a>
                </li>
                <li className="mb-2 text-sm leading-relaxed">
                  S-3/704, Eldeco Aamantran Sector -119 Noida, Gautam Buddha
                  Nagar, Uttar Pradesh.
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <h5 className="text-lg font-bold mb-4">FOLLOW US</h5>
              <ul className="list-none mb-0 flex space-x-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#2c3e50] transition"
                    aria-label="Facebook"
                  >
                    <FaFacebookSquare size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#2c3e50] transition"
                    aria-label="Twitter"
                  >
                    <FaTwitterSquare size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#2c3e50] transition"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#2c3e50] transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
