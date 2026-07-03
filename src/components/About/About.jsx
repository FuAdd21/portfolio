import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import styles from './About.module.css'
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../../hooks/useScrollReveal'

const FACTS = [
  { label: 'Based in',  value: 'Ethiopia 🇪🇹'        },
  { label: 'Focus',     value: 'Full Stack / MERN'   },
  { label: 'Status',    value: 'Open to work ↗'      },
  { label: 'Bootcamp',  value: 'Evangadi — Nov 2025' },
]

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="about" className={styles.about}>
     <div className={styles.inner}>

        <div className={styles.headWrap}>
          {/* Ghost watermark — big faded label sitting behind the real heading */}
          <span className={styles.ghostLabel} aria-hidden="true">About</span>

          {/* Eyebrow */}
          <motion.span
            className={styles.eyebrow}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            About me
          </motion.span>

          {/* Big editorial headline */}
          <motion.h2
            className={styles.headline}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span className={styles.headLine} variants={staggerItem}>
              I build things that live
            </motion.span>
            <motion.span className={styles.headLine} variants={staggerItem}>
              on the internet —
            </motion.span>
            <motion.span className={styles.headLine} variants={staggerItem}>
              <em className={styles.accentWord}>cleanly.</em>
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom two-column */}
        <div className={styles.bottom}>

          {/* Left: bio + CTA + facts */}
          <motion.div
            className={styles.leftCol}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className={styles.bio}>
              Self-taught developer from Ethiopia. I went from zero to shipping full-stack
              apps — no CS degree, just relentless curiosity and a 6-month MERN bootcamp
              at Evangadi. I care about the details that most people skip.
            </p>

            <button className={styles.cta} onClick={scrollToContact}>
              Let's work together
              <ArrowUpRight size={16} />
            </button>

            <ul className={styles.facts}>
              {FACTS.map(({ label, value }) => (
                <li key={label} className={styles.factRow}>
                  <span className={styles.factLabel}>{label}</span>
                  <span className={styles.factDivider} />
                  <span className={styles.factValue}>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        {/* Right: photo card */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Main photo card — replace placeholder with your real photo */}
            <div className={styles.photoCard}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoInitials}>FA</span>
              </div>
            </div>

            {/* Green "Available now" floating pill */}
            <motion.div
              className={styles.accentCard}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.45, delay: 0.4 }}
            >
              <span className={styles.accentCardDot} />
              <span className={styles.accentCardText}>Available now</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}