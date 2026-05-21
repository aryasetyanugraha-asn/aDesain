import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  DocumentTextIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const DemoDashboard: React.FC = () => {
  // Hardcoded dummy data for the demo
  const mockProjects = [
    { id: '1', title: 'E-Commerce App Restyle', status: 'ACTIVE', dueDate: '2023-12-01' },
    { id: '2', title: 'AI Recommendation Engine', status: 'PENDING', dueDate: '2023-12-15' },
    { id: '3', title: 'Company Profile Website', status: 'COMPLETED', dueDate: '2023-11-20' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar (Mock) */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">
            aDesain Demo
          </span>
        </div>
        <div className="p-4 flex-1">
          <div className="space-y-1">
            <div className="flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-indigo-50 text-indigo-700">
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </div>
            <div className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-600 hover:bg-slate-50 cursor-not-allowed opacity-60">
              <SparklesIcon className="w-5 h-5 mr-3" />
              Features (Locked)
            </div>
            <div className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-600 hover:bg-slate-50 cursor-not-allowed opacity-60">
              <DocumentTextIcon className="w-5 h-5 mr-3" />
              Contracts (Locked)
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-slate-200">
           <Link to="/" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200">
            Back to Home
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
          <div className="md:hidden">
            <span className="text-xl font-bold text-indigo-600">aDesain Demo</span>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                DEMO MODE
              </div>
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-5xl mx-auto space-y-8">

            {/* Welcome Section */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome, John Doe</h1>
              <p className="text-slate-500 mt-1">This is a preview of how you will track your projects with aDesain.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Active Projects</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">1</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Pending Review</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">1</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <DocumentTextIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Completed</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">1</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project List Mock */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Recent Projects</h3>
              </div>
              <ul className="divide-y divide-slate-200">
                {mockProjects.map((project) => (
                  <li key={project.id} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-900">{project.title}</h4>
                        <p className="text-sm text-slate-500 mt-1">Due: {project.dueDate}</p>
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${project.status === 'ACTIVE' ? 'bg-indigo-100 text-indigo-800' :
                            project.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' :
                            'bg-amber-100 text-amber-800'}`}
                        >
                          {project.status.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA to real register */}
            <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl p-8 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Ready to start your project?</h3>
              <p className="mb-6 opacity-90">Create an account to submit your real requirements to aDesain.</p>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-indigo-600 bg-white hover:bg-slate-50 transition-colors shadow-sm"
              >
                Register Now
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DemoDashboard;
