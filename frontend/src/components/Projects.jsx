import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import InteractiveBook from './InteractiveBook';

function ProjectBookModal({ project, onClose }) {
  const [bookDimensions, setBookDimensions] = useState({ width: 320, height: 460 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: book open width is width * 2.2. So half page width should be ~ 40% of screen.
        // Let's make it a bit smaller to fit margins
        const newWidth = Math.floor(width * 0.4);
        setBookDimensions({ width: newWidth, height: Math.floor(newWidth * 1.45) });
      } else if (width < 768) {
        // Tablet portrait
        setBookDimensions({ width: 250, height: 360 });
      } else {
        // Desktop
        setBookDimensions({ width: 320, height: 460 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!project) return null;

  const pages = [
    {
      pageNumber: 1,
      title: "Overview",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-neutral-600 font-medium leading-relaxed">{project.shortDescription}</p>
        </div>
      )
    },
    {
      pageNumber: 2,
      title: "The Problem",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-neutral-600 text-sm leading-relaxed">{project.problem}</p>
        </div>
      )
    },
    {
      pageNumber: 3,
      title: "The Solution",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-neutral-600 text-sm leading-relaxed">{project.solution}</p>
        </div>
      )
    },
    {
      pageNumber: 4,
      title: "Tech Stack",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-700 tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      pageNumber: 5,
      title: "Key Features",
      content: (
        <div className="flex flex-col gap-6">
          <ul className="text-sm text-neutral-600 space-y-1.5 list-disc pl-4 marker:text-neutral-300">
            {project.keyFeatures.slice(0, 6).map((feat, i) => <li key={i}>{feat}</li>)}
            {project.keyFeatures.length > 6 && <li>And more...</li>}
          </ul>
        </div>
      )
    },
    {
      pageNumber: 6,
      title: "Architecture / Flow",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-1 w-full text-neutral-600 text-sm italic">
            {project.projectFlow.split(/→|->/).map((step, index, arr) => (
              <React.Fragment key={index}>
                <div className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-center shadow-sm">
                  {step.trim()}
                </div>
                {index < arr.length - 1 && (
                  <div className="text-neutral-400 text-lg">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          {project.name.includes("PreSales AI Agent V2") && (
            <div className="mt-3 px-2 py-1 bg-amber-100 text-amber-800 border border-amber-200 rounded font-bold text-[10px] inline-block text-center uppercase tracking-widest">
              In Progress
            </div>
          )}
        </div>
      )
    },
    {
      pageNumber: 7,
      title: "Future Scope",
      content: (
        <div className="flex flex-col gap-6">
          <ul className="text-sm text-neutral-600 space-y-1.5 list-disc pl-4 marker:text-neutral-300">
            {project.futureScope.slice(0, 4).map((scope, i) => <li key={i}>{scope}</li>)}
          </ul>
        </div>
      )
    },
    {
      pageNumber: 8,
      title: "Links",
      content: (
        <div className="flex flex-col gap-4 h-full justify-center items-center py-12">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full max-w-[200px] text-center px-4 py-3 bg-neutral-900 text-white rounded-md font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform shadow-md">
              Explore Live
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-full max-w-[200px] text-center px-4 py-3 bg-transparent border-2 border-neutral-200 text-neutral-800 rounded-md font-bold text-xs tracking-widest uppercase hover:bg-neutral-100 transition-colors">
              View GitHub
            </a>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Blurred Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Morphing Container */}
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative z-[110] w-[95vw] md:w-auto h-[90vh] md:h-auto flex items-center justify-center p-4 md:p-12 overflow-hidden rounded-[3rem] bg-transparent"
        style={{ transformStyle: 'preserve-3d', perspective: '2000px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <InteractiveBook
            coverImage={project.image}
            bookTitle={project.name}
            bookAuthor={project.category}
            pages={pages}
            width={bookDimensions.width}
            height={bookDimensions.height}
            onCloseBook={onClose}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-xs font-bold tracking-[0.3em] text-brand-text-muted mb-4 uppercase">What I Built</h2>
        <p className="text-3xl md:text-5xl font-black text-white max-w-2xl mx-auto tracking-tighter">
          Selected works and case studies.
        </p>
      </div>

      <div className="relative z-10 w-full flex justify-center mt-8">
        <ImageGallery projects={projects} onOpenProject={setActiveProject} />
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectBookModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Main component for the Image Gallery
function ImageGallery({ projects, onOpenProject }) {
  const [opened, setOpened] = useState(0)
  const [inPlace, setInPlace] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [gsapReady, setGsapReady] = useState(false)
  const autoplayTimer = useRef(null)

  useEffect(() => {
    const loadScripts = () => {
      if (window.gsap && window.MotionPathPlugin) {
        window.gsap.registerPlugin(window.MotionPathPlugin)
        setGsapReady(true)
        return
      }

      const gsapScript = document.createElement("script")
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      gsapScript.onload = () => {
        const motionPathScript = document.createElement("script")
        motionPathScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js"
        motionPathScript.onload = () => {
          if (window.gsap && window.MotionPathPlugin) {
            window.gsap.registerPlugin(window.MotionPathPlugin)
            setGsapReady(true)
          }
        }
        document.body.appendChild(motionPathScript)
      }
      document.body.appendChild(gsapScript)
    }

    loadScripts()
  }, [])

  const onClick = (index) => {
    if (!disabled) setOpened(index)
  }

  const onInPlace = (index) => setInPlace(index)

  const next = useCallback(() => {
    setOpened((currentOpened) => {
      let nextIndex = currentOpened + 1
      if (nextIndex >= projects.length) nextIndex = 0
      return nextIndex
    })
  }, [projects.length])

  const prev = useCallback(() => {
    setOpened((currentOpened) => {
      let prevIndex = currentOpened - 1
      if (prevIndex < 0) prevIndex = projects.length - 1
      return prevIndex
    })
  }, [projects.length])

  useEffect(() => setDisabled(true), [opened])
  useEffect(() => setDisabled(false), [inPlace])

  // Autoplay
  useEffect(() => {
    if (!gsapReady) return

    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current)
    }

    autoplayTimer.current = window.setInterval(next, 4500)

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current)
      }
    }
  }, [opened, gsapReady, next])

  const galleryRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!galleryRef.current) return
    const updateScale = () => {
      if (galleryRef.current) {
        setScale(galleryRef.current.offsetWidth / 1280)
      }
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const activeProject = projects[inPlace];

  return (
    <div className="relative w-full max-w-[1300px] flex items-center justify-center font-sans h-[500px] md:h-[650px] mx-auto">
      <div ref={galleryRef} className="relative h-[80vmin] w-[95vw] md:w-full max-h-[650px] max-w-[1200px] overflow-hidden rounded-[40px] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/20 backdrop-blur-3xl group">

        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-[40] transition-opacity duration-500 group-hover:opacity-60" />

        {/* HTML Overlay for Text & Buttons */}
        <div className="absolute inset-0 z-[50] flex flex-col justify-end p-8 md:p-12 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {activeProject && (
            <>
              <h3 className="text-white font-black text-3xl md:text-5xl tracking-tighter leading-tight mb-2 drop-shadow-md">
                {activeProject.name || activeProject.title}
              </h3>
              <div className="flex gap-3 items-center mt-2">
                <span className="text-brand-cyan text-[11px] md:text-xs uppercase tracking-widest font-bold bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                  {activeProject.category}
                </span>
                {(activeProject.name || activeProject.title || "").includes("Pre-Sales") && (
                  <span className="text-amber-500 font-bold text-[10px] md:text-[11px] tracking-widest uppercase border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/10">
                    In Progress
                  </span>
                )}
              </div>

              <button
                onClick={() => onOpenProject(activeProject)}
                className="mt-8 px-8 py-4 bg-white text-black hover:bg-brand-cyan hover:scale-105 rounded-full text-center text-xs uppercase tracking-widest font-bold transition-all shadow-[0_10px_20px_rgba(0,0,0,0.3)] max-w-max pointer-events-auto flex items-center gap-2"
              >
                View Case Study <ExternalLink size={14} />
              </button>
            </>
          )}
        </div>

        {/* SVG GSAP Images */}
        {gsapReady &&
          projects.map((project, i) => (
            <div
              key={project.id || i}
              className="absolute left-0 top-0 h-full w-full pointer-events-none"
              style={{ zIndex: inPlace === i ? i : projects.length + 1 }}
            >
              <GalleryImage
                total={projects.length}
                id={i}
                url={project.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"}
                liveUrl={project.liveUrl}
                title={project.name || project.title}
                open={opened === i}
                inPlace={inPlace === i}
                onInPlace={onInPlace}
              />
            </div>
          ))}
        <div className="absolute left-0 top-0 z-[100] h-full w-full pointer-events-none">
          <Tabs projects={projects} onSelect={onClick} />
        </div>
      </div>

      <button
        className="absolute left-2 md:left-0 lg:-left-4 top-1/2 z-[101] flex h-12 w-12 sm:h-16 sm:w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl outline-none transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:text-black text-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        onClick={prev}
        disabled={disabled}
        aria-label="Previous Project"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="absolute right-2 md:right-0 lg:-right-4 top-1/2 z-[101] flex h-12 w-12 sm:h-16 sm:w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl outline-none transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:text-black text-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        onClick={next}
        disabled={disabled}
        aria-label="Next Project"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  )
}

function GalleryImage({ url, liveUrl, title, open, inPlace, id, onInPlace, total }) {
  const [firstLoad, setLoaded] = useState(true)
  const clip = useRef(null)

  const gap = 14
  const circleRadius = 10
  const defaults = { transformOrigin: "center center" }
  const duration = 0.4
  const width = 1200
  const height = 650
  const scale = 700

  const bigSize = circleRadius * scale
  const overlap = 0

  const getPosSmall = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height - 30,
    r: circleRadius,
  })
  const getPosSmallAbove = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height / 2,
    r: circleRadius * 2,
  })
  const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 })
  const getPosEnd = () => ({ cx: width / 2 - bigSize + overlap, cy: height / 2, r: bigSize })
  const getPosStart = () => ({ cx: width / 2 + bigSize - overlap, cy: height / 2, r: bigSize })

  useEffect(() => {
    const gsap = window.gsap
    if (!gsap) return

    setLoaded(false)
    if (clip.current) {
      const flipDuration = firstLoad ? 0 : duration
      const upDuration = firstLoad ? 0 : 0.2
      const bounceDuration = firstLoad ? 0.01 : 1
      const delay = firstLoad ? 0 : flipDuration + upDuration

      if (open) {
        gsap
          .timeline()
          .set(clip.current, { ...defaults, ...getPosSmall() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            duration: upDuration,
            ease: "power3.inOut",
          })
          .to(clip.current, {
            ...defaults,
            ...getPosEnd(),
            duration: flipDuration,
            ease: "power4.in",
            onComplete: () => onInPlace(id),
          })
      } else {
        gsap
          .timeline({ overwrite: true })
          .set(clip.current, { ...defaults, ...getPosStart() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            delay: delay,
            duration: flipDuration,
            ease: "power4.out",
          })
          .to(clip.current, {
            ...defaults,
            motionPath: {
              path: [getPosSmallAbove(), getPosSmall()],
              curviness: 1,
            },
            duration: bounceDuration,
            ease: "bounce.out",
          })
      }
    }
  }, [open, firstLoad])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <clipPath id={`${id}_circleClip`}>
          <circle className="clip" cx="0" cy="0" r={circleRadius} ref={clip}></circle>
        </clipPath>
        <clipPath id={`${id}_squareClip`}>
          <rect className="clip" width={width} height={height}></rect>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}${inPlace ? "_squareClip" : "_circleClip"})`}>
        {liveUrl ? (
          <foreignObject width={width} height={height}>
            <div className="w-full h-full bg-zinc-900 overflow-hidden">
              <iframe
                src={liveUrl}
                className="absolute top-0 left-0 border-none bg-zinc-900 pointer-events-none"
                style={{
                  width: '1280px',
                  height: '1000px',
                  transform: `scale(${width / 1280})`,
                  transformOrigin: '0 0'
                }}
                title={title}
                loading="lazy"
              />
            </div>
          </foreignObject>
        ) : (
          <image width={width} height={height} href={url} className="pointer-events-none" preserveAspectRatio="xMidYMid slice"></image>
        )}
      </g>
    </svg>
  )
}

function Tabs({ projects, onSelect }) {
  const gap = 14
  const circleRadius = 10
  const width = 1200
  const height = 650

  const getPosX = (i) =>
    width / 2 - (projects.length * (circleRadius * 2 + gap) - gap) / 2 + i * (circleRadius * 2 + gap)
  const getPosY = () => height - 30

  const emojis = ['😀', '😎', '🧐', '🤩', '🤓', '🤔', '🤠', '😲', '🥳', '🤯'];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      {projects.map((project, i) => (
        <g key={project.id || i} className="pointer-events-auto">
          <text
            x={getPosX(i)}
            y={getPosY() + 1}
            fontSize={16}
            textAnchor="middle"
            dominantBaseline="central"
            className="pointer-events-none select-none drop-shadow-md"
          >
            {emojis[i % emojis.length]}
          </text>
          <circle
            onClick={() => onSelect(i)}
            className="cursor-pointer fill-transparent stroke-white/40 hover:stroke-white transition-all duration-300"
            strokeWidth="1.5"
            cx={getPosX(i)}
            cy={getPosY()}
            r={circleRadius + 4}
          />
        </g>
      ))}
    </svg>
  )
}
