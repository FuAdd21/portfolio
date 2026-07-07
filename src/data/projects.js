import {
  SiReact, SiNodedotjs, SiExpress, SiMysql, SiJavascript, SiHtml5, SiCss,
} from 'react-icons/si'

export const projects = [
  {
    id:         'evangadi-forum',
    title:      'Evangadi Forum',
    tagline:    'AI-powered Q&A community platform',
    tag:        'Live',
    liveUrl:    'https://evangadi-forum-app-pi.vercel.app/',
    githubUrl:  'https://github.com/FuAdd21/Evangadi-forum-app',
    screenshot: '/images/evangadi-forum.png',
    description:
      "A full-stack Q&A forum enhanced with AI — combining semantic similarity search and a RAG-based grounded query system so users get relevant answers, not just keyword matches. Built collaboratively with a team using Agile workflows and GitHub-based version control.",
    role: {
      heading: 'Role & Contribution',
      body: "Worked within a team following Agile SDLC and a structured GitHub workflow (feature branches, pull requests, code review). Personally owned the similarity-question feature (surfacing related questions via semantic matching), the AI-grounded RAG query system, and the MyQuestions view on the frontend. Also handled full-stack deployment — resolving SSL/TLS configuration, CORS mismatches between Render and Vercel, a mysql2 prepared-statement bug affecting LIMIT/OFFSET queries, and migration/seeding scripts with vector embedding support.",
    },
    tools: [
      { name: 'React',   icon: SiReact,     color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress,   color: '#8c8787' },
      { name: 'MySQL',   icon: SiMysql,     color: '#4479A1' },
    ],
  },
  {
    id:         'netflix',
    title:      'Netflix Clone',
    tagline:    'Streaming platform UI',
    tag:        'Live',
    liveUrl:    'https://netflix-web-clone-ivory.vercel.app/',
    githubUrl:  'https://github.com/FuAdd21/Netflix-web-Clone',
    screenshot: '/images/netflix.png',
    description:
      "A pixel-perfect recreation of one of the world's most recognisable streaming UIs — built without any component library, just custom CSS and careful layout work.",
    role: {
      heading: 'Role & Contribution',
      body: "Built every component from scratch — the hero banner, scrollable category rows, and hover-card overlays. Used CSS background-image techniques for precise poster control and managed z-index layering across nested hover states.",
    },
    tools: [
      { name: 'React',      icon: SiReact,      color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'CSS',        icon: SiCss,        color: '#663399' },
      { name: 'HTML5',      icon: SiHtml5,      color: '#E34F26' },
    ],
  },
  {
    id:         'chatgpt',
    title:      'ChatGPT Clone',
    tagline:    'AI chat interface',
    tag:        'Live',
    liveUrl:    'https://chatgpt-clone-frontend-mu.vercel.app/',
    githubUrl:  'https://github.com/FuAdd21/chatgpt-clone-frontend',
    screenshot: '/images/chatgpt.png',
    description:
      "A real AI chat interface with live streaming responses — not a static mockup. Built to test what it actually takes to wire a production LLM into a usable product.",
    role: {
      heading: 'Role & Contribution',
      body: "Integrated Groq's inference API after hitting Gemini's free-tier limits. Built a Node/Express backend to keep the API key server-side, and a React frontend that renders streaming tokens in real time without blocking the UI.",
    },
    tools: [
      { name: 'React',   icon: SiReact,     color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress,   color: '#8c8787' },
    ],
  },
  {
    id:         'scheduler',
    title:      'Smart Scheduler',
    tagline:    'Full-stack task manager',
    tag:        'Live',
    liveUrl:    'https://smart-scheduler-peach.vercel.app/',
    githubUrl:  'https://github.com/FuAdd21/Smart-Scheduler',
    screenshot: '/images/Scheduler.png',
    description:
      "A full-stack task and schedule management app covering the complete request lifecycle — from UI interaction to database persistence.",
    role: {
      heading: 'Role & Contribution',
      body: "Designed the MySQL schema, built a RESTful Express API with parameterised queries to prevent SQL injection, and connected the React frontend with optimistic UI updates that roll back gracefully on API errors.",
    },
    tools: [
      { name: 'React',   icon: SiReact,     color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'MySQL',   icon: SiMysql,     color: '#4479A1' },
      { name: 'Express', icon: SiExpress,   color: '#8c8787' },
    ],
  },
  {
    id:         'apple',
    title:      'Apple Clone',
    tagline:    'CSS precision showcase',
    tag:        'Live',
    liveUrl:    'https://myclone-917248.netlify.app/',
    githubUrl:  'https://github.com/FuAdd21/Apple.com-clone',
    screenshot: '/images/apple.png',
    description:
      "Apple's site is a gold standard for web design — exact spacing, smooth product transitions, and grids that hold up on every screen. Reproducing it tests real CSS mastery.",
    role: {
      heading: 'Role & Contribution',
      body: "Reconstructed the layout system section by section — sticky nav, hero transitions, feature grids — using only HTML, CSS, and vanilla JS. No framework, no shortcuts.",
    },
    tools: [
      { name: 'HTML5',      icon: SiHtml5,      color: '#E34F26' },
      { name: 'CSS',        icon: SiCss,        color: '#663399' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    id:         'puppy',
    title:      'Responsive Puppy Project',
    tagline:    'Mobile-first layout foundation',
    tag:        'Live',
    liveUrl:    'https://puppy-mediaquery.netlify.app/',
    githubUrl:  'https://github.com/FuAdd21/puppy-project',
    screenshot: '/images/puppy.png',
    description:
      "The foundation every other project in this portfolio builds on — mastering fluid, mobile-first responsive design using nothing but media queries.",
    role: {
      heading: 'Role & Contribution',
      body: "Built a mobile-first layout with breakpoints chosen around content needs rather than device presets, plus fluid typography and adaptive image sizing throughout.",
    },
    tools: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS',   icon: SiCss,   color: '#663399' },
    ],
  },
]