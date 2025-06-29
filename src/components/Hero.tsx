import React from 'react';
import { ArrowDown, Download, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Cover Photo Section */}
      <div className="absolute inset-0 h-96">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative">
          {/* Placeholder for cover photo - can be replaced with actual image */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          
          {/* Optional: Add cover photo upload area */}
          <div className="absolute top-4 right-4">
            <button className="flex items-center px-3 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm hover:bg-white/30 transition-colors">
              <Camera size={16} className="mr-2" />
              Add Cover Photo
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Profile Section */}
          <div className="text-center mb-16">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-white p-1 shadow-2xl">
                  <img
                    src="/lovable-uploads/bd4ac92e-4412-45cf-a659-a594f411cb1f.png"
                    alt="Sanelise Matanzima"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Sanelise</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Matanzima
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-700 font-medium">
                  IT Support Associate | Psychology Graduate | Emerging AI Innovator
                </p>
                
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A dynamic psychology graduate passionate about bridging human understanding with emerging technologies. 
                  Dedicated to building ethical, human-centered solutions through intelligent design.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Resume Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Resume</h3>
                  <p className="text-gray-600 mb-6">Download my comprehensive CV showcasing experience and skills</p>
                </div>
                <a
                  href="/SmartResume.pdf"
                  download="SmartResume.pdf"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
                >
                  <Download size={20} className="mr-3" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h3>
                  <p className="text-gray-600 mb-6">Ready to discuss opportunities and collaborations</p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#projects"
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-lg min-w-[200px]"
              >
                View My Projects
              </a>
              <a
                href="#about"
                className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg min-w-[200px]"
              >
                Learn More About Me
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16">
              <div className="flex flex-col items-center text-gray-400">
                <p className="text-sm mb-2">Scroll to explore</p>
                <div className="animate-bounce">
                  <ArrowDown size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
