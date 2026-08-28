'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroLogo from './IntroLogo'

export default function Intro() {
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const count = parseInt(localStorage.getItem('lune_intro_count') || '0')
    if (count < 5) {
      setShow(true)
      localStorage.setItem('lune_intro_count', String(count + 1))
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) { clearInterval(interval); return 100 }
          return p + 2
        })
      }, 80)
      const timer = setTimeout(() => setExit(true), 4500)
      return () => { clearInterval(interval); clearTimeout(timer) }
    }
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#020709' }}
        >
          {/* Stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: Math.random() * 2 + 0.5,
                height: Math.random() * 2 + 0.5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(226,232,240,${Math.random() * 0.5 + 0.1})`,
              }}
              animate={{ opacity: [0.1, 0.7, 0.1] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Moon light beam */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: '1px',
              height: '120px',
              background: 'linear-gradient(to bottom, rgba(226,232,240,0.3), transparent)',
              top: 0,
              left: '50%',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 15px rgba(226,232,240,0.2))',
                  'drop-shadow(0 0 40px rgba(226,232,240,0.5))',
                  'drop-shadow(0 0 15px rgba(226,232,240,0.2))',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <IntroLogo size={180} />
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 text-center"
          >
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              letterSpacing: '0.6em',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #F1F5F9 0%, #94A3B8 60%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              LUNE
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            style={{
              marginTop: '10px',
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(148,163,184,0.6)',
            }}
          >
            Illuminate Your Vision
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2"
            style={{ width: '160px' }}
          >
            <div style={{
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(to right, #475569, #E2E8F0)',
                borderRadius: '999px',
                transition: 'width 0.1s linear',
              }} />
            </div>
            <p style={{
              textAlign: 'center',
              marginTop: '8px',
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: 'rgba(148,163,184,0.3)',
              textTransform: 'uppercase',
            }}>
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
