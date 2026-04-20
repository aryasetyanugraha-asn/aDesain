
import Layout from '../components/layout/Layout';

export default function DevInfrastructure() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Infrastructure Fleet</h2>
            <p className="text-on-surface-variant max-w-md">Real-time telemetry and operational health for the aDesain distributed network clusters.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 px-3 py-1 bg-surface-container-low text-primary text-xs font-bold rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              LIVE TELEMETRY
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs font-bold rounded-full">
              REGION: US-EAST-1
            </span>
          </div>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Primary Metric Card: API Response */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-6 relative overflow-hidden group shadow-sm border border-slate-100">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-8xl">bolt</span>
            </div>
            <div className="relative z-10">
              <p className="text-sm font-bold text-primary mb-1">GLOBAL LATENCY</p>
              <h3 className="text-4xl font-black mb-6">142ms</h3>
              <div className="h-32 w-full flex items-end gap-1">
                {/* Visual Chart Mockup */}
                <div className="flex-1 bg-primary/10 h-1/2 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-2/3 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/10 h-1/3 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/40 h-3/4 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-1/2 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/60 h-full rounded-t-sm"></div>
                <div className="flex-1 bg-primary/30 h-2/3 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/10 h-1/2 rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-4/5 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/40 h-1/2 rounded-t-sm"></div>
              </div>
              <p className="text-xs text-on-surface-variant mt-4 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-green-600">trending_down</span>
                12% lower than previous 24h
              </p>
            </div>
          </div>

          {/* Server Health Card */}
          <div className="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary">dns</span>
                <span className="text-xs font-bold text-green-600 uppercase">Healthy</span>
              </div>
              <h4 className="font-bold text-lg mb-1">Server Cluster</h4>
              <p className="text-sm text-on-surface-variant">Active nodes in 4 regions</p>
            </div>
            <div className="mt-8">
              <div className="text-2xl font-black">24 / 24</div>
              <div className="w-full h-1.5 bg-outline-variant/20 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-500 w-full"></div>
              </div>
            </div>
          </div>

          {/* Database Status */}
          <div className="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-tertiary">database</span>
                <span className="text-xs font-bold text-tertiary uppercase">Warning</span>
              </div>
              <h4 className="font-bold text-lg mb-1">Main DB</h4>
              <p className="text-sm text-on-surface-variant">Query peak at 88%</p>
            </div>
            <div className="mt-8">
              <div className="text-2xl font-black text-tertiary">88.2%</div>
              <div className="w-full h-1.5 bg-outline-variant/20 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-tertiary w-[88%]"></div>
              </div>
            </div>
          </div>

          {/* Deployment Logs (Wide Sidebar style) */}
          <div className="md:col-span-1 md:row-span-2 bg-surface-container-lowest rounded-xl p-6 flex flex-col shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold">Recent Logs</h4>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">open_in_full</span>
            </div>
            <div className="space-y-4 overflow-hidden">
              <div className="flex gap-3">
                <div className="w-1 h-8 bg-green-500 rounded-full shrink-0"></div>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface">DEPLOY_SUCCESS</p>
                  <p className="text-[10px] text-on-surface-variant font-mono">v2.4.0.stable-rc1</p>
                  <p className="text-[10px] text-on-surface-variant opacity-60">2m ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 h-8 bg-primary rounded-full shrink-0"></div>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface">CACHE_PURGE</p>
                  <p className="text-[10px] text-on-surface-variant font-mono">edge-node-04</p>
                  <p className="text-[10px] text-on-surface-variant opacity-60">14m ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 h-8 bg-error rounded-full shrink-0"></div>
                <div>
                  <p className="text-xs font-mono font-bold text-error">DB_TIMEOUT</p>
                  <p className="text-[10px] text-on-surface-variant font-mono">write-replica-01</p>
                  <p className="text-[10px] text-on-surface-variant opacity-60">26m ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 h-8 bg-green-500 rounded-full shrink-0"></div>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface">BACKUP_COMPLETE</p>
                  <p className="text-[10px] text-on-surface-variant font-mono">s3-bucket-primary</p>
                  <p className="text-[10px] text-on-surface-variant opacity-60">1h ago</p>
                </div>
              </div>
            </div>
            <button className="mt-auto text-xs font-bold text-primary text-center py-2 hover:bg-surface-container-low rounded-lg transition-colors pt-4">
              VIEW ALL LOGS
            </button>
          </div>

          {/* Network Traffic Map Visual */}
          <div className="md:col-span-3 bg-slate-900 rounded-xl overflow-hidden relative min-h-[300px]">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <img alt="Network Topology" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNf9yh5HqLWgNJ-midL9k2d-3WySv2y-quUXSLMrbFNBUTaaQYe6NHr9k0_9HFbX5B95uVQGrEn5Mc-CnPZW3OG148B64yD_-mc-tw-HusrYeKoq54KnvHbcD3tUzxUDtArnSKSXlL8fop4GzrNPehnu3e47tenHL1iT_uU5q33QuiSrR35X2G4DyeRIg7KHHSZhU21We4akO7KwXi8pfLtLGOOWi-DcBXi9FxGIRFkpaQ2NeDOm3JMKiQj50buMVYn3PDoLOt_DQ"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="relative p-6 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-blue-400 mb-1">TRAFFIC OVERVIEW</p>
                  <h4 className="text-white font-bold text-xl">Global Edge Nodes</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-1">Total Throughput</p>
                  <p className="text-xl font-black text-white">4.2 TB/s</p>
                </div>
              </div>
              <div className="flex gap-6 mt-12">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <span className="text-xs text-white/80 font-medium">Inbound</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                  <span className="text-xs text-white/80 font-medium">Outbound</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Resource Monitoring List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-black tracking-tight mb-4">Component Metrics</h3>
            <p className="text-on-surface-variant mb-6">Deep dive into specific infrastructure components and their current operational state.</p>

            <div className="space-y-4">
              <div className="p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm">Redis Cache</span>
                  <span className="text-green-600 material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-0.5 bg-white text-[10px] font-bold rounded">99.9% UPTIME</div>
                  <div className="px-2 py-0.5 bg-white text-[10px] font-bold rounded">2.4ms LATENCY</div>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors border-l-4 border-tertiary">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm">Elasticsearch</span>
                  <span className="text-tertiary material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-0.5 bg-white text-[10px] font-bold rounded text-tertiary">DEGRADED</div>
                  <div className="px-2 py-0.5 bg-white text-[10px] font-bold rounded">DISK SPACE 92%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm shadow-blue-900/5">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8 gap-4">
              <h4 className="font-bold text-lg">Infrastructure Evolution</h4>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-surface-container-low rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all">D</button>
                <button className="px-3 py-1 bg-primary text-white rounded-lg text-xs font-bold">W</button>
                <button className="px-3 py-1 bg-surface-container-low rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all">M</button>
              </div>
            </div>

            {/* Asymmetric Chart Placeholder */}
            <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-900/50 rounded-lg overflow-hidden flex items-end">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M0 200 Q 150 50, 300 150 T 600 100 T 900 180 T 1200 80 V 256 H 0 Z" fill="rgba(0, 62, 199, 0.05)"></path>
                <path d="M0 200 Q 150 50, 300 150 T 600 100 T 900 180 T 1200 80" fill="none" stroke="#003ec7" strokeWidth="3"></path>
                <circle cx="300" cy="150" fill="#003ec7" r="6"></circle>
                <circle cx="600" cy="100" fill="#003ec7" r="6"></circle>
              </svg>
              <div className="absolute top-20 left-1/4 bg-white shadow-xl rounded-lg p-3 border border-blue-100 animate-bounce hidden sm:block">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Peak Load</p>
                <p className="text-sm font-black text-primary">2.4M Req/s</p>
              </div>
              <div className="w-full flex justify-between px-4 pb-2 text-[10px] font-bold text-on-surface-variant opacity-50 relative z-10">
                <span>MON</span>
                <span className="hidden sm:inline">TUE</span>
                <span>WED</span>
                <span className="hidden sm:inline">THU</span>
                <span>FRI</span>
                <span className="hidden sm:inline">SAT</span>
                <span>SUN</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Availability</p>
                <p className="text-xl font-black">99.998%</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Requests</p>
                <p className="text-xl font-black">42.1B</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Errors</p>
                <p className="text-xl font-black text-green-600">0.002%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note: the mobile nav from the HTML is generally handled by the layout,
          so we don't duplicate it here unless we need specific dev portal bottom nav */}
    </Layout>
  );
}
