import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUNE | Chinonso Ariel — Full Stack Developer & Graphic Designer',
  description: 'LUNE — Illuminate Your Vision. Full Stack Developer and Graphic Designer building premium digital experiences worldwide.',
  keywords: ['Full Stack Developer', 'Graphic Designer', 'LUNE', 'Chinonso Ariel', 'Web Developer Nigeria', 'UI UX Designer', 'React Developer', 'Next.js'],
  authors: [{ name: 'Chinonso Ariel Onyemauchechukwu' }],
  creator: 'Chinonso Ariel Onyemauchechukwu',
  openGraph: {
    title: 'LUNE | Chinonso Ariel — Full Stack Developer',
    description: 'Illuminate Your Vision. Premium digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
