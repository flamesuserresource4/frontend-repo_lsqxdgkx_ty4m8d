import React from 'react';
import { ChevronLeft, ChevronRight, Bell, User, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-b from-zinc-900/90 to-zinc-900/40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-zinc-800/70 hover:bg-zinc-700 text-white">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-zinc-800/70 hover:bg-zinc-700 text-white">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white text-black font-medium hover:opacity-90">
            <LogIn className="w-4 h-4" />
            Log in
          </button>
          <button className="p-2 rounded-full hover:bg-zinc-800 text-zinc-200">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
