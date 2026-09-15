function ProjectCard({ project, onOpen }) {
  const imageUrl = project.image ? `${import.meta.env.BASE_URL}${project.image}` : ''
  const primaryCategory = project.categories?.[0] || 'Project'

  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className={`project-visual ${project.visualType === 'code' ? 'project-code-visual' : ''}`}>
        {project.visualType === 'code' ? (
          <>
            <div className="code-window-bar">
              <span></span><span></span><span></span>
              <small>analysis.sql</small>
            </div>
            <pre><code>{project.codePreview}</code></pre>
          </>
        ) : (
          <>
            <img
              src={imageUrl}
              alt={project.imageAlt}
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="project-placeholder">
              <i className="bi bi-image"></i>
              <strong>Project Screenshot</strong>
              <small>Add image later in /public/assets</small>
            </div>
          </>
        )}

        <span className="project-category-badge">{primaryCategory}</span>
      </div>

      <div className="project-card-body">
        <div className="project-card-top">
          <h3>{project.title}</h3>
          <button
            className="project-arrow-button"
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`View details for ${project.title}`}
          >
            <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>

        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-tool-row">
          {project.tools.slice(0, 4).map((tool) => <span key={tool}>{tool}</span>)}
          {project.tools.length > 4 && <span>+{project.tools.length - 4}</span>}
        </div>

        <button type="button" className="project-details-link" onClick={() => onOpen(project)}>
          View Case Study
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
