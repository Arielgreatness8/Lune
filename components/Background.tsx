'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <>
      {/* Base gradient */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(148,163,184,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 85% 30%, rgba(30,58,95,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 15% 70%, rgba(76,29,149,0.08) 0%, transparent 55%),
            linear-gradient(170deg, #050B18 0%, #070D20 50%, #060918 100%)
          `,
        }}
      />

      {/* Moon glow - top center */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          width: 500,
          height: 500,
          top: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(226,232,240,0.04) 0%, rgba(148,163,184,0.02) 40%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blue orb - right */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '10%',
          right: -200,
          background: 'radial-gradient(circle, rgba(30,58,95,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Purple orb - left bottom */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: -150,
          left: -150,
          background: 'radial-gradient(circle, rgba(76,29,149,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, delay: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle star field */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-0 rounded-full"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(226,232,240,${Math.random() * 0.4 + 0.1})`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </>
  )
}
