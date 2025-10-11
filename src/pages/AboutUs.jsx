import React from 'react';
import { Users, Target, Lightbulb, Sparkles, Heart, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-purple-700/80 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About LearnBytes</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Empowering learners worldwide with the skills to excel in their careers and beyond.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-2xl rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Learning"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-purple-100"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-2">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Making Quality Education <span className="text-purple-600">Accessible</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At LearnBytes, we aim to make quality education accessible to everyone, leveraging technology and innovation to create an inclusive learning environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of knowledge to transform lives and are dedicated to helping individuals achieve their goals, whether they're upskilling for a career, exploring a personal passion, or advancing in their field.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovative Solutions</h3>
                  <p className="text-gray-600">Cutting-edge learning solutions tailored to your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Measurable Outcomes</h3>
                  <p className="text-gray-600">Focused on delivering real, trackable results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Vibrant Community</h3>
                  <p className="text-gray-600">Join thousands of learners on their journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">300+</div>
              <p className="text-gray-700 font-medium">Expert Courses</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">75K+</div>
              <p className="text-gray-700 font-medium">Active Students</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">1500+</div>
              <p className="text-gray-700 font-medium">Hours Content</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Join Us Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-purple-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover your potential and transform your future with LearnBytes. Together, let's shape a brighter tomorrow.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-200 rounded-full blur-2xl"></div>
          <img
            src="https://media.istockphoto.com/id/2155053753/photo/business-team-putting-hands-together-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=cbrLxOT62fLesrz7eT4HpJW-nWO9EaCmWikY3TK8Xt4="
            alt="Team Collaboration"
            className="relative rounded-2xl shadow-2xl w-full sm:w-10/12 max-w-xl mx-auto border-4 border-purple-100"
          />
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Passion for Learning</h3>
            <p className="text-gray-600">We're driven by a love for education and growth.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to delivering the highest quality content.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600">Building meaningful connections that last.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;