'use client';
import { useEffect, useState } from 'react';

export default function ListingDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const [listing, setListing] = useState<any>(null);
  const [offers, setOffers] = useState<any[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/listings').then(r=>r.json()).then(j=>{
      const l = (j.data||[]).find((x:any)=>x.id===id); setListing(l);
    });
    fetch(`/api/listings/${id}/offers`).then(r=>r.json()).then(j=>setOffers(j.data||[]));
  }, [id]);

  async function aiMsg() {
    const r = await fetch('/api/ai/generate', { method:'POST', body: JSON.stringify({ type:'message', prompt: 'offerta' }), headers:{ 'Content-Type':'application/json' } });
    const j = await r.json(); setMessage(j.text);
  }
  async function submitOffer() {
    const r = await fetch('/api/offers', { method:'POST', body: JSON.stringify({ listing_id: id, amount, message }), headers:{ 'Content-Type':'application/json' } });
    const j = await r.json(); if (j.ok) location.reload();
  }

  if (!listing) return <main className="p-4">Carico…</main>;
  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <img src={listing.gallery_url} alt="" className="w-full rounded" />
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <div>Base: €{listing.base_price} · {listing.location}</div>
      <p className="opacity-80">{listing.description}</p>

      <section className="border-t pt-3">
        <h2 className="font-semibold mb-2">Fai un’offerta</h2>
        <input className="border p-2 mr-2" type="number" value={amount} onChange={e=>setAmount(parseInt(e.target.value||'0'))} />
        <button className="px-2 py-2 border rounded mr-2" onClick={aiMsg}>🪄 Messaggio AI</button>
        <textarea className="border p-2 w-full mt-2" value={message} onChange={e=>setMessage(e.target.value)} />
        <button className="px-4 py-2 bg-black text-white rounded mt-2" onClick={submitOffer}>Invia offerta</button>
      </section>

      <section className="border-t pt-3">
        <h3 className="font-semibold mb-1">Offerte</h3>
        <ul className="space-y-2">
          {offers.map(o => (
            <li key={o.id} className="border p-2 rounded">€{o.amount} — {o.message || '—'}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
