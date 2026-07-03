import { motion } from 'framer-motion'
import { ExternalLink, GitFork, Zap, Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'
import styles from './Projects.module.css'
import { staggerContainer, staggerItem } from '../../hooks/useScrollReveal'

const SECTIONS = [
  { icon: AlertTriangle, key: 'problem',    label: 'Problem'   },
  { icon: Lightbulb,     key: 'solution',   label: 'Solution'  },
  { icon: Zap,           key: 'challenges', label: 'Challenge' },
  { icon: TrendingUp,    key: 'impact',     label: 'Impact'    },
]

export default function ProjectDetail({ project }) {
  return (
    <motion.div
      key={project.id}
      className={styles.detail}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* ── Header ── */}
      <motion.div className={styles.detailHeader} variants={staggerItem}>
        <div className={styles.detailMeta}>
          <span className={styles.detailTag}>{project.tag}</span>
          {project.featured && <span className={styles.detailFeatured}>Featured</span>}
        </div>
        <h3 className={styles.detailTitle}>{project.title}</h3>
        <p className={styles.detailTagline}>{project.tagline}</p>
      </motion.div>

      {/* ── Tech stack ── */}
      <motion.div className={styles.detailTech} variants={staggerItem}>
        <span className={styles.detailSectionLabel}>Tech stack</span>
        <div className={styles.techTags}>
          {project.tech.map(t => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>
      </motion.div>

      {/* ── Divider ── */}
      <motion.hr className={styles.detailDivider} variants={staggerItem} />

      {/* ── Case study content ── */}
      <motion.div className={styles.caseStudy} variants={staggerContainer}>
        {SECTIONS.map(({ icon: Icon, key, label }) => (
          <motion.div key={key} className={styles.caseBlock} variants={staggerItem}>
            <div className={styles.caseBlockHeader}>
              <span className={styles.caseIcon}>
                <Icon size={14} />
              </span>
              <span className={styles.caseLabel}>{label}</span>
            </div>
            <p className={styles.caseText}>{project[key]}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── CTA buttons ── */}
      <motion.div className={styles.detailCtas} variants={staggerItem}>
        <Button href={project.liveUrl} variant="primary" size="md" external>
          <ExternalLink size={15} />
          Live Demo
        </Button>
        <Button href={project.githubUrl} variant="outline" size="md" external>
          <GitFork size={15} />
          View Code
        </Button>
      </motion.div>
    </motion.div>
  )
}
