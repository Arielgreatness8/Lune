'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SERVICES = [
  {
    icon: '🌐',
    title: 'Business Website',
    desc: 'Full professional websites for businesses, startups and brands. Fast, modern and mobile-ready.',
    features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Analytics'],
  },
  {
    icon: '🛒',
    title: 'Landing Pages',
    desc: 'High-converting landing pages designed to turn visitors into customers.',
    features: ['Conversion Focused', 'Fast Loading', 'Mobile First', 'Clean UI'],
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Professional flyers, posters, logos and brand identity that make you stand out.',
    features: ['Logo Design', 'Flyer & Posters', 'Brand Identity', 'Social Media'],
  },
  {
    icon: '⚡',
    title: 'Web App Development',
    desc: 'Custom web applications built with React and Next.js. Scalable and production-ready.',
    features: ['React & Next.js', 'API Integration', 'Database Setup', 'Deployment'],
  },
  {
    icon: '📱',
    title: 'UI/UX Design',
    desc: 'Clean, intuitive interfaces that give your users the best possible experience.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    icon: '🔍',
    title: 'SEO & Performance',
    desc: 'Get found on Google. Full SEO setup, speed optimization and analytics.',
    features: ['Google Console', 'Meta Tags', 'Sitemap', 'Speed Optimization'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title" style={{
            background: 'linear-gradient(135deg, #F1F5F9, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Services
          </h2>
          <p style={{ color: '#334155', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
            End-to-end digital solutions — from design to development and deployment.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group"
            >
              <div style={{
                width: '44px', height: '44px',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', marginBottom: '16px',
                background: 'rgba(148,163,184,0.06)',
                border: '1px solid rgba(148,163,184,0.1)',
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#E2E8F0',
                marginBottom: '8px',
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#334155',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>
                {service.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.features.map(f => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '11px',
                    color: '#1E293B',
                    marginBottom: '4px',
                  }}>
                    <span style={{ color: '#94A3B8' }}>—</span> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            marginTop: '60px',
            padding: '48px 32px',
            borderRadius: '20px',
            background: 'rgba(148,163,184,0.03)',
            border: '1px solid rgba(148,163,184,0.08)',
            textAlign: 'center',
          }}
        >
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.3rem, 4vw, 2rem)',
            color: '#E2E8F0',
            marginBottom: '12px',
          }}>
            Ready to illuminate your vision?
          </h3>
          <p style={{
            color: '#334155',
            fontSize: '0.9rem',
            marginBottom: '28px',
            maxWidth: '440px',
            margin: '0 auto 28px',
          }}>
            Let's work together to build something premium and powerful for your business.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="https://wa.me/2348086514056?text=Hello%20I%20came%20from%20LUNE%20and%20I%20want%20to%20hire%20you"
              target="_blank"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              🌙 Hire Me Now
            </motion.a>
            <motion.a
              href="mailto:arielgreatness8@gmail.com"
              className="btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ✉️ Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
