import React from 'react'

export default function Architecture() {
  return (
    <section id="architecture" className="relative overflow-hidden bg-[#06070b] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(700px_400px_at_80%_80%,rgba(168,85,247,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="bg-gradient-to-br from-blue-100 to-violet-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Architecture that scales with your risk
          </h2>
          <p className="mt-3 text-blue-100/75">
            A simple, auditable topology. Every connection is verified, encrypted, and observable.
          </p>
        </header>

        <div className="relative mx-auto max-w-5xl">
          {/* Nodes */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Node title="Identity" lines={["SSO", "MFA", "SCIM"]} accent="from-cyan-400/80 to-blue-400/80" />
            <Node title="Policy" lines={["ABAC", "Device posture", "Just‑in‑time"]} accent="from-violet-400/80 to-purple-400/80" />
            <Node title="Telemetry" lines={["Detections", "Forensics", "SIEM feed"]} accent="from-blue-400/80 to-cyan-400/80" />
          </div>

          {/* SVG connectors */}
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <AnimatedPath d="M 200 210 C 400 210 800 210 1000 210" />
            <AnimatedPath d="M 200 120 C 450 180 750 240 1000 300" delay={0.6} />
            <AnimatedPath d="M 200 300 C 450 240 750 180 1000 120" delay={1.2} />
          </svg>
        </div>
      </div>
    </section>
  )
}

function Node({ title, lines, accent }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/7.5">
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`} />
      <div className="relative">
        <h3 className="text-white/90">{title}</h3>
        <ul className="mt-3 space-y-1.5 text-sm text-white/70">
          {lines.map((l) => (
            <li key={l} className="hover:text-white/90 transition-colors">{l}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AnimatedPath({ d, delay = 0 }) {
  return (
    <path
      d={d}
      stroke="url(#line)"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-draw"
      style={{ animationDelay: `${delay}s` }}
      filter="url(#glow)"
    />
  )
}
