/**
 * GlobalBackground
 * ─────────────────────────────────────────────────────────
 * A single, fixed atmospheric background that sits behind the
 * entire site (Hero + every section below it), inspired by the
 * dark dot-grid / radial-glow look of the reference design.
 * Pure CSS (gradients + a dot pattern) — no external image, no
 * text, nothing lifted from the reference besides the "vibe":
 * near-black canvas, soft dot grid, glowing colour blooms.
 *
 * Mounted once in App.jsx, above <Navbar />, so it never scrolls
 * away and every section shows through it consistently.
 */
import styles from './GlobalBackground.module.css'

export default function GlobalBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      {/* fine dot grid — covers the whole page */}
      <div className={styles.dotsFine} />

      {/* larger dot grid, masked so it "blooms" outward from the
          lower-center — echoes the reference image's spotlight feel */}
      <div className={styles.dotsWide} />

      {/* colour blooms — violet + magenta + green, all pulled from
          the site's own accent palette so it stays on-brand */}
      <div className={styles.glowMagenta} />
      <div className={styles.glowViolet} />
      <div className={styles.glowGreen} />

      {/* vignette to keep the far edges calm and dark */}
      <div className={styles.vignette} />
    </div>
  )
}