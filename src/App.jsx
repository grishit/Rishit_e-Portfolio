import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import DashboardGallery from './components/DashboardGallery'
import AnalyticsEvidence from './components/AnalyticsEvidence'
import Skills from './components/Skills'
import Education from './components/Education'
import GlobalExposure from './components/GlobalExposure'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollEffects from './components/ScrollEffects'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <DashboardGallery />
        <AnalyticsEvidence />
        <Skills />
        <Education />
        <GlobalExposure />
        <Certifications />
        <Achievements />
        <Approach />
        <Contact />
      </main>

      <Footer />
      <ScrollEffects />
    </>
  )
}

export default App
