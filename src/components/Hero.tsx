import React from 'react';
import { ArrowDown, Download, FileText, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Enhanced Name and Title */}
              <div className="space-y-8">
                <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">
                    <span className="inline-block w-full bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
                      Sanelise Matanzima
                    </span>
                  </h1>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-purple-300/30 shadow-lg">
                    <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      IT Support Specialist | Psychology Graduate | Emerging AI Innovator
                    </p>
                  </div>
                  
                  <p className="text-base max-w-xl mx-auto lg:mx-0 leading-relaxed text-slate-700 dark:text-slate-300 font-medium drop-shadow-sm">
                    A dynamic psychology graduate passionate about <span className="text-emerald-600 font-semibold">bridging human understanding</span> with <span className="text-blue-600 font-semibold">emerging technologies</span>. 
                    Dedicated to building <span className="text-purple-600 font-semibold">ethical, human-centered solutions</span> through intelligent design.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
                >
                  <span className="group-hover:scale-105 transition-transform inline-block">
                    View My Projects
                  </span>
                </a>
                <a
                  href="#about"
                  className="group px-8 py-4 border-2 border-gradient-to-r from-emerald-500 to-cyan-500 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 text-emerald-700 dark:text-emerald-300 rounded-xl font-bold text-base hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-emerald-400 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-cyan-100 dark:hover:from-emerald-800/30 dark:hover:to-cyan-800/30"
                >
                  <span className="group-hover:scale-105 transition-transform inline-block">
                    Learn More About Me
                  </span>
                </a>
              </div>

              {/* CV Download */}
              <div className="pt-4">
                <a
                  href="/SmartResume.pdf"
                  download="Sanelise_Matanzima_Resume.pdf"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
                >
                  <Download size={20} className="mr-2 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Side - Large Square Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img 
                    src="/lovable-uploads/c30d9adb-3b41-4806-a7dd-9854ed7f4afc.png" 
                    alt="Sanelise Matanzima"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <Sparkles size={24} className="text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CV Download and Connect Section */}
          <div className="mt-20 mb-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Professional Resume */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                        <FileText size={28} className="text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      Professional Resume
                    </h3>
                    <p className="text-base text-muted-foreground font-medium">Download my comprehensive CV</p>
                  </div>

                  <div className="text-center">
                    <a
                      href="/SmartResume.pdf"
                      download="Sanelise_Matanzima_Resume.pdf"
                      className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <Download size={20} className="mr-2 group-hover:animate-bounce" />
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Let's Connect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/60 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-center space-y-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        Let's Connect
                      </h3>
                      <p className="text-muted-foreground font-medium mb-6">
                        Ready to discuss opportunities and collaborations
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="text-center pt-8">
            <div className="flex flex-col items-center text-muted-foreground">
              <p className="text-sm mb-3 font-medium">Scroll to explore</p>
              <div className="animate-bounce">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ArrowDown size={16} className="text-primary-foreground" />
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