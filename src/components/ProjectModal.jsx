import { useEffect } from 'react'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.classList.add('modal-open-custom')
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.classList.remove('modal-open-custom')
      window.removeEventListener('keydown', handleKey)
    }
  }, [project, onClose])

  if (!project) return null

  const availableLinks = Object.entries(project.links || {}).filter(([, value]) => Boolean(value))
  const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

  const linkLabels = {
    github: ['GitHub', 'bi-github'],
    dashboard: ['Dashboard', 'bi-speedometer2'],
    report: ['Report', 'bi-file-earmark-text'],
    demo: ['Demo', 'bi-box-arrow-up-right'],
  }

  return (
    <div className="project-modal-backdrop" onMouseDown={onClose}>
      <section
        className="project-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="project-modal-close" type="button" onClick={onClose} aria-label="Close project details">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="project-modal-header">
          <div className="modal-category-row">
            {project.categories.map((category) => <span key={category}>{category}</span>)}
          </div>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>

        <div className="project-modal-content">
          {project.video && (
            <div className="project-video-block">
              <div className="project-video-heading">
                <span><i className="bi bi-play-circle"></i> Working Demo</span>
                <small>Browser-friendly MP4 hosted with the portfolio</small>
              </div>
              <video
                className="project-demo-video"
                controls
                playsInline
                preload="metadata"
                poster={project.videoPoster ? assetUrl(project.videoPoster) : undefined}
              >
                <source src={assetUrl(project.video)} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          )}

          <div className="modal-section">
            <span className="modal-section-number">01</span>
            <div>
              <h3>Problem / Context</h3>
              <p>{project.problem}</p>
            </div>
          </div>

          <div className="modal-section">
            <span className="modal-section-number">02</span>
            <div>
              <h3>Approach</h3>
              <ul>
                {project.approach.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check2"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal-section">
            <span className="modal-section-number">03</span>
            <div>
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </div>
          </div>

          <div className="modal-meta-grid">
            <div>
              <span className="modal-meta-label">Tools</span>
              <div className="modal-chip-row">
                {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </div>

            <div>
              <span className="modal-meta-label">Skills demonstrated</span>
              <div className="modal-chip-row">
                {project.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>

          {availableLinks.length > 0 && (
            <div className="project-modal-actions">
              {availableLinks.map(([type, href]) => {
                const [label, icon] = linkLabels[type] || ['Open', 'bi-box-arrow-up-right']
                return (
                  <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary-custom" key={type}>
                    <i className={`bi ${icon} me-2`}></i>
                    {label}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectModal
