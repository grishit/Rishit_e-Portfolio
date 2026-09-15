import { useEffect, useState } from 'react'
import dashboards from '../data/dashboards'

function DashboardGallery() {
  const [activeDashboard, setActiveDashboard] = useState(null)

  useEffect(() => {
    if (!activeDashboard) return

    const handleKey = (event) => {
      if (event.key === 'Escape') setActiveDashboard(null)
    }

    document.body.classList.add('modal-open-custom')
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.classList.remove('modal-open-custom')
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeDashboard])

  const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path}`

  return (
    <>
      <section className="section section-anchor dashboard-section" id="dashboards">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Analytics Gallery</span>
              <h2>Dashboards that turn data into decisions.</h2>
            </div>
            <p>
              A visual showcase of my Excel and Power BI work across manufacturing,
              quality, HR, service operations and event analytics.
            </p>
          </div>

          <div className="dashboard-gallery-grid">
            {dashboards.map((dashboard, index) => (
              <article
                className={`dashboard-showcase-card dashboard-card-${(index % 5) + 1}`}
                key={dashboard.id}
              >
                <button
                  type="button"
                  className="dashboard-image-button"
                  onClick={() => setActiveDashboard(dashboard)}
                  aria-label={`Open ${dashboard.title}`}
                >
                  <img
                    src={getImageUrl(dashboard.image)}
                    alt={dashboard.title}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      event.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  <div className="dashboard-placeholder">
                    <i className="bi bi-speedometer2"></i>
                    <strong>{dashboard.title}</strong>
                    <small>Real dashboard screenshot will replace this placeholder</small>
                  </div>

                  <span className="dashboard-expand-icon">
                    <i className="bi bi-arrows-fullscreen"></i>
                  </span>
                </button>

                <div className="dashboard-showcase-body">
                  <div className="dashboard-meta-row">
                    <span>{dashboard.category}</span>
                    <span>{dashboard.tool}</span>
                  </div>

                  <h3>{dashboard.title}</h3>
                  <p>{dashboard.description}</p>

                  <div className="dashboard-metric-row">
                    {dashboard.metrics.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>

                  <a href={`#${dashboard.projectId ? 'projects' : 'dashboards'}`}>
                    View project context
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeDashboard && (
        <div
          className="dashboard-lightbox"
          onMouseDown={() => setActiveDashboard(null)}
        >
          <div
            className="dashboard-lightbox-panel"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="dashboard-lightbox-close"
              type="button"
              onClick={() => setActiveDashboard(null)}
              aria-label="Close dashboard preview"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="dashboard-lightbox-image">
              <img
                src={getImageUrl(activeDashboard.image)}
                alt={activeDashboard.title}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="dashboard-placeholder dashboard-placeholder-large">
                <i className="bi bi-image"></i>
                <strong>{activeDashboard.title}</strong>
                <small>Upload the final screenshot to this dashboard path.</small>
              </div>
            </div>

            <div className="dashboard-lightbox-copy">
              <span>{activeDashboard.tool}</span>
              <h3>{activeDashboard.title}</h3>
              <p>{activeDashboard.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardGallery
