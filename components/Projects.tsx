'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    title: 'CAEVO Portfolio',
    description: 'My previous personal portfolio website built under the CAEVO brand. Features glassmorphism UI, animated intro, admin panel for design uploads, SEO optimization and full deployment on Vercel.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GitHub API'],
    live: 'https://portfolio-arielgreatness8s-projects.vercel.app',
    github: 'https://github.com/Arielgreatness8/portfolio-',
    emoji: '🌑',
    gradient: 'linear-gradient(135deg, rgba(76,29,149,0.2), rgba(30,58,95,0.1))',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive animated portfolio built with React and Framer Motion featuring glassmorphism UI and scroll-triggered animations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://wa.me/2348086514056?text=Hello%20I%20came%20from%20your%20portfolio',
    github: 'https://github.com/Arielgreatness8',
    emoji: '🌟',
    gradient: 'linear-gradient(135deg, rgba(148,163,184,0.1), rgba(30,58,95,0.1))',
  },
  {
    title: 'Landing Page Design',
    description: 'A modern responsive landing page with clean UI design and smooth animations, focused on user engagement and conversion.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    live: 'https://wa.me/2348086514056?text=Hello%20I%20came%20from%20your%20portfolio',
    github: 'https://github.com/Arielgreatness8',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, rgba(226,232,240,0.06), rgba(148,163,184,0.04))',
  },
]

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden flex flex-col group"
    >
      {/* Thumbnail */}
      <div style={{
        width: '100%',
        height: '180px',
        background: project.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <motion.span
          style={{ fontSize: '3.5rem', zIndex: 1 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {project.emoji}
        </motion.span>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(5,11,24,0.6))',
        }} />
      </div>

      {/* Body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '1.05rem',
          color: '#E2E8F0',
          marginBottom: '10px',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.85rem',
          color: '#334155',
          lineHeight: 1.75,
          flex: 1,
          marginBottom: '16px',
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              padding: '4px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(148,163,184,0.15)',
              color: '#94A3B8',
              background: 'rgba(148,163,184,0.05)',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <motion.a
            href={project.live}
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1, textAlign: 'center',
              padding: '10px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #E2E8F0, #94A3B8)',
              color: '#050B18',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Live Demo ↗
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1, textAlign: 'center',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid rgba(148,163,184,0.15)',
              color: '#475569',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">My Work</span>
          <h2 className="section-title" style={{
            background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
