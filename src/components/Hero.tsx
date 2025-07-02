
import React from 'react';
import { ArrowDown, Camera, Download, FileText, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Cover Photo Section */}
      <div className="absolute inset-0 h-80">
        <div className="w-full h-full relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-16 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-24 right-32 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-32 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <div className="absolute top-6 right-6">
            <button className="group flex items-center px-4 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl text-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Camera size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Add Cover Photo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Profile Section */}
          <div className="text-center mb-20">
            {/* Profile Photo with enhanced design */}
            <div className="flex justify-center mb-10">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative w-44 h-44 rounded-full bg-white p-2 shadow-2xl">
                  <img
                    src="/lovable-uploads/bd4ac92e-4412-45cf-a659-a594f411cb1f.png"
                    alt="Sanelise Matanzima"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced Name and Title */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Sanelise
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Matanzima
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200/50">
                  <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                    IT Support Associate | Psychology Graduate | Emerging AI Innovator
                  </p>
                </div>
                
                <p className="text-lg max-w-4xl mx-auto leading-relaxed text-gray-700 font-medium">
                  A dynamic psychology graduate passionate about bridging human understanding with emerging technologies. 
                  Dedicated to building ethical, human-centered solutions through intelligent design.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced CV Download Section */}
          <div className="mb-20">
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <FileText size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <Download size={12} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Professional Resume
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">Download my comprehensive CV</p>
                </div>

                <div className="text-center">
                  <a
                    href="/SmartResume.pdf"
                    download="Sanelise_Matanzima_Resume.pdf"
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20"
                  >
                    <Download size={24} className="mr-3 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Professional Cards */}
          <div className="grid md:grid-cols-1 gap-8 mb-20 max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="text-center space-y-8">
                  <div className="relative inline-flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">💬</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Let's Connect
                    </h3>
                    <p className="text-gray-700 font-medium text-lg mb-8">
                      Ready to discuss opportunities and collaborations
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="text-center space-y-10">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="#projects"
                className="group px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 min-w-[240px] border border-white/20"
              >
                <span className="group-hover:scale-105 transition-transform inline-block">
                  View My Projects
                </span>
              </a>
              <a
                href="#about"
                className="group px-12 py-5 border-2 border-purple-300 text-purple-700 rounded-2xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 min-w-[240px] bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
              >
                <span className="group-hover:scale-105 transition-transform inline-block">
                  Learn More About Me
                </span>
              </a>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="pt-16">
              <div className="flex flex-col items-center text-purple-600">
                <p className="text-sm mb-3 font-medium">Scroll to explore</p>
                <div className="animate-bounce">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <ArrowDown size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
