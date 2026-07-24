import { useState, useEffect } from 'react';
import { Activity, Sun, Moon, ExternalLink, Globe } from 'lucide-react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import MilestonesSection from './components/MilestonesSection';
import ActionItemsSection from './components/ActionItemsSection';
import JournalSection from './components/JournalSection';

// Inline Portfolio Component for seamless integration
function PortfolioSection() {
  return (
    <div 
      style={{ 
        backgroundColor: 'var(--code-bg)', 
        border: '1px solid var(--border)', 
        borderRadius: '0.75rem', 
        overflow: 'hidden', 
        boxShadow: 'var(--shadow)' 
      }}
    >
      <div 
        style={{ 
          padding: '1rem 1.25rem', 
          borderBottom: '1px solid var(--border)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0, 0, 0, 0.02)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
          <Globe size={18} />
          <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-h)', margin: 0 }}>
            Live Portfolio Showcase
          </h2>
        </div>

        <a 
          href="https://mmc-builds-spark.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            color: 'var(--accent)', 
            fontSize: '0.85rem', 
            fontWeight: '500',
            textDecoration: 'none' 
          }}
        >
          <span>Open Full Site</span>
          <ExternalLink size={14} />
        </a>
      </div>

      <div style={{ width: '100%', height: '520px', position: 'relative' }}>
        <iframe
          src="https://mmc-builds-spark.lovable.app/"
          title="MMC Portfolio Showcase"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function App() {
  // Theme State (Default to 'light' or check localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('irene_theme') || 'light';
  });

  // Sync data-theme attribute on <html> element for index.css
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('irene_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('irene_tasks');
    return saved ? JSON.parse(saved) : [
      { id: 101, text: "Set up baseline Vite project structure", completed: true },
      { id: 102, text: "Walk through state flow between components", completed: false },
      { id: 103, text: "Design next feature component together", completed: false },
    ];
  });

  const [milestones, setMilestones] = useState(() => {
    const saved = localStorage.getItem('irene_milestones');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Review React Component Lifecycle", status: "In Progress" },
      { id: 2, title: "Build Out Custom Hooks & State", status: "Not Started" },
    ];
  });

  // Load journal notes from localStorage or default
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('irene_notes');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        date: new Date().toISOString().split('T')[0],
        topic: "Vite + React Architecture",
        content: "Configured modular components and set up Git repository tracking."
      }
    ];
  });

  const [taskInput, setTaskInput] = useState('');
  const [milestoneInput, setMilestoneInput] = useState('');

  // Persist states to localStorage
  useEffect(() => {
    localStorage.setItem('irene_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('irene_milestones', JSON.stringify(milestones));
  }, [milestones]);

  useEffect(() => {
    localStorage.setItem('irene_notes', JSON.stringify(notes));
  }, [notes]);

  // Task Actions
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput('');
  };

  const deleteTask = (id, e) => {
    e.stopPropagation();
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Milestone Actions
  const cycleMilestoneStatus = (id) => {
    const statusOrder = ["Not Started", "In Progress", "Completed"];
    setMilestones(milestones.map(m => {
      if (m.id === id) {
        const nextIndex = (statusOrder.indexOf(m.status) + 1) % statusOrder.length;
        return { ...m, status: statusOrder[nextIndex] };
      }
      return m;
    }));
  };

  const addMilestone = (e) => {
    e.preventDefault();
    if (!milestoneInput.trim()) return;
    setMilestones([...milestones, { id: Date.now(), title: milestoneInput, status: "Not Started" }]);
    setMilestoneInput('');
  };

  const deleteMilestone = (id, e) => {
    e.stopPropagation();
    setMilestones(milestones.filter(m => m.id !== id));
  };

  // Journal Actions
  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  // Progress Calculations
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const taskProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const totalMilestones = milestones.length;
  const completedMilestones = milestones.filter(m => m.status === 'Completed').length;
  const milestoneProgress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', transition: 'background-color 0.25s ease, color 0.25s ease' }}>
      
      {/* Header with theme props */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Progress Overview Section */}
        <div style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.25rem', boxShadow: 'var(--shadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
              <Activity size={18} />
              <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-h)', margin: 0 }}>
                Overall Progress
              </h2>
            </div>

            {/* Quick Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              title="Toggle Theme"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <ProgressBar label="Action Items Completed" percentage={taskProgress} />
            <ProgressBar label="Milestones Achieved" percentage={milestoneProgress} />
          </div>
        </div>

        {/* Live Portfolio Showcase */}
        <PortfolioSection />

        {/* 2-Column Grid for Milestones & Tasks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <MilestonesSection 
            milestones={milestones}
            milestoneInput={milestoneInput}
            setMilestoneInput={setMilestoneInput}
            addMilestone={addMilestone}
            cycleMilestoneStatus={cycleMilestoneStatus}
            deleteMilestone={deleteMilestone}
          />

          <ActionItemsSection 
            tasks={tasks}
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            addTask={addTask}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>

        {/* Session Journal Section */}
        <JournalSection 
          notes={notes}
          addNote={addNote}
          deleteNote={deleteNote}
        />

      </main>
    </div>
  );
}