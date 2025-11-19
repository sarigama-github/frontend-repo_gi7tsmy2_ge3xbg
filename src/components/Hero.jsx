import React from 'react'
import Spline from '@splinetool/react-spline'
import { Shield, Lock, BadgeCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070a0f]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Velvety vignette + neon aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(800px_400px_at_20%_60%,rgba(168,85,247,0.14),transparent_40%),radial-gradient(600px_300px_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.5)_80%)]" />

      {/* Subtle animated grid for texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen fractal-grid" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center md:px-10">
        {/* Fractal glass headline card */}
        <div className="glass-panel max-w-3xl">
          <h1 className="text-balance bg-gradient-to-br from-cyan-200 via-blue-100 to-purple-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Cybersecurity built for clarity, trust, and speed
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-blue-100/80 sm:text-lg">
            Harden your attack surface with real‑time detection, zero‑trust access, and continuous assurance—wrapped in a minimal, high‑contrast UI your team will love.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#architecture" className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-cyan-100 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:shadow-[0_0_30px_0_rgba(34,211,238,0.25)]">
              Explore the platform
              <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <button className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 transition-colors hover:border-white/20 hover:bg-white/10">
              Request a demo
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 items-center gap-3 text-left sm:grid-cols-3">
          <TrustItem icon={Shield} title="Zero‑trust" desc="Least privilege by default" color="cyan" />
          <TrustItem icon={Lock} title="End‑to‑end" desc="Strong encryption at rest & in transit" color="blue" />
          <TrustItem icon={BadgeCheck} title="Compliance" desc="SOC2 • ISO 27001 • HIPAA" color="violet" />
        </div>
      </div>

      {/* Floating particles for micro‑interaction */}
      <Particles />
    </section>
  )
}

function TrustItem({ icon: Icon, title, desc, color }) {
  const glow = {
    cyan: 'shadow-[0_0_30px_rgba(34,211,238,0.12)]',
    blue: 'shadow-[0_0_30px_rgba(59,130,246,0.12)]',
    violet: 'shadow-[0_0_30px_rgba(168,85,247,0.12)]',
  }[color]

  const ring = {
    cyan: 'ring-cyan-400/30 hover:ring-cyan-300/40',
    blue: 'ring-blue-400/30 hover:ring-blue-300/40',
    violet: 'ring-violet-400/30 hover:ring-violet-300/40',
  }[color]

  return (
    <div className={`group flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ${ring} backdrop-blur-xl transition-all hover:bg-white/7.5 ${glow}`}>
      <div className="mt-0.5 rounded-xl border border-white/10 bg-black/30 p-2 text-white/80 group-hover:text-white/95">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-white/90">{title}</p>
        <p className="text-xs text-white/60">{desc}</p>
      </div>
    </div>
  )
}

function Particles() {
  const items = Array.from({ length: 24 })
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {items.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  )
}
