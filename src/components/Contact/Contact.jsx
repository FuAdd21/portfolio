import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Copy, Check, ArrowUpRight, Globe, Code2 } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import styles from './Contact.module.css'
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../../hooks/useScrollReveal'

const EMAIL = 'fuad.aman.dev@gmail.com'

const SOCIAL_LINKS = [
  { icon: Code2, label: 'GitHub',   href: 'https://github.com/fuadaman',      handle: '@fuadaman' },
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com/in/fuadaman', handle: '/in/fuadaman' },
  { icon: Send,  label: 'Telegram', href: 'https://t.me/fuadaman',            handle: '@fuadaman' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — silently ignore, email is still visible/selectable
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      {/* Ambient glow, mirrors hero */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>

        <motion.div
          className={styles.headerBlock}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className={styles.heading}>
            Let's build something <span className={styles.headingAccent}>worth shipping</span>
          </h2>
          <p className={styles.subheading}>
            Open for freelance projects and remote roles. If you have something in mind,
            reach out — I usually reply within a day.
          </p>
        </motion.div>

        {/* Email block */}
        <motion.div
          className={styles.emailBlock}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <button className={styles.emailButton} onClick={handleCopy} aria-label="Copy email address">
            <Mail size={18} className={styles.emailIcon} />
            <span className={styles.emailText}>{EMAIL}</span>
            <span className={styles.copyIndicator}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </span>
          </button>

          <Button href={`mailto:${EMAIL}`} variant="primary" size="lg">
            Send a message
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>

        {/* Social row */}
        <motion.div
          className={styles.socialGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {SOCIAL_LINKS.map(({ icon: Icon, label, href, handle }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              variants={staggerItem}
            >
              <span className={styles.socialIconWrap}>
                <Icon size={16} />
              </span>
              <span className={styles.socialMeta}>
                <span className={styles.socialLabel}>{label}</span>
                <span className={styles.socialHandle}>{handle}</span>
              </span>
              <ArrowUpRight size={14} className={styles.socialArrow} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
