export default function ProgressBar({ label, percentage }) {
  return (
    <div style={{ flex: 1, minWidth: '200px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.8rem', color: '#94a3b8' }}>
        <span>{label}</span>
        <span style={{ fontWeight: '600', color: '#f8fafc' }}>{percentage}%</span>
      </div>
      <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '9999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
        <div 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: '#818cf8', 
            height: '100%', 
            borderRadius: '9999px',
            transition: 'width 0.3s ease-in-out' 
          }} 
        />
      </div>
    </div>
  );
}