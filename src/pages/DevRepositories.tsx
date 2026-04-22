
import Layout from '../components/layout/Layout';

export default function DevRepositories() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
            <span>Projects</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary">Repositories</span>
          </div>
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-background">Project Repositories</h1>
          <p className="text-on-surface-variant mt-2 max-w-2xl">Manage your active codebases, monitor build pipelines, and track team commits in real-time across the enterprise network.</p>
        </div>

        {/* Dashboard Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
            <span className="text-sm font-label font-semibold text-secondary">Active Repos</span>
            <div className="flex items-end justify-between mt-4">
              <span className="text-3xl font-headline font-extrabold">24</span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+3 this week</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
            <span className="text-sm font-label font-semibold text-secondary">Build Success Rate</span>
            <div className="flex items-end justify-between mt-4">
              <span className="text-3xl font-headline font-extrabold">98.2%</span>
              <div className="h-1.5 w-24 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[98%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
            <span className="text-sm font-label font-semibold text-secondary">Avg. Deployment Time</span>
            <div className="flex items-end justify-between mt-4">
              <span className="text-3xl font-headline font-extrabold">4m 12s</span>
              <span className="material-symbols-outlined text-primary">speed</span>
            </div>
          </div>

          <div className="bg-primary-container text-on-primary-container p-6 rounded-xl flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <span className="text-sm font-label font-semibold opacity-80">Infrastructure Status</span>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xl font-headline font-bold">All Systems Nominal</span>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10">cloud_done</span>
          </div>
        </div>

        {/* Repository List (Data-Dense Table) */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/15 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-outline-variant/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-low/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <h3 className="font-headline font-bold text-lg whitespace-nowrap">Active Codebases</h3>
              <div className="flex bg-surface-container-high rounded-lg p-1 overflow-x-auto w-full sm:w-auto">
                <button className="px-3 py-1 text-xs font-bold bg-white rounded shadow-sm text-primary whitespace-nowrap">All</button>
                <button className="px-3 py-1 text-xs font-bold text-secondary whitespace-nowrap">Production</button>
                <button className="px-3 py-1 text-xs font-bold text-secondary whitespace-nowrap">Staging</button>
              </div>
            </div>
            {/* Search is handled by Topbar in Layout, but keeping this for small screens if needed,
                or just hidden since Topbar handles it. We will hide it on desktop since Topbar has it. */}
            <div className="relative w-full sm:w-auto lg:hidden">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 w-full sm:w-64" placeholder="Search repos..." type="text" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface-container-low/30 text-secondary text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Repository</th>
                  <th className="px-6 py-4">Git Status</th>
                  <th className="px-6 py-4">Build Status</th>
                  <th className="px-6 py-4">Recent Commit</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {/* Repo Row 1 */}
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined">api</span>
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">core-api-v2</div>
                        <div className="text-xs text-secondary truncate max-w-[150px]">internal/services/core-api</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 uppercase">Main</span>
                      <span className="text-xs text-on-surface-variant font-medium whitespace-nowrap">Synced 2m ago</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        SUCCESS
                      </div>
                      <span className="text-[10px] text-secondary font-mono">#8420-a</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface truncate max-w-[200px]">feat: add graphql endpoint for metrics</span>
                      <div className="flex items-center gap-2 mt-1">
                        <img className="w-4 h-4 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjeJGnp1tvO4HV3eUxTxCnn8_FVIo2lXOry3EQA18fiib4S7HbkUPe1j_HQGi0n_eovU_qEqGWhxUAKGu8j_UgqhKW1aPQWwZnOsEwpSPHO0Yi5DBH4xLepj7ukGfhyQu8dfJanfg_T5AHR1MX3OVK3lQ4h0ENtDA8scq4Y7-tuEc60_Mz21godLYfoJRiP5K3NrUpSa-Aof5tN3OM7cS_FKi6vABShXm6hEJ3zyMmAe3OmxF4blmefZ82z3KaETFCU4tqVnmLew0" alt="Avatar"/>
                        <span className="text-[10px] text-secondary">marcus_dev • 14:20</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                {/* Repo Row 2 */}
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary shrink-0">
                        <span className="material-symbols-outlined">dashboard</span>
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">admin-dashboard-ui</div>
                        <div className="text-xs text-secondary truncate max-w-[150px]">frontend/portals/admin</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 uppercase">Hotfix/Login-Bug</span>
                      <span className="text-xs text-on-surface-variant font-medium whitespace-nowrap">Ahead by 3</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        FAILED
                      </div>
                      <span className="text-[10px] text-secondary font-mono">#8421-f</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface truncate max-w-[200px]">fix: resolved auth token expiration</span>
                      <div className="flex items-center gap-2 mt-1">
                        <img className="w-4 h-4 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA52gknLlh-2UCAB2elXwXNiYyZaxgXR1rTrbHSKD9gb6LxBVZufrUazhmR6uM2zWYVysRQHBYbSz0r4WYxV4EoId0clMx8XTcspEOUFp3SUOGRVfKalVmH3iQx5j-PM-0QlL7fzuO5q8qeG9rjZD6_5AnQ2NsgY1mQ7LFTh4xDRoSUzxbVHOoXWDjbV76gz9TcSNm0uIAkQ95djjWmpftzFvzkBL-sx3nMoPi-vtgOnsLAVtApvXG1rDfwaf_IaX_GayN0hryVUiI" alt="Avatar"/>
                        <span className="text-[10px] text-secondary">sarah_k • 09:12</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                {/* Repo Row 3 */}
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0">
                        <span className="material-symbols-outlined">database</span>
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">data-warehouse-jobs</div>
                        <div className="text-xs text-secondary truncate max-w-[150px]">data/pipelines/etl-main</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 uppercase">Develop</span>
                      <span className="text-xs text-on-surface-variant font-medium whitespace-nowrap">Synced 1h ago</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                        <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                        RUNNING
                      </div>
                      <span className="text-[10px] text-secondary font-mono">#8425-p</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface truncate max-w-[200px]">chore: update dependencies for postgres-node</span>
                      <div className="flex items-center gap-2 mt-1">
                        <img className="w-4 h-4 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApJfkx0LnEkj-BFdcGtQtSDP6dosx2tHoWJh7h-1SPAWFnm-Hw7Wd5ENRBTVudo4DSP3k0od5kzntqY7ZWkWISaK5xU0w5Zggi2WVdsnUjViAcOaSvtvU6V5xuTNdn0pggYEO_f7loxwOq6oMGF1nNxw9bp1mYA99d-iR1Iowr638LxT8GnIZzNBNQ2vo570kYlDEKjdlHJWTmnHltAXaaUxuhin3r07PCtPvML51hiq_O32kxwNhyQkr6xQ3wywaj64un4s6YeWs" alt="Avatar"/>
                        <span className="text-[10px] text-secondary">alex_b • Yesterday</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-surface-container-low/30 flex justify-between items-center text-xs text-secondary font-medium">
            <span>Showing 3 of 24 repositories</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
              <span className="px-2">Page 1 of 8</span>
              <button className="p-1 hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
            </div>
          </div>
        </div>

        {/* Deployment Timeline & System Alerts (Asymmetric Bottom Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 overflow-x-auto">
            <div className="min-w-[400px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline font-bold text-xl">Deployment Velocity</h3>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary"></div> PROD</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-300"></div> STAGE</div>
                </div>
              </div>
              <div className="h-48 flex items-end justify-between gap-2 px-2">
                {/* Simulated Chart Bars */}
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary/10 rounded-t-lg relative flex flex-col justify-end" style={{height: '60%'}}>
                    <div className="bg-primary/40 h-1/2 w-full"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">12</div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Mon</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary/10 rounded-t-lg relative flex flex-col justify-end" style={{height: '85%'}}>
                    <div className="bg-primary/40 h-2/3 w-full"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">24</div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Tue</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary/10 rounded-t-lg relative flex flex-col justify-end" style={{height: '45%'}}>
                    <div className="bg-primary/40 h-1/3 w-full"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">08</div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Wed</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary/10 rounded-t-lg relative flex flex-col justify-end" style={{height: '70%'}}>
                    <div className="bg-primary/40 h-1/2 w-full"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">18</div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Thu</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary rounded-t-lg relative flex flex-col justify-end shadow-lg shadow-primary/20" style={{height: '95%'}}>
                    <div className="bg-primary-container h-1/2 w-full opacity-30"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-100 bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">32</div>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Fri</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary/10 rounded-t-lg relative flex flex-col justify-end" style={{height: '30%'}}>
                    <div className="bg-primary/40 h-1/2 w-full"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">05</div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Sat</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full group">
                  <div className="w-full bg-primary/10 rounded-t-lg relative flex flex-col justify-end" style={{height: '25%'}}>
                    <div className="bg-primary/40 h-1/2 w-full"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded">03</div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Sun</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 rounded-xl flex flex-col gap-4 overflow-hidden relative">
            <h3 className="font-headline font-bold text-xl mb-2 relative z-10">Critical Alerts</h3>
            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-error-container/50 border border-error/10 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-error">warning</span>
                <div>
                  <div className="text-xs font-bold text-error">Database Latency</div>
                  <div className="text-[10px] text-on-error-container opacity-80 mt-0.5">Cluster 'prod-db-01' exceeding 500ms...</div>
                </div>
              </div>
              <div className="p-3 bg-primary-container/20 border border-primary/10 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">info</span>
                <div>
                  <div className="text-xs font-bold text-primary">Scheduled Maintenance</div>
                  <div className="text-[10px] text-on-primary-container opacity-80 mt-0.5">API Gateway upgrade in 4 hours.</div>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4 relative z-10">
              <button className="w-full py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors border border-primary/20">View Security Logs</button>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">shield</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
