'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILLS = [
  { icon: '🌐', name: 'HTML5', level: 'Advanced' },
  { icon: '🎨', name: 'CSS3', level: 'Advanced' },
  { icon: '⚡', name: 'JavaScript', level: 'Proficient' },
  { icon: '⚛️', name: 'React', level: 'Proficient' },
  { icon: '🔺', name: 'Next.js', level: 'Proficient' },
  { icon: '💨', name: 'Tailwind CSS', level: 'Advanced' },
  { icon: '🔀', name: 'Git & GitHub', level: 'Proficient' },
  { icon: '🖌️', name: 'Graphic Design', level: 'Advanced' },
  { icon: '📱', name: 'Responsive UI', level: 'Advanced' },
  { icon: '✨', name: 'Framer Motion', level: 'Proficient' },
  { icon: '🗄️', name: 'Node.js', level: 'Learning' },
  { icon: '🛢️', name: 'Database', level: 'Learning' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title" style={{
            background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            My Skills
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass-card p-5 text-center cursor-default group"
            >
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '8px' }}>
                {skill.icon}
              </span>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.78rem',
                color: '#94A3B8',
                marginBottom: '4px',
              }}>
                {skill.name}
              </div>
              <div style={{
                fontSize: '10px',
                color: '#334155',
                letterSpacing: '0.05em',
              }}>
                {skill.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
