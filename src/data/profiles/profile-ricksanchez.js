export default {
  id: 'ricksanchez',
  name: 'RICK SANCHEZ',
  shortName: 'Rick Sanchez',
  entityType: 'person',
  verifiedText: 'Identity Verified',
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
    { label: 'Integrity Check', dot: 'red', partner: 'integrity', tooltip: 'Powered by Xapiens', newTag: true, path: 'integrity-check' },
    { label: 'Due Diligence', dot: 'red', path: 'due-diligence', subSteps: [
      { label: 'Internal Due Diligence', dot: 'red', path: 'due-diligence/internal' },
      { label: 'External Due Diligence', dot: 'red' },
    ]},
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
    { label: 'Person Third Party Legal Name', value: 'Richard Daniel Sanchez' },
    { label: 'Person Industry Sector - onboarding', value: 'Interdimensional Science & Advanced Technology' },
    { label: 'Third Party Owner', value: 'Claudio Merino' },
    { label: 'Process Name', value: 'Enhanced Due Diligence' },
    { label: 'Person Country of Residence', value: 'United States', flag: '🇺🇸' },
    { label: 'Third Party Contact Email Address', value: 'rick.c137@smith-residence.com' },
    { label: 'Business Unit', value: 'US' },
    { label: 'Screening & Monitoring Policy', value: 'Enhanced KYBP Policy' },
    { label: 'Third Party Legal Structure', value: 'Individual / Person' },
    { label: 'Commercial Significance of Product or Service', value: '[Greater than 10%] / Critical / Top 10' },
    { label: 'Third Party Renewal Date', value: '' },
    { label: 'Tags', value: 'Science, High Risk, Interdimensional' },
  ],

  additionalFields: [
    { label: 'Person Other Known Name or Alias', value: 'Rick C-137, The Rickest Rick, Evil Morty\'s Nemesis' },
    { label: 'Person Business Address', value: '2630 Hboyts Rd, Seattle, WA 98101' },
    { label: 'Person ID Type', value: 'Passport' },
    { label: 'Person ID Value', value: 'US-C137-000001' },
    { label: 'Responsible Client Unit', value: 'Advanced Research & Development' },
    { label: 'Person Year of Birth', value: '1945' },
    { label: 'Gender', value: 'Male' },
    { label: 'Internal Reference or ID', value: 'RSC-137' },
    { label: 'All Relevant Client Units', value: 'R&D, Compliance, Interdimensional Affairs' },
  ],

  riskCards: [
    { title: 'Country Risk', level: 'low', flags: 0, score: 1 },
    { title: 'Bribery & Corruption', level: 'medium', flags: 2, score: 8 },
    { title: 'Environmental', level: 'high', flags: 3, score: 14 },
    { title: 'Human Rights', level: 'medium', flags: 2, score: 7 },
    { title: 'General', level: 'high', flags: 5, score: 19 },
    { title: 'Screening & Monitoring', level: 'high', flags: 4, score: 16 },
    { title: 'Cyber', level: 'high', flags: 3, score: 13 },
  ],

  openTasks: [
    { type: 'Red Flag', icon: 'iconFlag', name: 'Galactic Federation Wanted Status — Active Warrant', status: 'Not Started', owner: 'Compliance Group', dateCreated: '10 Oct 2025', age: '81 Days' },
    { type: 'Red Flag', icon: 'iconFlag', name: 'Dimensional Collapse Risk — Portal Gun Misuse', status: 'In Progress', owner: 'Compliance Group', dateCreated: '01 Nov 2025', age: '59 Days' },
    { type: 'Red Flag', icon: 'iconFlag', name: 'Unauthorized Biosphere Tampering — Multiple Dimensions', status: 'Not Started', owner: 'Legal Team', dateCreated: '15 Nov 2025', age: '45 Days' },
    { type: 'Approval Task', icon: 'iconFactCheck', name: 'Approval Stage 1 — Not Approved (Galactic Warrant)', status: 'Not Started', owner: 'Ethics Committee', dateCreated: '01 Dec 2025', age: '29 Days' },
  ],

  screeningRows: [
    {
      name: 'Richard Daniel Sanchez',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '11' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '2' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '4' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '5' },
      ],
      updated: '01 Dec 2025',
      type: 'Primary Entity',
      statusDot: 'var(--alert-500)',
      statusLabel: 'Confirmed Match',
      categories: [
        { label: 'SCO', bg: 'var(--alert-100)', color: 'var(--alert-700)' },
        { label: 'AM', bg: '#edd500', color: 'var(--neutral-900)' },
        { label: 'PEP', bg: 'var(--warning-100)', color: 'var(--warning-900)' },
      ],
      categoryIcon: 'error_outline',
      entityType: 'Person',
    },
    {
      name: 'Morty Smith',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '0' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '0' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '0' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '0' },
      ],
      updated: '01 Dec 2025',
      type: 'Known Associate',
      statusDot: 'var(--success-500)',
      statusLabel: 'Active — No Match',
      categories: [],
      categoryIcon: '',
      entityType: 'Person',
    },
  ],

  connectedRows: [],

  suggestedRows: [
    { name: 'Smith Family Residence LLC', connType: 'Affiliated Entity', idType: 'DUNS Number', idValue: '445566778', intRef: 'SFR-001', country: 'United States' },
    { name: 'Galactic Federation', connType: 'Adverse Party', idType: 'LEI', idValue: 'GF-ALPHA-001', intRef: '', country: 'Unknown' },
    { name: 'Council of Ricks', connType: 'Adverse Party', idType: 'LEI', idValue: 'COR-C137-001', intRef: '', country: 'Unknown' },
  ],
  suggestedHasConnType: true,

  documents: [
    { name: 'GalacticFederation-ArrestWarrant-C137', type: 'PDF', size: '0.9 MB', section: 'Risk Assessment', date: '10 Oct 2025', owner: 'Compliance Group' },
    { name: 'PortalGun-DimensionalRisk-Assessment', type: 'PDF', size: '2.7 MB', section: 'Due Diligence', date: '15 Nov 2025', owner: 'Legal Team' },
    { name: 'EthicsCommittee-FailureReport-RSanchez', type: 'PDF', size: '1.4 MB', section: 'Approval', date: '01 Dec 2025', owner: 'Ethics Committee' },
    { name: 'RickSanchez-BackgroundCheck-Redacted', type: 'PDF', size: '3.3 MB', section: 'Onboarding', date: '01 Oct 2025', owner: 'Claudio Merino' },
  ],

  riskReport: {
    currentScore: 78,
    accordionSections: [
      {
        id: 'country', label: 'Country Risk Level', level: 'low',
        rows: [{ property: 'Country of Residence', value: 'United States', score: 1 }],
        totalScore: 1,
      },
      {
        id: 'bribery', label: 'Bribery & Corruption Risk Level', level: 'medium',
        rows: [
          { property: 'Intergalactic Black Market Activity', value: 'Suspected', score: 5 },
          { property: 'Anti-Bribery Policy Acknowledgement', value: 'Refused', score: 3 },
        ],
        totalScore: 8,
      },
      {
        id: 'environmental', label: 'Environmental Risk Level', level: 'high',
        rows: [
          { property: 'Dimensional Biosphere Tampering', value: 'Confirmed — Multiple Incidents', score: 8 },
          { property: 'Toxic Waste Disposal — Non-Compliant Dimensions', value: 'Ongoing', score: 6 },
        ],
        totalScore: 14,
      },
      {
        id: 'human-rights', label: 'Human Right Risk Level', level: 'medium',
        rows: [
          { property: 'Endangerment of Minor (Morty Smith)', value: 'Repeated Incidents', score: 5 },
          { property: 'Involuntary Dimensionality Transfer', value: 'Under Investigation', score: 2 },
        ],
        totalScore: 7,
      },
      {
        id: 'general', label: 'General Risk Level', level: 'high',
        rows: [
          { property: 'Galactic Federation — Active Warrant', value: 'Confirmed', score: 8 },
          { property: 'Council of Ricks — Adversarial Status', value: 'Active Conflict', score: 5 },
          { property: 'Unpredictable Behaviour Pattern', value: 'High Instability', score: 4 },
          { property: 'Weapons of Mass Destruction — Portal Technology', value: 'Unverified Controls', score: 2 },
        ],
        totalScore: 19,
      },
      {
        id: 'screening', label: 'Screening & Monitoring Risk Level', level: 'high',
        rows: [
          { property: 'Adverse Media — Interdimensional Incidents', value: '11 Confirmed Matches', score: 9 },
          { property: 'Sanctions — Galactic Federation Watchlist', value: '4 Matches', score: 7 },
        ],
        totalScore: 16,
      },
      {
        id: 'cyber', label: 'Cyber Risk Level', level: 'high',
        rows: [
          { property: 'Portal Gun Technology — Security Risk', value: 'Critical — Uncontrolled Access', score: 8 },
          { property: 'Megaseed Data Extraction Risk', value: 'Suspected', score: 5 },
        ],
        totalScore: 13,
      },
    ],
    matchResults: [
      { count: 11, bg: '#F0C043', color: 'var(--text-normal)', label: 'Open (Pending Review)' },
      { count: 2, bg: '#13DF81', color: 'var(--text-normal)', label: 'Open (Investigation Under Review)' },
      { count: 0, bg: '#014155', color: '#fff', label: 'Permanently Clear (Without Updates)' },
      { count: 4, bg: '#f89406', color: '#fff', label: 'Confirmed (Matches)' },
      { count: 5, bg: '#E34C53', color: '#fff', label: 'Open (Pending Review)' },
    ],
    screeningResults: [
      { name: 'Richard Daniel Sanchez', type: 'Primary Person', level: 'high', redFlags: 'YES', categories: [{ type: 'sco', icon: 'person' }, { type: 'am', icon: 'person' }, { type: 'pep', icon: 'person' }] },
      { name: 'Morty Smith', type: 'Known Associate', level: 'low', redFlags: '', categories: [] },
    ],
    redFlags: [
      { title: 'Galactic Federation Active Warrant — Rick C-137', isLink: true, status: 'Not Started', riskCategory: 'General', property: 'Regulatory / Enforcement Risk' },
      { title: 'Dimensional Biosphere Tampering — Multiple Confirmed Incidents', isLink: true, status: 'In Progress', riskCategory: 'Environmental', property: 'Environmental Compliance Risk' },
      { title: 'Endangerment of Minor — Morty Smith (Repeated)', isLink: false, status: 'Not Started', riskCategory: 'Human Rights', property: 'Duty of Care Risk' },
      { title: 'Portal Gun Technology — Weapons-Class Security Risk', isLink: false, status: 'Not Started', riskCategory: 'Cyber', property: 'Cybersecurity / WMD Risk' },
    ],
    processSummary: [
      { step: 'Onboarding', isLink: true, status: 'Completed', startDate: '01 Oct 2025', by: 'Claudio Merino', date: '01 Oct 2025' },
      { step: 'Risk Assessment', isLink: true, status: 'Completed', startDate: '10 Oct 2025', by: 'Compliance Group', date: '25 Oct 2025' },
      { step: 'Integrity Check', isLink: true, status: 'Completed', startDate: '26 Oct 2025', by: 'Compliance Group', date: '05 Nov 2025' },
      { step: 'Due Diligence', isLink: true, status: 'Completed', startDate: '06 Nov 2025', by: 'Legal Team', date: '30 Nov 2025' },
      { step: 'Enhanced Due Diligence Report', isLink: true, status: 'Completed', startDate: '01 Dec 2025', by: 'Compliance Group', date: '10 Dec 2025' },
      { step: 'UBO', isLink: false, status: 'Completed', startDate: '11 Dec 2025', by: 'Compliance Group', date: '15 Dec 2025' },
      { step: 'Risk Mitigation', isLink: true, status: 'Completed', startDate: '16 Dec 2025', by: 'Compliance Group', date: '05 Jan 2026' },
      { step: 'Approval', isLink: true, status: 'Not Approved', startDate: '06 Jan 2026', by: 'Ethics Committee', date: '10 Jan 2026' },
      { step: 'Screening and Monitoring', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
    ],
  },
  riskMitigation: {
    openRisks: [],
    mitigatedRisks: [],
    cancelledRisks: [],
  },
  approval: {
    startDate: '06 Jan 2026',
    completedDate: '',
    cancelledDate: '10 Jan 2026',
    renewalDate: '',
  },
};
