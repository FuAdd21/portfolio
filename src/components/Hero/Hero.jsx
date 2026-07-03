import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { SiGithub, SiTelegram } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import styles from './Hero.module.css'

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const line = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const SOCIALS = [
  {
    icon: SiGithub,
    href: 'https://github.com/fuadaman',
    label: 'GitHub',
    color: '#ffffff',
    bg: '#24292e',
  },
  {
    icon: FaLinkedinIn,
    href: 'https://linkedin.com/in/fuadaman',
    label: 'LinkedIn',
    color: '#ffffff',
    bg: '#0A66C2',
  },
  {
    icon: SiTelegram,
    href: 'https://t.me/fuadaman',
    label: 'Telegram',
    color: '#ffffff',
    bg: '#26A5E4',
  },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>

      {/* Background: subtle dot-grid */}
      <div  />

      {/* Left violet glow */}
      <div className={styles.glowLeft}  aria-hidden="true" />
      {/* Right dim glow */}
      <div className={styles.glowRight} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── LEFT: all the text ── */}
        <motion.div
          className={styles.textCol}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Status pill */}
          <motion.div variants={line} className={styles.statusRow}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>Available for work</span>
          </motion.div>

          {/* Headline — three lines, big weight contrast */}
          <motion.h1 variants={line} className={styles.headline}>
            <span className={styles.h1Thin}>Fuad Aman</span>
            <span className={styles.h1Bold}>Full Stack</span>
            <span className={styles.h1Italic}>Developer<span className={styles.dot}>.</span></span>
          </motion.h1>

          {/* One-line value prop */}
          <motion.p variants={line} className={styles.sub}>
            MERN stack · self-taught · Ethiopia —
            I ship clean, fast, production-ready web apps.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={line} className={styles.ctaRow}>
            <button className={styles.ctaPrimary} onClick={() => scrollTo('projects')}>
              See my work
              <ArrowDown size={15} />
            </button>
            <a className={styles.ctaOutline} href="/fuad-cv.pdf" download>
              Download CV
              <Download size={15} />
            </a>
          </motion.div>

          {/* Social icons — real brand colors */}
          <motion.div variants={line} className={styles.socials}>
            {SOCIALS.map(({ icon: Icon, href, label, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialBtn}
                style={{ '--icon-bg': bg, '--icon-color': color }}
              >
                <Icon size={16} />
                <span className={styles.socialTooltip}>{label}</span>
              </a>
            ))}
          </motion.div>

        </motion.div>

        {/* ── RIGHT: portrait + floating cards ── */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >

          {/* Photo frame */}
          <div className={styles.frame}>
            {/* Replace this div with <img src="..." /> when you have a real photo */}
            <div className={styles.photoPlaceholder}>
              <span className={styles.initials}>FA</span>
            </div>

            {/* Violet corner accent */}
            <span className={styles.cornerTL} aria-hidden="true" />
            <span className={styles.cornerBR} aria-hidden="true" />
          </div>

          {/* Floating card — stack */}
          <motion.div
            className={styles.floatStack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.45 }}
          >
            <span className={styles.floatLabel}>Stack</span>
            <div className={styles.stackPills}>
              {['React', 'Node', 'MySQL', 'Mongo'].map(t => (
                <span key={t} className={styles.stackPill}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Floating card — shipped */}
          <motion.div
            className={styles.floatShipped}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.45 }}
          >
            <span className={styles.shippedNum}>5+</span>
            <span className={styles.shippedLabel}>projects shipped</span>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        className={styles.scrollNudge}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>

    </section>
  )
}