import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentGrid from './components/ContentGrid';
import PlayerBar from './components/PlayerBar';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="flex min-h-screen pb-24">
        <Sidebar />

        <main className="flex-1">
          <Header />

          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
            <Hero />
            <ContentGrid />

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Trending albums</h2>
                <button className="text-sm text-zinc-400 hover:text-white">See all</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="rounded-lg overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-900 transition">
                    <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="p-3">
                      <div className="text-white font-medium">Midnight Echoes</div>
                      <div className="text-sm text-zinc-400">Nebula City</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
};

export default App;
