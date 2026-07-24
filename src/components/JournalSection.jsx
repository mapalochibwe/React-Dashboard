import { useState } from 'react';
import { BookOpen, Plus, Trash2, Calendar } from 'lucide-react';

export default function JournalSection({ notes, addNote, deleteNote }) {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim() || !content.trim()) return;

    addNote({
      id: Date.now(),
      date,
      topic,
      content,
    });

    setTopic('');
    setContent('');
  };

  return (
    <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#818cf8' }}>
        <BookOpen size={18} />
        <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f1f5f9', margin: 0 }}>
          Session Journal & Notes
        </h2>
      </div>

      {/* Form to Add New Note */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Session topic (e.g., Component State & Hooks)..."
            style={{ flex: 2, minWidth: '200px', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#f8fafc', outline: 'none' }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ flex: 1, minWidth: '130px', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#f8fafc', outline: 'none' }}
          />
        </div>
        
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Key takeaways, answers, and notes from today's mentorship..."
          rows={3}
          style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#f8fafc', outline: 'none', resize: 'vertical' }}
        />

        <button 
          type="submit" 
          style={{ backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '0.5rem', padding: '0.6rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '500', alignSelf: 'flex-end' }}
        >
          <Plus size={16} /> Save Session Note
        </button>
      </form>

      {/* Saved Notes Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {notes.length === 0 ? (
          <p style={{ color: '#64748b', fontSize: '0.875rem', fontStyle: 'italic', margin: 0, textAlign: 'center', padding: '1rem 0' }}>
            No session notes saved yet. Add your first note above!
          </p>
        ) : (
          notes.map((note) => (
            <div 
              key={note.id} 
              style={{ backgroundColor: '#0f172a', borderRadius: '0.5rem', border: '1px solid #1e293b', padding: '1rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#e2e8f0', margin: 0 }}>
                  {note.topic}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={12} /> {note.date}
                  </span>
                  <button 
                    onClick={() => deleteNote(note.id)}
                    style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.2rem' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1', margin: 0, whiteSpace: 'pre-wrap', lineHeight: '1.4' }}>
                {note.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}