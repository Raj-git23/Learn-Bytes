import React from 'react';
import { Code, Brain, Target, Rocket } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

const Features = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700/90 to-purple-950/80 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white/90 mb-4">Why Choose LearnBytes?</h2>
          <p className="text-xl text-gray-100">Your Gateway to Tech Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">Project-Based</h3>
            <p className="text-purple-700">Build real-world projects that showcase your skills</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">Industry Experts</h3>
            <p className="text-purple-700">Learn from top professionals in the field</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">Structured Path</h3>
            <p className="text-purple-700">Clear roadmap to achieve your learning goals</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">Career Support</h3>
            <p className="text-purple-700">Get guidance for your professional growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;