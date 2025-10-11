import React from 'react'
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Lightbulb, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-100 via-white to-white border-t border-purple-200 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-8 h-8 text-purple-600" />
              <div className="font-bold text-2xl">
                <span className="text-purple-700">Learn</span>
                <span className="text-purple-900">Bytes</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transform your learning journey with expert-led courses and hands-on
              projects. Join thousands of learners worldwide.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-200 hover:bg-purple-600 hover:text-white text-purple-700 p-2.5 rounded-lg transition-all hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-200 hover:bg-purple-600 hover:text-white text-purple-700 p-2.5 rounded-lg transition-all hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-200 hover:bg-purple-600 hover:text-white text-purple-700 p-2.5 rounded-lg transition-all hover:scale-110"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-200 hover:bg-purple-600 hover:text-white text-purple-700 p-2.5 rounded-lg transition-all hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="courses" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → Courses
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="about-us" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="contact-us" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="help" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → Help Center
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="terms" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="privacy" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="faq" 
                  className="text-gray-700 hover:text-purple-600 hover:translate-x-1 inline-block transition-all font-medium"
                >
                  → FAQ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                <span className="text-sm">support@learnbytes.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                <span className="text-sm">+91 99999 XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                <span className="text-sm">123 Learning Street, Education City, EC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-200 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 LearnBytes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <NavLink to="privacy" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Privacy Policy
            </NavLink>
            <NavLink to="terms" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Terms of Service
            </NavLink>
            <NavLink to="cookies" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer