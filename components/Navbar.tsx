'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'contact']
      let current = 'hero'
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(5,11,24,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(148,163,184,0.08)',
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="flex items-center gap-2.5 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Logo size={34} />
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '0.12em',
            background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            LUNE
          </span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-xs font-semibold tracking-widest uppercase cursor-pointer transition-all duration-200"
                  style={{ color: isActive ? '#E2E8F0' : '#475569' }}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="h-px mt-1 w-full"
                      style={{ background: 'linear-gradient(to right, #94A3B8, transparent)' }}
                    />
                  )}
                </motion.a>
              </li>
            )
          })}
        </ul>

        {/* Hire Me button */}
        <motion.a
          href="https://wa.me/2348086514056?text=Hello%20I%20want%20to%20hire%20you"
          target="_blank"
          className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(226,232,240,0.1), rgba(148,163,184,0.05))',
            border: '1px solid rgba(148,163,184,0.2)',
            color: '#E2E8F0',
          }}
          whileHover={{ scale: 1.03, borderColor: 'rgba(226,232,240,0.4)' }}
          whileTap={{ scale: 0.97 }}
        >
          🌙 Hire Me
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 origin-center"
            style={{ background: '#94A3B8' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5"
            style={{ background: '#94A3B8' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 origin-center"
            style={{ background: '#94A3B8' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(5,11,24,0.97)',
              borderBottom: '1px solid rgba(148,163,184,0.08)',
            }}
          >
            <ul className="flex flex-col list-none py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block px-8 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors"
                    style={{ color: '#475569' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-8 py-3">
                
                  href="https://wa.me/2348086514056?text=Hello%20I%20want%20to%20hire%20you"
                  target="_blank"
                  className="block text-center py-3 rounded-lg text-xs font-bold tracking-widest uppercase"
                  style={{
                    border: '1px solid rgba(148,163,184,0.2)',
                    color: '#E2E8F0',
                  }}
                >
                  🌙 Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
