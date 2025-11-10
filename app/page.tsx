'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [listings, setListings] = useState<any[]>([]);
  useEffect(() => { fetch('/api/listings').then(r=>r.json()).then(j=>setListings(j.data||[])); }, []);
  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">ASTEZEROCOSTI</h1>
<h2 className="text-2xl>aste immobiliari private volontarie free"</h2>
      <a className="inline-block px-4 py-2 bg-black text-white rounded" href="/new">+ Crea annuncio</a>
      <div className="space-y-3">
        {listings.map(l => (
          <a key={l.id} href={`/listing/${l.id}`} className="block border p-3 rounded hover:bg-gray-50">
            <div className="text-lg font-semibold">{l.title}</div>
            <div className="text-sm opacity-80">Base: €{l.base_price} · {l.location}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
