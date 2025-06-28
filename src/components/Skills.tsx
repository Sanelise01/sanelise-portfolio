
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: "SQL", level: 80, category: "Database" },
    { name: "Git", level: 85, category: "Version Control" },
    { name: "Python", level: 75, category: "Programming" },
    { name: "OpenAI API", level: 90, category: "AI/ML" },
    { name: "Supabase", level: 85, category: "Backend" },
    { name: "Flowise AI", level: 95, category: "No-Code AI" },
    { name: "Botpress", level: 90, category: "Chatbot" },
    { name: "Figma", level: 80, category: "Design" }
  ];

  const softSkills = [
    "Problem-solving",
    "Collaboration", 
    "Communication",
    "Presentation",
    "Critical Thinking",
    "Adaptability"
  ];

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            A blend of technical expertise and human-centered design thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Proficiencies</h3>
            
            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  {category}
                </h4>
                
                <div className="space-y-4">
                  {technicalSkills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills & Competencies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Core Competencies</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Psychology Background Highlight */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Psychology Foundation
              </h4>
              <p className="text-gray-700 leading-relaxed">
                My psychology background provides unique insights into human behavior, 
                cognitive processes, and ethical considerations in AI development. This 
                interdisciplinary approach enables me to build more inclusive and 
                human-centered AI solutions.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {["Human-Computer Interaction", "Ethical AI", "User Research", "Behavioral Analysis"].map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/70 text-gray-700 text-sm rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
