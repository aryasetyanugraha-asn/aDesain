
import { Link } from 'react-router-dom';

interface TopbarProps {
  title?: string;
  links: { name: string; path: string; active?: boolean }[];
  user: {
    name?: string;
    avatarUrl: string;
  };
  showSearch?: boolean;
}

export default function Topbar({ title, links, user, showSearch = false }: TopbarProps) {
  return (
    <header className="sticky top-0 w-full z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/60 md:ml-64 flex justify-between items-center h-16 px-6 md:px-8 md:max-w-[calc(100%-16rem)]">
      <div className="flex items-center gap-8">
        {title && <h2 className="text-on-surface font-bold text-base tracking-tight hidden md:block">{title}</h2>}
        {!title && <span className="text-xl font-bold text-slate-900 dark:text-slate-50 brand-font md:hidden">aDesain</span>}
        <nav className="hidden md:flex gap-6 h-16 items-center font-manrope text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`pb-4 mt-4 transition-colors ${link.active ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 -mb-[1px]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {showSearch && (
          <div className="hidden lg:block relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">search</span>
            <input
              className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
              placeholder="Search..."
              type="text"
            />
          </div>
        )}

        <div className={`flex items-center gap-2 md:gap-3 ${showSearch ? 'lg:border-l lg:border-slate-100 lg:pl-6' : ''}`}>
          <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>

          <button className="w-10 h-10 hidden md:flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <span className="material-symbols-outlined">chat_bubble_outline</span>
          </button>

          <div className="hidden md:block h-8 w-[1px] bg-slate-200 mx-2"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            {user.name && <span className="hidden lg:block text-xs font-bold text-slate-700 uppercase">{user.name}</span>}
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-slate-100 ring-offset-2">
              <img className="w-full h-full object-cover" src={user.avatarUrl} alt="User Profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
