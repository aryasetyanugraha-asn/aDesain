
import Layout from '../components/layout/Layout';

export default function ClientFeatures() {
  return (
    <Layout>
      <div className="space-y-10">
        {/* Hero Stats / Bento Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Accelerate Your Product Vision</h1>
              <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">Submit and track your architectural feature requests. Our team transforms these requirements into production-ready modules within your quarterly sprint.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="bg-surface-container-low p-6 rounded-2xl flex-1 border border-outline-variant/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Active Requests</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">12</span>
                  <span className="text-sm text-blue-600 mb-1 font-semibold">+2 this week</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl flex-1 border border-outline-variant/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Implementation Velocity</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">84%</span>
                  <span className="text-sm text-green-600 mb-1 font-semibold">Exceeding KPI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add Feature Request Form (Mini) */}
          <div className="col-span-12 lg:col-span-4 bg-primary rounded-3xl p-8 text-on-primary shadow-2xl shadow-primary/30 relative overflow-hidden mt-6 lg:mt-0">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">Quick Submit</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1 block">Feature Title</label>
                  <input className="w-full bg-white/10 border-white/20 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 focus:ring-white/30 focus:bg-white/20 border-0 outline-none" placeholder="e.g. Dark Mode Support" type="text" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1 block">Priority Level</label>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/20 py-2 rounded-lg text-xs font-bold hover:bg-white/30 transition-colors">Low</button>
                    <button className="flex-1 bg-white/20 py-2 rounded-lg text-xs font-bold hover:bg-white/30 transition-colors border-2 border-white/40">Medium</button>
                    <button className="flex-1 bg-white/20 py-2 rounded-lg text-xs font-bold hover:bg-white/30 transition-colors">High</button>
                  </div>
                </div>
                <button className="w-full bg-white text-primary py-4 rounded-xl font-bold text-sm mt-4 hover:bg-surface-container-lowest transition-colors shadow-xl">
                  Submit for Review
                </button>
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Main Interactive Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Feature Request List */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-headline">Pending Implementation</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-slate-500">filter_list</span>
                </button>
                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-slate-500">sort</span>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-x-auto shadow-sm border border-slate-100">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Feature Details</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Status</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Priority</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">ETA</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">Multi-currency Support</span>
                        <span className="text-xs text-slate-500 mt-1">Stripe & PayPal API integrations</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[11px] font-bold ring-1 ring-blue-100">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                        In Progress
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs font-bold text-tertiary">Critical</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-600">Oct 24, 2024</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">Real-time Notifications</span>
                        <span className="text-xs text-slate-500 mt-1">Websocket implementation for alerts</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold">
                        Pending Review
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs font-bold text-slate-600">Medium</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-400">—</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">Advanced Analytics Dashboard</span>
                        <span className="text-xs text-slate-500 mt-1">D3.js visualizations for client data</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[11px] font-bold ring-1 ring-green-100">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Done
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs font-bold text-blue-600">High</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-slate-400">—</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Project Timeline Visual */}
            <div className="bg-surface-container p-8 rounded-[2rem] border border-outline-variant/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                  <h4 className="text-lg font-bold font-headline">Q4 Delivery Roadmap</h4>
                  <p className="text-sm text-slate-500">Milestones and deployment windows</p>
                </div>
                <span className="px-4 py-1.5 bg-white rounded-full text-[10px] font-bold border border-slate-200 uppercase tracking-widest">Phase 2 Active</span>
              </div>
              <div className="relative pt-10 pb-4 overflow-x-auto">
                <div className="min-w-[500px]">
                  {/* Timeline Line */}
                  <div className="absolute top-[48px] left-0 w-full h-1 bg-slate-200 rounded-full"></div>
                  <div className="absolute top-[48px] left-0 w-[60%] h-1 bg-primary rounded-full"></div>

                  {/* Timeline Points */}
                  <div className="flex justify-between relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 mb-4"></div>
                      <span className="text-xs font-bold text-slate-900">Sprint 01</span>
                      <span className="text-[10px] text-slate-500">Complete</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 mb-4"></div>
                      <span className="text-xs font-bold text-slate-900">Architecture</span>
                      <span className="text-[10px] text-slate-500">Complete</span>
                    </div>
                    <div className="flex flex-col items-center relative -top-1">
                      <div className="w-6 h-6 bg-white border-4 border-primary rounded-full mb-3 shadow-md"></div>
                      <span className="text-xs font-bold text-blue-700">UX Audit</span>
                      <span className="text-[10px] text-blue-700 font-bold">Now</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-slate-300 rounded-full mb-4"></div>
                      <span className="text-xs font-bold text-slate-400">Beta Launch</span>
                      <span className="text-[10px] text-slate-400">Nov 12</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-slate-300 rounded-full mb-4"></div>
                      <span className="text-xs font-bold text-slate-400">Stable v1.0</span>
                      <span className="text-[10px] text-slate-400">Dec 20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Widgets */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Quick Investment Summary */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary-container rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl">payments</span>
                </div>
                <h4 className="font-bold text-lg">Investment Summary</h4>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Retainer Allocation</span>
                  <span className="font-bold">$12,500 / mo</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[72%]"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Hours Used</span>
                    <span className="text-xl font-bold">142</span>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Remaining</span>
                    <span className="text-xl font-bold">38</span>
                  </div>
                </div>
                <button className="w-full text-primary font-bold text-sm flex items-center justify-center gap-2 hover:translate-x-1 transition-transform group">
                  View Billing History
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Contract Quick-link */}
            <div className="bg-surface-container-highest/30 p-8 rounded-[2rem] border border-slate-200/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold mb-4">Active Contract</h4>
                <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-error-container/30 rounded-lg">
                      <span className="material-symbols-outlined text-error text-xl">picture_as_pdf</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold truncate max-w-[150px]">MS_Agency_v4.2.pdf</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Effective until Oct 2025</p>
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
                    View Full Terms
                  </button>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full"></div>
            </div>

            {/* Case Study Promo */}
            <div className="relative rounded-[2rem] overflow-hidden group aspect-[4/5]">
              <img alt="Workspace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFItz2nHZEarbhsxnAeTg1JG1fy2YU_E-PJMeNxHrat71-p3OJP23O2Ot9yTD-epMda9-b6BVzhTwrf5Owb5zY142wj6rINwk7zq1iVBwxUvK-hOAjxwquKXDuwghuR6D-iekF40o95L4nCp3fw7SAeaCk6o_1EYsSERPrG6PcDO3UcXjsWpYhEF_zDycZAnS3u61Fir_RtYPcvpP2S6lKk3N74O2yRwQWhecj4RLhqjLk111BhiWoL4RPSGTWDsYXUNTpZ0hVrAI"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-8 flex flex-col justify-end">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-3">Innovation Spotlight</span>
                <h4 className="text-white text-xl font-bold font-headline mb-4 leading-tight">How we scaled Nebula's backend by 400%</h4>
                <button className="flex items-center gap-2 text-white/80 font-bold text-xs group-hover:text-white transition-colors">
                  Read Case Study
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
