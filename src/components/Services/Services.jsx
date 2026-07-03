import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Services.module.css'

const SERVICES = [
  {
    id: 'frontend',
    number: 'I',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces built with React. No UI libraries — every component is custom, every animation is intentional.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'CSS Modules', 'Responsiveness', 'Accessibility'],
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {/* Browser chrome */}
        <rect x="20" y="20" width="240" height="160" rx="10" stroke="#2A2A2A" strokeWidth="1.5" fill="#0d0d0d"/>
        <rect x="20" y="20" width="240" height="32" rx="10" fill="#141414" stroke="#2A2A2A" strokeWidth="1.5"/>
        <circle cx="40" cy="36" r="5" fill="#FF5F57"/>
        <circle cx="56" cy="36" r="5" fill="#FFBD2E"/>
        <circle cx="72" cy="36" r="5" fill="#28CA41"/>
        <rect x="90" y="28" width="130" height="16" rx="4" fill="#1c1c1c" stroke="#333" strokeWidth="1"/>
        <text x="155" y="40" fontSize="8" fill="#555" textAnchor="middle" fontFamily="monospace">fuad.dev</text>
        {/* Nav bar inside browser */}
        <rect x="28" y="60" width="224" height="16" rx="2" fill="#141414"/>
        <rect x="36" y="65" width="24" height="6" rx="2" fill="#7C6AFA" opacity="0.8"/>
        <rect x="68" y="65" width="20" height="6" rx="2" fill="#333"/>
        <rect x="96" y="65" width="22" height="6" rx="2" fill="#333"/>
        <rect x="200" y="63" width="44" height="10" rx="4" fill="#7C6AFA" opacity="0.6"/>
        {/* Hero block */}
        <rect x="28" y="84" width="130" height="28" rx="4" fill="#141414"/>
        <rect x="36" y="90" width="80" height="6" rx="2" fill="#F5F5F5" opacity="0.5"/>
        <rect x="36" y="100" width="60" height="4" rx="2" fill="#888" opacity="0.4"/>
        <rect x="28" y="116" width="60" height="20" rx="4" fill="#4ade80" opacity="0.15" stroke="#4ade80" strokeWidth="1"/>
        <text x="58" y="130" fontSize="7" fill="#4ade80" textAnchor="middle" fontFamily="monospace">See my work</text>
        {/* Right image block */}
        <rect x="166" y="84" width="86" height="56" rx="6" fill="#1c1c1c" stroke="#2A2A2A" strokeWidth="1"/>
        <circle cx="209" cy="112" r="16" fill="#7C6AFA" opacity="0.12" stroke="#7C6AFA" strokeWidth="1" strokeDasharray="3 2"/>
        <text x="209" y="116" fontSize="14" textAnchor="middle" fill="#7C6AFA" opacity="0.5">FA</text>
        {/* Cards row */}
        <rect x="28" y="144" width="66" height="28" rx="5" fill="#141414" stroke="#2A2A2A" strokeWidth="1"/>
        <rect x="102" y="144" width="66" height="28" rx="5" fill="#141414" stroke="#2A2A2A" strokeWidth="1"/>
        <rect x="176" y="144" width="66" height="28" rx="5" fill="#141414" stroke="#7C6AFA" strokeWidth="1" opacity="0.5"/>
        <rect x="36" y="151" width="40" height="4" rx="2" fill="#555"/>
        <rect x="36" y="159" width="28" height="3" rx="1" fill="#333"/>
        <rect x="110" y="151" width="40" height="4" rx="2" fill="#555"/>
        <rect x="110" y="159" width="28" height="3" rx="1" fill="#333"/>
        <rect x="184" y="151" width="40" height="4" rx="2" fill="#7C6AFA" opacity="0.5"/>
        <rect x="184" y="159" width="28" height="3" rx="1" fill="#7C6AFA" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: 'backend',
    number: 'II',
    title: 'Backend Development',
    description: 'REST APIs built with Node.js and Express — clean routes, service layers, parameterised queries. No raw SQL concatenation. No leaky abstractions.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Middleware', 'Auth', 'Security'],
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {/* Server rack */}
        <rect x="80" y="20" width="120" height="160" rx="8" fill="#0d0d0d" stroke="#2A2A2A" strokeWidth="1.5"/>
        {/* Server units */}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <rect x="88" y={32 + i*36} width="104" height="26" rx="4" fill="#141414" stroke="#333" strokeWidth="1"/>
            <circle cx="102" cy={45 + i*36} r="4" fill={i===0 ? '#4ade80' : i===1 ? '#4ade80' : '#FFBD2E'} opacity="0.9"/>
            <rect x="112" y={40 + i*36} width="52" height="3" rx="1" fill="#333"/>
            <rect x="112" y={47 + i*36} width="36" height="3" rx="1" fill="#2A2A2A"/>
            <rect x="174" y={40 + i*36} width="10" height="10" rx="2" fill="#1c1c1c" stroke="#333" strokeWidth="0.8"/>
          </g>
        ))}
        {/* Request arrow left */}
        <path d="M20 60 L76 60" stroke="#7C6AFA" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowV)"/>
        <text x="14" y="55" fontSize="7" fill="#7C6AFA" fontFamily="monospace">POST</text>
        <text x="14" y="65" fontSize="7" fill="#555" fontFamily="monospace">/api</text>
        {/* Response arrow right */}
        <path d="M204 100 L240 100" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 3"/>
        <text x="208" y="95" fontSize="7" fill="#4ade80" fontFamily="monospace">200</text>
        <text x="208" y="108" fontSize="7" fill="#555" fontFamily="monospace">JSON</text>
        {/* DB cylinder */}
        <ellipse cx="48" cy="140" rx="22" ry="8" stroke="#9D8FFB" strokeWidth="1.2" fill="#141414"/>
        <rect x="26" y="140" width="44" height="26" fill="#141414"/>
        <ellipse cx="48" cy="166" rx="22" ry="8" stroke="#9D8FFB" strokeWidth="1.2" fill="#0d0d0d"/>
        <ellipse cx="48" cy="140" rx="22" ry="8" stroke="#9D8FFB" strokeWidth="1.2" fill="#141414"/>
        <text x="48" y="157" fontSize="7" fill="#9D8FFB" textAnchor="middle" fontFamily="monospace">MySQL</text>
        <path d="M76 145 L70 145" stroke="#9D8FFB" strokeWidth="1.2" strokeDasharray="3 2"/>
        <defs>
          <marker id="arrowV" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="#7C6AFA"/>
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    id: 'fullstack',
    number: 'III',
    title: 'Full Stack Apps',
    description: 'End-to-end ownership — schema to screen. I design the database, build the API, wire the frontend, and hand you a working product.',
    tags: ['MERN Stack', 'MySQL', 'MongoDB', 'JWT Auth', 'Deployment', 'Full Ownership'],
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {/* Stack layers */}
        {/* Frontend layer */}
        <rect x="60" y="24" width="160" height="38" rx="8" fill="#141414" stroke="#7C6AFA" strokeWidth="1.5"/>
        <text x="100" y="38" fontSize="9" fill="#9D8FFB" fontFamily="monospace" fontWeight="600">Frontend</text>
        <text x="100" y="51" fontSize="7.5" fill="#555" fontFamily="monospace">React · Tailwind · Framer</text>
        <rect x="196" y="32" width="16" height="22" rx="3" fill="#7C6AFA" opacity="0.15" stroke="#7C6AFA" strokeWidth="1"/>
        {/* Connector */}
        <line x1="140" y1="62" x2="140" y2="78" stroke="#2A2A2A" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="140" cy="70" r="3" fill="#7C6AFA" opacity="0.5"/>
        {/* API layer */}
        <rect x="60" y="78" width="160" height="38" rx="8" fill="#141414" stroke="#4ade80" strokeWidth="1.5"/>
        <text x="100" y="92" fontSize="9" fill="#4ade80" fontFamily="monospace" fontWeight="600">API Layer</text>
        <text x="100" y="105" fontSize="7.5" fill="#555" fontFamily="monospace">Node · Express · REST</text>
        <rect x="196" y="86" width="16" height="22" rx="3" fill="#4ade80" opacity="0.1" stroke="#4ade80" strokeWidth="1"/>
        {/* Connector */}
        <line x1="140" y1="116" x2="140" y2="132" stroke="#2A2A2A" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="140" cy="124" r="3" fill="#4ade80" opacity="0.5"/>
        {/* Database layer */}
        <rect x="60" y="132" width="160" height="38" rx="8" fill="#141414" stroke="#9D8FFB" strokeWidth="1.5"/>
        <text x="100" y="146" fontSize="9" fill="#9D8FFB" fontFamily="monospace" fontWeight="600">Database</text>
        <text x="100" y="159" fontSize="7.5" fill="#555" fontFamily="monospace">MySQL · MongoDB</text>
        <rect x="196" y="140" width="16" height="22" rx="3" fill="#9D8FFB" opacity="0.1" stroke="#9D8FFB" strokeWidth="1"/>
        {/* Left label */}
        <text x="44" y="47" fontSize="7" fill="#555" fontFamily="monospace" textAnchor="middle">UI</text>
        <text x="44" y="101" fontSize="7" fill="#555" fontFamily="monospace" textAnchor="middle">API</text>
        <text x="44" y="155" fontSize="7" fill="#555" fontFamily="monospace" textAnchor="middle">DB</text>
        <line x1="52" y1="24" x2="52" y2="170" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx="52" cy="43" r="3" fill="#7C6AFA" opacity="0.6"/>
        <circle cx="52" cy="97" r="3" fill="#4ade80" opacity="0.6"/>
        <circle cx="52" cy="151" r="3" fill="#9D8FFB" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'api',
    number: 'IV',
    title: 'API Integration',
    description: 'Connecting your product to third-party services — payment gateways, AI models, auth providers, data feeds. Reliable, secure, well-handled errors.',
    tags: ['REST', 'Webhooks', 'OAuth', 'Groq / OpenAI', 'Error Handling', 'Rate Limiting'],
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {/* Central hub */}
        <circle cx="140" cy="100" r="28" fill="#141414" stroke="#7C6AFA" strokeWidth="1.5"/>
        <text x="140" y="97" fontSize="8" fill="#9D8FFB" textAnchor="middle" fontFamily="monospace" fontWeight="600">Your</text>
        <text x="140" y="108" fontSize="8" fill="#9D8FFB" textAnchor="middle" fontFamily="monospace" fontWeight="600">App</text>
        {/* Satellites */}
        {[
          { label: 'Groq AI', x: 44,  y: 44,  color: '#4ade80' },
          { label: 'Auth',    x: 236, y: 44,  color: '#7C6AFA' },
          { label: 'Payment', x: 30,  y: 156, color: '#F59E0B' },
          { label: 'DB',      x: 236, y: 156, color: '#9D8FFB' },
          { label: 'Email',   x: 140, y: 20,  color: '#4ade80' },
        ].map(({ label, x, y, color }) => (
          <g key={label}>
            <line
              x1={x} y1={y}
              x2={x < 140 ? x + 32 : x > 140 ? x - 32 : x}
              y2={y < 100 ? y + 20 : y > 100 ? y - 20 : y}
              stroke={color} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6"
            />
            <rect x={x-22} y={y-14} width="44" height="26" rx="6" fill="#141414" stroke={color} strokeWidth="1.2"/>
            <text x={x} y={y+4} fontSize="7.5" fill={color} textAnchor="middle" fontFamily="monospace">{label}</text>
          </g>
        ))}
        {/* Pulse rings on hub */}
        <circle cx="140" cy="100" r="36" stroke="#7C6AFA" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 4"/>
        <circle cx="140" cy="100" r="46" stroke="#7C6AFA" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 5"/>
      </svg>
    ),
  },
  {
    id: 'optimization',
    number: 'V',
    title: 'Performance & Optimization',
    description: 'Auditing and fixing what silently hurts you — slow load times, unoptimised assets, poor Core Web Vitals. Faster sites rank better and convert more.',
    tags: ['Lighthouse Audits', 'Lazy Loading', 'Code Splitting', 'SEO', 'Core Web Vitals', 'Asset Optimization'],
    illustration: (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        {/* Speedometer arc */}
        <path d="M60 150 A80 80 0 0 1 220 150" stroke="#2A2A2A" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <path d="M60 150 A80 80 0 0 1 175 74" stroke="#4ade80" strokeWidth="10" strokeLinecap="round" fill="none"/>
        {/* Needle */}
        <line x1="140" y1="150" x2="172" y2="82" stroke="#7C6AFA" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="140" cy="150" r="8" fill="#141414" stroke="#7C6AFA" strokeWidth="2"/>
        <circle cx="140" cy="150" r="3" fill="#7C6AFA"/>
        {/* Labels on arc */}
        <text x="52" y="170" fontSize="8" fill="#EF4444" fontFamily="monospace">0</text>
        <text x="128" y="58" fontSize="8" fill="#F59E0B" fontFamily="monospace">50</text>
        <text x="218" y="170" fontSize="8" fill="#4ade80" fontFamily="monospace">100</text>
        {/* Score */}
        <text x="140" y="128" fontSize="32" fill="#4ade80" fontWeight="800" textAnchor="middle" letterSpacing="-2">94</text>
        <text x="140" y="142" fontSize="8" fill="#888" textAnchor="middle" fontFamily="monospace">Performance</text>
        {/* Metric bars below */}
        <text x="28" y="186" fontSize="7" fill="#555" fontFamily="monospace">FCP</text>
        <rect x="50" y="179" width="60" height="6" rx="3" fill="#1c1c1c"/>
        <rect x="50" y="179" width="52" height="6" rx="3" fill="#4ade80" opacity="0.8"/>
        <text x="118" y="186" fontSize="7" fill="#555" fontFamily="monospace">LCP</text>
        <rect x="140" y="179" width="60" height="6" rx="3" fill="#1c1c1c"/>
        <rect x="140" y="179" width="48" height="6" rx="3" fill="#7C6AFA" opacity="0.8"/>
        <text x="208" y="186" fontSize="7" fill="#555" fontFamily="monospace">CLS</text>
        <rect x="228" y="179" width="36" height="6" rx="3" fill="#1c1c1c"/>
        <rect x="228" y="179" width="34" height="6" rx="3" fill="#4ade80" opacity="0.6"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>

        {/* Big heading — like the reference's "EXPERTISE" */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className={styles.eyebrow}>What I offer</span>
          <h2 className={styles.heading}>SERVICES</h2>
        </motion.div>

        {/* Accordion list */}
        <div className={styles.list}>
          {SERVICES.map((service, i) => {
            const isOpen = openId === service.id
            return (
              <motion.div
                key={service.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {/* Row — always visible, click to toggle */}
                <button
                  className={styles.row}
                  onClick={() => toggle(service.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.rowNumber}>{service.number}</span>
                  <span className={styles.rowTitle}>{service.title}</span>
                  <motion.span
                    className={styles.rowIcon}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.panel}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className={styles.panelInner}>

                        {/* Left: description + tags */}
                        <div className={styles.panelLeft}>
                          <p className={styles.description}>{service.description}</p>
                          <div className={styles.tags}>
                            {service.tags.map(t => (
                              <span key={t} className={styles.tag}>{t}</span>
                            ))}
                          </div>
                        </div>

                        {/* Right: SVG illustration */}
                        <div className={styles.illustration}>
                          {service.illustration}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}