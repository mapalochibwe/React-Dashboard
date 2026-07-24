import Carousel from 'nuka-carousel';
import { Palette, ChevronLeft, ChevronRight } from 'lucide-react';

// Exact imports for camelCase filenames with lowercase .jpeg
import legoBuild from '../assets/legoBuild.jpeg';
import arduinoBuild from '../assets/arduinoBuild.jpeg';

const designProjects = [
  {
    id: 1,
    title: "Lego Modular Build",
    description: "Iterative physical design and structure prototyping. Explored spatial hierarchy and component modularity.",
    img: legoBuild, 
  },
  {
    id: 2,
    title: "Arduino Interactive Prototype",
    description: "Physical computing project combining custom hardware logic, sensors, and micro-interaction design.",
    img: arduinoBuild,
  },
  
];

const CarouselButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: 'var(--accent-bg)',
      color: 'var(--accent)',
      border: `1px solid var(--accent-border)`,
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      margin: '0 10px',
      backdropFilter: 'blur(4px)',
      boxShadow: 'var(--shadow)',
    }}
  >
    {children}
  </button>
);

export default function DesignSpotlight() {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: 'var(--shadow)',
        marginBottom: '1.5rem',
        transition: 'all 0.25s ease',
        minHeight: '350px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ color: 'var(--accent)', display: 'flex' }}>
          <Palette size={20} />
        </div>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-h)', margin: 0, letterSpacing: '-0.02em' }}>
          Design Spotlight
        </h2>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
          My Product Design Portfolio
        </span>
      </div>

      <Carousel
        wrapAround={true}
        slidesToShow={1}
        cellSpacing={20}
        adaptiveHeight={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselButton onClick={previousSlide}><ChevronLeft size={20} /></CarouselButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselButton onClick={nextSlide}><ChevronRight size={20} /></CarouselButton>
        )}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'var(--accent)',
            margin: '0 5px',
          },
        }}
      >
        {designProjects.map((project) => (
          <div
            key={project.id}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              padding: '10px 0 30px 0',
              minHeight: '220px',
            }}
          >
            <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src={project.img}
                alt={project.title}
                onError={(e) => {
                  console.error('Image failed to load:', project.img);
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<div style="padding: 2rem; background: rgba(255,0,0,0.1); color: #ef4444; font-size: 0.8rem; text-align: center;">Image not found in src/assets/. Check filename casing.</div>`;
                }}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-h)', margin: '0 0 0.5rem 0' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                {project.description}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <span className="badge-orange" style={{ fontSize: '0.75rem' }}>Physical Design</span>
                <span className="badge-orange" style={{ fontSize: '0.75rem' }}>Prototyping</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}