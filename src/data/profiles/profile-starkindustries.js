export default {
  id: 'starkindustries',
  name: 'STARK INDUSTRIES',
  shortName: 'Stark Industries',
  entityType: 'entity',
  verifiedText: 'Entity Verified',
  currentStatus: { label: 'Pending Approval' },
  riskLevel: { label: 'Unknown', icon: 'help_outline', level: 'unknown' },

  embedded: true,
  deleteModal: false,
  alertBanners: false,

  sidebarSteps: [
    { label: 'Risk Assessment', dot: 'amber', path: 'risk-assessment', subSteps: [
      { label: 'Risk Assessment 1', dot: 'amber', path: 'risk-assessment/questionnaire' },
      { label: 'Risk Assessment 2', dot: 'grey', path: 'risk-assessment/questionnaire' },
    ]},
    { label: 'Due Diligence', dot: 'amber', path: 'due-diligence', subSteps: [
      { label: 'Internal Due Diligence', dot: 'amber', path: 'due-diligence/internal' },
      { label: 'External Due Diligence', dot: 'grey' },
    ]},
    { label: 'Integrity Check', dot: 'grey', partner: 'integrity', tooltip: 'Powered by Xapiens', newTag: true, path: 'integrity-check' },
    { label: 'Enhanced Due Diligence Reports', dot: 'grey', path: 'enhanced-due-diligence' },
    { label: 'UBO', dot: 'grey', partner: 'ubo', tooltip: 'Powered by Duns & Bradstreet', path: 'ubo' },
    { label: 'Risk Mitigation', dot: 'grey', path: 'risk-mitigation' },
    { label: 'Approval', dot: 'amber', path: 'approval', subSteps: [
      { label: 'Approval 1', dot: 'amber' },
      { label: 'Approval 2', dot: 'grey' },
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
    { label: 'Entity Third Party Legal Name', value: 'Stark Industries, Inc.' },
    { label: 'Entity Industry Sector - onboarding', value: 'Defence Technology & Advanced Manufacturing' },
    { label: 'Third Party Owner', value: 'Tamara Knoetschke' },
    { label: 'Process Name', value: 'Standard RCTP' },
    { label: 'Entity Registered Country', value: 'United States', flag: '🇺🇸' },
    { label: 'Third Party Contact Email Address', value: 'pepper.potts@starkindustries.com' },
    { label: 'Business Unit', value: 'US' },
    { label: 'Screening & Monitoring Policy', value: 'Default Standard KYBP Policy' },
    { label: 'Third Party Legal Structure', value: 'Entity' },
    { label: 'Commercial Significance of Product or Service', value: '[Greater than 10%] / Critical / Top 10' },
    { label: 'Third Party Renewal Date', value: '' },
    { label: 'Tags', value: 'Defence, Tech, Manufacturing' },
  ],

  additionalFields: [
    { label: 'Entity Other Known Name or Alias', value: 'Stark Corp, SI' },
    { label: 'Entity Registered Address', value: '10880 Malibu Point, Malibu, CA 90265' },
    { label: 'Entity ID Type', value: 'DUNS Number' },
    { label: 'Entity Company Number', value: 'US-11223344' },
    { label: 'Responsible Client Unit', value: 'Procurement (Central, direct material)' },
    { label: 'Entity Website', value: 'www.starkindustries.com', link: true },
    { label: 'Entity ID Value', value: '112233440' },
    { label: 'Internal Reference or ID', value: 'STK-001' },
    { label: 'All Relevant Client Units', value: 'Defence, R&D, Manufacturing' },
  ],

  riskCards: [
    { title: 'Country Risk', level: 'unknown', flags: 0, score: 0 },
    { title: 'Bribery & Corruption', level: 'unknown', flags: 0, score: 0 },
    { title: 'Environmental', level: 'unknown', flags: 0, score: 0 },
    { title: 'Human Rights', level: 'unknown', flags: 0, score: 0 },
    { title: 'General', level: 'unknown', flags: 0, score: 0 },
    { title: 'Screening & Monitoring', level: 'unknown', flags: 0, score: 0 },
    { title: 'Cyber', level: 'unknown', flags: 0, score: 0 },
  ],

  openTasks: [],

  screeningRows: [
    {
      name: 'Stark Industries, Inc.',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '2' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '1' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '0' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '1' },
      ],
      updated: '01 Jun 2026',
      type: 'Primary Entity',
      statusDot: 'var(--neutral-400)',
      statusLabel: 'Queued',
      categories: [
        { label: 'AM', bg: '#edd500', color: 'var(--neutral-900)' },
      ],
      categoryIcon: 'error_outline',
      entityType: 'Entity',
    },
    {
      name: 'Tony Stark',
      matches: [
        { bg: '#E34C53', color: '#fff', val: '1' },
        { bg: '#13DF81', color: 'var(--text-normal)', val: '0' },
        { bg: '#014155', color: '#fff', val: '0' },
        { bg: '#f89406', color: '#fff', val: '0' },
        { bg: '#F0C043', color: 'var(--text-normal)', val: '1' },
      ],
      updated: '01 Jun 2026',
      type: 'CEO & Founder',
      statusDot: 'var(--neutral-400)',
      statusLabel: 'Queued',
      categories: [
        { label: 'PEP', bg: 'var(--warning-100)', color: 'var(--warning-900)' },
      ],
      categoryIcon: 'error_outline',
      entityType: 'Person',
    },
  ],

  connectedRows: [],

  suggestedRows: [
    { name: 'Stark Resilient LLC', connType: 'Subsidiary', idType: 'DUNS Number', idValue: '223344551', intRef: 'SR-001', country: 'United States' },
    { name: 'SI Advanced Research Division', connType: 'Division', idType: 'DUNS Number', idValue: '334455662', intRef: 'SIARD-001', country: 'United States' },
    { name: 'Hammer Industries', connType: 'Competitor', idType: 'DUNS Number', idValue: '445566773', intRef: '', country: 'United States' },
  ],
  suggestedHasConnType: true,

  documents: [
    { name: 'StarkIndustries-CorporateRegistration', type: 'PDF', size: '1.2 MB', section: 'Onboarding', date: '01 Jun 2026', owner: 'Tamara Knoetschke' },
    { name: 'DefenceSector-RiskQuestionnaire-Draft', type: 'PDF', size: '0.6 MB', section: 'Risk Assessment', date: '05 Jun 2026', owner: 'Compliance Group' },
  ],

  riskReport: {
    currentScore: 0,
    accordionSections: [
      { id: 'country', label: 'Country Risk Level', level: 'unknown', rows: [], totalScore: 0 },
      { id: 'bribery', label: 'Bribery & Corruption Risk Level', level: 'unknown', rows: [], totalScore: 0 },
      { id: 'environmental', label: 'Environmental Risk Level', level: 'unknown', rows: [], totalScore: 0 },
      { id: 'human-rights', label: 'Human Right Risk Level', level: 'unknown', rows: [], totalScore: 0 },
      { id: 'general', label: 'General Risk Level', level: 'unknown', rows: [], totalScore: 0 },
      { id: 'screening', label: 'Screening & Monitoring Risk Level', level: 'unknown', rows: [], totalScore: 0 },
      { id: 'cyber', label: 'Cyber Risk Level', level: 'unknown', rows: [], totalScore: 0 },
    ],
    matchResults: [
      { count: 2, bg: '#F0C043', color: 'var(--text-normal)', label: 'Open (Pending Review)' },
      { count: 1, bg: '#13DF81', color: 'var(--text-normal)', label: 'Open (Investigation Under Review)' },
      { count: 0, bg: '#014155', color: '#fff', label: 'Permanently Clear (Without Updates)' },
      { count: 0, bg: '#f89406', color: '#fff', label: 'Confirmed (Matches)' },
      { count: 1, bg: '#E34C53', color: '#fff', label: 'Open (Pending Review)' },
    ],
    screeningResults: [
      { name: 'Stark Industries, Inc.', type: 'Primary Entity', level: 'unknown', redFlags: '', categories: [] },
      { name: 'Tony Stark', type: 'CEO & Founder', level: 'unknown', redFlags: '', categories: [] },
    ],
    redFlags: [],
    processSummary: [
      { step: 'Onboarding', isLink: true, status: 'Completed', startDate: '01 Jun 2026', by: 'Tamara Knoetschke', date: '01 Jun 2026' },
      { step: 'Risk Assessment', isLink: true, status: 'In Progress', startDate: '01 Jun 2026', by: '', date: '' },
      { step: 'Internal Due Diligence', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
      { step: 'External Due Diligence', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
      { step: 'Integrity Check', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
      { step: 'Enhanced Due Diligence Report', isLink: true, status: 'Not Required', startDate: '', by: '', date: '' },
      { step: 'UBO', isLink: false, status: 'Not Started', startDate: '', by: '', date: '' },
      { step: 'Risk Mitigation', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
      { step: 'Approval', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
      { step: 'Screening and Monitoring', isLink: true, status: 'Not Started', startDate: '', by: '', date: '' },
    ],
  },
  riskMitigation: {
    openRisks: [],
    mitigatedRisks: [],
    cancelledRisks: [],
  },
  approval: {
    startDate: '',
    completedDate: '',
    cancelledDate: '',
    renewalDate: '',
  },
};
