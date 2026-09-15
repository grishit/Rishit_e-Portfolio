import siteConfig from '../data/siteConfig'

function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}${siteConfig.resume}`

  return (
    <section className="section section-anchor contact-section" id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-copy">
            <span className="contact-kicker">Let’s Connect</span>
            <h2>Let’s build better operations.</h2>
            <p>
              I am interested in opportunities across Operations, Supply Chain,
              Operations Excellence, Business Analytics, Process Improvement and
              technology-enabled operations.
            </p>

            <div className="contact-role-row">
              <span>Operations</span>
              <span>Supply Chain</span>
              <span>Analytics</span>
              <span>Process Improvement</span>
              <span>Technology-enabled Ops</span>
            </div>
          </div>

          <div className="contact-actions">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-action"
            >
              <i className="bi bi-linkedin"></i>
              <div>
                <small>Professional Network</small>
                <strong>Connect on LinkedIn</strong>
              </div>
              <i className="bi bi-arrow-up-right"></i>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="contact-action"
            >
              <i className="bi bi-github"></i>
              <div>
                <small>Technical Work</small>
                <strong>Explore GitHub</strong>
              </div>
              <i className="bi bi-arrow-up-right"></i>
            </a>

            <a href={`mailto:${siteConfig.email}`} className="contact-action">
              <i className="bi bi-envelope"></i>
              <div>
                <small>Email</small>
                <strong>{siteConfig.email}</strong>
              </div>
              <i className="bi bi-arrow-up-right"></i>
            </a>

            <a href={resumeUrl} download className="contact-action">
              <i className="bi bi-file-earmark-person"></i>
              <div>
                <small>Resume</small>
                <strong>Download Resume</strong>
              </div>
              <i className="bi bi-download"></i>
            </a>
          </div>

          <div className="contact-location">
            <i className="bi bi-geo-alt"></i>
            {siteConfig.location}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
