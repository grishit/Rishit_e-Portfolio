function About() {
  const journey = [
    {
      icon: 'bi-mortarboard',
      label: 'Computer Science',
      note: 'Technical foundation',
    },
    {
      icon: 'bi-code-slash',
      label: 'Software Engineering',
      note: 'Systems & problem solving',
    },
    {
      icon: 'bi-gear-wide-connected',
      label: 'Operations Management',
      note: 'Business process thinking',
    },
    {
      icon: 'bi-truck',
      label: 'Supply Chain',
      note: 'Flow & coordination',
    },
    {
      icon: 'bi-bar-chart-line',
      label: 'Analytics',
      note: 'Insight-driven decisions',
    },
    {
      icon: 'bi-lightbulb',
      label: 'Technology-enabled Ops',
      note: 'Practical improvement',
    },
  ]

  return (
    <section className="section section-anchor about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">My Journey</span>
          <h2>From building software to improving business operations.</h2>
          <p>
            My background combines software engineering, operations management,
            logistics, analytics, quality improvement and process design. The
            common thread is structured problem solving — understanding how a
            system works, identifying where it can improve and using the right
            tools to make that improvement practical.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <article className="about-story-card h-100">
              <div className="about-story-label">
                <i className="bi bi-person-workspace"></i>
                Professional evolution
              </div>

              <p>
                I began with a Computer Science foundation and professional
                software-development experience, working with APIs, databases,
                debugging, requirement analysis and system integration.
              </p>

              <p>
                Through my PGDM in Operations Management, that technical
                perspective expanded into logistics, supply chain, quality,
                business analytics and process improvement. This allows me to
                approach operational problems with both a business-process lens
                and a technology lens.
              </p>

              <blockquote>
                “I see technology, analytics and operations as connected tools
                for solving business problems.”
              </blockquote>

              <div className="about-pill-row">
                <span>Systems Thinking</span>
                <span>Process Improvement</span>
                <span>Analytics</span>
                <span>Operations</span>
                <span>Technology</span>
              </div>
            </article>
          </div>

          <div className="col-lg-5">
            <article className="about-focus-card h-100">
              <span className="section-kicker">What I Bring</span>
              <h3>A cross-functional perspective.</h3>

              <div className="focus-list">
                <div className="focus-item">
                  <div className="focus-icon">
                    <i className="bi bi-diagram-3"></i>
                  </div>
                  <div>
                    <strong>Understand the process</strong>
                    <p>Map workflows, dependencies and operating constraints.</p>
                  </div>
                </div>

                <div className="focus-item">
                  <div className="focus-icon">
                    <i className="bi bi-database-check"></i>
                  </div>
                  <div>
                    <strong>Structure the data</strong>
                    <p>Clean, analyse and convert information into useful metrics.</p>
                  </div>
                </div>

                <div className="focus-item">
                  <div className="focus-icon">
                    <i className="bi bi-cpu"></i>
                  </div>
                  <div>
                    <strong>Choose the right tool</strong>
                    <p>Use Excel, dashboards, SQL, Python or process redesign as needed.</p>
                  </div>
                </div>

                <div className="focus-item">
                  <div className="focus-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div>
                    <strong>Improve decisions</strong>
                    <p>Translate analysis into practical operational action.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="career-journey">
          {journey.map((item, index) => (
            <div className="journey-step-wrap" key={item.label}>
              <article className="journey-step">
                <div className="journey-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <strong>{item.label}</strong>
                <small>{item.note}</small>
              </article>

              {index < journey.length - 1 && (
                <div className="journey-arrow" aria-hidden="true">
                  <i className="bi bi-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
