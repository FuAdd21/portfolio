import styles from './Footer.module.css'

const QUICK_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (href) => (e) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.name}>Fuad Aman</span>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.role}>Full Stack Developer</span>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {QUICK_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={handleClick(href)} className={styles.link}>
              {label}
            </a>
          ))}
        </nav>

        <span className={styles.copyright}>© {year} Fuad Aman</span>
      </div>
    </footer>
  )
}
