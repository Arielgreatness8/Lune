'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Arielgreatness8',
    icon: '⚙️',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/onyemauchechukwu-chinonso-ariel-582042341',
    icon: '💼',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348086514056?text=Hello%20I%20came%20from%20LUNE%20portfolio',
    icon: '💬',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title" style={{
            background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Let's Work Together
          </h2>
          <p style={{
            color: '#334155',
            fontSize: '0.9rem',
            lineHeight: 1.8,
            marginBottom: '48px',
          }}>
            Have a project in mind? Need a Full Stack Developer or Graphic Designer?
            I'm always open to new opportunities and creative collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card"
          style={{ padding: '48px 32px' }}
        >
          {/* Email */}
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#1E293B',
            marginBottom: '12px',
          }}>
            Reach me directly at
          </p>
          <motion.a
            href="mailto:arielgreatness8@gmail.com"
            style={{
              display: 'inline-block',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              background: 'linear-gradient(135deg, #E2E8F0, #94A3B8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '36px',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(148,163,184,0.2)',
              paddingBottom: '4px',
            }}
            whileHover={{ scale: 1.02 }}
          >
            arielgreatness8@gmail.com
          </motion.a>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '28px',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(148,163,184,0.08)' }} />
            <span style={{ fontSize: '10px', color: '#1E293B', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Or find me on
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(148,163,184,0.08)' }} />
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  background: 'rgba(148,163,184,0.04)',
                  border: '1px solid rgba(148,163,184,0.1)',
                  color: '#475569',
                  fontSize: '12px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
