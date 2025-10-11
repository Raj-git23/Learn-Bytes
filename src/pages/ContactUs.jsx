import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import ContactForm from '../components/common/ContactForm'

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-purple-700/80 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you! Our team is here to help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-xl border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">support@learnbytes.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-xl border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 99999 XXXXX</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-xl border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 LearnBytes Lane</p>
                  <p className="text-gray-600">Knowledge Park, Greater Noida</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
              <div className="space-y-1 text-gray-700">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8 h-fit">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
            </div>
            <ContactForm />
          </div>
        </div>

        {/* Map or Additional Section (Optional) */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Check out our Help Center for instant answers to common questions, or browse our comprehensive FAQ section.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg">
                Visit Help Center
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-all">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;