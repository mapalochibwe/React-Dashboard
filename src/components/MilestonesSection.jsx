import { Target, Plus, Trash2 } from 'lucide-react';

export default function MilestonesSection({ 
  milestones, 
  milestoneInput, 
  setMilestoneInput, 
  addMilestone, 
  cycleMilestoneStatus, 
  deleteMilestone 
}) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case "Completed":
        return { color: '#34d399', bg: 'rgba(52, 211, 153, 0.1)', border: 'rgba(52, 211, 153, 0.2)' };
      case "In Progress":
        return { color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.1)', border: 'rgba(251, 191, 36, 0.2)' };
      default:
        return { color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)', border: 'rgba(148, 163, 184, 0.2)' };
    }
  };

  return (
    <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#818cf8' }}>
        <Target size={18} />
        <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f1f5f9', margin: 0 }}>
          Milestones
        </h2>
      </div>

      <form onSubmit={addMilestone} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={milestoneInput}
          onChange={(e) => setMilestoneInput(e.target.value)}
          placeholder="New milestone goal..."
          style={{ flex: 1, backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#f8fafc', outline: 'none' }}
        />
        <button type="submit" style={{ backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Plus size={16} />
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {milestones.map((m) => {
          const badge = getBadgeStyle(m.status);
          return (
            <div 
              key={m.id} 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '0.5rem', border: '1px solid #1e293b', fontSize: '0.875rem' }}
            >
              <span style={{ color: '#e2e8f0', flex: 1 }}>{m.title}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => cycleMilestoneStatus(m.id)}
                  title="Click to cycle status"
                  style={{
                    fontSize: '0.75rem',
                    color: badge.color,
                    backgroundColor: badge.bg,
                    border: `1px solid ${badge.border}`,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {m.status}
                </button>
                <button 
                  onClick={(e) => deleteMilestone(m.id, e)}
                  style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.2rem' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}