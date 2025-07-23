import React from 'react';
import { ArrowLeft, Github, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ITMasterChatbot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-4 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Master Chatbot (Botpress)</h1>
              <p className="text-lg text-indigo-600 font-semibold mb-6">AI Learning Companion</p>
              
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <a href="https://github.com/Sanelise01/botpress-career-guidance" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/16/10/20250516102421-ZCIOC18F.json" target="_blank" rel="noopener noreferrer">
                    <Play size={16} className="mr-2" />
                    Try Demo
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    A learning companion built for AI beginners. It simplifies complex AI concepts through conversational learning, helping users understand topics like machine learning, neural networks, and ethical AI. The chatbot supports follow-up questions, offers custom learning paths, and connects learners with educational resources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Botpress", "NLP", "Conversation Design"].map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-indigo-600 font-bold">AI</span>
                    </div>
                    <h3 className="font-semibold mb-2">Conversational AI Learning</h3>
                    <p className="text-sm text-gray-600">Interactive learning through natural conversation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold">🛤️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Custom Learning Paths</h3>
                    <p className="text-sm text-gray-600">Personalized learning journeys for each user</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">📚</span>
                    </div>
                    <h3 className="font-semibold mb-2">Educational Resources</h3>
                    <p className="text-sm text-gray-600">Connects learners with relevant learning materials</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Project Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  This AI learning companion democratizes AI education by making complex concepts accessible to beginners. 
                  Through conversational learning, users can explore machine learning, neural networks, and ethical AI 
                  in an interactive and engaging way. The project demonstrates proficiency in conversation design, 
                  natural language processing, and educational technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITMasterChatbot;