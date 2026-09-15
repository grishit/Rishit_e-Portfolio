import { useEffect, useState } from 'react'
import siteConfig from '../data/siteConfig'

function Navbar() {
  const resumeUrl = `${import.meta.env.BASE_URL}${siteConfig.resume}`
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileNav = () => {
    const nav = document.getElementById('portfolioNav')
    if (!nav || window.innerWidth >= 992) return

    nav.classList.remove('show')
  }

  const links = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Experience', 'experience'],
    ['Projects', 'projects'],
    ['Dashboards', 'dashboards'],
    ['Skills', 'skills'],
    ['Education', 'education'],
    ['Contact', 'contact'],
  ]

  return (
    <nav className={`navbar navbar-expand-lg fixed-top portfolio-navbar ${scrolled ? 'navbar-scrolled' : ''}`} aria-label="Primary navigation">
      <div className="container">
        <a className="navbar-brand brand-mark" href="#home">RG<span>.</span></a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map(([label, id]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`} onClick={closeMobileNav}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">
            <a className="icon-button" href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a className="icon-button" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a className="btn btn-primary-custom" href={resumeUrl} download>Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
