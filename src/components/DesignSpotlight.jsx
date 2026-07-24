import { useState } from 'react';
import { Palette, ChevronLeft, ChevronRight } from 'lucide-react';

// Make sure your filenames in src/assets/ match these exact imports
import legoBuild from '../assets/legoBuild.jpeg';
import arduinoBuild from '../assets/arduinoBuild.jpeg';

const designProjects = [
  {
    id: 1,
    title: "Lego Modular Build",
    description: "Iterative physical design and structure prototyping. Explored spatial hierarchy and component modularity.",
    tags: ["Physical Design", "Prototyping"],
    img: legoBuild, 
  },
  {
    id: 2,
    title: "Arduino Interactive Prototype",
    description: "Physical computing project combining custom hardware logic, sensors, and micro-interaction design.",
    tags: ["Hardware", "UX/UI"],
    img: arduinoBuild,
  },
  
];

export default function DesignSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? designProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === designProjects.length - 1 ? 0 : prev + 1));
  };

  const current = designProjects[currentIndex];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card, var(--code-bg))',
        border: '1px solid var(--border)',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        boxShadow: 'var(--shadow)',
        textAlign: 'left',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Header with Nav Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
          <Palette size={18} />
          <h2 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-h)', margin: 0 }}>
            Design Spotlight
          </h2>
        </div>

        {/* Carousel Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={prevSlide}
            style={{
              background: 'var(--accent-bg)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-border)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              background: 'var(--accent-bg)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-border)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Active Slide Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          alignItems: 'center',
          backgroundColor: 'var(--bg)',
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid var(--border)',
        }}
      >
        <div style={{ width: '100%', height: '220px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img
            src={current.img}
            alt={current.title}
            onError={() => {
              console.error('Image broken:', current.img);
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-h)', margin: '0 0 0.5rem 0' }}>
            {current.title}
          </h3>
          <p style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
            {current.description}
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {current.tags.map((tag, i) => (
              <span key={i} className="badge-orange" style={{ fontSize: '0.75rem' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem' }}>
        {designProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: idx === currentIndex ? '18px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: idx === currentIndex ? 'var(--accent)' : 'var(--border)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}