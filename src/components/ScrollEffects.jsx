import { useEffect, useState } from 'react'

const sectionIds = [
  'home',
  'about',
  'experience',
  'projects',
  'dashboards',
  'skills',
  'education',
  'contact',
]

function ScrollEffects() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      '.section-heading, .stat-card, .about-story-card, .about-focus-card, .journey-step, .experience-card, .project-card, .dashboard-showcase-card, .evidence-card, .tool-ribbon-item, .skill-group-card, .education-card, .education-outcome, .global-card, .certification-card, .achievement-card, .approach-step, .contact-shell'
    )

    revealTargets.forEach((element) => element.classList.add('reveal-ready'))

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    revealTargets.forEach((element) => revealObserver.observe(element))

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const navLinks = Array.from(
      document.querySelectorAll('.portfolio-navbar .nav-link')
    )

    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href')
        link.classList.toggle('active', href === `#${id}`)
      })
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveLink(visible[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: '-25% 0px -55% 0px',
      }
    )

    sectionElements.forEach((section) => sectionObserver.observe(section))

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top ${showBackToTop ? 'show' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default ScrollEffects
