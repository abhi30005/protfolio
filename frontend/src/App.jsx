import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneyTimeline from './components/JourneyTimeline';
import Transformation from './components/Transformation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Learning from './components/Learning';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import GlowBackground from './components/GlowBackground';
import AIAssistant from './components/AIAssistant';
import IntroScreen from './components/IntroScreen';
import ChapterTransition from './components/ChapterTransition';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative bg-brand-bg min-h-screen text-brand-text font-sans overflow-x-hidden selection:bg-brand-indigo/30 selection:text-white">
      {/* Global Interactive Layers */}
      <CustomCursor />
      <GlowBackground />
      <ScrollProgress />
      <AIAssistant />

      <AnimatePresence mode="wait">
        {!introFinished ? (
          <IntroScreen key="intro" onComplete={() => setIntroFinished(true)} />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            
            <main className="relative z-10 flex flex-col">
              
              <ChapterTransition>
                <Hero />
              </ChapterTransition>

              <ChapterTransition>
                <JourneyTimeline />
              </ChapterTransition>

              <ChapterTransition>
                <Transformation />
              </ChapterTransition>

              <ChapterTransition>
                <Learning />
              </ChapterTransition>

              <ChapterTransition>
                <Projects />
              </ChapterTransition>



              <ChapterTransition>
                <Skills />
              </ChapterTransition>

              <ChapterTransition>
                <About />
              </ChapterTransition>

              <ChapterTransition>
                <Contact />
              </ChapterTransition>

            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
