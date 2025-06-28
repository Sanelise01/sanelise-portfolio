
import React from 'react';
import { Brain, Code, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining psychology insights with technical skills to create meaningful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              From Psychology to AI/ML
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I am a versatile problem-solver with a foundation in psychology and hands-on experience 
              in IT support and AI/ML development. My passion lies in combining behavioral insight with 
              cutting-edge technology to design practical, ethical, and human-centered solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With resilience and adaptability, I tackle complex challenges and deliver value-driven 
              outcomes in education, employment, and beyond. My goal is to apply interdisciplinary 
              thinking to build inclusive, ethical, and impactful AI solutions.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Career Objective</h4>
              <p className="text-gray-700">
                Seeking opportunities in AI, data analytics, or intelligent system development, 
                particularly in career development, education, or health tech.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Live Applications</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                <div className="text-sm text-gray-600">AI Chatbots</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">1</div>
                <div className="text-sm text-gray-600">UX/UI Prototype</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value proposition */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Human-Centered Design</h4>
              <p className="text-gray-300 text-sm">
                Using psychology principles to create intuitive and accessible solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Technical Excellence</h4>
              <p className="text-gray-300 text-sm">
                Building robust applications with modern tools and best practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Ethical AI</h4>
              <p className="text-gray-300 text-sm">
                Committed to developing fair, transparent, and beneficial AI systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
