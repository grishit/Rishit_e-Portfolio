const experiences = [
  {
    role: 'Operations Intern',
    company: 'OM Logistics Supply Chain Pvt. Ltd.',
    period: 'April 2026 – July 2026',
    type: 'Operations & Logistics',
    featured: true,
    summary:
      'Worked across branch-level logistics workflows and translated operational observations into a technology-enabled improvement project.',
    points: [
      'Mapped operational workflows across documentation, pickup coordination, shipment handling, dispatch preparation and delivery support.',
      'Identified process dependencies, manual decision points and areas where technology could support operational planning.',
      'Studied shipment and vehicle handling to understand bottlenecks and branch-level coordination requirements.',
      'Converted these observations into an AI-assisted truck-space optimization prototype.',
    ],
    tags: ['Logistics', 'Process Mapping', 'Workflow Analysis', 'Operations', 'AI'],
  },
  {
    role: 'Software Engineer',
    company: 'VectoScalar Technologies Pvt. Ltd.',
    period: 'August 2022 – March 2025',
    type: 'Technology Foundation',
    summary:
      'Built the technical foundation that now supports my approach to analytics, systems thinking and technology-enabled operations.',
    points: [
      'Developed REST APIs across multiple application modules and worked on backend integration.',
      'Reviewed 50+ pull requests, strengthening debugging, code quality and collaborative problem solving.',
      'Evaluated emerging technologies and translated business requirements into functional technical solutions.',
      'Worked with APIs, databases, system integration and cross-functional requirements.',
    ],
    tags: ['REST APIs', 'Databases', 'Systems Thinking', 'Problem Solving', 'Technology'],
  },
  {
    role: 'Operations Analyst Intern',
    company: 'Lab of Future – STREAMER™ Lab',
    period: 'October 2025',
    type: 'Process Excellence',
    summary:
      'Worked on operational standardisation by converting delivery activities into structured workflows, SOPs and controls.',
    points: [
      'Mapped STREAMER™ Lab operational processes and created workflow charts.',
      'Developed SOPs for installation, procurement, training, launch and maintenance.',
      'Created operational checklists and audit templates to improve process consistency and accountability.',
    ],
    tags: ['Process Mapping', 'SOP', 'Standardisation', 'Audit', 'Operations Excellence'],
  },
  {
    role: 'Social Impact Intern',
    company: 'UMEED – Drop of Hope',
    period: 'January 2026',
    type: 'Stakeholder Experience',
    summary:
      'Built field-level stakeholder communication and needs-assessment experience through grassroots interventions.',
    points: [
      'Conducted grassroots interactions to understand awareness gaps across livelihood, hygiene and welfare themes.',
      'Assessed street vendors and supported fundraising outreach and community initiatives.',
      'Strengthened communication, relationship building and stakeholder-engagement skills.',
    ],
    tags: ['Stakeholder Management', 'Field Research', 'Communication', 'Social Impact'],
  },
]

function Experience() {
  return (
    <section className="section section-anchor experience-section" id="experience">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">Experience</span>
            <h2>Technology foundation. Operations direction.</h2>
          </div>
          <p>
            My experience spans software engineering, logistics operations,
            process standardisation and stakeholder-facing field work — giving me
            a broader view of how systems, people and processes connect.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              className={`experience-item ${item.featured ? 'experience-featured' : ''}`}
              key={`${item.company}-${item.role}`}
            >
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="experience-card">
                <div className="experience-topline">
                  <span className="experience-type">{item.type}</span>
                  <span className="experience-period">{item.period}</span>
                </div>

                <div className="experience-title-row">
                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  {item.featured && (
                    <span className="featured-badge">
                      <i className="bi bi-stars"></i>
                      Key Operations Experience
                    </span>
                  )}
                </div>

                <p className="experience-summary">{item.summary}</p>

                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={point}>
                      <i className="bi bi-check2-circle"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {item.featured && (
                  <div className="experience-project-link">
                    <div className="experience-project-icon">
                      <i className="bi bi-boxes"></i>
                    </div>
                    <div>
                      <small>Internship insight became a project</small>
                      <strong>AI-Assisted 3D Loading Optimizer</strong>
                    </div>
                    <a href="#projects" aria-label="Go to projects">
                      Explore
                      <i className="bi bi-arrow-down-right"></i>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
