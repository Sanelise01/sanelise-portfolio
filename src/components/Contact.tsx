
import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and explore opportunities to collaborate on meaningful projects
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
            <p className="text-gray-300 text-sm">sanelisematanzima@gmail.com</p>
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
            <p className="text-gray-300 text-sm">Professional Network</p>
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
            <p className="text-gray-300 text-sm">Source Code & Projects</p>
          </a>
        </div>

        {/* Location */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-blue-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-white">Location</h3>
          </div>
          <div className="text-center text-gray-300">
            <p>Currently based in South Africa</p>
            <p className="text-sm mt-1">Open to remote opportunities</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm passionate about creating ethical AI solutions that make a real difference. 
              Whether you have a project in mind or want to explore collaboration opportunities, I'd love to hear from you.
            </p>
            <a
              href="mailto:sanelisematanzima@gmail.com?subject=Collaboration Opportunity"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
