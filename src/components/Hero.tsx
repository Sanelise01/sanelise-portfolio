import React from 'react';
import { ArrowDown, Camera, Download, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Cover Photo Section */}
      <div className="absolute inset-0 h-96">
        <div className="w-full h-full relative" style={{ backgroundColor: '#0D47A1' }}>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
          
          {/* Cover photo upload area */}
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
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white" style={{ backgroundColor: '#00BFA6' }}></div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#333333' }}>
                <span className="block">Sanelise</span>
                <span className="block" style={{ color: '#0D47A1' }}>
                  Matanzima
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-medium" style={{ color: '#B49789' }}>
                  IT Support Associate | Psychology Graduate | Emerging AI Innovator
                </p>
                
                <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: '#333333' }}>
                  A dynamic psychology graduate passionate about bridging human understanding with emerging technologies. 
                  Dedicated to building ethical, human-centered solutions through intelligent design.
                </p>
              </div>
            </div>
          </div>

          {/* CV Download Section */}
          <div className="mb-16">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0D47A1' }}>
                  <FileText size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>Professional Resume</h3>
                <p className="text-lg" style={{ color: '#666666' }}>View and download my comprehensive CV</p>
              </div>

              {/* Resume Preview */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                <img
                  src="/lovable-uploads/dd85eef8-e21e-4fa7-8801-6e115e904b83.png"
                  alt="Sanelise Matanzima Resume"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Download Button */}
              <div className="text-center">
                <a
                  href="/lovable-uploads/dd85eef8-e21e-4fa7-8801-6e115e904b83.png"
                  download="Sanelise_Matanzima_Resume.pdf"
                  className="inline-flex items-center px-8 py-4 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
                  style={{ backgroundColor: '#0D47A1' }}
                >
                  <Download size={20} className="mr-3" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Professional Cards Section */}
          <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-md mx-auto">
            
            {/* Quick Contact Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#00BFA6' }}>
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>Let's Connect</h3>
                  <p className="mb-6" style={{ color: '#333333' }}>Ready to discuss opportunities and collaborations</p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
                  style={{ backgroundColor: '#00BFA6' }}
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
                className="px-10 py-4 text-white rounded-2xl font-bold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-lg min-w-[200px]"
                style={{ backgroundColor: '#0D47A1' }}
              >
                View My Projects
              </a>
              <a
                href="#about"
                className="px-10 py-4 border-2 rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg min-w-[200px]"
                style={{ 
                  borderColor: '#B49789', 
                  color: '#B49789',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = '#00BFA6';
                  target.style.color = '#00BFA6';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = '#B49789';
                  target.style.color = '#B49789';
                }}
              >
                Learn More About Me
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16">
              <div className="flex flex-col items-center" style={{ color: '#B49789' }}>
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
        <div className="absolute top-1/2 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#0D47A1', opacity: 0.1 }}></div>
        <div className="absolute top-3/4 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#00BFA6', opacity: 0.1, animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#B49789', opacity: 0.1, animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
