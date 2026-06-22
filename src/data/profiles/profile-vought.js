export default {
  id: 'vought',
  name: 'VOUGHT INTERNATIONAL',
  shortName: 'Vought',
  entityType: 'entity',
  verifiedText: 'Entity Verified',
  currentStatus: { label: 'Not Approved' },
  riskLevel: { label: 'High', icon: 'warning', level: 'high' },

  embedded: true,
  deleteModal: false,
  alertBanners: false,

  sidebarSteps: [
    { label: 'Risk Assessment', dot: 'red', path: 'risk-assessment', subSteps: [
      { label: 'Risk Assessment 1', dot: 'red', path: 'risk-assessment/questionnaire' },
      { label: 'Risk Assessment 2', dot: 'red', path: 'risk-assessment/questionnaire' },
    ]},
    { label: 'Due Diligence', dot: 'red', path: 'due-diligence', subSteps: [
      { label: 'Internal Due Diligence', dot: 'red', path: 'due-diligence/internal' },
      { label: 'External Due Diligence', dot: 'red' },
    ]},
    { label: 'Integrity Check', dot: 'red', partner: 'integrity', tooltip: 'Powered by Xapiens', newTag: true, path: 'integrity-check' },
    { label: 'Enhanced Due Diligence Reports', dot: 'red', path: 'enhanced-due-diligence' },
    { label: 'UBO', dot: 'red', partner: 'ubo', tooltip: 'Powered by Duns & Bradstreet', path: 'ubo' },
    { label: 'Risk Mitigation', dot: 'red', path: 'risk-mitigation' },
    { label: 'Approval', dot: 'red', path: 'approval', subSteps: [
      { label: 'Approval 1', dot: 'red' },
      { label: 'Approval 2', dot: 'red' },
    ]},
    { label: 'Screening & Monitoring', dot: 'grey', path: 'screening-monitoring' },
  ],
  sidebarSections: [
    { label: 'Properties', path: 'properties' },
    { label: 'Documents', path: 'documents' },
    { label: 'Entity Verification', partner: 'ubo', tooltip: 'Powered by Duns & Bradstreet', path: 'entity-verification' },
    { label: 'Audit', path: 'audit' },
  ],

  overviewFields: [
    { label: 'Entity Third Party Legal Name', value: 'Vought International, Inc.' },
    { label: 'Entity Industry Sector - onboarding', value: 'Pharmaceutical & Superhero Management' },
    { label: 'Third Party Owner', value: 'Tamara Knoetschke' },
    { label: 'Process Name', value: 'Enhanced Due Diligence' },
    { label: 'Entity Registered Country', value: 'United States', flag: '🇺🇸' },
    { label: 'Third Party Contact Email Address', value: 'edgar.frenchy@vought.com' },
    { label: 'Business Unit', value: 'US' },
    { label: 'Screening & Monitoring Policy', value: 'Enhanced KYBP Policy' },
    { label: 'Third Party Legal Structure', value: 'Entity' },
    { label: 'Commercial Significance of Product or Service', value: '[Greater than 10%] / Critical / Top 10' },
    { label: 'Third Party Renewal Date', value: '—' },
    { label: 'Tags', value: 'Pharma, High Risk' },
  ],

  additionalFields: [
    { label: 'Entity Other Known Name or Alias', value: 'Vought-American' },
    { label: 'Responsible Client Unit', value: 'Compliance (Legal & Regulatory)' },
    { label: 'Entity Company Number', value: 'US-99887766' },
    { label: 'Entity ID Type', value: 'DUNS Number' },
    { label: 'Entity Registered Address', value: '1 Liberty Plaza, New York, NY 10006' },
    { label: 'All Relevant Client Units', value: 'Legal, Compliance, Public Affairs' },
    { label: 'Internal Reference or ID', value: 'VGT-001' },
    { label: 'Entity ID Value', value: '998877661' },
    { label: 'Entity Website', value: 'www.vought.com', link: true },
  ],

  riskCards: [
    { title: 'Country Risk', level: 'low', flags: 0, score: 1 },
    { title: 'Bribery & Corruption', level: 'high', flags: 4, score: 18 },
    { title: 'Environmental', level: 'medium', flags: 1, score: 5 },
    { title: 'Human Rights', level: 'high', flags: 5, score: 20 },
    { title: 'General', level: 'high', flags: 6, score: 22 },
    { title: 'Screening & Monitoring', level: 'high', flags: 3, score: 15 },
    { title: 'Cyber', level: 'medium', flags: 1, score: 8 },
  ],

  openTasks: [
    { type: 'Red Flag', icon: 'iconFlag', name: 'Compound V Human Trials — Undisclosed Testing on Minors', status: 'Not Started', owner: 'Compliance Group', dateCreated: '10 Oct 2025', age: '81 Days' },
    { type: 'Red Flag', icon: 'iconFlag', name: 'Homelander — Abuse of Power Allegations', status: 'Not Started', owner: 'Compliance Group', dateCreated: '15 Oct 2025', age: '76 Days' },
    { type: 'Red Flag', icon: 'iconFlag', name: 'Systematic Cover-Up of Supe-Related Civilian Deaths', status: 'In Progress', owner: 'Legal Team', dateCreated: '01 Nov 2025', age: '59 Days' },
    { type: 'Approval Task', icon: 'iconFactCheck', name: 'Approval Stage 1 — Not Approved (Ethics Review Failed)', status: 'Not Started', owner: 'Ethics Committee', dateCreated: '01 Dec 2025', age: '29 Days' },
  ],

  screeningRows: [
    {
      name: 'Vought International, Inc.',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '14' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '3' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '5' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '7' },
      ],
      updated: '01 Dec 2025',
      type: 'Primary Entity',
      statusDot: 'var(--alert-500)',
      statusLabel: 'Confirmed Match',
      categories: [
        { label: 'SCO', bg: 'var(--alert-100)', color: 'var(--alert-700)' },
        { label: 'AM', bg: '#edd500', color: 'var(--neutral-900)' },
        { label: 'SAN', bg: 'var(--alert-100)', color: 'var(--alert-700)' },
      ],
      categoryIcon: 'error_outline',
      entityType: 'Entity',
    },
    {
      name: 'Homelander',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '9' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '1' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '3' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '4' },
      ],
      updated: '01 Dec 2025',
      type: 'Key Person — CEO of The Seven',
      statusDot: 'var(--alert-500)',
      statusLabel: 'Confirmed Match',
      categories: [
        { label: 'PEP', bg: 'var(--warning-100)', color: 'var(--warning-900)' },
        { label: 'SCO', bg: 'var(--alert-100)', color: 'var(--alert-700)' },
      ],
      categoryIcon: 'error_outline',
      entityType: 'Person',
    },
    {
      name: 'Stan Edgar',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '2' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '0' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '1' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '1' },
      ],
      updated: '15 Nov 2025',
      type: 'Former CEO',
      statusDot: 'var(--warning-500)',
      statusLabel: 'Requires Review',
      categories: [
        { label: 'PEP', bg: 'var(--warning-100)', color: 'var(--warning-900)' },
      ],
      categoryIcon: 'error_outline',
      entityType: 'Person',
    },
  ],

  connectedRows: [
    { name: 'Vought International, Inc.', connType: 'Subsidiary', idType: 'DUNS Number', idValue: '998877661', intRef: 'VGT-001', country: 'United States' },
  ],

  suggestedRows: [
    { name: 'Compound V Pharmaceuticals LLC', connType: 'Subsidiary', idType: 'DUNS Number', idValue: '112233445', intRef: 'CVP-001', country: 'United States' },
    { name: 'The Seven LLC', connType: 'Affiliated Entity', idType: 'DUNS Number', idValue: '223344556', intRef: 'S7-001', country: 'United States' },
    { name: 'Payback Initiative LLC', connType: 'Related Program', idType: 'DUNS Number', idValue: '334455667', intRef: 'PBI-001', country: 'United States' },
  ],
  suggestedHasConnType: true,

  documents: [
    { name: 'CompoundV-ClinicalTrials-RedactedReport', type: 'PDF', size: '4.2 MB', section: 'Due Diligence', date: '10 Oct 2025', owner: 'Compliance Group' },
    { name: 'Homelander-AbuseClaims-LegalReview', type: 'PDF', size: '3.1 MB', section: 'Risk Assessment', date: '15 Oct 2025', owner: 'Legal Team' },
    { name: 'EthicsCommittee-FailureReport', type: 'PDF', size: '1.8 MB', section: 'Approval', date: '01 Dec 2025', owner: 'Ethics Committee' },
    { name: 'VoughtIntl-AnnualReport-2025', type: 'PDF', size: '6.7 MB', section: 'Onboarding', date: '01 Jan 2026', owner: 'Tamara Knoetschke' },
  ],

  riskReport: {
    currentScore: 89,
    accordionSections: [
      {
        id: 'country', label: 'Country Risk Level', level: 'low',
        rows: [{ property: 'Country of Registration', value: 'United States', score: 1 }],
        totalScore: 1,
      },
      {
        id: 'bribery', label: 'Bribery & Corruption Risk Level', level: 'high',
        rows: [
          { property: 'Government Contract Manipulation', value: 'Confirmed', score: 8 },
          { property: 'Media Suppression Payments', value: 'Ongoing', score: 6 },
          { property: 'Anti-Bribery Policy', value: 'Non-Compliant', score: 4 },
        ],
        totalScore: 18,
      },
      {
        id: 'environmental', label: 'Environmental Risk Level', level: 'medium',
        rows: [
          { property: 'Compound V Disposal — Unregulated Sites', value: 'Under Investigation', score: 5 },
        ],
        totalScore: 5,
      },
      {
        id: 'human-rights', label: 'Human Right Risk Level', level: 'high',
        rows: [
          { property: 'Non-Consensual Human Trials — Compound V', value: 'Confirmed', score: 10 },
          { property: 'Suppression of Supe-Related Casualties', value: 'Systematic', score: 6 },
          { property: 'Child Exploitation — Supe Program', value: 'Under Investigation', score: 4 },
        ],
        totalScore: 20,
      },
      {
        id: 'general', label: 'General Risk Level', level: 'high',
        rows: [
          { property: 'Cover-Up of Civilian Deaths by Supes', value: 'Confirmed — Multiple Incidents', score: 8 },
          { property: 'Homelander Misconduct — Ongoing', value: 'Critical', score: 7 },
          { property: 'Congressional Lobbying — Illegitimate', value: 'Yes', score: 4 },
          { property: 'CEO Leadership — Accountability Gap', value: 'High Risk', score: 3 },
        ],
        totalScore: 22,
      },
      {
        id: 'screening', label: 'Screening & Monitoring Risk Level', level: 'high',
        rows: [
          { property: 'Adverse Media Matches', value: '14 Confirmed Matches', score: 9 },
          { property: 'Sanctions — Related Entity Flags', value: '5 Matches', score: 6 },
        ],
        totalScore: 15,
      },
      {
        id: 'cyber', label: 'Cyber Risk Level', level: 'medium',
        rows: [
          { property: 'Data Privacy — Supe Biometric Records', value: 'Inadequate Controls', score: 8 },
        ],
        totalScore: 8,
      },
    ],
    matchResults: [
      { count: 14, bg: '#F0C043', color: 'var(--text-normal)', label: 'Open (Pending Review)' },
      { count: 3, bg: '#13DF81', color: 'var(--text-normal)', label: 'Open (Investigation Under Review)' },
      { count: 0, bg: '#014155', color: '#fff', label: 'Permanently Clear (Without Updates)' },
      { count: 5, bg: '#f89406', color: '#fff', label: 'Confirmed (Matches)' },
      { count: 7, bg: '#E34C53', color: '#fff', label: 'Open (Pending Review)' },
    ],
    screeningResults: [
      { name: 'Vought International, Inc.', type: 'Primary Entity', level: 'high', redFlags: 'YES', categories: [{ type: 'sco', icon: 'entity' }, { type: 'am', icon: 'entity' }, { type: 'san', icon: 'entity' }] },
      { name: 'Homelander', type: 'Key Person — CEO of The Seven', level: 'high', redFlags: 'YES', categories: [{ type: 'pep', icon: 'person' }, { type: 'sco', icon: 'person' }] },
      { name: 'Stan Edgar', type: 'Former CEO', level: 'medium', redFlags: 'YES', categories: [{ type: 'pep', icon: 'person' }] },
    ],
    redFlags: [
      { title: 'Compound V — Non-Consensual Human Trials on Minors', isLink: true, status: 'Not Started', riskCategory: 'Human Rights', property: 'Human Experimentation Risk' },
      { title: 'Systematic Cover-Up of Supe-Related Civilian Deaths', isLink: true, status: 'In Progress', riskCategory: 'General', property: 'Governance Risk' },
      { title: 'Homelander — Confirmed Abuse of Power', isLink: true, status: 'Not Started', riskCategory: 'General', property: 'Key Person Risk' },
      { title: 'Government Contract Manipulation — Congressional Lobbying', isLink: false, status: 'Not Started', riskCategory: 'Bribery & Corruption', property: 'Regulatory Risk' },
    ],
    processSummary: [
      { step: 'Onboarding', isLink: true, status: 'Completed', startDate: '01 Oct 2025', by: 'Tamara Knoetschke', date: '01 Oct 2025' },
      { step: 'Risk Assessment', isLink: true, status: 'Completed', startDate: '10 Oct 2025', by: 'Compliance Group', date: '20 Oct 2025' },
      { step: 'Internal Due Diligence', isLink: true, status: 'Completed', startDate: '21 Oct 2025', by: 'Legal Team', date: '10 Nov 2025' },
      { step: 'External Due Diligence', isLink: true, status: 'Completed', startDate: '11 Nov 2025', by: 'Legal Team', date: '30 Nov 2025' },
      { step: 'Integrity Check', isLink: true, status: 'Completed', startDate: '01 Dec 2025', by: 'Compliance Group', date: '05 Dec 2025' },
      { step: 'Enhanced Due Diligence Report', isLink: true, status: 'Completed', startDate: '06 Dec 2025', by: 'Compliance Group', date: '15 Dec 2025' },
      { step: 'UBO', isLink: false, status: 'Completed', startDate: '16 Dec 2025', by: 'Compliance Group', date: '20 Dec 2025' },
      { step: 'Risk Mitigation', isLink: true, status: 'Completed', startDate: '21 Dec 2025', by: 'Compliance Group', date: '10 Jan 2026' },
      { step: 'Approval', isLink: true, status: 'Not Approved', startDate: '11 Jan 2026', by: 'Ethics Committee', date: '15 Jan 2026' },
      { step: 'Screening and Monitoring', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
    ],
  },
  riskMitigation: {
    openRisks: [],
    mitigatedRisks: [],
    cancelledRisks: [],
  },
  approval: {
    startDate: '11 Jan 2026',
    completedDate: '',
    cancelledDate: '15 Jan 2026',
    renewalDate: '',
  },
};
