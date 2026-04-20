
import Layout from '../components/layout/Layout';

export default function ClientDashboard() {
  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Project Velocity Dashboard</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl">Good morning, Marcus. Your project <span className="text-primary font-bold">"NeoGenesis App"</span> is currently in Phase 3. Here is your investment and development snapshot.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* COLUMN 1 */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Investment Resume Card */}
          <div className="bg-primary rounded-[2rem] md:rounded-full p-8 text-on-primary shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 blur-[100px] -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-4">
                <div>
                  <span className="text-on-primary/70 uppercase text-xs tracking-widest font-bold mb-1 block">Project Investment Resume</span>
                  <h3 className="text-5xl font-extrabold tracking-tighter">$12,500.00</h3>
                  <p className="text-on-primary/60 text-sm mt-1 italic">Total Budget Allocation</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-on-primary/60 text-[10px] font-bold uppercase tracking-wider">Paid Amount</p>
                  <p className="text-2xl font-bold">$8,250</p>
                  <div className="h-1 bg-white/20 rounded-full w-full overflow-hidden mt-1">
                    <div className="h-full bg-white w-[66%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-on-primary/60 text-[10px] font-bold uppercase tracking-wider">Pending</p>
                  <p className="text-2xl font-bold">$4,250</p>
                  <div className="h-1 bg-white/20 rounded-full w-full mt-1"></div>
                </div>
                <div className="space-y-1 col-span-2 md:col-span-1 mt-4 md:mt-0">
                  <p className="text-on-primary/60 text-[10px] font-bold uppercase tracking-wider">Next Payment</p>
                  <p className="text-xl font-bold">Oct 14, 2023</p>
                  <p className="text-xs text-on-primary/70">Milestone: Alpha Release</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Roadmap & Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Feature Roadmap</h3>
                <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Request New <span className="material-symbols-outlined text-sm">add_circle</span>
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 bg-blue-50 p-2 rounded-lg">speed</span>
                  <div>
                    <p className="font-bold text-sm text-on-surface">Cloud Engine v2.0</p>
                    <p className="text-xs text-slate-500">In development • 84% complete</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-slate-100 opacity-70">
                  <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-2 rounded-lg">lock</span>
                  <div>
                    <p className="font-bold text-sm text-on-surface">Secure Auth Pipeline</p>
                    <p className="text-xs text-slate-500">Queued for Sprint 12</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Project Health</h3>
                <p className="text-sm text-on-surface-variant mb-8">Overall development progress against final launch deadline.</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-fixed">
                        In Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold inline-block text-primary">72%</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-surface-dim">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{width: '72%'}}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant mt-6">
                <span className="material-symbols-outlined text-sm">event</span>
                <span className="text-xs font-medium">Estimated Launch: Dec 15, 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">verified_user</span>
              Contract & Legal
            </h3>
            <div className="mb-8 p-6 bg-surface-container-low rounded-xl text-center border-2 border-dashed border-slate-200 group hover:border-primary/50 transition-colors">
              <div className="w-16 h-20 mx-auto bg-white rounded shadow-sm flex flex-col p-2 mb-4">
                <div className="w-full h-1 bg-slate-100 mb-1"></div>
                <div className="w-full h-1 bg-slate-100 mb-1"></div>
                <div className="w-[60%] h-1 bg-slate-100 mb-1"></div>
                <div className="mt-auto flex justify-end">
                  <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-800 mb-1">Project_Service_Agreement.pdf</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter mb-4">Signed on Sep 02, 2023</p>
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-lg">download</span>
                Download
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500">NDA Status</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500">Intellectual Property</span>
                <span className="text-xs font-bold text-slate-700">Client Owned</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-slate-500">Support Terms</span>
                <span className="text-xs font-bold text-slate-700">12 Months</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <img alt="Design Studio" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9XQHre-zas-5yL1fYUoFTXeWq7uppVLbm4mfidI-agHbBRoKAqHdO0aNjZofp__LkJH-iRvm5UzUHVYF8_L7rmZAIXLBxQiV0j5C53pXbmuamSldpn3wN6gVat67rZ4N2P82N1mfx6Y3wQKVorN1wMD9CzcWXl3IKOeZ3BcvUKNZokEhNHh4RTbRMPajA8MEtk9xMdhKeHUXyh-pkPpVzCIrQuiFJcpRvBX5j6KiBNtU6crhQvlSRBB6zA5UoLggTQXl51pJ3wjY"/>
            <div className="p-6">
              <h4 className="text-sm font-bold text-primary mb-2">Agency Insight</h4>
              <p className="text-xs leading-relaxed text-slate-600">"We are currently finalizing the core architecture for your user profiles. The next sprint focuses entirely on the seamless checkout experience."</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">AJ</div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">ALEX J., CREATIVE DIRECTOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Financial History</h3>
        <div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-4 p-6 bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Transaction ID</span>
              <span>Date</span>
              <span>Status</span>
              <span className="text-right">Amount</span>
            </div>

            <div className="grid grid-cols-4 px-6 py-6 hover:bg-slate-50 transition-colors items-center border-t border-slate-50">
              <span className="text-sm font-bold text-slate-800">#TRX-99812</span>
              <span className="text-sm text-slate-500">Oct 01, 2023</span>
              <div><span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Completed</span></div>
              <span className="text-right font-bold text-slate-900">$4,125.00</span>
            </div>

            <div className="grid grid-cols-4 px-6 py-6 hover:bg-slate-50 transition-colors items-center border-t border-slate-50">
              <span className="text-sm font-bold text-slate-800">#TRX-99745</span>
              <span className="text-sm text-slate-500">Sep 15, 2023</span>
              <div><span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Completed</span></div>
              <span className="text-right font-bold text-slate-900">$4,125.00</span>
            </div>

            <div className="grid grid-cols-4 px-6 py-6 hover:bg-slate-50 transition-colors items-center border-t border-slate-50">
              <span className="text-sm font-bold text-slate-800">#TRX-00122</span>
              <span className="text-sm text-slate-500">Sep 01, 2023</span>
              <div><span className="bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Deposit</span></div>
              <span className="text-right font-bold text-slate-900">$0.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </button>
    </Layout>
  );
}
