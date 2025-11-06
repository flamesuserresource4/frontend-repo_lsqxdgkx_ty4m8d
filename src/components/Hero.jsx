import React from 'react';
import { Play, Music2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/20 rounded-full blur-3xl" />
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-emerald-100 text-sm">
              <Sparkles className="w-4 h-4" />
              New this week
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
              Discover your next favorite track
            </h1>
            <p className="mt-3 text-emerald-50/90">
              Curated playlists, trending albums, and personalized mixes—all in one place.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:opacity-90">
                <Play className="w-4 h-4 fill-black" />
                Play something
              </button>
              <button className="inline-flex items-center gap-2 bg-black/20 text-white px-4 py-2 rounded-full font-medium hover:bg-black/30">
                <Music2 className="w-4 h-4" />
                Explore genres
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-40 h-40 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <Music2 className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
