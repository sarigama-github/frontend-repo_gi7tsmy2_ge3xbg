import React from 'react'

export default function ParallaxSections() {
  return (
    <section className="relative bg-[#070911]">
      <div className="relative isolate">
        <ParallaxLayer speed={0.05} className="bg-[radial-gradient(1000px_500px_at_10%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
        <ParallaxLayer speed={0.1} className="bg-[radial-gradient(800px_400px_at_90%_60%,rgba(168,85,247,0.12),transparent_40%)]" />
        <ParallaxLayer speed={0.2} className="bg-[radial-gradient(700px_350px_at_50%_80%,rgba(34,211,238,0.12),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-3 md:px-10">
          <Feature title="Threat Intelligence" desc="Continuously enriched indicators and behavior analytics turn noise into signal." />
          <Feature title="Zero‑Trust Access" desc="Identity‑first segmentation with device posture and just‑in‑time elevation." />
          <Feature title="Autonomous Response" desc="Playbooks that quarantine, rotate secrets, and notify—without waking the team." />
        </div>
      </div>
    </section>
  )
}

function ParallaxLayer({ speed = 0.1, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 will-change-transform ${className}`}
      style={{ transform: `translate3d(0, 0, 0)`, animation: `parallax ${20 / speed}s linear infinite` }}
      aria-hidden
    />
  )
}

function Feature({ title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]">
      <h3 className="text-lg font-semibold text-white/90">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <a href="#" className="mt-3 inline-block text-sm text-cyan-200/80 transition-colors hover:text-cyan-100">Learn more →</a>
    </div>
  )
}
