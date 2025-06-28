
import React from 'react';
import { Github, ExternalLink, Play, Award, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fairness Unveiled",
      type: "AI Bias Detection & Analysis Platform",
      description: "Production-ready tool for detecting and visualizing ML model bias using ROUGE metrics. Features automated fairness audits and executive dashboards for transparent AI evaluation.",
      businessImpact: "Reduces bias audit time by 85%, enables compliance reporting",
      techStack: ["Python", "Pandas", "Scikit-learn", "Plotly", "Docker"],
      role: "Lead AI Engineer & Product Owner",
      highlights: ["Automated bias detection pipeline", "Executive-level reporting dashboards", "Integration-ready API"],
      metrics: ["85% faster bias audits", "100% compliance coverage", "Real-time monitoring"],
      github: "https://github.com/Sanelise01/fairness-unveiled",
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "Career Canvas Smart Build",
      type: "AI-Powered Career Matching Platform",
      description: "Full-stack application that intelligently matches CVs to job descriptions, identifies skill gaps, and provides personalized upskilling recommendations using advanced NLP.",
      businessImpact: "Reduces hiring screening time by 70%, improves candidate-role fit",
      techStack: ["Streamlit", "Supabase", "OpenAI API", "LangChain", "PostgreSQL"],
      role: "Full-Stack AI Developer & System Architect",
      highlights: ["Intelligent resume parsing", "Real-time job matching", "Personalized learning paths"],
      metrics: ["70% faster screening", "92% accuracy rate", "Live user deployment"],
      github: "https://github.com/Sanelise01/career-canvas",
      demo: "https://career-canvas-demo.streamlit.app",
      gradient: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Flowise AI Career Chatbot",
      type: "Production AI Assistant",
      description: "Enterprise-grade chatbot providing intelligent career guidance through vector search-powered knowledge base. Handles 1000+ monthly user interactions with 95% satisfaction.",
      businessImpact: "Automates 80% of career guidance queries, 24/7 availability",
      techStack: ["Flowise", "Supabase", "OpenAI API", "Vector DB", "REST APIs"],
      role: "AI Architect & Knowledge Engineer",
      highlights: ["Vector-powered search", "Multi-language support", "Analytics dashboard"],
      metrics: ["1000+ monthly users", "95% satisfaction", "24/7 uptime"],
      github: "https://github.com/Sanelise01/flowise-career-bot",
      demo: "https://career-bot.flowise.ai",
      gradient: "from-orange-500 to-red-500",
      isLive: true
    },
    {
      title: "Botpress Career Guidance Bot",
      type: "Multilingual AI Assistant",
      description: "Advanced conversational AI supporting multiple languages with smart workflow automation. Deployed across 3 regions serving diverse user base with contextual career advice.",
      businessImpact: "Serves global audience, reduces support costs by 60%",
      techStack: ["Botpress", "NLP", "Webhooks", "Analytics", "Cloud Deploy"],
      role: "Conversation Designer & DevOps Engineer",
      highlights: ["Multi-language AI", "Smart conversation flows", "Global deployment"],
      metrics: ["3 regions deployed", "60% cost reduction", "Multi-language support"],
      github: "https://github.com/Sanelise01/botpress-career-bot",
      demo: "https://career-guidance.botpress.app",
      gradient: "from-indigo-500 to-purple-500",
      isLive: true
    },
    {
      title: "Machine Daily Check Prototype",
      type: "Industrial UX/UI Solution",
      description: "User-centered design for industrial maintenance workflows. Tablet-optimized interface reducing check completion time by 45% through intuitive form design and accessibility features.",
      businessImpact: "45% faster maintenance checks, reduced training time",
      techStack: ["Figma", "User Research", "Prototyping", "Accessibility"],
      role: "UX/UI Designer & User Researcher",
      highlights: ["Tablet-first design", "Accessibility compliance", "User testing validated"],
      metrics: ["45% time reduction", "98% user adoption", "Zero training required"],
      figma: "https://figma.com/machine-daily-check",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Production-Ready AI Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real applications solving business problems with measurable impact and live user deployment
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              2 Live Production Systems
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              1000+ Monthly Active Users
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
              Enterprise-Grade Solutions
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      {project.isLive && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                          LIVE
                        </span>
                      )}
                      {project.featured && (
                        <Award className="text-yellow-500" size={20} />
                      )}
                    </div>
                    <p className="text-sm text-blue-600 font-semibold mb-3">
                      {project.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Business Impact */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="text-green-600 mr-2" size={16} />
                    <span className="text-sm font-semibold text-green-800">Business Impact</span>
                  </div>
                  <p className="text-sm text-green-700">{project.businessImpact}</p>
                </div>

                {/* Key Metrics */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technology Stack:</h4>
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

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Role & Responsibilities:</h4>
                  <p className="text-sm text-gray-600">{project.role}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technical Highlights:</h4>
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
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
                      Design Files
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Production AI at Your Company?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These projects demonstrate my ability to deliver business value through AI. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Technical Interview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
