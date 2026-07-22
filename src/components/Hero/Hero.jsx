import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Mail, FileText, Download } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import styles from './Hero.module.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const line = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const LIT_CELLS = [
  { top: '12%', left: '16%' },
  { top: '8%', left: '64%' },
  { top: '60%', left: '9%' },
  { top: '68%', left: '82%' },
  { top: '28%', left: '88%' },
  { top: '82%', left: '48%' },
];

const SOCIALS = [
  { icon: Mail, href: 'mailto:fuadaman19@gmail.com', label: 'Email' },
  { icon: SiGithub, href: 'https://github.com/FuAdd21', label: 'GitHub' },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/fuad-aman-bb17a932a/',
    label: 'LinkedIn',
  },
];

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleResumeClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1600);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Grid-line background */}
      <div className={styles.gridPattern} aria-hidden="true" />

      {/* A few lit grid cells for texture */}
      <div className={styles.litCells} aria-hidden="true">
        {LIT_CELLS.map((pos, i) => (
          <span key={i} className={styles.litCell} style={pos} />
        ))}
      </div>

      {/* Soft ambient glow behind the badge */}
      <div className={styles.glowCenter} aria-hidden="true" />

      {/* Social rail */}
      <motion.div
        className={styles.socialRail}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span className={styles.railLine} aria-hidden="true" />
        {SOCIALS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.label === 'Email' ? undefined : '_blank'}
              rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              className={styles.socialBtn}
            >
              <Icon size={16} />
              <span className={styles.socialTooltip}>{social.label}</span>
            </a>
          );
        })}
        <span className={styles.railLine} aria-hidden="true" />
      </motion.div>

      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={line} className={styles.statusRow}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusText}>
            Available for freelance & contract work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={line} className={styles.headline}>
          Hi👋, I'm <span className={styles.name}>Fuad</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={line} className={styles.sub}>
          A <span className={`glow-underline ${styles.term}`}>full-stack</span>{' '}
          developer specializing in building high-performance, scalable web
          applications using the{' '}
          <span className={styles.highlight}>MERN stack</span>. From dashboards
          to internal tools, I focus on clean architecture, great UX, and
          production-ready solutions.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={line} className={styles.ctaRow}>
          <button
            className={styles.ctaPrimary}
            onClick={() => scrollTo('projects')}
          >
            View My Work <ArrowRight size={16} />
          </button>
          {/* <button
            className={styles.ctaOutline}
            onClick={() => scrollTo('contact')}
          >
            Hire Me <ArrowRight size={16} />
          </button> */}
          
          <a
            href="/Fuad-Aman-Resume.pdf"
            download="Fuad-Aman-Resume.pdf"
            className={`${styles.resumeCard} ${styles.ctaPrimary}`}
            onClick={handleResumeClick}
          >
            <span className={styles.resumeIconWrap}>
              <FileText size={17} />
            </span>
            <span className={styles.resumeTextWrap}>
              <span className={styles.resumeTitle}>
                {downloading ? 'Downloading…' : 'Download Resume'}
              </span>
              <span className={styles.resumeMeta}>PDF · Updated 2026</span>
            </span>
            <motion.span
              className={styles.resumeArrow}
              animate={{ y: downloading ? [0, 3, 0] : 0 }}
              transition={{ duration: 0.4 }}
            >
              <Download size={15} />
            </motion.span>
            <motion.span
              className={styles.resumeProgress}
              initial={{ width: '0%' }}
              animate={{ width: downloading ? '100%' : '0%' }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </a>
        </motion.div>

        {/* Quick-credibility strip */}
        <motion.div variants={line} className={styles.statStrip}>
          <span className={styles.statItem}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Projects Shipped</span>
          </span>
          <span className={styles.statDivider} aria-hidden="true" />
          <span className={styles.statItem}>
            <span className={styles.statNum}>MERN</span>
            <span className={styles.statLabel}>Core Stack</span>
          </span>
          <span className={styles.statDivider} aria-hidden="true" />
          <span className={styles.statItem}>
            <span className={styles.statNum}>ET</span>
            <span className={styles.statLabel}>Based · Remote-Ready</span>
          </span>
        </motion.div>
      </motion.div>

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
  );
}