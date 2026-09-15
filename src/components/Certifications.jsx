import { certifications } from '../data/profileSections'

function Certifications() {
  return (
    <section className="section compact-section certifications-section" id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Certifications & Programs</span>
          <h2>Continuous learning across business and technology.</h2>
        </div>

        <div className="certification-grid">
          {certifications.map((item) => (
            <article className="certification-card" key={item.title}>
              <div className="certification-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
