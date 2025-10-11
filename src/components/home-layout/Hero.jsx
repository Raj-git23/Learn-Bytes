import React from 'react'
import { GraduationCap, BookOpen, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import { StatsCard } from '../ui/StatsCard';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Hero = () => {
  const {token} = useSelector(state => state.auth)
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-50 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Join 75,000+ learners worldwide</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Transform Your Future with{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                LearnBytes
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Master in-demand skills with our expert-led courses and join a thriving community of learners. Start your journey to success today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {
                token === null ? (
                  <NavLink 
                    to='/log-in' 
                    className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-600/40 flex items-center gap-2"
                  >
                    Start Learning
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                ) : (
                  <NavLink 
                    to='/courses' 
                    className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-600/40 flex items-center gap-2"
                  >
                    Start Learning
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                )
              }
              <NavLink 
                to='/courses' 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                View Courses
              </NavLink>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-purple-300 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-white">
                  75K+
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="mt-1">4.9/5 from 12,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-4 right-24 w-24 h-24 bg-purple-200 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-8 w-32 h-32 bg-pink-200 rounded-full"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-10/12 h-5/6 border-4 border-purple-100">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                  alt="Online learning"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-purple-200 rounded-xl p-2.5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">98%</p>
                    <p className="text-xs text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          <div className="bg-white border border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">300+</h3>
            <p className="text-gray-600">Expert Courses</p>
          </div>

          <div className="bg-white border border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">75,000+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>

          <div className="bg-white border border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1500+</h3>
            <p className="text-gray-600">Hours of Content</p>
          </div>

          <div className="bg-white border border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero