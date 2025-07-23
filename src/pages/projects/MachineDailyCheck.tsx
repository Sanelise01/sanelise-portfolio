import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MachineDailyCheck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-4 bg-gradient-to-r from-green-500 to-teal-500"></div>
          
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Machine Daily Check Prototype</h1>
              <p className="text-lg text-green-600 font-semibold mb-6">UX/UI Prototype</p>
              
              <div className="flex gap-4 mb-8">
                <Button variant="secondary" asChild>
                  <a href="https://www.figma.com/proto/4l9za9IJtBn06GS4tPwqfj/Machine-Daily-Check_Prototype?node-id=13-3&p=f&t=MxOoZKrUt6grOVLa-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A3" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    View Prototype
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
                    A mobile-friendly prototype designed to streamline machine maintenance checks in industrial settings. 
                    The interface prioritizes tablet usability with an intuitive form flow that optimizes industrial workflows 
                    for maximum efficiency and ease of use.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Design Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "UX Design", "Prototyping"].map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
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
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold">📱</span>
                    </div>
                    <h3 className="font-semibold mb-2">Tablet-First Interface</h3>
                    <p className="text-sm text-gray-600">Optimized for tablet devices used in industrial environments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-teal-600 font-bold">🔄</span>
                    </div>
                    <h3 className="font-semibold mb-2">Intuitive Form Flow</h3>
                    <p className="text-sm text-gray-600">Streamlined process for quick and accurate data entry</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">⚙️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Industrial Optimization</h3>
                    <p className="text-sm text-gray-600">Designed specifically for industrial maintenance workflows</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Design Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">User Research</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Conducted research on industrial maintenance workflows to understand user needs and pain points
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Interface Design</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Created clean, accessible interfaces optimized for touch interaction in industrial environments
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Workflow Optimization</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Designed logical form flows that minimize time and effort required for daily machine checks
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prototyping</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Built interactive prototypes to validate design decisions and user experience flows
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
                  The Machine Daily Check Prototype demonstrates a deep understanding of industrial UX design principles 
                  and the unique challenges of designing for industrial environments. By focusing on tablet-first design 
                  and workflow optimization, this prototype shows how thoughtful UX design can significantly improve 
                  efficiency in industrial settings. The project showcases expertise in user-centered design, 
                  prototyping, and industrial interface design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDailyCheck;