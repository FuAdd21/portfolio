import { motion } from 'framer-motion'
import { ArrowUpRight, Wrench, UserCircle2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function ProjectRow({ project }) {
  return (
    <motion.article
      className={styles.row}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* ── Left: screenshot in a browser-chrome frame ── */}
      <div className={styles.screenshotCol}>
        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
            <span className={styles.urlPill}>
              {project.title.toLowerCase().replace(/\s+/g, '')}.dev
            </span>
          </div>

          <div className={styles.screenshotWrap}>
            <img
              src={project.screenshot}
              alt={project.title}
              className={styles.screenshot}
              loading="lazy"
            />
          </div>

          {project.tag && (
            <span className={styles.liveBadge}>
              <span className={styles.liveDot} />
              {project.tag}
            </span>
          )}
        </div>
      </div>

      {/* ── Right: details ── */}
      <div className={styles.detailCol}>

        <div className={styles.detailTop}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={styles.projectTagline}>{project.tagline}</span>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.roleBox}>
          <div className={styles.roleBoxHeader}>
            <span className={styles.roleIcon}>
              <UserCircle2 size={18} />
            </span>
            <h4 className={styles.roleHeading}>{project.role.heading}</h4>
          </div>
          <p className={styles.roleBody}>{project.role.body}</p>
        </div>

        <div className={styles.toolsSection}>
          <div className={styles.toolsHeader}>
            <span className={styles.toolsIcon}>
              <Wrench size={14} />
            </span>
            <span className={styles.toolsLabel}>Tools & Technologies</span>
          </div>
          <div className={styles.toolsGrid}>
            {project.tools.map(({ name, icon: Icon, color }) => (
              <span
                key={name}
                className={styles.toolBadge}
                style={{ '--tool-color': color }}
                title={name}
              >
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>

        <div className={styles.linkRow}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryLink}
          >
            View Live Project
            <ArrowUpRight size={15} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="View source on GitHub"
          >
            <SiGithub size={16} />
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
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className={styles.eyebrow}>Selected Work</span>
          <h2 className={styles.heading}>
            Featured <em className={styles.headingAccent}>Projects</em>
          </h2>
          <p className={styles.subheading}>
            Six projects, each targeting a different layer of the stack.
          </p>
        </motion.div>

        <div className={styles.list}>
          {projects.map(project => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}