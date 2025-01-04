import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white text-sm">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 space-y-2 md:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-1">
          <FaPhoneAlt />
          <span>+92 (051) 8449100</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEnvelope />
          <span>info@qih.com.pk</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-gray-300 transition duration-300">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-300 transition duration-300">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-300 transition duration-300">
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Topbar