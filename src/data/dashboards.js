const dashboards = [
  {
    id: 'a2-foods-dashboard',
    title: 'A2 Foods DMAIC Quality Dashboard',
    category: 'Quality / Six Sigma',
    tool: 'Microsoft Excel',
    image: 'assets/dashboards/a2-foods-dashboard.png',
    description:
      'Final DMAIC dashboard summarising baseline vs improved quality performance, control-chart metrics and defect analysis.',
    metrics: ['Defect %', 'PPM', 'Sigma Level', 'CL / UCL / LCL'],
    projectId: 'a2-foods-dmaic',
  },
  {
    id: 'manufacturing-tqm-dashboard',
    title: 'Manufacturing TQM Interactive Dashboard',
    category: 'Manufacturing / Quality',
    tool: 'Microsoft Excel',
    image: 'assets/dashboards/manufacturing-dashboard.png',
    description:
      'Interactive manufacturing quality dashboard covering production KPIs, defect trends and control-chart analysis.',
    metrics: ['Production KPIs', 'Defects', 'Mean', 'CL / UCL / LCL'],
    projectId: 'manufacturing-tqm',
  },
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    category: 'People Analytics',
    tool: 'Microsoft Excel',
    image: 'assets/dashboards/hr-dashboard.png',
    description:
      'Management dashboard created after cleaning and structuring a messy employee dataset.',
    metrics: ['Workforce KPIs', 'Department Analysis', 'Employee Distribution'],
    projectId: 'hr-analytics',
  },
  {
    id: 'retail-bank-dashboard',
    title: 'Retail Bank SERVQUAL Analysis',
    category: 'Service Operations',
    tool: 'Microsoft Excel',
    image: 'assets/dashboards/retail-bank-dashboard.png',
    description:
      'Service-quality analysis comparing perception and expectation across the five SERVQUAL dimensions.',
    metrics: ['Tangibles', 'Reliability', 'Responsiveness', 'Assurance', 'Empathy'],
    projectId: 'retail-bank-servqual',
  },
  {
    id: 'meraki-dashboard',
    title: 'Meraki Event Analytics Dashboard',
    category: 'Event Analytics',
    tool: 'Power BI / Excel',
    image: 'assets/dashboards/meraki-dashboard.png',
    description:
      'Participation and project-category dashboard designed to support event planning and reporting.',
    metrics: ['Institute Participation', 'Category Mix', 'Projections'],
    projectId: 'meraki-dashboard',
  },
]

export default dashboards
