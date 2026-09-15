import { education } from '../data/profileSections'

function Education() {
  return (
    <section className="section section-anchor education-section" id="education">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Education</span>
          <h2>Technology foundation + management perspective.</h2>
          <p>
            My education reflects the same combination as my project work:
            technical systems thinking supported by operations and management
            understanding.
          </p>
        </div>

        <div className="education-bridge">
          {education.map((item, index) => (
            <div className="education-wrap" key={item.degree}>
              <article className="education-card">
                <div className="education-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <div className="education-period">{item.period}</div>
                <h3>{item.degree}</h3>
                <h4>{item.institute}</h4>
                <p>{item.description}</p>

                <div className="education-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>

              {index === 0 && (
                <div className="education-plus" aria-hidden="true">
                  <span>+</span>
                </div>
              )}
            </div>
          ))}

          <div className="education-outcome">
            <span className="education-outcome-label">Combined Perspective</span>
            <strong>Technology-enabled Operations</strong>
            <small>Business understanding supported by analytical and technical capability.</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
