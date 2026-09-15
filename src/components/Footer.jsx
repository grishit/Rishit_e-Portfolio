import siteConfig from '../data/siteConfig'

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <strong>{siteConfig.name}</strong>
            <span>Operations • Supply Chain • Analytics • Technology</span>
          </div>

          <div className="footer-links">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="#home" aria-label="Back to top">
              <i className="bi bi-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
