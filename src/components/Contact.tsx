
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss opportunities in AI/ML, data analytics, or intelligent system development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:sanelisematanzima@gmail.com"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">sanelisematanzima@gmail.com</p>
          </a>

          <a
            href="https://github.com/Sanelise01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-300">github.com/Sanelise01</p>
          </a>

          <a
            href="https://linkedin.com/in/sanelise-matanzima-76384b309"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Linkedin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-300">Connect with me</p>
          </a>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Career Interests</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm particularly interested in opportunities that combine AI/ML with social impact, 
              especially in education, career development, or healthcare. I bring a unique 
              interdisciplinary perspective and am eager to contribute to ethical AI initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML Engineer", "Data Analyst", "AI Ethics Researcher", "Product Manager", "UX Researcher"].map((role, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
