'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as const },
  })

  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div {...fadeUp(0)}>
            <span className="section-label">About Me</span>
            <h2 className="section-title" style={{
              background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              The mind behind <br />the moonlight
            </h2>
            <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '16px' }}>
                I'm Chinonso Ariel Onyemauchechukwu — a Full Stack Developer and
                Graphic Designer currently studying Geomatics Engineering at the
                University of Benin. I created LUNE as a brand that represents
                what I stand for: bringing light and clarity to the digital space.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Just as the moon illuminates the darkness, I illuminate my clients'
                digital presence — turning ideas into stunning, functional websites
                and designs that make a lasting impression.
              </p>
              <p>
                I combine engineering precision with creative instinct to deliver
                work that is not just beautiful, but strategic and results-driven.
                Every project is a mission to illuminate your vision.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '3+', label: 'Years Experience', icon: '🌙' },
              { num: '10+', label: 'Projects Completed', icon: '✨' },
              { num: '100%', label: 'Client Satisfaction', icon: '⭐' },
              { num: '∞', label: 'Creative Drive', icon: '🚀' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
                whileHover={{ y: -4 }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '2rem',
                  background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontSize: '10px',
                  color: '#334155',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
