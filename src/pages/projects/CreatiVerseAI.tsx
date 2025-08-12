import React from 'react';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CreatiVerseAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden">
            <img 
              src="/lovable-uploads/20eac075-69af-4d2e-b73a-da8de5a85d98.png" 
              alt="CreatiVerseAI creative writing tool with knowledge tree" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">CreatiVerseAI</h1>
              <p className="text-lg text-orange-600 font-semibold mb-6">Creative Writing Content Generator</p>
              
              <div className="flex gap-4 mb-8">
                <Button variant="secondary" asChild>
                  <a href="https://cloud.flowiseai.com/chatbot/d4baf847-e9e1-4de2-9a22-c910eec44299" target="_blank" rel="noopener noreferrer">
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
                    A next-generation AI-driven creative writing tool designed to assist users in generating high-quality poems, stories, and literary prompts across a variety of styles, tones, and genres. Powered by Groq API and LLaMA 3.3 70B Versatile model for blazing-fast inference and rich, human-like text generation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Groq API", "LLaMA 3.3", "Python", "Streamlit"].map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 font-bold">📝</span>
                    </div>
                    <h3 className="font-semibold mb-2">Multi-Genre Content</h3>
                    <p className="text-sm text-gray-600">Generate poems, stories, and prompts across various genres</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold">🦙</span>
                    </div>
                    <h3 className="font-semibold mb-2">LLaMA 3.3 Integration</h3>
                    <p className="text-sm text-gray-600">Powered by state-of-the-art language model</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">⚡</span>
                    </div>
                    <h3 className="font-semibold mb-2">Fast Inference</h3>
                    <p className="text-sm text-gray-600">Optimized for blazing-fast content generation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Technical Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">AI Model Integration</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Leverages Groq API with LLaMA 3.3 70B Versatile model for superior text generation capabilities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Optimized inference pipeline for rapid response times and efficient resource utilization
                    </p>
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
                  CreatiVerseAI represents a significant advancement in AI-powered creative writing tools. By integrating 
                  cutting-edge language models with an intuitive interface, it empowers writers, content creators, and 
                  creative professionals to generate high-quality literary content efficiently. The project demonstrates 
                  expertise in modern AI technologies, API integration, and creative application development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatiVerseAI;