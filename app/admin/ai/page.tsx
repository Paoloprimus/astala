'use client';
import { useEffect, useState } from 'react';

export default function AIAdmin() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { fetch('/api/admin/ai').then(r=>r.json()).then(j=>setRows(j.data||[])); }, []);
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-3">AI Logs</h1>
      <div className="space-y-2">
        {rows.map(r => (
          <div key={r.id} className="border p-2 rounded">
            <div className="text-sm opacity-60">{r.type} · {new Date(r.created_at).toLocaleString()}</div>
            <div className="font-medium">In: {r.input_preview}</div>
            <div>Out: {r.output_preview}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
