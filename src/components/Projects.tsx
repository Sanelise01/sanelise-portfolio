import React from 'react';
import { Github, ExternalLink, Play, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "IT Master Chatbot (Botpress)",
      type: "AI Learning Companion",
      description: "A learning companion built for AI beginners. It simplifies complex AI concepts through conversational learning, helping users understand topics like machine learning, neural networks, and ethical AI. The chatbot supports follow-up questions, offers custom learning paths, and connects learners with educational resources.",
      techStack: ["Botpress", "NLP", "Conversation Design"],
      highlights: ["Conversational AI learning", "Custom learning paths", "Educational resource connections"],
      github: "https://github.com/Sanelise01/botpress-career-guidance",
      demo: "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/16/10/20250516102421-ZCIOC18F.json",
      gradient: "from-indigo-500 to-purple-500",
      profilePath: "/projects/it-master-chatbot"
    },
    {
      title: "Career Canvas Smart Build",
      type: "Professional Document Platform",
      description: "A web-based platform designed to help users create professional career documents efficiently. Features modular templates, responsive design for accessibility across all devices, and visual consistency to ensure professional and polished documents.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Lovable AI"],
      highlights: ["Modular customizable templates", "Responsive cross-device design", "User-centric intuitive layout"],
      github: "https://github.com/Sanelise01/career-canvas-smart-build",
      demo: "https://lovable.dev/projects/2fdf0ff1-250f-4b5c-9e69-794e521563f8",
      gradient: "from-purple-500 to-pink-500",
      profilePath: "/projects/career-canvas"
    },
    {
      title: "CreatiVerseAI",
      type: "Creative Writing Content Generator",
      description: "A next-generation AI-driven creative writing tool designed to assist users in generating high-quality poems, stories, and literary prompts across a variety of styles, tones, and genres. Powered by Groq API and LLaMA 3.3 70B Versatile model for blazing-fast inference and rich, human-like text generation.",
      techStack: ["Groq API", "LLaMA 3.3", "Python", "Streamlit"],
      highlights: ["Multi-genre content generation", "LLaMA 3.3 integration", "Fast inference optimization"],
      demo: "https://cloud.flowiseai.com/chatbot/d4baf847-e9e1-4de2-9a22-c910eec44299",
      gradient: "from-orange-500 to-red-500",
      profilePath: "/projects/creativerseai"
    },
    {
      title: "Fairness Audit Wizard",
      type: "AI Fairness Analysis Tool",
      description: "An analytical tool to assess and visualize bias in ML models using ROUGE metrics. Delivers interactive dashboards for transparent evaluation and includes bias mitigation insights.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Plotly"],
      highlights: ["Automated fairness audits", "Visual evaluation dashboards", "Bias mitigation insights"],
      github: "https://github.com/Sanelise01/fairness-audit-wizard",
      demo: "https://lovable.dev/projects/58f62fa0-cadc-42b7-9d05-3732e176e4ab",
      gradient: "from-blue-500 to-cyan-500",
      profilePath: "/projects/fairness-audit-wizard"
    },
    {
      title: "Machine Daily Check Prototype",
      type: "UX/UI Prototype",
      description: "A mobile-friendly prototype designed to streamline machine maintenance checks in industrial settings.",
      techStack: ["Figma", "UX Design", "Prototyping"],
      highlights: ["Tablet-first interface", "Intuitive form flow", "Industrial workflow optimization"],
      figma: "https://www.figma.com/proto/4l9za9IJtBn06GS4tPwqfj/Machine-Daily-Check_Prototype?node-id=13-3&p=f&t=MxOoZKrUt6grOVLa-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A3",
      gradient: "from-green-500 to-teal-500",
      profilePath: "/projects/machine-daily-check"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of AI/ML projects showcasing practical applications and technical skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">
                      {project.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Link
                    to={project.profilePath}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    <User size={16} className="mr-2" />
                    View Profile
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Play size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Design
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
