'use client';
import { useState } from 'react';

export default function NewListing() {
  const [title, setTitle] = useState('Bilocale luminoso');
  const [description, setDescription] = useState('Zona centrale...');
  const [basePrice, setBasePrice] = useState(120000);
  const [location, setLocation] = useState('Verona');
  const [galleryUrl, setGalleryUrl] = useState('https://picsum.photos/seed/new/800/500');

  async function aiCopy() {
    const r = await fetch('/api/ai/generate', { method:'POST', body: JSON.stringify({ type:'copy', prompt: title }), headers:{ 'Content-Type':'application/json' } });
    const j = await r.json(); setDescription(j.text);
  }
  async function aiPrice() {
    const r = await fetch('/api/ai/generate', { method:'POST', body: JSON.stringify({ type:'price', prompt: description }), headers:{ 'Content-Type':'application/json' } });
    const j = await r.json(); alert(j.text);
  }
  async function save() {
    const r = await fetch('/api/listings', { method:'POST', body: JSON.stringify({ title, description, base_price: basePrice, location, gallery_url: galleryUrl }), headers:{ 'Content-Type':'application/json' } });
    const j = await r.json(); if (j.ok) window.location.href = `/listing/${j.data.id}`;
  }

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-2">
      <h1 className="text-xl font-bold">Nuovo annuncio</h1>
      <input className="border p-2 w-full" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="border p-2 w-full h-28" value={description} onChange={e=>setDescription(e.target.value)} />
      <div className="flex gap-2">
        <button className="px-3 py-2 border rounded" onClick={aiCopy}>✨ Genera descrizione</button>
        <button className="px-3 py-2 border rounded" onClick={aiPrice}>💡 Suggerisci prezzo</button>
      </div>
      <input className="border p-2 w-full" type="number" value={basePrice} onChange={e=>setBasePrice(parseInt(e.target.value||'0'))} />
      <input className="border p-2 w-full" value={location} onChange={e=>setLocation(e.target.value)} />
      <input className="border p-2 w-full" value={galleryUrl} onChange={e=>setGalleryUrl(e.target.value)} />
      <button className="px-4 py-2 bg-black text-white rounded" onClick={save}>Salva</button>
    </main>
  );
}
