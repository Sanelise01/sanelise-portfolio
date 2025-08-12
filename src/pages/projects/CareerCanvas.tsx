import React from 'react';
import { ArrowLeft, Github, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CareerCanvas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
            <img 
              src="/lovable-uploads/a0986c25-1bd2-4e26-9247-042ab7423016.png" 
              alt="Career Canvas Smart Build platform with floating documents" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Canvas Smart Build</h1>
              <p className="text-lg text-purple-600 font-semibold mb-6">Professional Document Platform</p>
              
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <a href="https://github.com/Sanelise01/career-canvas-smart-build" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://lovable.dev/projects/2fdf0ff1-250f-4b5c-9e69-794e521563f8" target="_blank" rel="noopener noreferrer">
                    <Play size={16} className="mr-2" />
                    Live Demo
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
                    A web-based platform designed to help users create professional career documents efficiently. Features modular templates, responsive design for accessibility across all devices, and visual consistency to ensure professional and polished documents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Lovable AI"].map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
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
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold">📋</span>
                    </div>
                    <h3 className="font-semibold mb-2">Modular Templates</h3>
                    <p className="text-sm text-gray-600">Customizable templates for various document types</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-pink-600 font-bold">📱</span>
                    </div>
                    <h3 className="font-semibold mb-2">Responsive Design</h3>
                    <p className="text-sm text-gray-600">Accessible across all devices and screen sizes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">🎨</span>
                    </div>
                    <h3 className="font-semibold mb-2">User-Centric Layout</h3>
                    <p className="text-sm text-gray-600">Intuitive interface designed for ease of use</p>
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
                  Career Canvas Smart Build streamlines the process of creating professional documents, making it accessible 
                  to users regardless of their design experience. The platform's modular approach and responsive design 
                  ensure that users can create polished, professional documents that look great on any device. This project 
                  showcases expertise in modern web development, user experience design, and responsive layouts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCanvas;