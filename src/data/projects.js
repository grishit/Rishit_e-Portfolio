const projects = [
  {
    id: 'loading-optimizer',
    title: 'AI-Assisted 3D Loading Optimizer',
    subtitle: 'Logistics decision support using operational constraints and 3D visualization.',
    categories: ['Operations', 'Supply Chain', 'AI & Technology', 'Excel'],
    featured: true,
    priority: 1,
    image: 'assets/projects/loading-optimizer-video-poster.png',
    imageAlt: 'AI-Assisted 3D Loading Optimizer 3D truck layout preview',
    video: 'assets/videos/om-logistics-optimizer-demo.mp4',
    videoPoster: 'assets/projects/loading-optimizer-video-poster.png',
    description:
      'Designed an AI-assisted Streamlit decision-support prototype for arranging manager-selected dockets inside a truck using dimensions, weight, item type, stackability, fragility and unloading priority.',
    problem:
      'After managers select the truck and dockets, the loading team still has to decide how to arrange mixed consignments so usable space is improved, first-unload dockets stay accessible, and rehandling is reduced.',
    approach: [
      'Mapped the problem as a practical 3D bin-packing / decision-support task.',
      'Used Truck_ID and Docket_No as primary keys to fetch master-data fields from Excel.',
      'Applied rules for weight, volume, stackability, fragility and unloading priority.',
      'Designed loading sequence, zone assignment, warning flags and Plotly-based 3D output.',
    ],
    outcome:
      'Produced a manager-friendly loading-plan concept that combines operational rules, structured master data, feasibility metrics and a virtual 3D layout while keeping managerial judgement in control.',
    tools: ['Python', 'Streamlit', 'Pandas', 'OpenPyXL', 'Plotly 3D'],
    skills: ['Logistics', 'Constraint Mapping', 'Decision Support', 'Prototype Validation'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'a2-foods-dmaic',
    title: 'A2 Foods – Six Sigma DMAIC Quality Improvement',
    subtitle: 'Manufacturing quality analysis using Excel, DMAIC and statistical control.',
    categories: ['Quality', 'Excel', 'Dashboards'],
    featured: true,
    priority: 2,
    image: 'assets/dashboards/a2-foods-dashboard.png',
    imageAlt: 'A2 Foods DMAIC dashboard preview',
    description:
      'Applied the DMAIC framework to a paper-plate manufacturing dataset to measure rejection levels, analyse variation, identify causes and structure an improvement-and-control plan.',
    problem:
      'The manufacturing process showed a baseline defective rate above the desired quality threshold, requiring structured measurement and improvement.',
    approach: [
      'Defined CTQ and baseline quality target.',
      'Measured rejection performance using daily production data.',
      'Built P-chart, control limits, PPM and sigma-level calculations.',
      'Used Pareto and fishbone analysis to structure root-cause investigation.',
      'Compared baseline with an improved dataset and created a final control dashboard.',
    ],
    outcome:
      'Created a faculty-ready DMAIC workbook showing the quality problem from Define through Control with transparent calculations and visual analysis.',
    tools: ['Microsoft Excel', 'DMAIC', 'P-Chart', 'Pareto', 'Fishbone'],
    skills: ['Six Sigma', 'Quality Analytics', 'Control Charts', 'Root Cause Analysis'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'manufacturing-tqm',
    title: 'Manufacturing TQM Interactive Dashboard',
    subtitle: 'Cleaned manufacturing data converted into an interactive quality dashboard.',
    categories: ['Dashboards', 'Excel', 'Quality'],
    featured: true,
    priority: 3,
    image: 'assets/dashboards/manufacturing-dashboard.png',
    imageAlt: 'Manufacturing TQM dashboard preview',
    description:
      'Cleaned and analysed manufacturing data, calculated quality metrics and created an interactive Excel dashboard for production and quality monitoring.',
    problem:
      'Raw manufacturing data needed to be cleaned, structured and converted into management-friendly quality insights.',
    approach: [
      'Cleaned and standardised the source dataset.',
      'Built manufacturing and quality KPIs.',
      'Calculated mean, CL, UCL and LCL values for quality analysis.',
      'Created interactive charts and dashboard views for presentation.',
    ],
    outcome:
      'Produced a single workbook that combines clean data, analysis sheets and an interactive executive dashboard.',
    tools: ['Excel', 'Data Cleaning', 'Control Charts', 'Interactive Dashboard'],
    skills: ['TQM', 'Quality Metrics', 'Dashboard Design', 'Data Visualization'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'hr-analytics',
    title: 'HR Analytics Interactive Dashboard',
    subtitle: 'Employee data cleaning, analysis and executive dashboarding.',
    categories: ['Dashboards', 'Excel', 'Analytics'],
    featured: false,
    priority: 4,
    image: 'assets/dashboards/hr-dashboard.png',
    imageAlt: 'HR analytics dashboard preview',
    description:
      'Cleaned a messy employee dataset, performed structured workforce analysis and developed an interactive management dashboard.',
    problem:
      'The employee dataset required significant cleaning before it could support reliable analysis and management reporting.',
    approach: [
      'Cleaned and standardised employee data.',
      'Built workforce and department-level KPIs.',
      'Created visual summaries and interactive dashboard controls.',
      'Structured the workbook so source data, analysis and dashboard remain auditable.',
    ],
    outcome:
      'Converted messy HR records into a presentation-ready analytical workbook.',
    tools: ['Excel', 'Data Cleaning', 'Dashboarding'],
    skills: ['HR Analytics', 'KPI Design', 'Data Validation', 'Visualization'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'retail-bank-servqual',
    title: 'Retail Bank Service Quality Analysis',
    subtitle: 'SERVQUAL analysis comparing customer expectations and perceptions.',
    categories: ['Dashboards', 'Analytics', 'Service Operations'],
    featured: false,
    priority: 5,
    image: 'assets/projects/retail-bank-priority.png',
    imageAlt: 'Retail bank SERVQUAL analysis preview',
    description:
      'Applied the 22-item SERVQUAL framework to retail branch banking, comparing customer expectations and perceptions across five dimensions and extending the diagnosis with employee-side Gap 1 and Gap 3 analysis.',
    problem:
      'The study needed to identify not only where customer expectations exceeded actual service, but also whether internal staff understanding and self-perception were contributing to the service gap.',
    approach: [
      'Analysed 18 customer responses and 8 employee responses across the 22-item SERVQUAL instrument.',
      'Compared Tangibles, Reliability, Responsiveness, Assurance and Empathy at dimension and item level.',
      'Calculated importance-weighted gaps and employee-side knowledge / delivery-perception gaps.',
      'Prioritised Responsiveness and Reliability using gap severity and customer importance.',
    ],
    outcome:
      'Identified Responsiveness as the largest raw gap and showed that Reliability plus Responsiveness account for roughly two-thirds of the weighted shortfall, leading to a phased service-improvement roadmap.',
    tools: ['Excel', 'SERVQUAL', 'Gap Analysis'],
    skills: ['Service Operations', 'Customer Experience', 'Analytical Interpretation'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'meraki-dashboard',
    title: 'Meraki Event Analytics Dashboard',
    subtitle: 'Participation and project-category insights for event planning.',
    categories: ['Dashboards', 'Analytics'],
    featured: false,
    priority: 6,
    image: 'assets/dashboards/meraki-dashboard.png',
    imageAlt: 'Meraki event analytics dashboard preview',
    description:
      'Developed an event analytics dashboard to analyse institute-wise participation, project-category distribution and participation projections.',
    problem:
      'Event data needed to be transformed into visual information useful for tracking participation and planning.',
    approach: [
      'Structured event participation data.',
      'Analysed institute-wise contribution and category distribution.',
      'Created projections and visual KPI tracking.',
    ],
    outcome:
      'Produced a dashboard that converts event data into planning-oriented insights.',
    tools: ['Power BI', 'Excel', 'Data Visualization'],
    skills: ['Dashboard Design', 'Event Analytics', 'KPI Reporting'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'sql-portfolio',
    title: 'SQL & Database Analysis Portfolio',
    subtitle: 'Business-oriented SQL querying across relational datasets.',
    categories: ['SQL', 'Analytics', 'AI & Technology'],
    featured: true,
    priority: 7,
    image: '',
    imageAlt: 'SQL query editor visual',
    visualType: 'code',
    description:
      'A growing collection of SQL exercises and business queries covering relational analysis, joins, aggregation, views and date-based logic.',
    problem:
      'Business datasets often require direct querying to answer operational and management questions efficiently.',
    approach: [
      'Used filtering, sorting and aggregate functions to structure business questions.',
      'Applied INNER JOIN and LEFT JOIN across related tables.',
      'Created views and date-based conditions for CRM-style analysis.',
      'Worked with queries for accounts, deals, activity and overdue records.',
    ],
    outcome:
      'Demonstrates practical SQL capability beyond syntax by framing queries around business questions.',
    tools: ['SQL', 'MySQL', 'Views', 'Joins', 'Aggregate Functions'],
    skills: ['Relational Analysis', 'Business Querying', 'Database Concepts'],
    links: {
      github: 'https://github.com/grishit',
      dashboard: '',
      report: '',
      demo: '',
    },
    codePreview: `CREATE VIEW vwOverdueInactive AS
SELECT
  a.AccountName,
  d.DealName,
  d.DealValue,
  d.ExpectedCloseDate
FROM Accounts a
INNER JOIN Deals d
  ON a.AccountID = d.AccountID
WHERE d.DealStatus = 'Open';`,
  },
  {
    id: 'ecommerce-demand',
    title: 'E-Commerce Demand Analytics & Prediction',
    subtitle: 'Machine-learning analysis of SKU–Zone–Week demand patterns.',
    categories: ['Analytics', 'Supply Chain', 'AI & Technology'],
    featured: true,
    priority: 8,
    image: 'assets/projects/ecommerce-demand.png',
    imageAlt: 'E-commerce demand analytics project preview',
    description:
      'Analysed SKU–Zone–Week demand patterns to identify regional demand differences, potential stock-out risk and product-level recommendations.',
    problem:
      'Demand varies across products, locations and periods, making inventory decisions difficult without structured analysis.',
    approach: [
      'Cleaned and explored SKU–Zone–Week demand data.',
      'Applied K-Means clustering to identify demand groupings.',
      'Used Logistic Regression and Random Forest for predictive analysis.',
      'Translated model outputs into zone- and product-level recommendations.',
    ],
    outcome:
      'Combined descriptive and predictive analysis to identify demand mismatches and potential stock-out risk.',
    tools: ['Python', 'K-Means', 'Logistic Regression', 'Random Forest'],
    skills: ['Machine Learning', 'Demand Analytics', 'Model Evaluation', 'Supply Chain Analytics'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'maersk-repositioning',
    title: 'Maersk Container Repositioning Analysis',
    subtitle: 'Nine-stage supply-chain process analysis of empty-container movement.',
    categories: ['Supply Chain', 'Operations'],
    featured: false,
    priority: 9,
    image: 'assets/projects/maersk.png',
    imageAlt: 'Maersk container repositioning analysis preview',
    description:
      'Mapped a nine-stage container-repositioning process to examine empty-container imbalance, movement dependencies, storage costs and coordination bottlenecks.',
    problem:
      'Empty-container imbalance can create avoidable repositioning, storage and availability challenges across ports and depots.',
    approach: [
      'Mapped the end-to-end repositioning flow.',
      'Examined dependencies across ports, depots and demand locations.',
      'Identified visibility and allocation issues.',
      'Developed recommendations around demand visibility, depot allocation and inter-port repositioning.',
    ],
    outcome:
      'Produced practical recommendations aimed at improving container availability and reducing avoidable movement.',
    tools: ['Process Mapping', 'Supply Chain Analysis', 'Root Cause Analysis'],
    skills: ['Container Flow', 'Systems Thinking', 'Operational Recommendations'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'streamer-sop',
    title: 'STREAMER™ Lab Process Mapping & SOP Development',
    subtitle: 'Operational standardisation through workflows, SOPs and controls.',
    categories: ['Operations'],
    featured: false,
    priority: 10,
    image: 'assets/projects/streamer-sop.png',
    imageAlt: 'STREAMER Lab process mapping preview',
    description:
      'Mapped operating processes and developed SOPs, checklists and audit templates for STREAMER™ Lab delivery activities.',
    problem:
      'Operational activities needed clearer sequencing, standardisation and accountability.',
    approach: [
      'Mapped installation, procurement, training, launch and maintenance workflows.',
      'Converted processes into structured SOPs.',
      'Created checklists and audit templates.',
    ],
    outcome:
      'Improved process clarity by converting informal activities into repeatable operational documentation.',
    tools: ['Process Mapping', 'SOP Development', 'Checklists', 'Audit Templates'],
    skills: ['Operations Excellence', 'Standardisation', 'Process Control'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'optimizer-project-management',
    title: 'AI Loading Optimizer – Project Management Plan',
    subtitle: 'Implementation planning for the logistics optimization project.',
    categories: ['Operations', 'Strategy'],
    featured: false,
    priority: 11,
    image: 'assets/projects/project-management.png',
    imageAlt: 'Project management artifacts preview',
    description:
      'Extended the loading-optimizer concept into a structured implementation plan using core project-management tools.',
    problem:
      'A prototype also requires implementation planning, ownership, scheduling, risk management and coordination.',
    approach: [
      'Built a Project Charter and WBS.',
      'Defined responsibilities through RACI.',
      'Created Gantt and network views.',
      'Analysed critical path, slack and crashing opportunities.',
      'Developed a risk register.',
    ],
    outcome:
      'Connected technical prototyping with practical implementation planning.',
    tools: ['WBS', 'RACI', 'Gantt', 'Critical Path', 'Risk Register'],
    skills: ['Project Planning', 'Risk Management', 'Scheduling'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'battery-smart',
    title: 'Battery Smart Strategic Diagnostic',
    subtitle: 'Startup strategy and business-model analysis.',
    categories: ['Strategy', 'Analytics'],
    featured: false,
    priority: 12,
    image: 'assets/projects/battery-smart.png',
    imageAlt: 'Battery Smart strategic diagnostic preview',
    description:
      'Developed a strategic diagnostic around business-model friction, market context and growth considerations in an electric-mobility startup.',
    problem:
      'Early-to-growth stage ventures need clarity on business-model constraints and strategic priorities.',
    approach: [
      'Assessed business model and strategic friction.',
      'Examined market positioning and operating considerations.',
      'Structured recommendations and thought-leadership communication.',
    ],
    outcome:
      'Created a professional strategic diagnostic and supporting communication artifact.',
    tools: ['Strategic Analysis', 'Market Analysis', 'Business Model'],
    skills: ['Strategy', 'Structured Problem Solving', 'Business Communication'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'circular-supply-chain',
    title: 'Circular Supply Chain – Shampoo Sachet Waste',
    subtitle: 'Closed-loop supply-chain concept for difficult-to-recycle packaging.',
    categories: ['Supply Chain', 'Strategy'],
    featured: false,
    priority: 13,
    image: 'assets/projects/circular-supply-chain.png',
    imageAlt: 'Circular supply chain project preview',
    description:
      'Developed a closed-loop supply-chain concept covering collection, reverse logistics, recycling and stakeholder responsibilities.',
    problem:
      'Small-format packaging creates collection and recovery challenges within conventional waste-management systems.',
    approach: [
      'Mapped collection and reverse-logistics flow.',
      'Considered stakeholder roles and incentives.',
      'Structured circularity and recycling recommendations.',
    ],
    outcome:
      'Built a sustainability-oriented supply-chain concept focused on operational feasibility.',
    tools: ['Supply Chain Mapping', 'Reverse Logistics', 'Sustainability'],
    skills: ['Circular Supply Chain', 'Stakeholder Mapping', 'Systems Thinking'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'ev-service-recovery',
    title: 'EV Fast-Charging Hub Service Recovery',
    subtitle: 'Service recovery balancing customer trust, fairness and capacity.',
    categories: ['Service Operations', 'Operations'],
    featured: false,
    priority: 14,
    image: 'assets/projects/ev-service-recovery.png',
    imageAlt: 'EV charging service recovery project preview',
    description:
      'Designed a service-recovery response for an EV charging reservation failure while balancing customer satisfaction, queue fairness and charging capacity.',
    problem:
      'A booking failure created a service breakdown where recovery had to protect both the affected customer and existing customers.',
    approach: [
      'Provided a realistic waiting estimate and fair queue handling.',
      'Structured compensation and partner-hub contingency.',
      'Recommended integration between booking and maintenance systems.',
      'Proposed proactive alerts and a standard recovery protocol.',
    ],
    outcome:
      'Connected immediate service recovery with longer-term process improvement.',
    tools: ['Service Recovery', 'Queue Management', 'Process Improvement'],
    skills: ['Customer Experience', 'Capacity Management', 'Service Design'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
  {
    id: 'salon-service-ops',
    title: 'Yours Salon Service Operations Analysis',
    subtitle: 'Service-process analysis of a small walk-in salon operation.',
    categories: ['Service Operations', 'Operations'],
    featured: false,
    priority: 15,
    image: 'assets/projects/salon-service-operations.png',
    imageAlt: 'Salon service operations analysis preview',
    description:
      'Studied the customer journey, service process, capacity and frontstage/backstage activities of a small salon operation.',
    problem:
      'Service businesses must coordinate walk-ins, capacity, customer expectations and operational flow with limited resources.',
    approach: [
      'Mapped customer journey and service steps.',
      'Examined chair and barber capacity.',
      'Reviewed appointment and walk-in process.',
      'Identified service bottlenecks and process characteristics.',
    ],
    outcome:
      'Created a practical service-operations analysis grounded in an actual small-business setting.',
    tools: ['Service Blueprint', 'Capacity Analysis', 'Process Mapping'],
    skills: ['Service Operations', 'Customer Journey', 'Capacity Thinking'],
    links: { github: '', dashboard: '', report: '', demo: '' },
  },
]

export const projectCategories = [
  'All',
  'Dashboards',
  'Excel',
  'SQL',
  'Analytics',
  'Operations',
  'Supply Chain',
  'Quality',
  'AI & Technology',
  'Strategy',
  'Service Operations',
]

export default projects
