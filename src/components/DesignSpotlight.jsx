import Carousel from 'nuka-carousel';
import { Palette, ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images from src/assets/
import legoBuild from '../assets/Lego Build.jpeg';
import arduinoBuild from '../assets/Arduino Build.jpeg';

const designProjects = [
  {
    id: 1,
    title: "Project Alpha: AI Dashboard",
    description: "Designed a clean UI for data visualization tools, focusing on dark mode usability.",
    img: legoBuild, 
  },
  {
    id: 2,
    title: "Zenith Mobile App",
    description: "Full end-to-end UX/UI for a minimalist productivity application.",
    img: arduinoBuild,
  },
  {
    id: 3,
    title: "EcoTrack Design System",
    description: "Built and documented a comprehensive component library for a sustainability platform.",
    img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=600&auto=format&fit=crop",
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
              gridTemplateColumns: '1.5fr 1fr',
              gap: '1.5rem',
              alignItems: 'center',
              padding: '10px 0 30px 0',
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-h)', margin: '0 0 0.5rem 0' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                {project.description}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <span className="badge-orange" style={{ fontSize: '0.75rem' }}>UX/UI</span>
                <span className="badge-orange" style={{ fontSize: '0.75rem' }}>Figma</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}