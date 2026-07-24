import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #1e293b', padding: '1rem 1.5rem', backgroundColor: '#020617' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Terminal size={22} color="#818cf8" />
          <div>
            <h1 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '600' }}>Irene's Workspace</h1>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>Engineering Mentorship</p>
          </div>
        </div>
        <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          Data Saved
        </span>
      </div>
    </header>
  );
}