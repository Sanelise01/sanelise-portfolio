
import React from 'react';
import { ArrowDown, Camera, Download, FileText, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/652bf501-b249-441d-8b63-1f3453fed478.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Profile Section */}
          <div className="text-center mb-20">
            {/* Enhanced Name and Title */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-2xl text-shadow-lg">
                    Sanelise
                  </span>
                  <span className="block text-white drop-shadow-2xl text-shadow-lg">
                    Matanzima
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/30">
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    IT Support Specialist | Psychology Graduate | Emerging AI Innovator
                  </p>
                </div>
                
                <p className="text-lg max-w-4xl mx-auto leading-relaxed text-white font-medium drop-shadow-lg">
                  A dynamic psychology graduate passionate about bridging human understanding with emerging technologies. 
                  Dedicated to building ethical, human-centered solutions through intelligent design.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced CV Download and Connect Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Professional Resume */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <FileText size={32} className="text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <Download size={12} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 text-white">
                      Professional Resume
                    </h3>
                    <p className="text-lg text-white/80 font-medium">Download my comprehensive CV</p>
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

              {/* Let's Connect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-center space-y-8">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-3xl">💬</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-3 text-white">
                        Let's Connect
                      </h3>
                      <p className="text-white/80 font-medium text-lg mb-8">
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
                className="group px-12 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 min-w-[240px] bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <span className="group-hover:scale-105 transition-transform inline-block">
                  Learn More About Me
                </span>
              </a>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="pt-16">
              <div className="flex flex-col items-center text-white">
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
