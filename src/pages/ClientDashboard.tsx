import { useEffect, useState } from 'react';
import {
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CalendarIcon,
  DocumentArrowUpIcon
} from '@heroicons/react/24/outline';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { auth, db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import ProjectIntakeForm from '../components/client/ProjectIntakeForm';
import Layout from '../components/layout/Layout';

// Mock data for charts
const projectTimelineData = [
  { month: 'Jan', progress: 20, expected: 30 },
  { month: 'Feb', progress: 45, expected: 50 },
  { month: 'Mar', progress: 65, expected: 70 },
  { month: 'Apr', progress: 85, expected: 90 },
  { month: 'May', progress: 100, expected: 100 },
];

const budgetData = [
  { category: 'Design', spent: 4000, allocated: 5000 },
  { category: 'Development', spent: 8000, allocated: 12000 },
  { category: 'Testing', spent: 1500, allocated: 3000 },
  { category: 'Deployment', spent: 0, allocated: 2000 },
];

export default function ClientDashboard() {
  const [activeProject, setActiveProject] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProjectStatus = async () => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, 'projects'),
        where('clientId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        limit(1)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setActiveProject({ id: doc.id, ...doc.data() });
      } else {
        setActiveProject(null);
      }
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadProject = async () => {
      try {
        setLoading(true);
        const user = auth.currentUser;
        if (!user) {
          if (isMounted) setLoading(false);
          return;
        }

        const q = query(
          collection(db, 'projects'),
          where('clientId', '==', user.uid),
          orderBy('createdAt', 'desc'),
          limit(1)
        );

        const querySnapshot = await getDocs(q);
        if (isMounted) {
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            setActiveProject({ id: doc.id, ...doc.data() });
          } else {
            setActiveProject(null);
          }
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProject();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleProjectSubmitted = () => {
    fetchProjectStatus();
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex h-screen items-center justify-center bg-slate-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      </Layout>
    );
  }

  // State 1: No project exists yet - show Intake Form
  if (!activeProject) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <ProjectIntakeForm onSuccess={handleProjectSubmitted} />
        </div>
      </Layout>
    );
  }

  // State 2: Project is pending review
  if (activeProject.status === 'PENDING') {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-12 backdrop-blur-xl shadow-2xl max-w-2xl w-full">
            <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <ClockIcon className="h-12 w-12 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Waiting for Agency Review</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We've received your project brief for <span className="text-white font-medium">"{String(activeProject.name || '')}"</span>.
              Our team is currently reviewing your requirements and will be in touch shortly to discuss the next steps.
            </p>
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-6 py-3 border border-slate-700">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-slate-300 font-medium">Status: Under Review</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // State 3: Project is active (or other status) - show main dashboard
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{activeProject?.name ? String(activeProject.name) : 'E-commerce Platform Redesign'}</h1>
          <div className="mt-1 flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <BriefcaseIcon className="h-4 w-4" /> Active Phase: Development
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" /> Next Milestone: Beta Release (Next Week)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <ChatBubbleLeftRightIcon className="h-4 w-4" /> Message Team
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
            <DocumentArrowUpIcon className="h-4 w-4" /> Upload Asset
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Project Health', value: '98%', icon: CheckCircleIcon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { title: 'Budget Used', value: '45%', icon: CurrencyDollarIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
          { title: 'Tasks Completed', value: '124', icon: DocumentTextIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { title: 'Days to Launch', value: '42', icon: CalendarIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={`p-3 rounded-xl ${kpi.bg}`}>
              <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
              <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5 text-blue-500" />
                Project Timeline
              </h2>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectTimelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="expected" stroke="#94a3b8" fillOpacity={1} fill="url(#colorExpected)" name="Expected" />
                  <Area type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorProgress)" name="Actual" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Budget Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CurrencyDollarIcon className="h-5 w-5 text-emerald-500" />
                Budget Allocation
              </h2>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="allocated" name="Allocated" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="spent" name="Spent" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Activity & Deliverables */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h2>
            <div className="relative pl-4 border-l-2 border-slate-100 space-y-8">
              {[
                { title: 'Frontend components pushed', time: '2 hours ago', user: 'Alex', type: 'code' },
                { title: 'Design system approved', time: 'Yesterday', user: 'Sarah', type: 'design' },
                { title: 'Weekly sync notes added', time: '2 days ago', user: 'Mike', type: 'doc' },
                { title: 'Database schema finalized', time: '3 days ago', user: 'Alex', type: 'code' },
              ].map((activity, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{activity.title}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {activity.time} • by {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              View All Activity
            </button>
          </div>

          {/* Latest Deliverables */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Latest Deliverables</h2>
            <div className="space-y-3">
              {[
                { name: 'Homepage_v2.fig', size: '12 MB', date: 'Today' },
                { name: 'API_Documentation.pdf', size: '2.4 MB', date: 'Yesterday' },
                { name: 'Assets_Bundle.zip', size: '45 MB', date: 'Last week' },
              ].map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <DocumentTextIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{file.name}</p>
                      <p className="text-xs text-slate-500">{file.size} • {file.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
