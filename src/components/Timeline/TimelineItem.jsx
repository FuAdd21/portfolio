import { motion } from 'framer-motion'
import styles from './Timeline.module.css'

export default function TimelineItem({ item, index }) {
  const isLast = item.id === 'now'

  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Rail: dot + connecting line */}
      <div className={styles.rail}>
        <span className={`${styles.dot} ${item.current ? styles.dotCurrent : ''}`}>
          {item.current && <span className={styles.dotPulse} aria-hidden="true" />}
        </span>
        {!isLast && <span className={styles.line} />}
      </div>

      {/* Content card */}
      <div className={`${styles.content} ${item.current ? styles.contentCurrent : ''}`}>
        <div className={styles.contentHeader}>
          <span className={styles.date}>{item.date}</span>
          <span className={styles.tag}>{item.tag}</span>
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
    </motion.div>
  )
}
