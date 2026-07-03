import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

const grid = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className={styles.card}
      variants={cardAnim}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Screenshot area */}
      <div className={styles.imgWrap}>

        {/* Real image if available, colored placeholder as fallback */}
        {project.screenshot ? (
          <motion.img
            src={project.screenshot}
            alt={project.title}
            className={styles.img}
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        ) : (
          <motion.div
            className={styles.imgPlaceholder}
            style={{ '--project-color': project.color }}
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className={styles.placeholderTitle}>{project.title}</span>
          </motion.div>
        )}

        {/* Dark overlay on hover */}
        <motion.div
          className={styles.overlay}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className={styles.overlayLabel}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.25, delay: hovered ? 0.05 : 0 }}
          >
            <ArrowUpRight size={18} />
            View Project
          </motion.div>
        </motion.div>

        {/* Featured tag */}
        {project.tag && (
          <span className={styles.tagBadge}>{project.tag}</span>
        )}

        {/* Tech pills — appear on hover */}
        <motion.div
          className={styles.techRow}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.2, delay: hovered ? 0.08 : 0 }}
        >
          {project.tech.map(t => (
            <span key={t} className={styles.techPill}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* Card footer */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.projectTitle}>{project.title}</span>
          <span className={styles.projectCategory}>{project.category}</span>
        </div>

        <div className={styles.footerLinks}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
            onClick={e => e.stopPropagation()}
          >
            <SiGithub size={16} />
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewLink}
          >
            View Project
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className={styles.heading}>
            Latest <span className={styles.headingAccent}>Projects</span>
          </h2>
          <p className={styles.subheading}>
            Five projects, each targeting a different layer of the stack.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}