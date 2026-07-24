import { Sun, Moon } from 'lucide-react';

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
        <div style={{ textAlign: 'left' }}>
          {/* Main Title - Explicitly uses the high-contrast heading variable */}
          <h1
            style={{
              color: 'var(--text-h)',
              fontSize: '1.75rem',
              fontWeight: '700',
              margin: 0,
              letterSpacing: '-0.025em',
            }}
          >
            Mentorship Workspace
          </h1>

          {/* Subtitle - Uses muted text color for readable hierarchy */}
          <p
            style={{
              color: 'var(--text)',
              fontSize: '0.9rem',
              margin: '0.25rem 0 0 0',
            }}
          >
            Track action items, milestones, and session notes
          </p>
        </div>

        {/* Theme Toggle Button using passed props */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
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
            }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        )}
      </div>
    </header>
  );
}