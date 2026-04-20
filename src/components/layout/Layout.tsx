import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const path = location.pathname;

  // Derive layout configuration based on current route
  const isDevPortal = path.startsWith('/dev');
  const isAgencyPortal = path.startsWith('/agency') || path === '/settings';

  // Default Client Portal Config
  let sidebarConfig: {
    title: string;
    subtitle: string;
    icon: string | React.ReactNode;
    navItems: { name: string; icon: string; path: string; }[];
    bottomNavItems: { name: string; icon: string; path: string; }[];
    actionButton?: { label: string; icon: string; onClick: () => void; };
  } = {
    title: 'aDesain',
    subtitle: 'Client Portal',
    icon: 'a',
    navItems: [
      { name: 'Dashboard', icon: 'dashboard', path: '/' },
      { name: 'Projects', icon: 'account_tree', path: '/agency/projects' },
      { name: 'Contracts', icon: 'description', path: '/contracts' },
      { name: 'Features', icon: 'fact_check', path: '/features' },
      { name: 'Settings', icon: 'settings', path: '/settings' },
    ],
    bottomNavItems: [
      { name: 'Support', icon: 'help_outline', path: '/support' },
      { name: 'Logout', icon: 'logout', path: '/logout' },
    ],
    actionButton: {
      label: 'New Request',
      icon: 'add',
      onClick: () => console.log('New Request'),
    }
  };

  let topbarConfig = {
    title: '',
    links: [
      { name: 'Overview', path: '#', active: true },
      { name: 'Timeline', path: '#' },
      { name: 'Financials', path: '#' },
    ],
    user: {
      name: 'MARCUS REED',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdcb5Bp6QQmS975Q-7QAWNw51-8roT2pUyITmB70zKPu-46PFWdondHfOAYPsxujYa385IAnJKs213fGixqPYQJa5rhPTNnRUOYiVT9ENnvWTaHSV_zeFgrQebp4E67jyZGSUAd_DEG8l9Z1SUA9AmyMWXfN_-TXVbCyZFNWouX_vjooD_2tGXMQL8n8qIAj4LEvbQZDbl1IuAhqIX7_t4HDMwR7fpdqVcUKuHDPkivVF6GkN6Ld194nxKvBuP2_nSJno_T32dtcs'
    },
    showSearch: false
  };

  if (isAgencyPortal) {
    sidebarConfig = {
      title: 'Editorial Velocity',
      subtitle: 'Agency Portal',
      icon: <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>,
      navItems: [
        { name: 'Dashboard', icon: 'dashboard', path: '/' },
        { name: 'Projects', icon: 'folder_open', path: '/agency/projects' },
        { name: 'Team', icon: 'group', path: '/team' },
        { name: 'Invoices', icon: 'receipt_long', path: '/invoices' },
        { name: 'Settings', icon: 'settings', path: '/settings' },
      ],
      bottomNavItems: [
        { name: 'Support', icon: 'help_outline', path: '/support' },
        { name: 'Logout', icon: 'logout', path: '/logout' },
      ],
      actionButton: {
        label: 'New Project',
        icon: 'add',
        onClick: () => console.log('New Project'),
      }
    };
    topbarConfig = {
      title: 'aDesain',
      links: [
        { name: 'Overview', path: '#', active: true },
        { name: 'Resources', path: '#' },
        { name: 'Support', path: '#' },
      ],
      user: {
        name: 'Alex Rivera',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwk2c256I4VAYDWS2wlIVEHCrYG5hH3e7CWK9RlayI_Q8lSYjGb4y2Gg6pk9n7uhYzPb7j9pqLvAalObSBC8ToZd-HQp7jVWwWatSfKGFlapeWTpP4WgGxuOQTnhDIFYK2OEwOOlkkB50sSkxP6b2C8mIfvD5y01XBuj0qD2Uy-AUWtEJ_rFaT4LkPtkz5GbgQokxPHntT1VNod9z_FADN7tsAvOeIHZrjHMl0UOGmPDFt9rcAnNiTcAuhl_r-LBmjs0BduEuQ-mw'
      },
      showSearch: false
    };
  } else if (isDevPortal) {
    sidebarConfig = {
      title: 'aDesain Dev',
      subtitle: 'v2.4.0-stable',
      icon: 'terminal', // Dev portal has different top left design, but we map it here
      navItems: [
        { name: 'Projects', icon: 'folder_open', path: '/agency/projects' },
        { name: 'Repositories', icon: 'terminal', path: '/dev/repositories' },
        { name: 'Infrastructure', icon: 'dns', path: '/dev/infrastructure' },
        { name: 'Backlog', icon: 'reorder', path: '/dev/backlog' },
        { name: 'Analytics', icon: 'monitoring', path: '/dev/analytics' },
      ],
      bottomNavItems: [
        { name: 'System Health', icon: 'potted_plant', path: '/health' },
        { name: 'Logs', icon: 'database', path: '/logs' },
      ],
      actionButton: {
        label: 'New Deploy',
        icon: 'add',
        onClick: () => console.log('New Deploy'),
      }
    };
    topbarConfig = {
      title: 'aDesain Developer',
      links: [
        { name: 'Docs', path: '#' },
        { name: 'API', path: '#' },
        { name: 'Support', path: '#' },
      ],
      user: {
        name: '',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuF4dphi27iWmosv1GO3eG6m9gl2HdsRt964Y6Ut6TWy9bp8_47gj5bSuk33Hrf8DYf-eamDyhHR5VAi9PfmtHttPMv4CdP5cWNzY-iGQynT0WfBaBXbMNss0HMdU2LkryGSpJ9mFrr3e4hhHrLAmYfQ07IIlB_PrIae62mE-raA7tA_JGXGmsDli6-R4AdC6ih6_ckQqmRL5MAPUC7eR7A5u3XF395oIDsZy_fhbo0WD94CrSShDnAb5Wk1wOPz3n6UGJxfKlP_U'
      },
      showSearch: path === '/dev/repositories'
    };
  }

  // Adjustments based on specific routes to match designs closely
  if (path === '/features') {
    topbarConfig.title = 'Feature Management';
    topbarConfig.showSearch = true;
  }
  if (path === '/contracts') {
    topbarConfig.title = 'aDesain Dashboard';
    topbarConfig.showSearch = true;
  }
  if (path === '/dev/infrastructure') {
     topbarConfig.title = 'aDesain Developer';
  }

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar {...sidebarConfig} />
      <Topbar {...topbarConfig} />
      <main className="md:ml-64 pt-6 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto transition-all">
        {children}
      </main>
    </div>
  );
}
