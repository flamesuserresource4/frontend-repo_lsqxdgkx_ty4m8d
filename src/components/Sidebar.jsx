import React from 'react';
import { Home, Search, ListMusic, Heart, Plus, Radio, Settings, User } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors ${
      active ? 'bg-zinc-800/70 text-white' : 'text-zinc-300 hover:bg-zinc-800/50 hover:text-white'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="truncate">{label}</span>
  </button>
);

const Sidebar = () => {
  const playlists = [
    'Daily Mix 1',
    'Chill Vibes',
    'Top Hits 2025',
    'Deep Focus',
    'Lo-Fi Beats',
    'Coding Mode',
    'Jazz Nights',
    'Acoustic Mornings',
  ];

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-zinc-900/80 border-r border-zinc-800 backdrop-blur-sm">
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500" />
          <div className="text-white font-semibold tracking-wide">Vibe Music</div>
        </div>
      </div>

      <nav className="p-3 space-y-1">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={Search} label="Search" />
        <NavItem icon={ListMusic} label="Your Library" />
        <div className="h-px bg-zinc-800 my-2" />
        <NavItem icon={Plus} label="Create Playlist" />
        <NavItem icon={Heart} label="Liked Songs" />
        <NavItem icon={Radio} label="Made For You" />
      </nav>

      <div className="px-4 py-3 text-xs uppercase tracking-wider text-zinc-400">Playlists</div>
      <div className="px-3 pb-24 overflow-y-auto">
        <ul className="space-y-1 pr-2">
          {playlists.map((p) => (
            <li key={p}>
              <button className="w-full text-left text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-3 py-2 rounded-md truncate">
                {p}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto p-4 border-t border-zinc-800">
        <div className="flex items-center justify-between text-zinc-400">
          <button className="flex items-center gap-2 hover:text-white">
            <User className="w-4 h-4" />
            <span className="text-sm">Profile</span>
          </button>
          <button className="hover:text-white">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
