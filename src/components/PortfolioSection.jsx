export default function PortfolioSection() {
  return (
    <div style={{
      backgroundColor: 'var(--code-bg)',
      border: '1px solid var(--border)',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: 'var(--shadow)',
      marginTop: '1.5rem'
    }}>
      <div style={{
        padding: '1rem',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-h)' }}>
          Live Lovable Showcase
        </h3>
        <a 
          href="https://mmc-builds-spark.lovable.app/" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: 'var(--accent)', fontSize: '0.875rem', textDecoration: 'none' }}
        >
          Open in New Tab ↗
        </a>
      </div>
      <iframe
        src="https://mmc-builds-spark.lovable.app/"
        title="Lovable Portfolio"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}