/**
 * Projects Configuration
 * These are demo/illustrative projects. Replace with real projects when available.
 * To add a project: add an entry to the projectsData array below.
 */

const projectsData = [
  {
    id: "business-performance-dashboard",
    title: "Business Performance Dashboard",
    description: "Interactive dashboard analysis demonstrating data modelling and KPI visualization.",
    type: "Demo Project",
    technologies: ["Power BI", "SQL"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%231a2744' width='400' height='250'/%3E%3Crect x='20' y='20' width='360' height='210' fill='none' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='30' y='45' font-family='monospace' fill='%2300d4ff' font-size='12'%3EDashboard: Sales Overview%3C/text%3E%3Crect x='30' y='60' width='170' height='70' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='40' y='80' font-family='sans-serif' font-weight='bold' fill='%23ffffff' font-size='14'%3E$2.4M%3C/text%3E%3Ctext x='40' y='98' font-family='sans-serif' fill='%2388a8c4' font-size='11'%3ETotal Revenue%3C/text%3E%3Ctext x='40' y='115' font-family='sans-serif' fill='%2300d4ff' font-size='10'%3E%E2%86%91 12% vs last month%3C/text%3E%3Crect x='210' y='60' width='170' height='70' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='220' y='80' font-family='sans-serif' font-weight='bold' fill='%23ffffff' font-size='14'%3E847K%3C/text%3E%3Ctext x='220' y='98' font-family='sans-serif' fill='%2388a8c4' font-size='11'%3EOrders Processed%3C/text%3E%3Ctext x='220' y='115' font-family='sans-serif' fill='%2300d4ff' font-size='10'%3E%E2%86%91 8% vs last month%3C/text%3E%3Cpath d='M 30 160 L 50 150 L 70 155 L 90 140 L 110 145 L 130 130 L 150 135 L 170 120 L 190 125 L 210 145 L 230 135 L 250 140 L 270 120 L 290 130 L 310 115 L 330 125 L 350 110 L 370 120' stroke='%2300d4ff' fill='none' stroke-width='2'/%3E%3Ctext x='30' y='210' font-family='monospace' fill='%2388a8c4' font-size='10'%3EData Model: Star Schema | Refresh: Daily%3C/text%3E%3C/svg%3E",
    businessProblem: "Need to track real-time sales performance, identify trends, and enable quick decision-making across multiple business units.",
    dataApproach: "Built from sample transaction, customer, and product datasets with dimensional modelling.",
    technicalApproach: "Created a star schema in SQL with fact and dimension tables, then modelled in Power BI with measures for revenue, volume, and growth metrics.",
    outcome: "Interactive dashboard enabling self-service analysis of sales trends, regional performance, and product profitability.",
    demonstrates: [
      "Data preparation and quality checks",
      "Dimensional data modelling",
      "Visual hierarchy and KPI design",
      "Business-focused data storytelling"
    ],
    artifacts: [
      "Sample data model (Star Schema)",
      "SQL preparation queries",
      "Dashboard design specification"
    ],
    notes: "This is an illustrative case study using sample data. Replace with your actual Power BI project when available."
  },
  {
    id: "etl-integration-pipeline",
    title: "ETL Data Integration Pipeline",
    description: "SSIS workflow demonstrating data extraction, transformation, validation, and load processes.",
    type: "Demo Project",
    technologies: ["SQL Server", "SSIS"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%231a2744' width='400' height='250'/%3E%3Crect x='20' y='20' width='360' height='210' fill='none' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='30' y='45' font-family='monospace' fill='%2300d4ff' font-size='12'%3EETLPipeline: Data Integration Flow%3C/text%3E%3Crect x='30' y='70' width='80' height='50' rx='5' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='50' y='95' font-family='sans-serif' fill='%2300d4ff' font-size='11' text-anchor='middle'%3EExtract%3C/text%3E%3Ctext x='50' y='110' font-family='monospace' fill='%2388a8c4' font-size='9' text-anchor='middle'%3CSQL,CSV%3E%3C/text%3E%3Cpath d='M 110 95 L 135 95' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Crect x='135' y='70' width='80' height='50' rx='5' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='175' y='95' font-family='sans-serif' fill='%2300d4ff' font-size='11' text-anchor='middle'%3ETransform%3C/text%3E%3Ctext x='175' y='110' font-family='monospace' fill='%2388a8c4' font-size='9' text-anchor='middle'%3CJoin, Aggregate%3E%3C/text%3E%3Cpath d='M 215 95 L 240 95' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Crect x='240' y='70' width='80' height='50' rx='5' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='280' y='95' font-family='sans-serif' fill='%2300d4ff' font-size='11' text-anchor='middle'%3EValidate%3C/text%3E%3Ctext x='280' y='110' font-family='monospace' fill='%2388a8c4' font-size='9' text-anchor='middle'%3EData Quality%3E%3C/text%3E%3Cpath d='M 320 95 L 345 95' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Crect x='345' y='70' width='35' height='50' rx='5' fill='%2300d4ff' opacity='0.2' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='362' y='100' font-family='sans-serif' fill='%2300d4ff' font-size='10' text-anchor='middle'%3ELoad%3C/text%3E%3Ctext x='30' y='160' font-family='monospace' fill='%2388a8c4' font-size='10'%3E✓ Error handling and logging%3C/text%3E%3Ctext x='30' y='180' font-family='monospace' fill='%2388a8c4' font-size='10'%3E✓ Incremental load strategy%3C/text%3E%3Ctext x='30' y='200' font-family='monospace' fill='%2388a8c4' font-size='10'%3E✓ Data lineage tracking%3C/text%3E%3Cdefs%3E%3Cmarker id='arrowhead' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto'%3E%3Cpolygon points='0 0, 10 3, 0 6' fill='%2300d4ff'/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E",
    businessProblem: "Consolidate data from multiple sources into a unified data warehouse, ensuring quality and consistency for reporting and analysis.",
    dataApproach: "Designed to extract from sample systems (ERP, CRM, web logs) and consolidate into a single reporting database.",
    technicalApproach: "Built an SSIS package with parallel data flows, data quality checks using T-SQL lookups, error handling, and incremental load logic.",
    outcome: "Automated daily pipeline loading clean, validated data into the data warehouse with complete audit trails.",
    demonstrates: [
      "Source-to-target mapping",
      "Transformation logic and business rules",
      "Data quality validation",
      "Error handling and recovery",
      "Pipeline documentation and logging"
    ],
    artifacts: [
      "SSIS package architecture diagram",
      "Data lineage documentation",
      "Sample SQL transformation queries",
      "Error handling strategy"
    ],
    notes: "This is an illustrative workflow. Replace with your actual SSIS project when available."
  },
  {
    id: "automated-business-workflow",
    title: "Automated Business Workflow",
    description: "Power Automate solution demonstrating workflow design, conditional logic, and system integration.",
    type: "Demo Project",
    technologies: ["Power Automate"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%231a2744' width='400' height='250'/%3E%3Crect x='20' y='20' width='360' height='210' fill='none' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='30' y='45' font-family='monospace' fill='%2300d4ff' font-size='12'%3EWorkflow: Automated Approval Process%3C/text%3E%3Crect x='30' y='65' width='100' height='45' rx='5' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='80' y='92' font-family='sans-serif' fill='%2300d4ff' font-size='10' text-anchor='middle'%3ERequest Received%3C/text%3E%3Cpath d='M 130 87 L 155 87' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Cpolygon points='155,65 195,87 155,109' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='175' y='92' font-family='sans-serif' fill='%2300d4ff' font-size='9' text-anchor='middle'%3EAmount%3C/text%3E%3Ctext x='175' y='102' font-family='sans-serif' fill='%2300d4ff' font-size='9' text-anchor='middle'%3E%3E $5K?%3C/text%3E%3Cpath d='M 195 75 L 220 60' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Ctext x='207' y='62' font-family='sans-serif' fill='%2300d4ff' font-size='9'%3EYes%3C/text%3E%3Crect x='220' y='45' width='100' height='40' rx='5' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='270' y='70' font-family='sans-serif' fill='%2300d4ff' font-size='10' text-anchor='middle'%3EManager Approval%3C/text%3E%3Cpath d='M 195 99 L 220 114' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Ctext x='207' y='110' font-family='sans-serif' fill='%2300d4ff' font-size='9'%3ENo%3C/text%3E%3Crect x='220' y='115' width='100' height='40' rx='5' fill='%230f1929' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='270' y='140' font-family='sans-serif' fill='%2300d4ff' font-size='10' text-anchor='middle'%3EAuto Approve%3C/text%3E%3Cpath d='M 320 65 L 345 87' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Cpath d='M 320 135 L 345 87' stroke='%2300d4ff' stroke-width='2' marker-end='url(%23arrowhead)'/%3E%3Crect x='345' y='70' width='35' height='35' rx='5' fill='%2300d4ff' opacity='0.2' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='362' y='93' font-family='sans-serif' fill='%2300d4ff' font-size='9' text-anchor='middle'%3ENotify%3C/text%3E%3Ctext x='30' y='190' font-family='monospace' fill='%2388a8c4' font-size='10'%3E✓ Email notifications to relevant stakeholders%3C/text%3E%3Ctext x='30' y='210' font-family='monospace' fill='%2388a8c4' font-size='10'%3E✓ Automated routing based on business rules%3C/text%3E%3Cdefs%3E%3Cmarker id='arrowhead' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto'%3E%3Cpolygon points='0 0, 10 3, 0 6' fill='%2300d4ff'/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E",
    businessProblem: "Streamline approval workflows and reduce manual processing time for expense requests, purchase orders, or status reports.",
    dataApproach: "Designed to work with SharePoint lists and email notifications to manage workflow state and approvals.",
    technicalApproach: "Created a Power Automate cloud flow with conditional branches, approvals, and integration with Email and notification services.",
    outcome: "Automated workflow reduces manual processing time by approximately 80% and ensures consistent application of business rules.",
    demonstrates: [
      "Workflow design and process mapping",
      "Conditional logic and branching",
      "Multi-step notifications and escalations",
      "Integration between systems",
      "Process improvement through automation"
    ],
    artifacts: [
      "Workflow process diagram",
      "Conditional logic specification",
      "Integration configuration guide"
    ],
    notes: "This is an illustrative example. Replace with your actual Power Automate project when available."
  },
  {
    id: "operational-reporting-solution",
    title: "Operational Reporting Solution",
    description: "SSRS report demonstrating parameterised queries, data presentation, and operational analytics.",
    type: "Demo Project",
    technologies: ["SQL Server", "SSRS"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%231a2744' width='400' height='250'/%3E%3Crect x='20' y='20' width='360' height='210' fill='none' stroke='%2300d4ff' stroke-width='2'/%3E%3Ctext x='30' y='45' font-family='monospace' fill='%2300d4ff' font-size='12'%3EReport: Daily Operations Summary%3C/text%3E%3Crect x='30' y='58' width='360' height='20' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='40' y='72' font-family='monospace' fill='%2388a8c4' font-size='9'%3EDate Range: [Start Date] to [End Date] | Department: [All]%3C/text%3E%3Crect x='30' y='85' width='85' height='60' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='35' y='102' font-family='sans-serif' fill='%2388a8c4' font-size='9'%3EDaily Activity%3C/text%3E%3Cline x1='35' y1='108' x2='110' y2='108' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='37' y='120' font-family='monospace' fill='%23ffffff' font-size='9'%3ETransactions: 15K%3C/text%3E%3Ctext x='37' y='132' font-family='monospace' fill='%23ffffff' font-size='9'%3EErrors: 12 (0.08%)%3C/text%3E%3Ctext x='37' y='144' font-family='monospace' fill='%2300d4ff' font-size='9'%3EPassing%3C/text%3E%3Crect x='125' y='85' width='110' height='60' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='130' y='102' font-family='sans-serif' fill='%2388a8c4' font-size='9'%3EVolume by Source%3C/text%3E%3Cline x1='130' y1='108' x2='230' y2='108' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='132' y='120' font-family='monospace' fill='%23ffffff' font-size='8'%3ESystem A: 45%3C/text%3E%3Ctext x='132' y='131' font-family='monospace' fill='%23ffffff' font-size='8'%3ESystem B: 35%3C/text%3E%3Ctext x='132' y='142' font-family='monospace' fill='%23ffffff' font-size='8'%3ESystem C: 20%3C/text%3E%3Crect x='245' y='85' width='145' height='60' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='250' y='102' font-family='sans-serif' fill='%2388a8c4' font-size='9'%3EKey Metrics Table%3C/text%3E%3Cline x1='250' y1='108' x2='385' y2='108' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='252' y='120' font-family='monospace' fill='%23ffffff' font-size='8'%3EMetric | Value | Target | % Target%3C/text%3E%3Ctext x='252' y='131' font-family='monospace' fill='%23ffffff' font-size='8'%3EProcessed | 15K | 18K | 83%3C/text%3E%3Ctext x='252' y='142' font-family='monospace' fill='%23ffffff' font-size='8'%3ESuccess | 14.8K | 17.8K | 83%3C/text%3E%3Crect x='30' y='155' width='360' height='55' fill='%230f1929' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='40' y='172' font-family='sans-serif' fill='%2388a8c4' font-size='9'%3EDetailed Records (showing first 50)%3C/text%3E%3Cline x1='40' y1='178' x2='380' y2='178' stroke='%2300d4ff' stroke-width='1'/%3E%3Ctext x='40' y='192' font-family='monospace' fill='%23ffffff' font-size='7'%3EID | Timestamp | Source | Type | Status | Amount%3C/text%3E%3Ctext x='40' y='203' font-family='monospace' fill='%23ffffff' font-size='7'%3E1 | 2024-01-15 08:23 | System A | Order | Complete | $1,245.00%3C/text%3E%3C/svg%3E",
    businessProblem: "Monitor daily operations, track transaction volumes, identify errors, and enable operations teams to respond quickly to issues.",
    dataApproach: "Built from operational transaction data with daily snapshots and error tracking.",
    technicalApproach: "Created SSRS reports with parameterised date and department filters, summary tables, detailed transaction lists, and automated subscriptions.",
    outcome: "Automated daily report delivery enabling operations teams to quickly identify and address issues.",
    demonstrates: [
      "Report requirements and specifications",
      "SQL data preparation and aggregation",
      "Parameterised filtering and drill-down",
      "Visual information layout and hierarchy",
      "Operational report distribution"
    ],
    artifacts: [
      "Report specification document",
      "Data preparation queries",
      "Report layout and design"
    ],
    notes: "This is an illustrative case study. Replace with your actual SSRS project when available."
  }
];
