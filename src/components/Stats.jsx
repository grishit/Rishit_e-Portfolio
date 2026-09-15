const stats = [
  {
    value: '2.5+',
    label: 'Years',
    description: 'Professional technology experience',
    icon: 'bi-briefcase',
  },
  {
    value: '15+',
    label: 'Projects',
    description: 'Analytics, operations & technology work',
    icon: 'bi-kanban',
  },
  {
    value: 'Excel + BI',
    label: 'Dashboards',
    description: 'Interactive analysis and reporting',
    icon: 'bi-speedometer2',
  },
  {
    value: '2',
    label: 'Global Programs',
    description: 'Vietnam + Dubai exposure',
    icon: 'bi-globe2',
  },
]

function Stats() {
  return (
    <section className="stats-section" aria-label="Professional snapshot">
      <div className="container">
        <div className="row g-3">
          {stats.map((stat) => (
            <div className="col-12 col-sm-6 col-xl-3" key={stat.label}>
              <article className="stat-card">
                <div className="stat-icon">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <p>{stat.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
