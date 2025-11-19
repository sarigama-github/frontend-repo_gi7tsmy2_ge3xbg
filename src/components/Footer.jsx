import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#05070b] py-10 text-sm text-white/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_250px_at_80%_0%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Sentinel Labs</p>
        <nav className="flex items-center gap-6">
          <a href="#architecture" className="hover:text-white/80">Architecture</a>
          <a href="#" className="hover:text-white/80">Docs</a>
          <a href="#" className="hover:text-white/80">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
