// Pre-built AI responses for demo mode — no API key needed

export const MOCK_RESPONSES = {
  'APP-2024-001': {
    completeness: {
      severity: 'warning',
      score: 62,
      total: 14,
      passed: 8,
      failed: 3,
      missing: 3,
      items: [
        { item: 'Site plan with building footprints, setbacks, and lot coverage', status: 'pass', note: 'Included — 2,400-acre campus plan with 6 data halls' },
        { item: 'Electrical load analysis and utility interconnection agreement', status: 'pass', note: '480MW load analysis present; 345kV interconnection proposed' },
        { item: 'Water supply plan with source identification and usage projections', status: 'fail', note: 'CONFLICTING: Section 4.2 states 1.2M GPD, Section 7.8 states 2.0M GPD' },
        { item: 'Wastewater treatment and discharge plan', status: 'pass', note: 'Evaporation pond system described' },
        { item: 'Cooling system specifications and thermal discharge analysis', status: 'pass', note: 'Closed-loop cooling design with 15% evaporative loss claim' },
        { item: 'Fire suppression system design (NFPA 75/76 compliance)', status: 'pass', note: 'Referenced but details sparse' },
        { item: 'Backup generator specifications and fuel storage plan', status: 'pass', note: '96 diesel generators at 3MW each, plus 200MW gas peaker' },
        { item: 'Environmental impact assessment or categorical exclusion documentation', status: 'fail', note: 'Phase I ESA only — no full EIA for a $14.2B facility' },
        { item: 'Traffic impact analysis for construction and operations phases', status: 'fail', note: 'Traffic study references 200-acre campus; site plan shows 2,400 acres' },
        { item: 'Noise study with boundary-line projections', status: 'missing', note: 'Not included in application' },
        { item: 'Stormwater management plan with detention calculations', status: 'missing', note: 'Not included in application' },
        { item: 'Structural engineering report for server floor loading', status: 'pass', note: 'Included in Appendix F' },
        { item: 'Security plan and perimeter fencing details', status: 'pass', note: 'Included' },
        { item: 'Decommissioning plan with financial assurance/bonding', status: 'missing', note: 'Not included — significant omission for $14.2B facility' },
      ],
    },
    consistency: {
      severity: 'critical',
      findingCount: 4,
      findings: [
        {
          id: 1,
          severity: 'critical',
          claim1: { section: '4.2', text: 'Cooling water demand: 1,200,000 GPD' },
          claim2: { section: '7.8', text: 'Total water demand: 2,000,000 GPD' },
          analysis: 'The application cannot simultaneously claim 1.2M and 2.0M GPD water usage. The 800,000 GPD discrepancy equals the daily water consumption of approximately 6,400 households.',
        },
        {
          id: 2,
          severity: 'critical',
          claim1: { section: 'Executive Summary', text: '"Zero net water impact"' },
          claim2: { section: 'Engineering Appendix', text: '2,000,000 GPD consumption from Pecos Valley Aquifer' },
          analysis: 'The executive summary claims zero water impact while engineering plans detail 2M GPD consumption. These statements are mutually exclusive.',
        },
        {
          id: 3,
          severity: 'warning',
          claim1: { section: 'Traffic Study', text: 'Campus footprint: 200 acres' },
          claim2: { section: 'Site Plan', text: 'Total site area: 2,400 acres' },
          analysis: '12x discrepancy in campus size between traffic study and site plan suggests the traffic study was prepared for a different project or scope.',
        },
        {
          id: 4,
          severity: 'warning',
          claim1: { section: 'Grid Impact', text: '"Modest addition to regional grid capacity"' },
          claim2: { section: 'Electrical Plans', text: '480MW continuous load requiring new 345kV transmission' },
          analysis: 'Characterizing 480MW as a "modest addition" is misleading when it represents 6,000% of Loving County\'s current peak demand.',
        },
      ],
    },
    compliance: {
      severity: 'critical',
      codes: [
        {
          code: 'LCC §4.02',
          title: 'Building Permits',
          status: 'NON_COMPLIANT',
          note: 'Code designed for residential/commercial structures. No provisions for 480MW industrial facility. Current permit fee structure caps at $5,000 commercial; estimated proportional fee would exceed $2M.',
        },
        {
          code: 'LCC §6.01',
          title: 'Water Well Permits',
          status: 'NON_COMPLIANT',
          note: '12 new wells at 2M GPD total exceeds the 10,000 GPD/parcel threshold by 200x. Requires Edwards Aquifer Authority review not initiated by applicant.',
        },
        {
          code: 'LCC §3.15',
          title: 'Road Access',
          status: 'NON_COMPLIANT',
          note: 'Construction requires 3,200 workers on County Road 407 (unpaved, designed for <50 vehicles/day). No road improvement plan submitted.',
        },
        {
          code: 'LCC §2.08',
          title: 'Land Use Classifications',
          status: 'NO_CODE_EXISTS',
          note: 'No "data center" or "technology facility" classification exists in Loving County code. Cannot be processed under any existing category.',
        },
      ],
      gapCount: 4,
      gaps: [
        'No data center land use classification',
        'No industrial electrical load standards',
        'No construction traffic management code',
        'No environmental review triggers',
      ],
    },
    impact: {
      severity: 'critical',
      grid: {
        loadMW: 480,
        peakMW: 8,
        percentOfPeak: 6000,
        verdict: 'UNSUBSTANTIATED',
        severity: 'critical',
        analysis: 'Proposed 480MW load represents 6,000% of county peak demand (8MW). This single facility would require 60x the county\'s entire current grid capacity. The applicant\'s claim of "modest addition to regional capacity" is unsupported by the data.',
      },
      water: {
        usageGPD: 2000000,
        rechargeRateGPD: 2400000,
        percentOfRecharge: 83.33,
        verdict: 'UNSUBSTANTIATED',
        severity: 'critical',
        analysis: 'Proposed 2,000,000 GPD represents 83% of aquifer recharge rate. A single facility consuming 83% of the aquifer\'s recharge capacity is unsustainable.',
      },
    },
    report: {
      overallSeverity: { label: 'CRITICAL', color: 'critical' },
      executiveSummary: 'This application proposes the single largest infrastructure project in Loving County history — a $14.2 billion, 480MW hyperscale data center on 2,400 acres serving a county of 64 residents. GridMind has identified critical deficiencies across all four audit layers. The application contains internal contradictions (water usage figures conflict by 800,000 GPD), makes unsubstantiated environmental claims ("zero net water impact" while consuming 83% of aquifer recharge), and cannot be processed under existing county code (no data center classification exists). The proposed electrical load exceeds current county capacity by 6,000%. This application requires significant revision before it can proceed through any permitting pathway.',
      actions: [
        {
          target: 'APPLICANT',
          action: 'Resolve water usage contradictions between Sections 4.2 and 7.8, and between the executive summary and engineering appendix. Resubmit with consistent figures and a credible water sustainability analysis.',
        },
        {
          target: 'COUNTY',
          action: 'Adopt data center / technology facility land use classification and associated electrical, water, and traffic impact standards before processing this or similar applications. Current 1987 code has no pathway for this facility type.',
        },
        {
          target: 'BOTH',
          action: 'Commission independent grid impact study and aquifer sustainability assessment. A 480MW / 2M GPD facility in a county with 8MW peak demand and 2.4M GPD aquifer recharge requires analysis beyond the applicant\'s self-assessment.',
        },
      ],
      reviewQuestions: [
        'Why does the executive summary claim "zero net water impact" when engineering plans detail 2,000,000 GPD consumption?',
        'How does the applicant define "modest addition to regional capacity" for a load representing 6,000% of current county peak?',
        'What is the actual campus size — 200 acres (traffic study) or 2,400 acres (site plan)?',
        'Why was a full Environmental Impact Assessment not conducted for a $14.2B facility?',
        'Where is the decommissioning plan and financial assurance for a facility of this scale?',
      ],
      draftOrdinanceLanguage: 'PROPOSED AMENDMENT TO LCC §2.08 — LAND USE CLASSIFICATIONS\n\nAdd Section 2.08(d): Technology Infrastructure Facilities\n\n(1) "Data Center" means a facility primarily used for housing computer servers, networking equipment, and associated mechanical/electrical infrastructure for data processing, storage, or transmission, with electrical demand exceeding 1 MW.\n\n(2) Data Center facilities shall require a Conditional Use Permit with the following additional requirements:\n   (a) Grid impact study demonstrating available capacity or funded infrastructure upgrades\n   (b) Water sustainability analysis with aquifer impact assessment\n   (c) Construction traffic management plan\n   (d) Decommissioning plan with bonded financial assurance\n   (e) Environmental review consistent with facility scale',
    },
  },
  'APP-2024-008': {
    completeness: {
      severity: 'critical',
      score: 15,
      total: 10,
      passed: 1,
      failed: 2,
      missing: 7,
      items: [
        { item: 'Current and proposed use description with SIC/NAICS codes', status: 'fail', note: '"General industrial processing" — no SIC/NAICS code, no specific use described' },
        { item: 'Structural analysis for proposed use loading requirements', status: 'missing', note: 'Not included — 1978 wood-frame residence, no structural assessment' },
        { item: 'Electrical service upgrade plan with load calculations', status: 'fail', note: '15MW requested for 3,200 sq ft — 4,700 W/sqft, 100x typical data center density. No explanation provided.' },
        { item: 'Fire code analysis for new occupancy classification', status: 'missing', note: 'Not included' },
        { item: 'ADA compliance assessment for public-facing uses', status: 'missing', note: 'Not included' },
        { item: 'Parking analysis per new use requirements', status: 'missing', note: 'Existing residential driveway only' },
        { item: 'Hazardous materials disclosure for industrial uses', status: 'fail', note: 'Checked "N/A" despite industrial classification — contradictory' },
        { item: 'Water and wastewater capacity analysis for new use', status: 'missing', note: '50,000 GPD requested vs 500 GPD current permit. No new well permits.' },
        { item: 'Zoning compliance verification or variance application', status: 'missing', note: 'No variance application for residential-to-industrial conversion' },
        { item: 'Building code occupancy change documentation', status: 'pass', note: 'Change of use form submitted (though incomplete)' },
      ],
    },
    consistency: {
      severity: 'critical',
      findingCount: 3,
      findings: [
        {
          id: 1,
          severity: 'critical',
          claim1: { section: 'Application', text: '"Light manufacturing consistent with agricultural zone"' },
          claim2: { section: 'Electrical', text: '15MW service request (4,700 W/sqft)' },
          analysis: 'No "light manufacturing" operation requires 15MW for 3,200 sq ft. This power density exceeds any known legal commercial or industrial use.',
        },
        {
          id: 2,
          severity: 'critical',
          claim1: { section: 'HAZMAT Section', text: 'Checked "N/A" — no hazardous materials' },
          claim2: { section: 'Application', text: 'Classified as "General Industrial Processing"' },
          analysis: 'Industrial processing facilities typically involve some form of regulated materials. Claiming N/A while requesting industrial classification is inconsistent.',
        },
        {
          id: 3,
          severity: 'warning',
          claim1: { section: 'Ownership', text: 'LLC incorporated 17 days prior' },
          claim2: { section: 'Property Records', text: 'Property purchased 12 days prior at below assessed value' },
          analysis: 'Rapid entity formation, below-market purchase, and vague use description are collectively unusual and warrant additional disclosure.',
        },
      ],
    },
    compliance: {
      severity: 'critical',
      codes: [
        {
          code: 'LCC §2.08',
          title: 'Land Use Classifications',
          status: 'NON_COMPLIANT',
          note: 'Residential-to-industrial conversion requires zoning change. No industrial zone exists in county code. No variance applied for.',
        },
        {
          code: 'LCC §4.02',
          title: 'Building Permits',
          status: 'NON_COMPLIANT',
          note: '1978 wood-frame residence not structurally rated for industrial use. No structural analysis provided.',
        },
        {
          code: 'LCC §6.01',
          title: 'Water Well Permits',
          status: 'NON_COMPLIANT',
          note: '50,000 GPD requested exceeds 10,000 GPD threshold by 5x. No new well permits submitted.',
        },
      ],
      gapCount: 2,
      gaps: [
        'No industrial zoning classification',
        'No suspicious activity reporting mechanism for permit applications',
      ],
    },
    impact: {
      severity: 'critical',
      grid: {
        loadMW: 15,
        peakMW: 8,
        percentOfPeak: 187.5,
        verdict: 'UNSUBSTANTIATED',
        severity: 'critical',
        analysis: 'Proposed 15MW load for a 3,200 sq ft residential structure represents 187.5% of county peak demand. Power density of 4,700 W/sqft is approximately 100x that of a typical data center.',
      },
      water: {
        usageGPD: 50000,
        rechargeRateGPD: 2400000,
        percentOfRecharge: 2.08,
        verdict: 'SUBSTANTIATED',
        severity: 'info',
        analysis: 'Water usage at 2.08% of aquifer recharge is within sustainable limits, though the absence of well permits and wastewater plan remain concerns.',
      },
    },
    report: {
      overallSeverity: { label: 'CRITICAL', color: 'critical' },
      executiveSummary: 'This application raises significant red flags. An anonymous Delaware LLC, incorporated 17 days prior, seeks to convert a 3,200 sq ft residential property to "general industrial processing" with a 15MW electrical demand — a power density 100x that of a typical data center. The application provides no specifics on intended use, no structural analysis, no HAZMAT disclosure despite industrial classification, and requests "immediate approval" under residential permitting procedures. The application is substantially incomplete (15% completeness score) and contains internal contradictions that collectively suggest the applicant is either concealing the true nature of operations or the application was prepared without professional engineering review.',
      actions: [
        {
          target: 'APPLICANT',
          action: 'Provide specific description of proposed industrial use with SIC/NAICS codes, equipment specifications explaining the 15MW demand, and complete all missing application sections before resubmission.',
        },
        {
          target: 'COUNTY',
          action: 'Request disclosure of beneficial ownership of West Texas Holdings LLC. Consider requiring in-person pre-application conference before accepting resubmission.',
        },
        {
          target: 'BOTH',
          action: 'Engage county attorney to review application for compliance with state reporting requirements. The combination of anonymous ownership, vague use description, and extreme power density may warrant notification to appropriate state agencies.',
        },
      ],
      reviewQuestions: [
        'What specific industrial process requires 15MW (4,700 W/sqft) in a 3,200 sq ft wood-frame residence?',
        'Who are the beneficial owners of West Texas Holdings LLC?',
        'Why was the property purchased below assessed value 12 days before application filing?',
        'Why is HAZMAT marked "N/A" for an industrial use application?',
      ],
    },
  },
}

