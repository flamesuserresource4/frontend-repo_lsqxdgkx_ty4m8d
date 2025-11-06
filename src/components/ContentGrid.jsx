import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';

const Card = ({ title, subtitle, image, accent }) => (
  <div className="group relative overflow-hidden rounded-lg bg-zinc-900/60 hover:bg-zinc-900 transition-colors border border-zinc-800">
    <div className="aspect-square w-full bg-zinc-800/60 flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-3">
      <div className="text-white font-medium truncate">{title}</div>
      <div className="text-zinc-400 text-sm truncate">{subtitle}</div>
    </div>
    <button className="absolute right-3 bottom-16 p-3 rounded-full bg-emerald-500 text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
      <Play className="w-5 h-5 fill-black" />
    </button>
    <button className="absolute top-2 right-2 p-1.5 rounded-full bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700">
      <MoreHorizontal className="w-4 h-4" />
    </button>
    {accent && <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: `linear-gradient(90deg, ${accent} 0%, transparent 100%)` }} />}
  </div>
);

const ContentGrid = () => {
  const items = [
    {
      title: 'Chillstep Essentials',
      subtitle: 'Various Artists',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
      accent: '#34d399',
    },
    {
      title: 'Coding Focus',
      subtitle: 'Lo-fi, Ambient',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      accent: '#22d3ee',
    },
    {
      title: 'Top Hits Global',
      subtitle: 'Updated daily',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
      accent: '#a78bfa',
    },
    {
      title: 'Night Drive',
      subtitle: 'Synthwave',
      image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
      accent: '#f472b6',
    },
    {
      title: 'Jazz Lounge',
      subtitle: 'Smooth & Classic',
      image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
      accent: '#fb923c',
    },
    {
      title: 'Indie Discoveries',
      subtitle: 'Fresh finds',
      image: 'https://images.unsplash.com/photo-1468234847176-28606331216a?q=80&w=1200&auto=format&fit=crop',
      accent: '#60a5fa',
    },
  ];

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-white">Made for you</h2>
        <button className="text-sm text-zinc-400 hover:text-white">See all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;
