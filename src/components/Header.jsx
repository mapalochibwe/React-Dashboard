import { Sun, Moon, Layers } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  return (
    <header
      style={{
        backgroundColor: 'var(--code-bg)',
        borderBottom: '1px solid var(--border)',
        padding: '1.25rem 2rem',
        boxShadow: 'var(--shadow)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Logo Mark */}
          <div
            style={{
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
              padding: '0.5rem',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Layers size={22} />
          </div>

          <div>
            {/* Brand Name */}
            <h1
              style={{
                color: 'var(--text-h)',
                fontSize: '1.75rem',
                fontWeight: '700',
                margin: 0,
                letterSpacing: '-0.03em',
                lineHeight: '1.1',
              }}
            >
              Silo
            </h1>

            {/* Tagline */}
            <p
              style={{
                color: 'var(--text)',
                fontSize: '0.875rem',
                margin: '0.2rem 0 0 0',
              }}
            >
              A creative workspace for modern code, design, and execution.
            </p>
          </div>
        </div>

        {/* Theme Toggle */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid var(--accent-border)',
              backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        )}
      </div>
    </header>
  );
}