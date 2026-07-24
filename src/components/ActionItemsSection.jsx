import { CheckSquare, Plus, Trash2 } from 'lucide-react';

export default function ActionItemsSection({ 
  tasks = [], 
  taskInput, 
  setTaskInput, 
  priorityInput,
  setPriorityInput,
  addTask, 
  toggleTask, 
  deleteTask 
}) {
  // Color palette for priority badges
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return { bg: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)' };
      case 'Medium':
        return { bg: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)' };
      case 'Low':
      default:
        return { bg: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)' };
    }
  };

  return (
    <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '1.25rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#818cf8' }}>
        <CheckSquare size={18} />
        <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f1f5f9', margin: 0 }}>
          Action Items ({tasks.filter(t => !t.completed).length})
        </h2>
      </div>

      {/* Input Form */}
      <form onSubmit={addTask} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="New action item..."
            style={{ 
              flex: 1, 
              backgroundColor: '#0f172a', 
              border: '1px solid #1e293b', 
              borderRadius: '0.5rem', 
              padding: '0.5rem 0.75rem', 
              color: '#f8fafc', 
              outline: 'none',
              fontSize: '0.875rem'
            }}
          />
          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#4f46e5', 
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '0.5rem', 
              padding: '0.5rem 0.75rem', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Priority Selector Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Priority:</span>
          {['High', 'Medium', 'Low'].map((p) => {
            const active = priorityInput === p;
            const badge = getPriorityStyle(p);
            return (
              <button
                key={p}
                type="button"
                onClick={() => setPriorityInput(p)}
                style={{
                  backgroundColor: active ? badge.bg : 'transparent',
                  color: active ? badge.color : '#64748b',
                  border: active ? badge.border : '1px solid #1e293b',
                  borderRadius: '0.35rem',
                  padding: '0.15rem 0.45rem',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
      </form>

      {/* Task List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '240px', overflowY: 'auto' }}>
        {tasks.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', margin: '1rem 0' }}>
            No action items yet!
          </p>
        ) : (
          tasks.map((item) => {
            const badge = getPriorityStyle(item.priority || 'Low');
            return (
              <div
                key={item.id}
                onClick={() => toggleTask(item.id)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '0.65rem 0.75rem', 
                  backgroundColor: '#0f172a', 
                  borderRadius: '0.5rem', 
                  border: '1px solid #1e293b', 
                  cursor: 'pointer',
                  opacity: item.completed ? 0.6 : 1,
                  transition: 'opacity 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: 0 }}>
                  <input 
                    type="checkbox" 
                    checked={item.completed} 
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleTask(item.id);
                    }} 
                    style={{ cursor: 'pointer' }}
                  />
                  <span 
                    style={{ 
                      fontSize: '0.875rem', 
                      textDecoration: item.completed ? 'line-through' : 'none', 
                      color: item.completed ? '#64748b' : '#cbd5e1',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.text}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
                  <span
                    style={{
                      backgroundColor: badge.bg,
                      color: badge.color,
                      border: badge.border,
                      borderRadius: '0.35rem',
                      padding: '0.1rem 0.4rem',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.priority || 'Low'}
                  </span>

                  <button 
                    onClick={(e) => deleteTask(item.id, e)}
                    style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.2rem', display: 'flex', alignItems: 'center' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}