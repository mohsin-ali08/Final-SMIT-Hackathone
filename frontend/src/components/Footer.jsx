import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo Section */}
          <div>
            <Link to="/" className="text-3xl font-bold flex items-center">
              <img src="/path-to-your-logo.png" alt="Logo" className="mr-3 w-12 h-12" />
              My App
            </Link>
            <p className="mt-2 text-sm">Your tagline or description goes here.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm mt-2">Email: contact@myapp.com</p>
            <p className="text-sm mt-2">Phone: +1 (234) 567-890</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
