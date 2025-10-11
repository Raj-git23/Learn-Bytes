import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Sparkles, Bell, Home } from "lucide-react";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white px-6">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Icon */}
        <div className="inline-block bg-purple-600 p-6 rounded-full mb-8 animate-bounce">
          <Clock className="w-16 h-16 text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Coming <span className="bg-purple-500 bg-clip-text text-transparent">Soon</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          This page is under construction. We're working hard to bring you something amazing. Stay tuned!
        </p>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>
        </div>

      </div>

    </div>
  );
};

export default ComingSoon;