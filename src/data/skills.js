import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit, SiGithub, SiVite,
  SiPostman,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Each skill carries its real brand icon + official brand color (for icon tint + glow)
export const skillGroups = [
  {
    id:    'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React',        icon: SiReact,       color: '#61DAFB' },
      { name: 'JavaScript',   icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'HTML & CSS',   icon: SiHtml5,       color: '#E34F26' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Bootstrap',    icon: SiBootstrap,   color: '#7952B3' },
    ],
  },
  {
    id:    'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress,   color: '#726e6ee7' },
      { name: 'Postman',  icon: SiPostman,   color: '#ca552bee' },
    ],
  },
  {
    id:    'database',
    label: 'Database',
    skills: [
      { name: 'MySQL',   icon: SiMysql,   color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#029a04' },
    ],
  },
  {
    id:    'tools',
    label: 'Tools',
    skills: [
      { name: 'Git',     icon: SiGit,     color: '#F05032' },
      { name: 'GitHub',  icon: SiGithub,  color: '#6b6969c4' },
      { name: 'Vite',    icon: SiVite,    color: '#646CFF' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ],
  },
]