// Generate basic mock responses for other applications
const basicMock = (id, severity) => ({
  completeness: {
    severity,
    score: severity === 'warning' ? 58 : 72,
    total: 10,
    passed: severity === 'warning' ? 5 : 7,
    failed: severity === 'warning' ? 3 : 2,
    missing: 2,
    items: [],
  },
  consistency: { severity, findingCount: severity === 'warning' ? 2 : 1, findings: [] },
  compliance: { severity, codes: [], gapCount: severity === 'warning' ? 3 : 1, gaps: [] },
  impact: {
    severity,
    grid: { loadMW: 0, peakMW: 8, percentOfPeak: 0, verdict: 'NEEDS_REVIEW', severity, analysis: 'Analysis pending.' },
    water: { usageGPD: 0, rechargeRateGPD: 2400000, percentOfRecharge: 0, verdict: 'NEEDS_REVIEW', severity, analysis: 'Analysis pending.' },
  },
  report: {
    overallSeverity: { label: severity === 'critical' ? 'CRITICAL' : 'ACTION REQUIRED', color: severity === 'critical' ? 'critical' : 'warning' },
    executiveSummary: `Automated review of application ${id} identified issues requiring attention.`,
    actions: [
      { target: 'APPLICANT', action: 'Address identified completeness gaps and resubmit.' },
      { target: 'COUNTY', action: 'Review compliance with existing code provisions.' },
      { target: 'BOTH', action: 'Schedule pre-application conference to resolve outstanding issues.' },
    ],
    reviewQuestions: ['Are all required documents included?', 'Does the proposed use comply with existing code?'],
  },
})

// Fill in mock responses for apps 2-7
;['APP-2024-002', 'APP-2024-003', 'APP-2024-004', 'APP-2024-005', 'APP-2024-006', 'APP-2024-007'].forEach((id) => {
  if (!MOCK_RESPONSES[id]) {
    MOCK_RESPONSES[id] = basicMock(id, id === 'APP-2024-004' || id === 'APP-2024-006' ? 'critical' : 'warning')
  }
})
