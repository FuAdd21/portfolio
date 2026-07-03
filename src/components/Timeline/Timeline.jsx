import { motion } from 'framer-motion'
import styles from './Timeline.module.css'

const STEPS = [
  {
    id: 'discover',
    number: '01',
    side: 'left',
    label: 'Discover',
    title: 'Understand the problem',
    body: "I don't start with code. I start with questions — what does the client actually need, who are their users, what does success look like? The brief is the foundation.",
    sketch: (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sketchSvg}>
        {/* Notepad */}
        <rect x="30" y="20" width="140" height="100" rx="8" stroke="#7C6AFA" strokeWidth="1.5" strokeDasharray="4 3"/>
        {/* Lines on notepad */}
        <line x1="50" y1="48" x2="150" y2="48" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="50" y1="64" x2="150" y2="64" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="50" y1="80" x2="120" y2="80" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Question mark */}
        <text x="148" y="110" fontSize="28" fill="#4ade80" fontWeight="bold" opacity="0.8">?</text>
        {/* Pencil */}
        <rect x="148" y="24" width="8" height="28" rx="2" transform="rotate(35 148 24)" stroke="#7C6AFA" strokeWidth="1.5" fill="none"/>
        <line x1="155" y1="48" x2="158" y2="54" stroke="#7C6AFA" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'plan',
    number: '02',
    side: 'right',
    label: 'Plan',
    title: 'Architect before building',
    body: 'Component tree, data flow, API contracts, folder structure. Five minutes of planning saves five hours of refactoring. I map it before I type it.',
    sketch: (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sketchSvg}>
        {/* Root node */}
        <rect x="80" y="14" width="40" height="24" rx="5" stroke="#7C6AFA" strokeWidth="1.5"/>
        <text x="100" y="31" fontSize="9" fill="#9D8FFB" textAnchor="middle" fontFamily="monospace">App</text>
        {/* Lines to children */}
        <line x1="100" y1="38" x2="60" y2="62" stroke="#444" strokeWidth="1.2" strokeDasharray="3 2"/>
        <line x1="100" y1="38" x2="140" y2="62" stroke="#444" strokeWidth="1.2" strokeDasharray="3 2"/>
        {/* Child nodes */}
        <rect x="34" y="62" width="52" height="22" rx="5" stroke="#4ade80" strokeWidth="1.5"/>
        <text x="60" y="77" fontSize="8" fill="#4ade80" textAnchor="middle" fontFamily="monospace">Header</text>
        <rect x="114" y="62" width="52" height="22" rx="5" stroke="#4ade80" strokeWidth="1.5"/>
        <text x="140" y="77" fontSize="8" fill="#4ade80" textAnchor="middle" fontFamily="monospace">Main</text>
        {/* Grandchildren */}
        <line x1="60" y1="84" x2="60" y2="102" stroke="#444" strokeWidth="1.2" strokeDasharray="3 2"/>
        <rect x="34" y="102" width="52" height="22" rx="5" stroke="#555" strokeWidth="1.2"/>
        <text x="60" y="117" fontSize="8" fill="#888" textAnchor="middle" fontFamily="monospace">Nav</text>
        <line x1="140" y1="84" x2="140" y2="102" stroke="#444" strokeWidth="1.2" strokeDasharray="3 2"/>
        <rect x="114" y="102" width="52" height="22" rx="5" stroke="#555" strokeWidth="1.2"/>
        <text x="140" y="117" fontSize="8" fill="#888" textAnchor="middle" fontFamily="monospace">Hero</text>
      </svg>
    ),
  },
  {
    id: 'build',
    number: '03',
    side: 'left',
    label: 'Build',
    title: 'Write code that lasts',
    body: 'Modular components, clean separation of concerns, parameterised queries, typed props. I write code I can hand off to another developer without a README novel.',
    sketch: (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sketchSvg}>
        {/* Editor window */}
        <rect x="20" y="16" width="160" height="108" rx="8" stroke="#2A2A2A" strokeWidth="1.5" fill="#0d0d0d"/>
        {/* Traffic lights */}
        <circle cx="36" cy="30" r="4" fill="#FF5F57"/>
        <circle cx="50" cy="30" r="4" fill="#FFBD2E"/>
        <circle cx="64" cy="30" r="4" fill="#28CA41"/>
        {/* Code lines */}
        <text x="32" y="54" fontSize="8.5" fill="#7C6AFA" fontFamily="monospace">const</text>
        <text x="68" y="54" fontSize="8.5" fill="#4ade80" fontFamily="monospace"> build</text>
        <text x="101" y="54" fontSize="8.5" fill="#fff" fontFamily="monospace"> = () =&gt; {'{'}</text>
        <text x="40" y="70" fontSize="8.5" fill="#9D8FFB" fontFamily="monospace">return</text>
        <text x="76" y="70" fontSize="8.5" fill="#4ade80" fontFamily="monospace"> clean</text>
        <text x="110" y="70" fontSize="8.5" fill="#F5F5F5" fontFamily="monospace">+</text>
        <text x="40" y="86" fontSize="8.5" fill="#4ade80" fontFamily="monospace">   fast</text>
        <text x="76" y="86" fontSize="8.5" fill="#F5F5F5" fontFamily="monospace"> + </text>
        <text x="88" y="86" fontSize="8.5" fill="#9D8FFB" fontFamily="monospace">shipped</text>
        <text x="32" y="102" fontSize="8.5" fill="#F5F5F5" fontFamily="monospace">{'}'}</text>
        {/* Cursor blink */}
        <rect x="130" y="93" width="6" height="11" rx="1" fill="#7C6AFA" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: 'refine',
    number: '04',
    side: 'right',
    label: 'Refine',
    title: 'Polish until it earns its place',
    body: 'Every pixel, every transition, every edge case. Responsive at 320px. Accessible. Fast. I test on real devices, not just browser resize.',
    sketch: (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sketchSvg}>
        {/* Desktop */}
        <rect x="30" y="16" width="100" height="68" rx="6" stroke="#7C6AFA" strokeWidth="1.5"/>
        <line x1="70" y1="84" x2="70" y2="98" stroke="#7C6AFA" strokeWidth="1.5"/>
        <line x1="50" y1="98" x2="90" y2="98" stroke="#7C6AFA" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Screen content */}
        <rect x="38" y="24" width="84" height="52" rx="3" fill="#141414"/>
        <rect x="44" y="30" width="72" height="8" rx="2" fill="#2A2A2A"/>
        <rect x="44" y="43" width="50" height="5" rx="2" fill="#333"/>
        <rect x="44" y="53" width="65" height="5" rx="2" fill="#333"/>
        {/* Mobile */}
        <rect x="144" y="36" width="34" height="60" rx="6" stroke="#4ade80" strokeWidth="1.5"/>
        <rect x="149" y="44" width="24" height="42" rx="2" fill="#141414"/>
        <circle cx="161" cy="90" r="2.5" stroke="#4ade80" strokeWidth="1"/>
        {/* Check mark */}
        <circle cx="168" cy="22" r="12" stroke="#4ade80" strokeWidth="1.5"/>
        <polyline points="162,22 166,26 175,17" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'ship',
    number: '05',
    side: 'left',
    label: 'Ship',
    title: 'Deploy with confidence',
    body: "I don't just build — I deliver. Vercel, Railway, Netlify — production deployment, environment variables locked, domain connected, client gets the keys.",
    sketch: (
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sketchSvg}>
        {/* Rocket */}
        <path d="M100 110 C85 85 82 55 100 22 C118 55 115 85 100 110Z" stroke="#7C6AFA" strokeWidth="1.5" fill="none"/>
        {/* Rocket window */}
        <circle cx="100" cy="58" r="8" stroke="#4ade80" strokeWidth="1.5"/>
        {/* Fins */}
        <path d="M86 88 L76 106 L92 96" stroke="#7C6AFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M114 88 L124 106 L108 96" stroke="#7C6AFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Flames */}
        <path d="M93 110 Q100 128 107 110" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M96 110 Q100 122 104 110" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        {/* Stars */}
        <circle cx="48" cy="30" r="2" fill="#4ade80" opacity="0.7"/>
        <circle cx="160" cy="50" r="1.5" fill="#9D8FFB" opacity="0.7"/>
        <circle cx="38" cy="80" r="1.5" fill="#4ade80" opacity="0.5"/>
        <circle cx="168" cy="28" r="2" fill="#7C6AFA" opacity="0.6"/>
      </svg>
    ),
  },
]

