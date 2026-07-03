import { motion } from 'framer-motion'
import styles from './Projects.module.css'

export default function ProjectCard({ project, isActive, onClick }) {
  return (
    <motion.button
      className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
      onClick={onClick}
      whileHover={{ x: isActive ? 0 : 4 }}
      transition={{ duration: 0.15 }}
      aria-pressed={isActive}
    >
      {/* Active indicator bar */}
      {isActive && (
        <motion.span
          className={styles.cardBar}
          layoutId="cardBar"
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
        />
      )}

      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <span className={styles.cardTag}>{project.tag}</span>
          {project.featured && (
            <span className={styles.cardFeatured}>Featured</span>
          )}
        </div>
        <span className={styles.cardTitle}>{project.title}</span>
        <span className={styles.cardTagline}>{project.tagline}</span>
      </div>
    </motion.button>
  )
}
