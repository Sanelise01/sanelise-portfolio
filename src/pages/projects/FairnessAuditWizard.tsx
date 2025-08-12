import React from 'react';
import { ArrowLeft, Github, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FairnessAuditWizard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-blue-500 to-cyan-500 relative overflow-hidden">
            <img 
              src="/lovable-uploads/a179fab0-5017-4a86-a9eb-89c3b62faf09.png" 
              alt="Fairness Audit Wizard with analytics dashboards" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Fairness Audit Wizard</h1>
              <p className="text-lg text-blue-600 font-semibold mb-6">AI Fairness Analysis Tool</p>
              
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <a href="https://github.com/Sanelise01/fairness-audit-wizard" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://lovable.dev/projects/58f62fa0-cadc-42b7-9d05-3732e176e4ab" target="_blank" rel="noopener noreferrer">
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
                    An analytical tool to assess and visualize bias in ML models using ROUGE metrics. Delivers interactive dashboards for transparent evaluation and includes bias mitigation insights to help create more fair and equitable AI systems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Pandas", "Scikit-learn", "Plotly"].map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">🔍</span>
                    </div>
                    <h3 className="font-semibold mb-2">Automated Fairness Audits</h3>
                    <p className="text-sm text-gray-600">Comprehensive bias assessment using advanced metrics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-cyan-600 font-bold">📊</span>
                    </div>
                    <h3 className="font-semibold mb-2">Visual Dashboards</h3>
                    <p className="text-sm text-gray-600">Interactive visualizations for transparent evaluation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold">💡</span>
                    </div>
                    <h3 className="font-semibold mb-2">Bias Mitigation</h3>
                    <p className="text-sm text-gray-600">Actionable insights for reducing model bias</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Technical Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">ROUGE Metrics Integration</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Utilizes ROUGE metrics for comprehensive evaluation of model performance across different demographic groups
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Interactive Visualization</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Plotly-powered dashboards provide clear, interactive visualizations of bias patterns and model behavior
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Processing Pipeline</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Pandas and Scikit-learn integration for robust data processing and statistical analysis
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fairness Metrics</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Implements multiple fairness metrics to provide comprehensive bias assessment across various dimensions
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
                  The Fairness Audit Wizard addresses one of the most critical challenges in modern AI: ensuring fairness 
                  and reducing bias in machine learning models. By providing automated auditing capabilities and clear 
                  visualizations, it empowers data scientists and ML engineers to build more equitable AI systems. This 
                  project demonstrates expertise in ethical AI, statistical analysis, and data visualization while 
                  contributing to the important goal of responsible AI development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessAuditWizard;