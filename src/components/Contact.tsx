
import React from 'react';
import { Mail, Github, Linkedin, Calendar, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build the Future Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start immediately • Available for full-time positions • Open to relocation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:sanelisematanzima@gmail.com"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 text-sm mb-2">sanelisematanzima@gmail.com</p>
            <p className="text-blue-300 text-xs">Response within 24 hours</p>
          </a>

          <a
            href="https://linkedin.com/in/sanelise-matanzima-76384b309"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-300 text-sm mb-2">Professional Network</p>
            <p className="text-blue-300 text-xs">View recommendations & endorsements</p>
          </a>

          <a
            href="https://github.com/Sanelise01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-300 text-sm mb-2">Source Code & Projects</p>
            <p className="text-blue-300 text-xs">5 pinned repositories ready</p>
          </a>
        </div>

        {/* Availability & Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-green-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Availability</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available immediately
              </p>
              <p>• Full-time positions preferred</p>
              <p>• Open to contract/freelance work</p>
              <p>• Remote, hybrid, or on-site</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>• Currently based in South Africa</p>
              <p>• Open to international relocation</p>
              <p>• EU/US work authorization possible</p>
              <p>• Remote-first companies welcome</p>
            </div>
          </div>
        </div>

        {/* Target roles and companies */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Target Opportunities</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-blue-300 mb-4">Ideal Roles</h4>
              <div className="space-y-2">
                {[
                  "AI/ML Engineer",
                  "Data Scientist",
                  "AI Product Manager", 
                  "ML Operations Engineer",
                  "AI Ethics Researcher",
                  "Conversational AI Developer"
                ].map((role, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-1 h-1 bg-blue-400 rounded-full mr-3"></div>
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-4">Company Types</h4>
              <div className="space-y-2">
                {[
                  "AI/ML focused startups",
                  "EdTech & Career platforms",
                  "Healthcare technology",
                  "Ethical AI companies",
                  "Enterprise AI solutions",
                  "Consulting firms"
                ].map((company, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-1 h-1 bg-purple-400 rounded-full mr-3"></div>
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make an Impact?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              I bring production experience, ethical AI focus, and the ability to contribute from day one. 
              Let's schedule a technical interview to discuss how I can drive AI innovation at your company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sanelisematanzima@gmail.com?subject=AI/ML Position - Technical Interview Request"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Technical Interview
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Download Resume & Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
