import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import JourneyTimeline from './components/JourneyTimeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Learning from './components/Learning';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AIAssistant from './components/AIAssistant';
import IntroScreen from './components/IntroScreen';
import ChapterTransition from './components/ChapterTransition';
import { motion, useScroll, useSpring } from 'framer-motion';

const chapters = [
  { id: 'intro', label: '01 INTRO' },
  { id: 'journey', label: '02 JOURNEY' },
  { id: 'learning', label: '03 LEARNING' },
  { id: 'projects', label: '04 PROJECTS' },
  { id: 'skills', label: '05 SKILLS' },
  { id: 'about', label: '06 ABOUT' },
  { id: 'contact', label: '07 CONTACT' },
];

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeChapter, setActiveChapter] = useState('intro');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [introFinished]);

  return (
    <div className="min-h-screen relative selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {!introFinished && <IntroScreen onComplete={() => setIntroFinished(true)} />}
      
      {introFinished && (
        <>
          <CustomCursor />
          
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transform origin-left z-[60]"
            style={{ scaleX }}
          />

          <Navbar />
          
          {/* Chapter Indicator */}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50 mix-blend-difference text-white">
            {chapters.map((chapter) => (
              <a 
                key={chapter.id} 
                href={`#${chapter.id}`}
                className={`text-[10px] font-bold tracking-widest transition-all duration-300 origin-right ${
                  activeChapter === chapter.id 
                    ? 'opacity-100 scale-110 text-indigo-400' 
                    : 'opacity-40 hover:opacity-100'
                }`}
              >
                {chapter.label}
              </a>
            ))}
          </div>

          <main className="relative z-10">
            <ChapterTransition id="intro">
              <Hero />
              <ProfileCard />
            </ChapterTransition>
            
            <section id="journey" className="relative min-h-screen">
              <JourneyTimeline />
            </section>
            
            <ChapterTransition id="learning" className="min-h-screen bg-white">
              <Learning />
            </ChapterTransition>
            
            <ChapterTransition id="projects">
              <Projects />
            </ChapterTransition>
            
            <ChapterTransition id="skills" className="min-h-screen">
              <Skills />
            </ChapterTransition>
            
            <ChapterTransition id="about" className="min-h-screen">
              <About />
            </ChapterTransition>
            
            <ChapterTransition id="contact" className="min-h-screen">
              <Contact />
            </ChapterTransition>
          </main>

          <Footer />
          <AIAssistant />
        </>
      )}
    </div>
  );
}

export default App;
