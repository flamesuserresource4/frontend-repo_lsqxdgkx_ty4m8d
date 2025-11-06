import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, List } from 'lucide-react';

const PlayerBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-zinc-950/95 border-t border-zinc-800 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 grid grid-cols-3 gap-4 items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md overflow-hidden bg-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
              alt="Now Playing"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm text-white font-medium">Solstice Dreams</div>
            <div className="text-xs text-zinc-400">Aurora Lane</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 text-zinc-300">
            <button className="p-1.5 rounded hover:bg-zinc-800">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded hover:bg-zinc-800">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="p-2.5 rounded-full bg-white text-black hover:opacity-90">
              <Play className="w-5 h-5 fill-black" />
            </button>
            <button className="p-1.5 rounded hover:bg-zinc-800">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="p-1.5 rounded hover:bg-zinc-800">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3">
            <span className="text-xs text-zinc-400">1:12</span>
            <div className="relative h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-emerald-500" />
            </div>
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end gap-3 text-zinc-300">
          <button className="p-1.5 rounded hover:bg-zinc-800">
            <List className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 w-36">
            <Volume2 className="w-5 h-5" />
            <div className="relative h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-zinc-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
