
import Layout from '../components/layout/Layout';

export default function AgencySettings() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">Account Settings</h1>
          <p className="text-on-surface-variant max-w-2xl">Manage your agency portal experience, security protocols, and subscription details with Editorial Velocity.</p>
        </div>

        {/* Bento Grid Layout for Settings */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Section 1: User Profile (Hero Card) */}
          <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="relative group shrink-0">
              <img alt="User Profile Avatar" className="w-32 h-32 rounded-xl object-cover shadow-lg group-hover:opacity-90 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH17yYv6WkBSBetPkNblVFV7Z911_7vUxmu5Fn8kAxa-mby6t1s7IjIKq4NM4WM3kdsOjntDsryzbs0ztNLBEzV2cPsll_iCJUmkw3N-SM3ETLwZNNY_ZLvg420W96LJIP9YYtBS1hVVKsjJhARzrH72A72qJTMN9IhkVLZWlvKUPOTBMszFuYNek-osx4MbzI6jO_MPtXrxJku6JGPYl5szjHjHskGc2FsNCazFvRrB0SvxAVY34v-cwGX-Hk4EAq13v5GOLsX2g"/>
              <button className="absolute -bottom-2 -right-2 bg-primary text-on-primary p-2 rounded-lg shadow-xl">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Full Name</label>
                  <p className="text-lg font-semibold text-on-surface">Alexander Sterling</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Job Title</label>
                  <p className="text-lg font-semibold text-on-surface">Creative Director</p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Email Address</label>
                  <p className="text-lg font-semibold text-on-surface">alex.sterling@velocity-media.com</p>
                </div>
              </div>
              <button className="text-primary font-bold text-sm hover:underline pt-2 inline-flex items-center gap-1">
                Update profile details <span className="material-symbols-outlined text-xs">north_east</span>
              </button>
            </div>
          </section>

          {/* Section 4: Billing & Subscription (Compact Card) */}
          <section className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Current Plan</span>
              <h3 className="text-3xl font-extrabold font-headline">Velocity Pro</h3>
              <p className="text-on-primary-container text-sm">Next billing date: Oct 12, 2024</p>
            </div>
            <div className="bg-primary-container/20 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase opacity-80">
                <span>Payment Method</span>
                <span className="material-symbols-outlined text-sm">credit_card</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white/20 rounded flex items-center justify-center font-bold text-[8px]">VISA</div>
                <span className="font-mono text-sm tracking-widest">•••• 8829</span>
              </div>
            </div>
            <button className="w-full py-3 bg-white text-primary font-bold rounded-xl text-sm hover:bg-surface-container-lowest transition-colors shadow-sm">
              Manage Subscription
            </button>
          </section>

          {/* Section 2: Notification Preferences (Bento Side) */}
          <section className="md:col-span-6 bg-surface-container-low rounded-xl p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <span className="material-symbols-outlined">notifications_active</span>
              </div>
              <h2 className="text-xl font-bold font-headline">Notification Preferences</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100">
                <div className="space-y-1">
                  <p className="font-bold text-on-surface">Email updates</p>
                  <p className="text-xs text-on-surface-variant">Weekly digest and project milestones</p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-dim peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100">
                <div className="space-y-1">
                  <p className="font-bold text-on-surface">Push notifications</p>
                  <p className="text-xs text-on-surface-variant">Real-time alerts for direct messages</p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-dim peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 opacity-60">
                <div className="space-y-1">
                  <p className="font-bold text-on-surface">SMS alerts</p>
                  <p className="text-xs text-on-surface-variant">Critical security and billing alerts</p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-dim peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Security (Bento Side) */}
          <section className="md:col-span-6 bg-surface-container-low rounded-xl p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h2 className="text-xl font-bold font-headline">Security & Privacy</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 hover:bg-primary/5 transition-all group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">lock_reset</span>
                  <span className="font-bold text-on-surface">Change Password</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 hover:bg-primary/5 transition-all group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <div className="text-left">
                    <span className="font-bold text-on-surface block">Two-Factor Authentication</span>
                    <span className="text-xs text-tertiary-container font-semibold">Recommended for high security</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary uppercase">Set up</span>
              </button>
              <div className="pt-6">
                <div className="p-4 bg-error-container/20 rounded-xl border border-error-container/30">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-error mt-0.5">info</span>
                    <div className="space-y-1 text-left">
                      <p className="text-xs font-bold text-error uppercase">Security Alert</p>
                      <p className="text-sm text-on-surface-variant">A login from a new device was detected in London, UK. If this wasn't you, secure your account immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section (Actions) */}
          <div className="md:col-span-12 flex flex-col md:flex-row items-center justify-between pt-8 gap-4 border-t border-surface-container">
            <div className="flex items-center gap-6">
              <button className="text-error font-bold text-sm hover:bg-error-container/10 px-4 py-2 rounded-lg transition-colors">
                Deactivate Account
              </button>
              <button className="text-on-surface-variant font-bold text-sm hover:underline">
                Export Data
              </button>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-3 bg-surface-container-high text-on-surface font-bold rounded-xl text-sm hover:bg-surface-dim transition-colors">
                Cancel
              </button>
              <button className="flex-1 md:flex-none px-8 py-3 bg-primary text-on-primary font-bold rounded-xl text-sm shadow-lg hover:opacity-90 transition-opacity">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
