export default function IntroLogo({ size = 180 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ig1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="ig2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.1" />
        </linearGradient>
        <filter id="iglow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer rings */}
      <circle cx="90" cy="90" r="85" stroke="url(#ig1)" strokeWidth="0.5" fill="none" opacity="0.2" />
      <circle cx="90" cy="90" r="75" stroke="url(#ig2)" strokeWidth="0.5" fill="none" opacity="0.15" />

      {/* Crescent moon */}
      <path
        d="M90 22 C58 22 32 48 32 80 C32 112 58 138 90 138 C68 128 52 106 52 80 C52 54 68 32 90 22Z"
        fill="url(#ig1)"
        filter="url(#iglow)"
        opacity="0.95"
      />

      {/* Moon body */}
      <circle cx="98" cy="80" r="50" fill="#050B18" />
      <circle cx="98" cy="80" r="50" stroke="url(#ig2)" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Stars around */}
      <circle cx="140" cy="35" r="3" fill="#E2E8F0" opacity="0.8" filter="url(#iglow)" />
      <circle cx="152" cy="55" r="2" fill="#94A3B8" opacity="0.6" />
      <circle cx="135" cy="22" r="2" fill="#E2E8F0" opacity="0.5" />
      <circle cx="155" cy="75" r="1.5" fill="#CBD5E1" opacity="0.4" />
      <circle cx="145" cy="110" r="2" fill="#E2E8F0" opacity="0.3" />
      <circle cx="30" cy="45" r="1.5" fill="#94A3B8" opacity="0.4" />
      <circle cx="22" cy="70" r="2" fill="#E2E8F0" opacity="0.3" />
    </svg>
  )
}
