import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

interface NavItem {
  name: string;
  icon: string;
  path: string;
  style?: 'default' | 'primary-fill' | 'feature';
}

interface SidebarProps {
  title: string;
  subtitle: string;
  icon: string | React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  navItems: NavItem[];
  bottomNavItems: NavItem[];
  actionButton?: {
    label: string;
    icon: string;
    onClick: () => void;
  };
}

export default function Sidebar({
  title,
  subtitle,
  icon,
  iconBgColor = 'bg-primary',
  iconColor = 'text-white',
  navItems,
  bottomNavItems,
  actionButton,
}: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <aside className="flex flex-col h-screen w-64 fixed left-0 top-0 z-40 border-r border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900 shadow-[4px_0_24px_rgba(0,0,0,0.02)] font-manrope antialiased tracking-tight hidden md:flex">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          {typeof icon === 'string' ? (
            <div className={`w-10 h-10 rounded-xl ${iconBgColor} flex items-center justify-center ${iconColor} font-extrabold text-xl shadow-sm`}>
              {icon}
            </div>
          ) : (
             <div className={`w-10 h-10 rounded-xl ${iconBgColor} flex items-center justify-center ${iconColor} shadow-sm`}>
                {icon}
             </div>
          )}
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-100">{title}</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">{subtitle}</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            if (isActive) {
               return (
                  <Link key={item.name} to={item.path} className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 rounded-xl font-semibold scale-[0.98] active:scale-95 transition-all shadow-sm">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
               )
            }

            return (
              <Link key={item.name} to={item.path} className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 rounded-xl">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {actionButton && (
          <div className="mt-8 px-2">
            <button
              onClick={actionButton.onClick}
              className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition-all"
            >
              {actionButton.icon && <span className="material-symbols-outlined text-sm">{actionButton.icon}</span>}
              {actionButton.label}
            </button>
          </div>
        )}
      </div>

      <div className="mt-auto p-6 space-y-1 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50">
        <nav className="space-y-1">
          {bottomNavItems.map(item => {
            if (item.name === 'Logout') {
              return (
                <button
                  key={item.name}
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors text-slate-500 hover:text-red-500 text-left"
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              );
            }
            return (
              <Link key={item.name} to={item.path} className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors text-slate-500 hover:text-slate-900">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
