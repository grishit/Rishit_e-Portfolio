const steps = [
  {
    number: '01',
    title: 'Understand',
    text: 'Understand the business process, context and operating constraints.',
    icon: 'bi-search',
  },
  {
    number: '02',
    title: 'Measure',
    text: 'Collect, clean and structure the data that describes the problem.',
    icon: 'bi-rulers',
  },
  {
    number: '03',
    title: 'Analyse',
    text: 'Identify bottlenecks, trends, risks and root causes.',
    icon: 'bi-bar-chart-line',
  },
  {
    number: '04',
    title: 'Solve',
    text: 'Design a practical process, analytical or technology-enabled solution.',
    icon: 'bi-lightbulb',
  },
  {
    number: '05',
    title: 'Improve',
    text: 'Measure results, learn from the outcome and refine the process.',
    icon: 'bi-arrow-repeat',
  },
]

function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">My Approach</span>
            <h2>Structured problem solving from process to improvement.</h2>
          </div>
          <p>
            The objective is not technology for technology’s sake. The objective
            is better operational decisions and more reliable execution.
          </p>
        </div>

        <div className="approach-flow">
          {steps.map((step, index) => (
            <div className="approach-step-wrap" key={step.number}>
              <article className="approach-step">
                <div className="approach-step-top">
                  <span>{step.number}</span>
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>

              {index < steps.length - 1 && (
                <div className="approach-arrow" aria-hidden="true">
                  <i className="bi bi-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <blockquote className="approach-quote">
          “Technology is useful when it leads to better operational decisions.”
        </blockquote>
      </div>
    </section>
  )
}

export default Approach
