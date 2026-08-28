export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="relative z-10 text-center py-8 px-6"
      style={{ borderTop: '1px solid rgba(148,163,184,0.06)' }}
    >
      <p style={{ color: '#1E293B', fontSize: '11px', letterSpacing: '0.05em' }}>
        Designed &amp; Built by{' '}
        <span style={{
          background: 'linear-gradient(135deg, #E2E8F0, #94A3B8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 600,
        }}>
          Chinonso Ariel Onyemauchechukwu
        </span>
        {' '}· {year}
      </p>
      <p style={{
        color: '#0F172A',
        fontSize: '10px',
        marginTop: '4px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        LUNE · Illuminate Your Vision
      </p>
    </footer>
  )
}
