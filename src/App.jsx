import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import MilestonesSection from './components/MilestonesSection';
import ActionItemsSection from './components/ActionItemsSection';
import JournalSection from './components/JournalSection';

export default function App() {
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
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Header />

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Progress Overview Section */}
        <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#818cf8' }}>
            <Activity size={18} />
            <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f1f5f9', margin: 0 }}>
              Overall Progress
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <ProgressBar label="Action Items Completed" percentage={taskProgress} />
            <ProgressBar label="Milestones Achieved" percentage={milestoneProgress} />
          </div>
        </div>

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