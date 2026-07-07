import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Send } from 'lucide-react'
import { SiGithub, SiTelegram } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../../hooks/useScrollReveal'

const EMAIL = 'fuadaman19@gmail.com'

const SOCIALS = [
  { icon: SiGithub,     href: 'https://github.com/fuadaman',        label: 'GitHub',   color: '#ffffff', bg: '#24292e' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/fuadaman',   label: 'LinkedIn', color: '#ffffff', bg: '#0A66C2' },
  { icon: SiTelegram,   href: 'https://t.me/fuadaman',              label: 'Telegram', color: '#ffffff', bg: '#26A5E4' },
]

const SUBJECTS = [
  'Frontend Development',
  'Full Stack Project',
  'API Integration',
  'Performance Optimization',
  'Freelance Work',
  'Remote Job Opportunity',
  'Other',
]

// Pulled from .env — see setup steps. Never hardcode these directly.
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [errors, setErrors]   = useState({})
  const [sendError, setSendError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject)        e.subject = 'Pick a subject'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }

    setSending(true)
    setSendError('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          title:   form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setSendError("Something went wrong sending your message. Please try again, or email me directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className={styles.section}>

      {/* ── Top: big editorial CTA — image 1 energy ── */}
      <div className={styles.hero}>
        {/* Green glow from top — matches image 1's gradient */}
        <div className={styles.heroGlow} aria-hidden="true" />

        <motion.div
          className={styles.heroInner}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span className={styles.eyebrow} variants={staggerItem}>
            Get in touch
          </motion.span>

          <motion.h2 className={styles.heroHeading} variants={staggerItem}>
            Let's Make It <em className={styles.heroAccent}>Happen.</em>
          </motion.h2>

          <motion.p className={styles.heroSub} variants={staggerItem}>
            Always open to new opportunities, collaborations, and creative challenges.
            Let's work together to bring your ideas to life.
          </motion.p>

          {/* Social icons row */}
          <motion.div className={styles.socials} variants={staggerItem}>
            {SOCIALS.map(({ icon: Icon, href, label, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialBtn}
                style={{ '--s-bg': bg, '--s-color': color }}
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom: two-column — left text, right form ── */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>

          {/* Left — "Let's talk about you" style — image 2 energy */}
          <motion.div
            className={styles.leftCol}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <span className={styles.leftEyebrow}>Contact</span>
            <h3 className={styles.leftHeading}>
              Let's talk<br />
              <span className={styles.leftAccent}>about your</span><br />
              project.
            </h3>

            <div className={styles.directLinks}>
              <p className={styles.directLabel}>Or reach me directly</p>
              <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
                {EMAIL}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            {sent ? (
              <div className={styles.successState}>
                <span className={styles.successIcon}>✓</span>
                <h4 className={styles.successTitle}>Message sent!</h4>
                <p className={styles.successSub}>
                  Thanks for reaching out — I'll get back to you within a day.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>

                <div className={styles.formHeader}>
                  <h4 className={styles.formTitle}>Send a Message</h4>
                  <p className={styles.formSub}>I reply within 24 hours.</p>
                </div>

                {/* Name + Email row */}
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Fuad Aman"
                      value={form.name}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                {/* Subject dropdown */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select} ${errors.subject ? styles.inputError : ''}`}
                  >
                    <option value="" disabled>Select a subject</option>
                    {SUBJECTS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                </div>

                {/* Message textarea */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                {sendError && <p className={styles.error}>{sendError}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>

    </section>
  )
}