import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className={styles.toggle}
      onClick={(e) => toggle(e)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={!isDark}
    >
      {/* Sliding track knob */}
      <motion.span
        className={styles.knob}
        animate={{ x: isDark ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        {isDark ? (
          <Moon size={12} className={styles.icon} />
        ) : (
          <Sun size={12} className={styles.icon} />
        )}
      </motion.span>
    </button>
  )
}