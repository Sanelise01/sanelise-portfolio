
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
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="/lovable-uploads/bd4ac92e-4412-45cf-a659-a594f411cb1f.png"
                alt="Sanelise Matanzima"
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">Sanelise</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Matanzima
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Psychology Graduate • AI/ML Practitioner • Building Ethical Solutions
          </p>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A dynamic psychology graduate passionate about bridging human understanding with emerging technologies. 
            Dedicated to building ethical, human-centered solutions through intelligent design.
          </p>

          {/* Resume Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-gray-200 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">📄</span>
              <h3 className="text-lg font-semibold text-gray-900">Resume</h3>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-lg mr-2">📎</span>
              <a
                href="/SmartResume.pdf"
                download="SmartResume.pdf"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <Download size={18} className="mr-2" />
                Download My Resume (PDF)
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-lg"
            >
              Get In Touch
            </a>
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
