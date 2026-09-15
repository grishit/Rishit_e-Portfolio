import siteConfig from '../data/siteConfig'

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}${siteConfig.resume}`
  return (
    <section className="hero-section section-anchor" id="home">
      <div className="hero-grid-pattern"></div>

      <div className="container hero-container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <div className="eyebrow">
              Operations <span>•</span> Supply Chain <span>•</span> Analytics <span>•</span> Technology
            </div>

            <h1 className="hero-name">{siteConfig.name}</h1>

            <h2 className="hero-title">
              Turning operational challenges into
              <span> data-driven, technology-enabled solutions.</span>
            </h2>

            <p className="hero-copy">
              Operations-focused PGDM candidate with a Computer Science background
              and 2.5+ years of professional technology experience, combining
              analytics, dashboards, process improvement, supply-chain thinking
              and technology to solve practical business problems.
            </p>

            <div className="d-flex flex-wrap gap-3 hero-actions">
              <a href="#projects" className="btn btn-primary-custom btn-lg">
                Explore My Work
                <i className="bi bi-arrow-down-right ms-2"></i>
              </a>

              <a href={resumeUrl} className="btn btn-outline-custom btn-lg" download>
                <i className="bi bi-download me-2"></i>
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
                LinkedIn
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
                GitHub
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="impact-shell">
              <div className="impact-glow"></div>

              <div className="impact-card central-impact">
                <span className="impact-label">FOCUS</span>
                <strong>Business Impact</strong>
                <small>Better decisions through data, process & technology</small>
              </div>

              <div className="impact-card capability capability-one">
                <i className="bi bi-diagram-3"></i>
                <div><strong>Operations</strong><small>Process & execution</small></div>
              </div>

              <div className="impact-card capability capability-two">
                <i className="bi bi-truck"></i>
                <div><strong>Supply Chain</strong><small>Flow & coordination</small></div>
              </div>

              <div className="impact-card capability capability-three">
                <i className="bi bi-bar-chart"></i>
                <div><strong>Analytics</strong><small>Insights & dashboards</small></div>
              </div>

              <div className="impact-card capability capability-four">
                <i className="bi bi-cpu"></i>
                <div><strong>Technology</strong><small>Automation & systems</small></div>
              </div>

              <svg className="connection-lines" viewBox="0 0 520 520" preserveAspectRatio="none" aria-hidden="true">
                <line x1="95" y1="120" x2="260" y2="260" />
                <line x1="425" y1="120" x2="260" y2="260" />
                <line x1="95" y1="405" x2="260" y2="260" />
                <line x1="425" y1="405" x2="260" y2="260" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
