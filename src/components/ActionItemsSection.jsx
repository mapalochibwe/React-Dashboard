import { CheckSquare, Plus, Trash2 } from 'lucide-react';

export default function ActionItemsSection({ 
  tasks, 
  taskInput, 
  setTaskInput, 
  addTask, 
  toggleTask, 
  deleteTask 
}) {
  return (
    <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#818cf8' }}>
        <CheckSquare size={18} />
        <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f1f5f9', margin: 0 }}>
          Action Items
        </h2>
      </div>

      <form onSubmit={addTask} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="New action item..."
          style={{ flex: 1, backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#f8fafc', outline: 'none' }}
        />
        <button type="submit" style={{ backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Plus size={16} />
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {tasks.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleTask(item.id)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '0.5rem', border: '1px solid #1e293b', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" checked={item.completed} onChange={() => {}} />
              <span style={{ fontSize: '0.875rem', textDecoration: item.completed ? 'line-through' : 'none', color: item.completed ? '#64748b' : '#cbd5e1' }}>
                {item.text}
              </span>
            </div>
            <button 
              onClick={(e) => deleteTask(item.id, e)}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.2rem' }}
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}