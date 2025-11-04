# Castala — MVP-dev (mock)

**Tutto mock/test**: AI, email, pagamenti. Dati finti già seedati.

## Avvio rapido
```bash
npm install
cp .env.example .env.local      # inserisci URL/KEY Supabase
npm run db:reset                # migrazioni + seed
npm run dev                     # http://localhost:3000
```

## Demo flow
- Home → **+ Crea annuncio** → usa ✨ e 💡 → Salva
- Dettaglio → 🪄 Messaggio AI → Invia offerta
- Admin → `/admin/ai` per vedere i log (mock)
