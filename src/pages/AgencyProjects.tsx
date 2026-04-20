
import Layout from '../components/layout/Layout';

export default function AgencyProjects() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Page Header (Editorial Style) */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface">Active Projects</h1>
            <p className="text-on-surface-variant font-body max-w-md">Streamlining your creative velocity with precision-engineered design systems and bespoke development.</p>
          </div>
          <div className="flex items-center space-x-4 bg-surface-container-low p-2 rounded-xl">
            <button className="px-6 py-2 bg-surface-container-lowest text-primary font-bold rounded-lg shadow-sm">Grid</button>
            <button className="px-6 py-2 text-on-surface-variant font-semibold hover:text-primary transition-colors">List</button>
          </div>
        </section>

        {/* Projects Grid (Bento/Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Project Card 1: HealthCare App */}
          <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-b-4 border-primary">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">HealthCare App</h3>
                <p className="text-on-surface-variant text-sm mt-1">Patient Portal & Telemedicine Integration</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-container space-y-4">
              <div className="flex items-center space-x-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">event</span>
                <span>Next Milestone: <span className="text-on-surface font-bold">UX Audit Completion (May 14)</span></span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-surface-container text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-on-primary transition-all">Dashboard</button>
                <button className="p-3 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-all">
                  <span className="material-symbols-outlined">description</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 2: Project Alpha */}
          <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-3xl">rocket_launch</span>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase tracking-wider">On Hold</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">Project Alpha</h3>
                <p className="text-on-surface-variant text-sm mt-1">E-commerce Scalability Architecture</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                  <span>Progress</span>
                  <span>22%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full" style={{width: '22%'}}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-container space-y-4">
              <div className="flex items-center space-x-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">pause_circle</span>
                <span>Next Milestone: <span className="text-on-surface font-bold">Stakeholder Review Pending</span></span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-surface-container text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-on-primary transition-all">Dashboard</button>
                <button className="p-3 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-all">
                  <span className="material-symbols-outlined">description</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 3: Velocity Design System */}
          <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-secondary-container/50 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">Completed</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">VDS 2.0</h3>
                <p className="text-on-surface-variant text-sm mt-1">Enterprise Component Library & Specs</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                  <span>Progress</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-container space-y-4">
              <div className="flex items-center space-x-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Project Finalized: <span className="text-on-surface font-bold">April 28, 2024</span></span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-surface-container text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-on-primary transition-all">Dashboard</button>
                <button className="p-3 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-all">
                  <span className="material-symbols-outlined">description</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 4: Fintech Dashboard */}
          <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">WealthHub UX</h3>
                <p className="text-on-surface-variant text-sm mt-1">Investment & Asset Management UI</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                  <span>Progress</span>
                  <span>48%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '48%'}}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-container space-y-4">
              <div className="flex items-center space-x-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">event</span>
                <span>Next Milestone: <span className="text-on-surface font-bold">Dashboard Prototype (May 20)</span></span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-surface-container text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-on-primary transition-all">Dashboard</button>
                <button className="p-3 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-all">
                  <span className="material-symbols-outlined">description</span>
                </button>
              </div>
            </div>
          </div>

          {/* New Project Placeholder (Asymmetric Bento Element) */}
          <div className="bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary transition-all min-h-[320px]">
            <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">add_circle</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface">Initiate Project</h3>
            <p className="text-sm text-on-surface-variant mt-2 max-w-[200px]">Ready for your next digital breakthrough? Let's start building.</p>
          </div>
        </div>

        {/* Footer Stats / Insights */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-surface-container">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase text-on-surface-variant">Efficiency Rate</span>
            <span className="text-3xl font-extrabold text-primary">94.2%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase text-on-surface-variant">Active Hours</span>
            <span className="text-3xl font-extrabold text-on-surface">1,240 <span className="text-sm font-medium">hrs</span></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase text-on-surface-variant">Milestones Met</span>
            <span className="text-3xl font-extrabold text-on-surface">18/20</span>
          </div>
          <div className="flex flex-col items-end justify-center">
            <img alt="Graph data visualization" className="h-10 w-24 object-cover rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQLqZ35CNhqQ1g_6oAXeI5fDDmlzbC3-ymTeqOBjWkxShPurKZepE0o25Y1YFhcTOuue1nCnK87r9xX5HHipof90MereMBcLY6jTUg4n8sMKXVjUnO0ddL4H14ZMm93SoRoJlXJ42lpUjzW0H819k0TCybMKoDk5aCqlwbg_GHamMeG000eZndXG-TZ3t0JXXbSzv4rjAy-pjL24y6WIpkSSKN0mZ0KPmZHSbM8jSjAI1YeqLfZ1Y9NbirBZ0E9hcj_Hm7y8hRy2Y"/>
          </div>
        </section>
      </div>
    </Layout>
  );
}
