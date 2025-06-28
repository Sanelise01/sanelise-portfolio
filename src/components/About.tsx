
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              A Dynamic Psychology Graduate Passionate About AI Ethics
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I am a versatile problem-solver with a foundation in psychology and hands-on 
              experience in IT support and AI/ML development. My passion lies in combining 
              behavioral insight with cutting-edge technology to design practical, ethical, 
              and human-centered solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With resilience and adaptability, I tackle complex challenges and deliver 
              value-driven outcomes in education, employment, and beyond. My interdisciplinary 
              approach brings a unique perspective to AI development, focusing on creating 
              inclusive and impactful solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-sm text-gray-600">AI/ML Projects</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">Live Chatbots</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Career Objective</h4>
                <p className="text-gray-600 leading-relaxed">
                  I am seeking an entry-level opportunity in AI, data analytics, or intelligent 
                  system development. My goal is to apply interdisciplinary thinking to build 
                  inclusive, ethical, and impactful AI solutions—particularly in the fields of 
                  career development, education, or health tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
