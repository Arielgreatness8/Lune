'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center text-center"
      style={{ padding: '80px 24px 40px', overflowX: 'hidden' }}
    >
      <div style={{ maxWidth: '720px', width: '100%', margin: '0 auto' }}>

        {/* Available badge */}
        <motion.div {...fadeUp(0.1)}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#94A3B8',
            border: '1px solid rgba(148,163,184,0.15)',
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'rgba(148,163,184,0.05)',
            marginBottom: '20px',
          }}>
            <motion.span
              style={{
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: '#94A3B8',
                display: 'inline-block',
              }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.2)}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            wordBreak: 'break-word',
          }}>
            <span style={{
              fontSize: 'clamp(2.2rem, 8vw, 5rem)',
              display: 'block',
              background: 'linear-gradient(160deg, #F1F5F9 0%, #94A3B8 60%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Chinonso Ariel
            </span>
            <span style={{
              fontSize: 'clamp(0.9rem, 3vw, 1.5rem)',
              color: '#334155',
              fontWeight: 600,
              display: 'block',
              marginTop: '6px',
              letterSpacing: '0.02em',
            }}>
              Onyemauchechukwu
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div {...fadeUp(0.35)}>
          <div style={{
            display: 'inline-block',
            fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
            fontWeight: 500,
            color: '#475569',
            letterSpacing: '0.08em',
            marginBottom: '16px',
            padding: '8px 20px',
            borderRadius: '8px',
            background: 'rgba(148,163,184,0.04)',
            border: '1px solid rgba(148,163,184,0.08)',
          }}>
            Full Stack Developer · Graphic Designer · Digital Communication Specialist
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p {...fadeUp(0.5)} style={{
          fontSize: 'clamp(0.82rem, 2.2vw, 0.97rem)',
          color: '#334155',
          lineHeight: 1.85,
          maxWidth: '540px',
          margin: '0 auto 36px',
        }}>
          I build premium digital experiences that illuminate your brand.
          From stunning websites to powerful graphic designs —
          I bring your vision to life with precision and creativity.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.65)} style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '56px',
        }}>
          <motion.a
            href="https://wa.me/2348086514056?text=Hello%20I%20came%20from%20your%20LUNE%20portfolio%20and%20I%20want%20to%20hire%20you"
            target="_blank"
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🌙 Hire Me
          </motion.a>
          <motion.button
            onClick={() => scrollTo('projects')}
            className="btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects →
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.8)}
          style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '10+', label: 'Projects Done' },
            { num: '100%', label: 'Client Focus' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
                background: 'linear-gradient(135deg, #E2E8F0, #94A3B8)',
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
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(1)}
          style={{
            marginTop: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <motion.div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(148,163,184,0.5), transparent)',
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <span style={{
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#1E293B',
          }}>
            Scroll
          </span>
        </motion.div>

      </div>
    </section>
  )
}
