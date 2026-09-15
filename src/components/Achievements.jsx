import { achievements } from '../data/profileSections'

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Achievements & Leadership</span>
          <h2>Experiences that developed initiative, teamwork and ownership.</h2>
        </div>

        <div className="row g-4">
          {achievements.map((item) => (
            <div className="col-lg-4" key={item.title}>
              <article className="achievement-card h-100">
                <div className="achievement-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <span>{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
