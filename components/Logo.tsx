export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.2" />
        </linearGradient>
        <filter id="moonGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle */}
      <circle
        cx="40" cy="40" r="36"
        stroke="url(#moonGrad)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Crescent moon shape */}
      <path
        d="M40 12 C26 12 15 23 15 37 C15 51 26 62 40 62 C30 55 24 47 24 37 C24 27 30 19 40 12Z"
        fill="url(#moonGrad)"
        filter="url(#moonGlow)"
        opacity="0.9"
      />

      {/* Full moon circle */}
      <circle
        cx="44" cy="37" r="22"
        fill="#050B18"
      />

      {/* Moon glow ring */}
      <circle
        cx="44" cy="37" r="22"
        stroke="url(#glowGrad)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Stars */}
      <circle cx="58" cy="18" r="1.5" fill="#E2E8F0" opacity="0.8" />
      <circle cx="64" cy="28" r="1" fill="#94A3B8" opacity="0.6" />
      <circle cx="55" cy="12" r="1" fill="#E2E8F0" opacity="0.5" />
    </svg>
  )
}
