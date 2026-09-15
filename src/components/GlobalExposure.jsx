import { globalExposure } from '../data/profileSections'

function GlobalExposure() {
  return (
    <section className="section global-section" id="global-exposure">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">International Immersion</span>
            <h2>Learning across cultures, industries and business environments.</h2>
          </div>
          <p>
            My international immersion experiences have combined academic
            learning, industry exposure and cross-cultural understanding across
            Vietnam, Dubai and Malaysia.
          </p>
        </div>

        <div className="global-grid global-grid-three">
          {globalExposure.map((item, index) => (
            <article className="global-card" key={item.location}>
              <div className="global-number">0{index + 1}</div>

              <div className="global-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <span className="global-city">{item.city}</span>
              <h3>{item.location}</h3>
              <h4>{item.program}</h4>
              <strong>{item.organization}</strong>

              {item.period && (
                <div className="global-period">
                  <i className="bi bi-calendar3"></i>
                  {item.period}
                </div>
              )}

              <p>{item.description}</p>

              <div className="global-highlights">
                {item.highlights?.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalExposure
