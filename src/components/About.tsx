
import React from 'react';
import { Brain, Code, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Hire Me?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique blend of technical expertise and human psychology, ready to drive AI innovation at your company
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              From Psychology Graduate to AI Engineer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              My interdisciplinary background gives me a competitive edge in AI development. With a psychology 
              foundation, I understand user behavior and ethical implications, while my hands-on technical 
              experience ensures I can build scalable, production-ready solutions from day one.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I don't just code AI – I design intelligent systems that actually serve human needs. My portfolio 
              includes 5 deployed projects, 2 live chatbots serving real users, and a track record of combining 
              technical excellence with ethical considerations.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-900 mb-2">Ready to Contribute Immediately</h4>
              <p className="text-gray-700">
                Unlike typical graduates, I bring production experience with OpenAI APIs, vector databases, 
                and full-stack AI applications. I can start adding value to your team from week one.
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
                <div className="text-sm text-gray-600">Production AI Projects</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Code Quality Focus</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                <div className="text-sm text-gray-600">Live User-Facing Bots</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">0</div>
                <div className="text-sm text-gray-600">Days to Productivity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value proposition */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">What I Bring to Your Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Ethical AI Leadership</h4>
              <p className="text-gray-300 text-sm">
                Psychology background ensures human-centered, responsible AI development that builds user trust
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Production Experience</h4>
              <p className="text-gray-300 text-sm">
                Real-world deployment experience with AI APIs, databases, and full-stack applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Business Impact Focus</h4>
              <p className="text-gray-300 text-sm">
                Every project solves real problems - from bias detection to career guidance automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
