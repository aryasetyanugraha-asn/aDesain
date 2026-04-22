
import Layout from '../components/layout/Layout';

export default function ClientContracts() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Page Header */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">Compliance & Legal</span>
            <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Document & Compliance Hub</h1>
            <p className="text-on-surface-variant mt-2 max-w-xl">Central repository for all project governance, financial breakdowns, and structural change approvals.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-surface-container-high rounded-xl text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">archive</span>
              Archive All
            </button>
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">upload_file</span>
              Upload Request
            </button>
          </div>
        </section>

        {/* Main Layout: Asymmetric Bento */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: Document Center */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Document Center Card */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-100/50">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>contract</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Master Project Contract</h3>
                    <p className="text-sm text-on-surface-variant">Version 2.4 • Last updated Oct 12, 2023</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>
              </div>

              {/* Document Preview Placeholder */}
              <div className="aspect-[16/7] w-full bg-slate-50 rounded-xl mb-6 relative group overflow-hidden border border-slate-100">
                <img alt="Document Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBG8xJuanOBnpe2CznVgDpas9043rEwCi3x1If1b-RR_ZuQvIVG02BR8tjZRSE9bt0lD0Q6-dJ2Tj69NNgxKNfjIKnFBgK37BY852lJ9TLyb3xPFSDY_30WDuemJEAgKyAtSPngx3XblyEjeRwhUmr5v781tAJk2rDX_w0XCheFtBxWmzfHgxF3e2OIhD3HYJ7F3cf-5__AMx--MDnktGfSPQbpWgR2zOa5w9HFo2HZU_miBDL1YKJRmH1qzxiULsetm_TzzN6aKE"/>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors">
                  <button className="bg-white/90 backdrop-blur p-4 rounded-full shadow-2xl flex items-center gap-2 text-on-surface font-bold hover:bg-white transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                    Preview Full Document
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 bg-surface rounded-xl">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Total Value</p>
                  <p className="text-lg font-bold text-on-surface">$124,500.00</p>
                </div>
                <div className="p-4 bg-surface rounded-xl">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Execution Date</p>
                  <p className="text-lg font-bold text-on-surface">Aug 15, 2023</p>
                </div>
                <div className="p-4 bg-surface rounded-xl">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Termination</p>
                  <p className="text-lg font-bold text-on-surface">30-Day Notice</p>
                </div>
                <div className="flex flex-col justify-center">
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                    <span className="material-symbols-outlined">download</span>
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Change Log */}
            <div className="bg-surface-container rounded-xl p-8 overflow-hidden relative">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold tracking-tight">Feature Change Log</h3>
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                  View Full History
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-white/50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">add_circle</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">Real-time Analytics Dashboard Expansion</h4>
                    <p className="text-xs text-on-surface-variant">Requested by Client • Oct 24, 2023</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">APPROVED</span>
                    <p className="text-xs font-medium mt-1">+$12,400</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-white/50">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined">published_with_changes</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">Auth Migration to OAuth 2.0</h4>
                    <p className="text-xs text-on-surface-variant">Security Requirement • Oct 18, 2023</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">PENDING</span>
                    <p className="text-xs font-medium mt-1">+$4,200</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-white/50">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <span className="material-symbols-outlined">do_not_disturb_on</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">Legacy IE11 Support Removal</h4>
                    <p className="text-xs text-on-surface-variant">Scope Reduction • Oct 10, 2023</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">COMPLETED</span>
                    <p className="text-xs font-medium mt-1">-$2,100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Value & Contact */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Project Value Breakdown */}
            <div className="bg-primary-container text-white rounded-xl p-8 shadow-xl shadow-primary/20">
              <h3 className="text-xl font-bold mb-6">Project Value Resume</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Base Architecture</span>
                  <span className="font-bold">$84,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">UI/UX Design System</span>
                  <span className="font-bold">$22,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Cloud Infrastructure</span>
                  <span className="font-bold">$12,500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Added Features (CO)</span>
                  <span className="font-bold text-on-primary-container">+$6,000</span>
                </div>
                <div className="pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Total Contract Value</p>
                    <p className="text-3xl font-extrabold tracking-tighter mt-1">$124,500</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Paid to Date</p>
                    <p className="text-xl font-bold mt-1">$96,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Manager Contact Card */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-100/50">
              <h3 className="text-lg font-bold mb-6 tracking-tight">Project Management</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Project Manager" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3RffCDSgjAA2TFXTxfCwQB7909Jen0eSr9HsZ8ciM9t4FSZHNK1zbMKgb2uOlMvtkuhrhW9_n1RBYbYVip0WPo4YPVq61DuclpSjVY1FThnQvSSYEtQTHQg08LvCxDbZEgz2SuU3uTlkvhT74D9dcXiMSPa4dbz4t7Cx40_tHzN1TqshYHIuWVKlRs-qd92OmhBZohql3zE8pFn7j06u_Ha-59lfHUZqr8J-gPfwVF-FF1bRJQKyKd100jEXW2gPbdxZQ2uFSlcA"/>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Sarah Sterling</h4>
                  <p className="text-xs text-on-surface-variant">Senior Project Lead</p>
                  <div className="flex gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-[10px] font-bold text-green-600 uppercase">Online Now</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3 bg-surface-container-low rounded-xl font-bold text-sm text-primary flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-lg">forum</span>
                  Open Support Chat
                </button>
                <button className="w-full py-3 border border-slate-200 rounded-xl font-bold text-sm text-on-surface flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  Schedule Review
                </button>
              </div>
            </div>

            {/* Quick Resources */}
            <div className="bg-surface-container-low rounded-xl p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Compliance Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a className="flex items-center justify-between group" href="#">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">policy</span>
                      <span className="text-sm font-medium">Privacy Policy</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1">open_in_new</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center justify-between group" href="#">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">security</span>
                      <span className="text-sm font-medium">SLA Terms</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1">open_in_new</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center justify-between group" href="#">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">verified</span>
                      <span className="text-sm font-medium">Security Audits</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1">open_in_new</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-transform group">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
          <span className="absolute right-full mr-4 py-2 px-4 bg-on-surface text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with Sarah</span>
        </button>
      </div>
    </Layout>
  );
}
