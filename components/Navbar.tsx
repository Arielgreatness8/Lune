'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const LINKS = ['About','Skills','Services','Projects','Contact']

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20)
      const ids = ['hero','about','skills','services','projects','contact']
      let cur = 'hero'
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='fixed top-0 left-0 w-full z-50'
      style={scrolled ? { background: 'rgba(5,11,24,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(148,163,184,0.08)' } : {}}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16'>
        <motion.button onClick={() => go('hero')} className='flex items-center gap-2 cursor-pointer' whileHover={{ scale: 1.03 }}>
          <Logo size={34} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.12em', background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LUNE</span>
        </motion.button>

        <ul className='hidden md:flex gap-8 list-none items-center'>
          {LINKS.map(l => (
            <li key={l}>
              <motion.button
                onClick={() => go(l.toLowerCase())}
                className='text-xs font-semibold tracking-widest uppercase cursor-pointer'
                style={{ color: active === l.toLowerCase() ? '#E2E8F0' : '#475569', background: 'none', border: 'none' }}
                whileHover={{ y: -1 }}
              >{l}</motion.button>
            </li>
          ))}
        </ul>

        <motion.a
          href='https://wa.me/2348086514056'
          target='_blank'
          className='hidden md:flex text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-lg'
          style={{ background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.15)', color: '#94A3B8' }}
          whileHover={{ scale: 1.03 }}
        >Hire Me</motion.a>
        <button className='md:hidden flex flex-col gap-1 p-2 cursor-pointer' onClick={() => setOpen(prev => !prev)}>

          <div style={{ width: 20, height: 1, background: "#94A3B8", marginBottom: 4 }} />
          <div style={{ width: 20, height: 1, background: "#94A3B8", marginBottom: 4 }} />
          <div style={{ width: 20, height: 1, background: "#94A3B8", marginBottom: 4 }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='md:hidden overflow-hidden'
            style={{ background: 'rgba(5,11,24,0.97)', borderBottom: '1px solid rgba(148,163,184,0.08)' }}
          >
            <div className='flex flex-col py-3'>
              {LINKS.map(l => (
                <button
                  key={l}
                  onClick={() => go(l.toLowerCase())}
                  className='px-8 py-3 text-xs font-semibold tracking-widest uppercase text-left'
                  style={{ color: '#475569', background: 'none', border: 'none', cursor: 'pointer' }}
                >{l}</button>
              ))}
              <a
                href='https://wa.me/2348086514056'
                target='_blank'
                className='mx-8 my-2 text-center py-3 rounded-lg text-xs font-bold tracking-widest uppercase'
                style={{ border: '1px solid rgba(148,163,184,0.15)', color: '#94A3B8' }}
              >Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}