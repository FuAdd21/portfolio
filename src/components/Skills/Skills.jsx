import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { skillGroups } from '../../data/skills'
import styles from './Skills.module.css'
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '../../hooks/useScrollReveal'

// Tech chip with real brand-colored logo icon
function TechChip({ name, icon: Icon, color }) {
  return (
    <div className={styles.chip}>
      <span className={styles.chipIconWrap} style={{ '--icon-color': color }}>
        <Icon size={16} className={styles.chipIcon} />
      </span>
      <span className={styles.chipName}>{name}</span>
    </div>
  )
}

// Featured skill block for the active group — icon + name, no bars or percentages
function SkillFeature({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      className={styles.featureRow}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className={styles.featureIconWrap} style={{ '--icon-color': color }}>
        <Icon size={22} className={styles.featureIcon} />
      </span>
      <span className={styles.featureName}>{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id)
  const current = skillGroups.find(g => g.id === activeGroup)

  return (
    <section id="skills" className={styles.skills}>
      {/* Subtle dev-themed background texture */}
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.glowOrb} aria-hidden="true" />

      <div className={styles.inner}>

        {/* Header */}
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className={styles.heading}>
            My technical <span className={styles.headingAccent}>toolkit</span>
          </h2>
          <p className={styles.subheading}>
            Technologies I work with daily — from pixel-perfect UIs to production APIs.
          </p>
        </motion.div>

        {/* Content: tabs + featured icons on left, full chip grid on right */}
        <div className={styles.content}>

          {/* Left: tab switcher + featured skill list */}
          <motion.div
            className={styles.featureCol}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Group tabs */}
            <div className={styles.tabs} role="tablist" aria-label="Skill groups">
              {skillGroups.map(g => (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={activeGroup === g.id}
                  aria-controls={`panel-${g.id}`}
                  className={`${styles.tab} ${activeGroup === g.id ? styles.tabActive : ''}`}
                  onClick={() => setActiveGroup(g.id)}
                >
                  {g.label}
                  {activeGroup === g.id && (
                    <motion.span
                      className={styles.tabIndicator}
                      layoutId="tabIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Featured icon list — switches with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup}
                id={`panel-${activeGroup}`}
                role="tabpanel"
                className={styles.featurePanel}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {current.skills.map((skill, i) => (
                  <SkillFeature key={skill.name} {...skill} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: all-skills chip grid with real logos */}
          <motion.div
            className={styles.chipCol}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className={styles.chipLabel}>Full stack</p>
            <div className={styles.chipGrid}>
              {skillGroups.flatMap(g => g.skills).map((skill) => (
                <motion.div key={skill.name} variants={staggerItem}>
                  <TechChip {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
