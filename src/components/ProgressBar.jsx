export default function ProgressBar({ label, percentage = 0 }) {
  // Ensure percentage stays between 0 and 100
  const validPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div style={{ flex: 1, minWidth: '220px' }}>
      {/* Label and Percentage Header */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '0.5rem' 
        }}
      >
        <span 
          style={{ 
            fontSize: '0.85rem', 
            fontWeight: '500', 
            color: 'var(--text, #334155)' // Fallback to slate-700 for light mode readability
          }}
        >
          {label}
        </span>
        <span 
          style={{ 
            fontSize: '0.85rem', 
            fontWeight: '700', 
            color: 'var(--accent, #6366f1)' // Highlighted percentage color
          }}
        >
          {validPercentage}%
        </span>
      </div>

      {/* Progress Track Bar */}
      <div 
        style={{ 
          width: '100%', 
          height: '0.6rem', 
          backgroundColor: 'var(--border, #e2e8f0)', // Light slate track in light mode
          borderRadius: '9999px', 
          overflow: 'hidden' 
        }}
      >
        {/* Fill Indicator */}
        <div 
          style={{ 
            width: `${validPercentage}%`, 
            height: '100%', 
            backgroundColor: 'var(--accent, #6366f1)', 
            borderRadius: '9999px', 
            transition: 'width 0.4s ease-in-out' 
          }}
        />
      </div>
    </div>
  );
}