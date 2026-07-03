import styles from './Button.module.css'

export default function Button({
  children,
  href,
  onClick,
  variant = 'outline',   // 'primary' | 'outline'
  size = 'md',           // 'sm' | 'md' | 'lg'
  external = false,
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ')

  const extProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (href) {
    return (
      <a href={href} className={classes} {...extProps} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