// SVG curved arrows — direction alternates per transition
function ArrowDown({ flip }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrowSvg}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <path
        d="M10 10 C10 50, 110 30, 110 70"
        stroke="#2A2A2A"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <polyline
        points="100,62 110,70 118,60"
        stroke="#7C6AFA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default function Process() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className={styles.eyebrow}>How I work</span>
          <h2 className={styles.heading}>
            My process,<br />
            <span className={styles.headingAccent}>start to ship.</span>
          </h2>
          <p className={styles.subheading}>
            Every project follows the same discipline — understand first, build second, polish third.
          </p>
        </motion.div>

        {/* Alternating steps */}
        <div className={styles.flow}>
          {STEPS.map((step, i) => {
            const isLeft = step.side === 'left'
            const isLast = i === STEPS.length - 1

            return (
              <div key={step.id} className={styles.stepWrap}>
                <motion.div
                  className={`${styles.step} ${isLeft ? styles.stepLeft : styles.stepRight}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Text block */}
                  <div className={styles.textBlock}>
                    <div className={styles.stepMeta}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <span className={styles.stepLabel}>{step.label}</span>
                    </div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepBody}>{step.body}</p>
                  </div>

                  {/* Sketch block */}
                  <motion.div
                    className={styles.sketchBlock}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    {step.sketch}
                  </motion.div>
                </motion.div>

                {/* Curved arrow between steps */}
                {!isLast && (
                  <motion.div
                    className={`${styles.arrowWrap} ${isLeft ? styles.arrowRight : styles.arrowLeft}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <ArrowDown flip={!isLeft} />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}