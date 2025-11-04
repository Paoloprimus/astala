import './globals.css';
export const metadata = { title: 'Castala (MVP-dev)', description: 'Demo mock' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen">
        <div className="w-full bg-amber-50 border-b border-amber-200 text-amber-900 text-sm px-4 py-2">Modalità demo (tutto mock)</div>
        {children}
      </body>
    </html>
  );
}
