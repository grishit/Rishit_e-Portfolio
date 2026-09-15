function SectionPreview() {
  return (
    <>
      <section className="coming-section section-anchor" id="projects">
        <div className="container">
          <div className="coming-card">
            <span className="section-kicker">Next Build Stage</span>
            <h2>Projects & Analytics Portfolio</h2>
            <p>
              This section is reserved for your dashboards, Excel work, SQL
              projects, TQM / Six Sigma analysis, supply-chain projects and AI
              prototypes. Stage 3 will turn this into the main interactive
              portfolio section.
            </p>
          </div>
        </div>
      </section>

      <div id="dashboards" className="section-anchor"></div>
      <div id="skills" className="section-anchor"></div>
      <div id="education" className="section-anchor"></div>
      <div id="contact" className="section-anchor"></div>
    </>
  )
}

export default SectionPreview
