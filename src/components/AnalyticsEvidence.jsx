const excelCapabilities = [
  'Data Cleaning',
  'Pivot Tables',
  'KPI Design',
  'Interactive Dashboards',
  'Control Charts',
  'P-Charts',
  'Pareto Analysis',
  'Quality Metrics',
  'Lookup / Logical Functions',
  'Management Reporting',
]

const sqlCapabilities = [
  'SELECT / WHERE / ORDER BY',
  'GROUP BY / HAVING',
  'Aggregate Functions',
  'CASE Logic',
  'INNER JOIN',
  'LEFT JOIN',
  'Subqueries',
  'Views',
  'Date Functions',
  'Business Querying',
]

function AnalyticsEvidence() {
  return (
    <section className="section evidence-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Working Evidence</span>
          <h2>Excel and SQL are part of the portfolio, not just a skills list.</h2>
          <p>
            These tools are demonstrated through actual dashboards, analysis
            workbooks and business-oriented database exercises.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <article className="evidence-card excel-evidence-card">
              <div className="evidence-card-header">
                <div className="evidence-icon excel-icon">
                  <i className="bi bi-file-earmark-spreadsheet"></i>
                </div>
                <div>
                  <span className="evidence-label">Microsoft Excel</span>
                  <h3>Analysis, quality and interactive reporting</h3>
                </div>
              </div>

              <p>
                Used across manufacturing, quality management, HR analytics,
                service operations and academic decision-support projects.
              </p>

              <div className="evidence-chip-grid">
                {excelCapabilities.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href="#dashboards" className="evidence-link">
                Explore dashboard work
                <i className="bi bi-arrow-right"></i>
              </a>
            </article>
          </div>

          <div className="col-lg-6">
            <article className="evidence-card sql-evidence-card">
              <div className="evidence-card-header">
                <div className="evidence-icon sql-icon">
                  <i className="bi bi-database"></i>
                </div>
                <div>
                  <span className="evidence-label">SQL & Databases</span>
                  <h3>Business questions translated into queries</h3>
                </div>
              </div>

              <p>
                SQL work is positioned around business analysis — accounts,
                deals, activity, overdue records, joins, views and management
                reporting.
              </p>

              <div className="sql-mini-window">
                <div className="sql-mini-top">
                  <span></span><span></span><span></span>
                  <small>business_analysis.sql</small>
                </div>
                <pre><code>{`SELECT
  AccountName,
  SUM(DealValue) AS PipelineValue
FROM Deals
GROUP BY AccountName
ORDER BY PipelineValue DESC;`}</code></pre>
              </div>

              <div className="evidence-chip-grid">
                {sqlCapabilities.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                href="https://github.com/grishit"
                target="_blank"
                rel="noreferrer"
                className="evidence-link"
              >
                Explore GitHub
                <i className="bi bi-github"></i>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsEvidence
