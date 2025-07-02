
import React from 'react';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Artificial Intelligence (AI)",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/116adc0ba58dd0b23cbba35205d9703a"
    },
    {
      title: "Developing Interpersonal Skills",
      organization: "Coursera",
      date: "2024",
      category: "Professional Development",
      url: "https://coursera.org/share/424029d2939ebc71656afba735f93132"
    },
    {
      title: "Introduction to Generative AI",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/ad6a6eeb0e65dc8951dac04bfc5c843d"
    },
    {
      title: "AI Foundations: Prompt Engineering with ChatGPT",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/a6281597ce5be7c5b209010f3d438359"
    },
    {
      title: "Trustworthy Generative AI",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/b7435e8ddd655f498a54c1b8add9acc2"
    },
    {
      title: "Introduction to Responsible AI",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/95692270160e080987fb809f50af1ccb"
    },
    {
      title: "Generative AI with Large Language Models",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/e09e9aa4e64345fe45476080f85f0c8d"
    },
    {
      title: "Python for Data Science, AI & Development",
      organization: "Coursera",
      date: "2024",
      category: "Programming",
      url: "https://coursera.org/share/80055eff26270412a7a8a1dde4386257"
    },
    {
      title: "Machine Learning Basics",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/daf2a212ac3aad787eb3da760e2b186a"
    },
    {
      title: "AI Essentials",
      organization: "Coursera",
      date: "2024",
      category: "AI/ML",
      url: "https://coursera.org/share/47fc67540ae6ac1a1cb411fbabc18ccd"
    },
    {
      title: "Verbal Communications and Presentation Skills",
      organization: "Coursera",
      date: "2024",
      category: "Communication",
      url: "https://coursera.org/share/5900153b977c237a5e53c4ff0b28a3de"
    },
    {
      title: "Active Listening: Enhancing Communication Skills",
      organization: "Coursera",
      date: "2024",
      category: "Communication",
      url: "https://coursera.org/share/b8c694effc59f58162b611d66527b510"
    },
    {
      title: "Write Professional Emails in English",
      organization: "Coursera",
      date: "2024",
      category: "Communication",
      url: "https://coursera.org/share/9de76ba1c95976acd8f09fc411e772f9"
    }
  ];

  const categories = [...new Set(certificates.map(cert => cert.category))];
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return '#0D47A1';
      case 'Programming': return '#00BFA6';
      case 'Communication': return '#B49789';
      case 'Professional Development': return '#7C4DFF';
      default: return '#666666';
    }
  };

  const getCategoryCount = (category: string) => {
    return certificates.filter(cert => cert.category === category).length;
  };

  return (
    <section id="certificates" className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#333333' }}>
            Professional Certificates
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #0D47A1, #00BFA6)' }}></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            Continuous learning and professional development in AI, technology, and communication
          </p>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: getCategoryColor(category) }}
              >
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: '#333333' }}>
                {category}
              </h3>
              <p className="text-2xl font-bold" style={{ color: getCategoryColor(category) }}>
                {getCategoryCount(category)}
              </p>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span
                  className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                  style={{ backgroundColor: getCategoryColor(certificate.category) }}
                >
                  {certificate.category}
                </span>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${getCategoryColor(certificate.category)}15` }}
                >
                  <Award size={20} style={{ color: getCategoryColor(certificate.category) }} />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: '#333333' }}>
                  {certificate.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm" style={{ color: '#666666' }}>
                    <Building size={14} className="mr-2" />
                    {certificate.organization}
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#666666' }}>
                    <Calendar size={14} className="mr-2" />
                    {certificate.date}
                  </div>
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold hover:underline transition-colors group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: getCategoryColor(certificate.category) }}
                >
                  View Certificate
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>
              Certification Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold" style={{ color: '#0D47A1' }}>
                  {certificates.length}
                </div>
                <div className="text-sm" style={{ color: '#666666' }}>
                  Total Certificates
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: '#00BFA6' }}>
                  {getCategoryCount('AI/ML')}
                </div>
                <div className="text-sm" style={{ color: '#666666' }}>
                  AI & ML Focus
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: '#B49789' }}>
                  {categories.length}
                </div>
                <div className="text-sm" style={{ color: '#666666' }}>
                  Skill Areas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
