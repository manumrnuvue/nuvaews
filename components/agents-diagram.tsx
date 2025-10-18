"use client"

import { useEffect, useRef, useState } from "react"
import {
  UserPlus,
  ScanLine,
  ShieldCheck,
  FileText,
  DollarSign,
  ClipboardCheck,
  FileCheck,
  AlertCircle,
  Phone,
  BarChart3,
  Wallet,
  Send,
  Building2,
} from "lucide-react"

export function AgentsDiagram() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [box, setBox] = useState({ width: 1200, height: 500 }) // sensible default

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    const ro = new ResizeObserver(([entry]) => {
      const cr = entry.contentRect
      setBox({ width: Math.max(1, cr.width), height: Math.max(1, cr.height) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const centerX = 50
  const centerY = 50
  const radiusX = 35 // Horizontal radius (wider)
  const radiusY = 30 // Vertical radius (shorter)

  const calculatePosition = (angleDegrees: number) => {
    const angleRadians = (angleDegrees * Math.PI) / 180
    return {
      x: centerX + radiusX * Math.cos(angleRadians),
      y: centerY + radiusY * Math.sin(angleRadians),
    }
  }

  const agents = [
    { icon: UserPlus, name: "Registration", ...calculatePosition(155), color: "#4C8CFF", category: "frontdesk" },
    { icon: ScanLine, name: "Scanning", ...calculatePosition(185), color: "#4C8CFF", category: "frontdesk" },
    { icon: ShieldCheck, name: "Eligibility", ...calculatePosition(215), color: "#4C8CFF", category: "frontdesk" },

    // Mid-Cycle - Top, adjusted for better spacing
    { icon: FileText, name: "CDI Notes", ...calculatePosition(45), color: "#00D9FF", category: "midcycle" },
    { icon: DollarSign, name: "Charge Capture", ...calculatePosition(70), color: "#00D9FF", category: "midcycle" },
    { icon: ClipboardCheck, name: "PreAuth", ...calculatePosition(95), color: "#00D9FF", category: "midcycle" },

    // Claims - Right side near top
    {
      icon: FileCheck,
      name: "Claim Scrubber",
      ...calculatePosition(340),
      color: "#FF5F5F",
      category: "claims",
    },

    // Backoffice - Bottom, more evenly distributed
    { icon: Wallet, name: "Collection", ...calculatePosition(270), color: "#B794F6", category: "backoffice" },
    {
      icon: AlertCircle,
      name: "Denials",
      ...calculatePosition(300),
      color: "#B794F6",
      category: "backoffice",
    },
    {
      icon: AlertCircle,
      name: "Appeals",
      ...calculatePosition(315),
      color: "#B794F6",
      category: "backoffice",
    },

    // Analytics & Support - Better distributed around the ellipse
    {
      icon: BarChart3,
      name: "Analytics",
      ...calculatePosition(20),
      color: "#10B981",
      category: "analytics",
    },
    {
      icon: Phone,
      name: "Voice Call",
      ...calculatePosition(120),
      color: "#10B981",
      category: "analytics",
    },
    { icon: Send, name: "Submission", ...calculatePosition(235), color: "#10B981", category: "analytics" },
    { icon: Building2, name: "A/R Recon", ...calculatePosition(260), color: "#B794F6", category: "backoffice" },
  ]

  const connections = [
    // All agents connect to center (copilot)
    { from: 0, to: "center", color: "#4C8CFF" },
    { from: 1, to: "center", color: "#4C8CFF" },
    { from: 2, to: "center", color: "#4C8CFF" },
    { from: 3, to: "center", color: "#00D9FF" },
    { from: 4, to: "center", color: "#00D9FF" },
    { from: 5, to: "center", color: "#00D9FF" },
    { from: 6, to: "center", color: "#FF5F5F" },
    { from: 7, to: "center", color: "#B794F6" },
    { from: 8, to: "center", color: "#B794F6" },
    { from: 9, to: "center", color: "#B794F6" },
    { from: 10, to: "center", color: "#10B981" },
    { from: 11, to: "center", color: "#10B981" },
    { from: 12, to: "center", color: "#10B981" },
    { from: 13, to: "center", color: "#B794F6" },

    // Front Desk workflow
    { from: 0, to: 1, color: "#4C8CFF" }, // Registration → Scanning
    { from: 1, to: 2, color: "#4C8CFF" }, // Scanning → Eligibility

    // Mid-Cycle workflow
    { from: 3, to: 4, color: "#00D9FF" }, // CDI Notes → Charge Capture
    { from: 4, to: 5, color: "#00D9FF" }, // Charge Capture → PreAuth
    { from: 5, to: 6, color: "#00D9FF" }, // PreAuth → Claim Scrubber

    // Claims to Backoffice
    { from: 6, to: 7, color: "#FF5F5F" }, // Claim Scrubber → Collection
    { from: 7, to: 8, color: "#B794F6" }, // Collection → Denials
    { from: 8, to: 9, color: "#B794F6" }, // Denials → Appeals

    // Analytics connections
    { from: 10, to: 4, color: "#10B981" }, // Analytics → Charge Capture
    { from: 12, to: 6, color: "#10B981" }, // Submission → Claim Scrubber
    { from: 13, to: 7, color: "#B794F6" }, // A/R Recon → Collection

    { from: 0, to: 11, color: "#4C8CFF" }, // Registration ↔ Voice Call
    { from: 11, to: 5, color: "#10B981" }, // Voice Call ↔ PreAuth

    { from: 2, to: 12, color: "#4C8CFF" }, // Eligibility → Submission
    { from: 12, to: 13, color: "#10B981" }, // Submission → A/R Recon
    { from: 6, to: 10, color: "#FF5F5F" }, // Claim Scrubber → Analytics
  ]

  const toPx = (xPct: number, yPct: number) => ({
    x: (xPct / 100) * box.width,
    y: (yPct / 100) * box.height,
  })

  const getEdgePoint = (fromX: number, fromY: number, toX: number, toY: number, nodeRadiusPx = 36) => {
    const dx = toX - fromX
    const dy = toY - fromY
    const distance = Math.hypot(dx, dy) || 1
    return { x: fromX + (dx / distance) * nodeRadiusPx, y: fromY + (dy / distance) * nodeRadiusPx }
  }

  const centerPx = toPx(50, 50)

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E2430] via-[#1a1f2e] to-[#151922] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/circuit-grid-pattern.jpg')] opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5F5F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4C8CFF]/10 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A network of specialized agents that act together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed text-pretty">
            Think of them as role-aware AI assistants that collaborate across teams - so the Business Office, Case
            Management, and Admitting move in lockstep.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div ref={containerRef} className="relative w-full" style={{ height: 420 }}>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${box.width} ${box.height}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4C8CFF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4C8CFF" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="flowCoral" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5F5F" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#FF8F8F" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF5F5F" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="flowPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B794F6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#D4B4FE" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#B794F6" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="flowGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#34D399" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <style>
                  {`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: -40;
                      }
                    }
                    .flow-line {
                      animation: dash 2s linear infinite;
                    }
                  `}
                </style>
              </defs>

              {connections.map((conn, idx) => {
                const fromAgent = agents[conn.from]
                const toAgent = conn.to === "center" ? null : agents[conn.to as number]

                const fromCenter = toPx(fromAgent.x, fromAgent.y)
                const toCenter = toAgent ? toPx(toAgent.x, toAgent.y) : centerPx

                const fromEdge = getEdgePoint(fromCenter.x, fromCenter.y, toCenter.x, toCenter.y, 45)
                const toEdge = getEdgePoint(
                  toCenter.x,
                  toCenter.y,
                  fromCenter.x,
                  fromCenter.y,
                  conn.to === "center" ? 65 : 45,
                )

                return (
                  <g key={`connection-${idx}`}>
                    <line
                      x1={fromEdge.x}
                      y1={fromEdge.y}
                      x2={toEdge.x}
                      y2={toEdge.y}
                      stroke={conn.color}
                      strokeWidth="2"
                      opacity="0.15"
                    />

                    <line
                      x1={fromEdge.x}
                      y1={fromEdge.y}
                      x2={toEdge.x}
                      y2={toEdge.y}
                      stroke={conn.color}
                      strokeWidth="2"
                      opacity="0.5"
                      strokeDasharray="8 4"
                      className="flow-line"
                      filter="url(#glow)"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    />

                    <circle cx={fromEdge.x} cy={fromEdge.y} r="3" fill={conn.color} opacity="0.9" filter="url(#glow)">
                      <animateMotion
                        dur={`${2.5 + (idx % 3) * 0.5}s`}
                        repeatCount="indefinite"
                        path={`M ${fromEdge.x} ${fromEdge.y} L ${toEdge.x} ${toEdge.y}`}
                      />
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                )
              })}
            </svg>

            <div
              className="absolute z-20"
              style={{ left: centerPx.x, top: centerPx.y, transform: "translate(-50%, -50%)" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F5F] via-[#4C8CFF] to-[#B794F6] rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
                <div className="relative bg-[#1E2430]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl">
                  <img src="/images/nuvae-copilot.png" alt="Nuvae AI Copilot" className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>

            {/* Agent nodes */}
            {agents.map((agent, idx) => {
              const p = toPx(agent.x, agent.y)
              return (
                <div
                  key={idx}
                  className="absolute z-10"
                  style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
                >
                  <AgentNode
                    icon={agent.icon}
                    name={agent.name}
                    color={agent.color}
                    badge={agent.badge}
                    activeAgent={activeAgent}
                    setActiveAgent={setActiveAgent}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4C8CFF]" style={{ boxShadow: "0 0 8px #4C8CFF" }} />
            <span className="text-gray-300">Front Desk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]" style={{ boxShadow: "0 0 8px #00D9FF" }} />
            <span className="text-gray-300">Mid-Cycle</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F5F]" style={{ boxShadow: "0 0 8px #FF5F5F" }} />
            <span className="text-gray-300">Claims</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B794F6]" style={{ boxShadow: "0 0 8px #B794F6" }} />
            <span className="text-gray-300">Backoffice</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" style={{ boxShadow: "0 0 8px #10B981" }} />
            <span className="text-gray-300">Analytics & Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function AgentNode({
  icon: Icon,
  name,
  color,
  badge,
  activeAgent,
  setActiveAgent,
}: {
  icon: any
  name: string
  color: string
  badge?: string
  activeAgent: string | null
  setActiveAgent: (name: string | null) => void
}) {
  const isActive = activeAgent === name

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setActiveAgent(name)}
      onMouseLeave={() => setActiveAgent(null)}
    >
      <div
        className={`absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300 ${
          isActive ? "opacity-60" : ""
        }`}
        style={{ backgroundColor: color }}
      />

      <div className="relative bg-[#1E2430]/90 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col items-center gap-1 min-w-[60px]">
        <div
          className="w-5 h-5 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}80`,
          }}
        >
          <Icon className="h-3 w-3 text-white" />
        </div>
        <p className="text-[9px] text-gray-200 text-center leading-tight font-medium">{name}</p>
      </div>
    </div>
  )
}
