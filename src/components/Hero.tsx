
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-800 font-medium mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for AI/ML Opportunities
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">Sanelise</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Matanzima
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
            AI/ML Engineer • Psychology Graduate • Ethical AI Advocate
          </p>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Combining human-centered psychology with cutting-edge AI to build 
            <span className="font-semibold text-blue-600"> ethical, scalable solutions</span> that solve real-world problems.
            <br />
            <span className="text-blue-600 font-medium">5 production-ready AI projects • 2 live chatbots • Ready to contribute from day one</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              View Portfolio Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-lg"
            >
              Let's Connect
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">AI/ML Projects Deployed</div>
              <div className="text-sm text-gray-500">Production-ready applications</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Ethical AI Focus</div>
              <div className="text-sm text-gray-500">Human-centered design approach</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-700 font-medium">Live AI Chatbots</div>
              <div className="text-sm text-gray-500">Serving real users daily</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
