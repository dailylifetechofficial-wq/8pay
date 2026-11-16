// Central site data: used by the layout, footer, HTML sitemap and related-link cards.
export const SITE_NAME = '8PayCommission';
export const SITE_URL = 'https://8paycommission.com';
export const ADSENSE_CLIENT = 'ca-pub-7557955393674418';
// One place for the contact address. Change it to your domain email (for example contact@8paycommission.com) once you have it.
export const CONTACT_EMAIL = 'dailylifetech.official@gmail.com';
// Add real people here (name, role, bio). The About page shows this section only when the list is not empty.
export const AUTHORS: { name: string; role: string; bio: string }[] = [];
export const DA_NOW = 63;
export const UPDATED_ISO = '2026-11-16';
export const UPDATED_LABEL = '16 November 2026';
export const PUBLISHED_ISO = '2026-03-28';

export interface PageInfo {
	slug: string; // '' = home
	title: string; // short label for navigation and cards
	group: 'Latest' | 'Calculators' | 'Pay and allowances' | 'Salary by level' | 'Pension' | 'Guides' | 'About';
	blurb: string;
}

export const PAGES: PageInfo[] = [
	{ slug: '8th-pay-commission-latest-news', title: 'Latest News', group: 'Latest', blurb: 'Verified timeline of the 8th Pay Commission, updated as new orders arrive.' },
	{ slug: '8th-pay-commission-implementation-date', title: 'Implementation Date', group: 'Latest', blurb: 'When revised pay is likely to start and how arrears work.' },
	{ slug: '8th-pay-commission-members-and-terms-of-reference', title: 'Members and Terms of Reference', group: 'Latest', blurb: 'Who is on the commission and what it must examine.' },
	{ slug: 'da-hike-latest-news', title: 'DA Hike (63%)', group: 'Latest', blurb: 'Latest Dearness Allowance rate, history and a DA hike calculator.' },
	{ slug: 'da-hike-january-2027', title: 'DA Hike January 2027', group: 'Latest', blurb: 'Expected DA from January 2027: the 12-month index data and the formula.' },
	{ slug: '8th-pay-commission-pensioners-retired-before-2026', title: 'Pensioners Retired Before 2026', group: 'Latest', blurb: 'Will those who retired before 1 January 2026 get the revised pension?' },
	{ slug: '8th-pay-commission-five-year-pay-revision', title: 'Five-Year Pay Revision Demand', group: 'Latest', blurb: 'The demand to revise pay every five years and a permanent pay review body.' },
	{ slug: '8th-pay-commission-consultations', title: 'Commission Consultations', group: 'Latest', blurb: 'Cities visited, how consultations work and what happens after the report.' },
	{ slug: '8th-pay-commission-salary-all-levels', title: 'Salary by Level (1 to 18)', group: 'Salary by level', blurb: 'Entry pay for all 18 levels under four fitment scenarios.' },
	{ slug: '8th-pay-commission-salary-calculator', title: 'Salary Calculator', group: 'Calculators', blurb: 'Estimate monthly pay under 8th CPC scenarios.' },
	{ slug: '8th-pay-commission-arrears-calculator', title: 'Arrears Calculator', group: 'Calculators', blurb: 'Estimate arrears between the effective date and payout.' },
	{ slug: '8th-pay-commission-pension-calculator', title: 'Pension Calculator', group: 'Calculators', blurb: 'Revised pension, family pension and expected hike.' },
	{ slug: 'gratuity-limit-8th-pay-commission', title: 'Gratuity Calculator', group: 'Calculators', blurb: 'DCRG formula, Rs 25 lakh ceiling and an estimator.' },
	{ slug: 'da-hra-calculator-8th-pay-commission', title: 'DA, HRA and TA Calculator', group: 'Calculators', blurb: 'Allowance breakdown by level, city and DA rate.' },
	{ slug: 'fitment-factor-8th-pay-commission', title: 'Fitment Factor', group: 'Pay and allowances', blurb: 'What 1.92, 2.28, 2.57 and 2.86 would mean for your basic pay.' },
	{ slug: 'minimum-basic-pay-8th-pay-commission', title: 'Minimum Basic Pay', group: 'Pay and allowances', blurb: 'How the minimum salary is set and what it could become.' },
	{ slug: '8th-pay-commission-pay-matrix', title: 'Pay Matrix', group: 'Pay and allowances', blurb: 'The 18-level matrix with scenario columns and a cell lookup.' },
	{ slug: 'da-merger-8th-pay-commission', title: 'DA Merger', group: 'Pay and allowances', blurb: 'Why DA resets after a pay commission and what it means.' },
	{ slug: 'hra-slabs-8th-pay-commission', title: 'HRA Slabs', group: 'Pay and allowances', blurb: 'X, Y and Z city rates, floors and rules.' },
	{ slug: 'ups-unified-pension-scheme-8th-cpc', title: 'Unified Pension Scheme', group: 'Pension', blurb: 'UPS rules, calculator and comparison with OPS and NPS.' },
	{ slug: '7th-vs-8th-pay-commission', title: '7th vs 8th Pay Commission', group: 'Guides', blurb: 'Side-by-side comparison of the two commissions.' },
	{ slug: '8th-pay-commission-railway-employees', title: 'Railway Employees', group: 'Guides', blurb: 'What the 8th CPC means for railway staff and pensioners.' },
	{ slug: 'state-government-8th-pay-commission', title: 'State Government Employees', group: 'Guides', blurb: 'How and when states follow central pay revisions.' },
	{ slug: '8th-pay-commission-faq', title: 'FAQ', group: 'Guides', blurb: 'Short answers to the most searched questions.' },
	{ slug: '8th-pay-commission-memorandum-submission', title: 'Memorandum Submission', group: 'Latest', blurb: 'The 2026 memorandum window, deadlines and how submissions worked.' },
	{ slug: '8th-pay-commission-demands-interim-relief', title: 'Staff Demands and Interim Relief', group: 'Latest', blurb: 'Rs 69,000 minimum pay, 3.83 fitment and 20% interim relief: what is asked.' },
	{ slug: '8th-pay-commission-who-is-covered', title: 'Who Is Covered', group: 'Guides', blurb: 'Which employees and pensioners the commission covers.' },
	{ slug: '8th-pay-commission-defence-armed-forces', title: 'Defence and Armed Forces', group: 'Guides', blurb: 'What the 8th CPC means for defence personnel and ex-servicemen.' },
	{ slug: 'pay-commissions-in-india-history', title: 'History of Pay Commissions', group: 'Guides', blurb: 'All eight commissions: years, chairs and minimum pay.' },
	{ slug: 'central-government-payslip-explained', title: 'Payslip Explained', group: 'Pay and allowances', blurb: 'Every line on a central government payslip in plain words.' },
	{ slug: 'macp-scheme-explained', title: 'MACP Scheme', group: 'Pay and allowances', blurb: 'Financial upgrades after 10, 20 and 30 years.' },
	{ slug: 'pay-commission-glossary', title: 'Glossary', group: 'Guides', blurb: 'Pay commission terms from AICPI-IW to UPS.' },
	{ slug: '8th-pay-commission-level-1-salary', title: 'Level 1 Salary', group: 'Salary by level', blurb: 'Level 1: Rs 18,000 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-3-salary', title: 'Level 3 Salary', group: 'Salary by level', blurb: 'Level 3: Rs 21,700 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-5-salary', title: 'Level 5 Salary', group: 'Salary by level', blurb: 'Level 5: Rs 29,200 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-6-salary', title: 'Level 6 Salary', group: 'Salary by level', blurb: 'Level 6: Rs 35,400 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-7-salary', title: 'Level 7 Salary', group: 'Salary by level', blurb: 'Level 7: Rs 44,900 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-8-salary', title: 'Level 8 Salary', group: 'Salary by level', blurb: 'Level 8: Rs 47,600 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-9-salary', title: 'Level 9 Salary', group: 'Salary by level', blurb: 'Level 9: Rs 53,100 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-10-salary', title: 'Level 10 Salary', group: 'Salary by level', blurb: 'Level 10: Rs 56,100 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-level-11-salary', title: 'Level 11 Salary', group: 'Salary by level', blurb: 'Level 11: Rs 67,700 today, scenario pay and promotion.' },
	{ slug: '8th-pay-commission-calculator', title: 'All Calculators', group: 'Calculators', blurb: 'Salary, arrears, pension and allowance calculators in one place.' },
	{ slug: 'central-government-salary-calculator', title: 'Current Salary Calculator', group: 'Calculators', blurb: 'Gross pay today by level and cell.' },
	{ slug: 'government-employee-in-hand-salary-calculator', title: 'In-Hand Salary Calculator', group: 'Calculators', blurb: 'Take-home pay after NPS or UPS, CGHS and other deductions.' },
	{ slug: '8th-cpc-update-2026', title: '8th CPC Update 2026', group: 'Latest', blurb: 'A month-by-month review of the 8th CPC in 2026.' },
	{ slug: 'when-will-8th-pay-commission-start', title: 'When Will It Start?', group: 'Latest', blurb: 'Likely timeline from report to first revised payslip.' },
	{ slug: '8th-pay-commission-effective-date', title: 'Effective Date', group: 'Latest', blurb: 'The expected effective date and how it drives arrears.' },
	{ slug: '8th-pay-commission-cabinet-approval-status', title: 'Cabinet Approval Status', group: 'Latest', blurb: 'What the Cabinet has and has not approved.' },
	{ slug: '8th-pay-commission-da-calculation-rules', title: 'DA Calculation Rules', group: 'Pay and allowances', blurb: 'How DA is worked out and when it changes.' },
	{ slug: 'how-basic-pay-is-fixed-in-pay-commission', title: 'How Basic Pay Is Fixed', group: 'Pay and allowances', blurb: 'How fitment turns old pay into new pay.' },
	{ slug: 'central-government-employee-allowance-revisions', title: 'Allowance Revisions', group: 'Pay and allowances', blurb: 'Which allowances change with basic pay, DA or orders.' },
	{ slug: 'ups-vs-nps-under-8th-pay-commission', title: 'UPS vs NPS', group: 'Pension', blurb: 'UPS and NPS compared, and what the 8th CPC does to each.' },
	{ slug: 'retired-central-government-employee-pension-revision-8th-cpc', title: 'Pensioners: Revision', group: 'Pension', blurb: 'Pension revision for retired employees, with scenario table.' },
	{ slug: '8th-pay-commission-pay-scale-chart-pdf', title: 'Pay Scale Chart PDF', group: 'Pay and allowances', blurb: 'Free PDF of the 7th CPC pay matrix with scenario columns.' },
	{ slug: 'about-us', title: 'About Us', group: 'About', blurb: 'Who runs this site and how we verify facts.' },
	{ slug: 'editorial-policy', title: 'Editorial Policy', group: 'About', blurb: 'Sourcing standards, corrections and update practice.' },
	{ slug: 'contact-us', title: 'Contact Us', group: 'About', blurb: 'Send corrections, questions or feedback.' },
	{ slug: 'privacy-policy', title: 'Privacy Policy', group: 'About', blurb: 'How data, cookies and advertising are handled.' },
	{ slug: 'terms-of-condition', title: 'Terms of Use', group: 'About', blurb: 'Rules for using this website and its calculators.' },
];

export const NAV_GROUPS: { label: string; slugs: string[] }[] = [
	{ label: 'Latest', slugs: ['8th-pay-commission-latest-news', 'da-hike-january-2027', '8th-pay-commission-pensioners-retired-before-2026', '8th-pay-commission-five-year-pay-revision', '8th-pay-commission-consultations', '8th-cpc-update-2026', 'when-will-8th-pay-commission-start', '8th-pay-commission-effective-date', '8th-pay-commission-cabinet-approval-status', '8th-pay-commission-implementation-date', 'da-hike-latest-news', '8th-pay-commission-demands-interim-relief', '8th-pay-commission-memorandum-submission', '8th-pay-commission-members-and-terms-of-reference'] },
	{ label: 'Calculators', slugs: ['8th-pay-commission-calculator', '8th-pay-commission-salary-calculator', 'central-government-salary-calculator', 'government-employee-in-hand-salary-calculator', '8th-pay-commission-arrears-calculator', '8th-pay-commission-pension-calculator', 'gratuity-limit-8th-pay-commission', 'da-hra-calculator-8th-pay-commission'] },
	{ label: 'Pay and allowances', slugs: ['fitment-factor-8th-pay-commission', 'minimum-basic-pay-8th-pay-commission', '8th-pay-commission-pay-matrix', 'da-merger-8th-pay-commission', 'hra-slabs-8th-pay-commission', 'central-government-payslip-explained', 'macp-scheme-explained', '8th-pay-commission-da-calculation-rules', 'how-basic-pay-is-fixed-in-pay-commission', 'central-government-employee-allowance-revisions', '8th-pay-commission-pay-scale-chart-pdf'] },
	{ label: 'Salary by level', slugs: ['8th-pay-commission-salary-all-levels', '8th-pay-commission-level-1-salary', '8th-pay-commission-level-3-salary', '8th-pay-commission-level-5-salary', '8th-pay-commission-level-6-salary', '8th-pay-commission-level-7-salary', '8th-pay-commission-level-8-salary', '8th-pay-commission-level-9-salary', '8th-pay-commission-level-10-salary', '8th-pay-commission-level-11-salary'] },
	{ label: 'Guides', slugs: ['7th-vs-8th-pay-commission', 'pay-commissions-in-india-history', '8th-pay-commission-who-is-covered', 'ups-unified-pension-scheme-8th-cpc', '8th-pay-commission-railway-employees', '8th-pay-commission-defence-armed-forces', 'state-government-8th-pay-commission', 'pay-commission-glossary', '8th-pay-commission-faq', 'ups-vs-nps-under-8th-pay-commission', 'retired-central-government-employee-pension-revision-8th-cpc'] },
];

export const HI_PAGES: { slug: string; title: string }[] = [
	{ slug: 'hi/8th-pay-commission', title: '8वां वेतन आयोग: ताज़ा जानकारी' },
	{ slug: 'hi/8th-pay-commission-fitment-factor', title: 'फिटमेंट फैक्टर' },
	{ slug: 'hi/da-hike-63-percent', title: 'DA 63%: महंगाई भत्ता' },
	{ slug: 'hi/8th-pay-commission-salary-calculator', title: 'सैलरी कैलकुलेटर' },
	{ slug: 'hi/8th-pay-commission-kab-lagu-hoga', title: 'कब लागू होगा' },
	{ slug: 'hi/da-hike-january-2027', title: 'जनवरी 2027 में DA' },
];

export function pageBySlug(slug: string): PageInfo | undefined {
	return PAGES.find((p) => p.slug === slug);
}

export interface ImageInfo { alt: string; w: number; h: number; caption: string }
export const IMAGES: Record<string, ImageInfo> = {
	'fitment-factor-comparison': { w: 1200, h: 675, alt: 'Bar chart comparing the 6th CPC fitment factor 1.86, the 7th CPC factor 2.57, illustrative 8th CPC scenarios of 1.92, 2.28 and 2.86, and the staff-side demand of 3.83', caption: 'Fitment factors of past commissions, illustrative 8th CPC scenarios and the staff-side demand. No official 8th CPC figure exists yet.' },
	'minimum-pay-across-commissions': { w: 1200, h: 675, alt: 'Bar chart of minimum monthly basic pay from the 4th CPC at Rs 750 to the 7th CPC at Rs 18,000 and 8th CPC scenarios up to Rs 51,480 and a staff demand of Rs 69,000', caption: 'Minimum basic pay across commissions, with 8th CPC bars calculated as Rs 18,000 times each scenario factor.' },
	'da-rate-history': { w: 1200, h: 675, alt: 'Bar chart of central government Dearness Allowance rising from 31 percent in July 2021 to 63 percent in July 2026', caption: 'Dearness Allowance has risen from 31% to 63% between July 2021 and July 2026.' },
	'pay-commission-history': { w: 1200, h: 675, alt: 'Timeline of Central Pay Commissions from the 1st in 1946 to the 8th constituted in 2025', caption: 'Year of constitution of each Central Pay Commission.' },
	'8th-cpc-timeline': { w: 1200, h: 675, alt: 'Timeline of 8th Pay Commission milestones from the January 2025 announcement to the report due around May 2027', caption: 'Verified 8th Pay Commission milestones and the expected report window.' },
	'commission-process-flow': { w: 1200, h: 500, alt: 'Five-step diagram showing how a Pay Commission moves from constitution to notification of revised pay', caption: 'From constitution to your payslip: the five stages of every Pay Commission.' },
	'salary-calculation-flow': { w: 1200, h: 500, alt: 'Diagram showing how 8th Pay Commission salary is estimated from basic pay, fitment factor, DA, HRA, TA and deductions', caption: 'The calculation steps used by the salary calculator on this site.' },
	'hra-city-classes': { w: 1200, h: 470, alt: 'Cards showing HRA rates of 30 percent for Class X cities, 20 percent for Class Y and 10 percent for Class Z', caption: 'Current HRA percentages by city class.' },
	'ups-vs-nps-vs-ops': { w: 1200, h: 470, alt: 'Comparison cards for the Old Pension Scheme, National Pension System and Unified Pension Scheme', caption: 'How OPS, NPS and UPS differ for central government employees.' },
	'pension-calculation-flow': { w: 1200, h: 500, alt: 'Four-step diagram showing how a revised pension is estimated using the fitment factor and dearness relief', caption: 'How a revised pension is estimated for existing pensioners.' },
	'arrears-timeline': { w: 1200, h: 675, alt: 'Timeline showing how 8th Pay Commission arrears build between the effective date and payout', caption: 'Arrears accrue from the effective date until revised pay begins.' },
	'gratuity-formula': { w: 1200, h: 470, alt: 'Three-step diagram of the gratuity formula: one quarter of basic plus DA, times six-month periods, capped at Rs 25 lakh', caption: 'The Death-cum-Retirement Gratuity formula in three steps.' },
	'centre-vs-state-pay': { w: 1200, h: 500, alt: 'Four-step diagram showing how state governments follow a central pay commission', caption: 'Why state employees often wait longer than central employees.' },
	'7th-vs-8th-pay-commission': { w: 1200, h: 675, alt: 'Grouped bar chart of entry basic pay by level under the 7th CPC and three 8th CPC scenarios', caption: 'Entry basic pay by level: 7th CPC versus three illustrative 8th CPC scenarios.' },
	'memorandum-timeline': { w: 1200, h: 675, alt: 'Timeline of the 8th Pay Commission memorandum window from 5 March 2026 to the final deadline of 15 June 2026', caption: 'The 2026 memorandum window: opened 5 March, extended twice, closed 15 June.' },
	'staff-demands-summary': { w: 1200, h: 560, alt: 'Four cards listing staff-side demands: Rs 69,000 minimum pay, 3.83 fitment factor, 20 percent interim relief and 50 percent DA merger', caption: 'Main staff-side demands reported in 2026. They are proposals, not government decisions.' },
	'payslip-anatomy': { w: 1200, h: 500, alt: 'Five-step diagram of a central government payslip from basic pay and allowances to gross pay, deductions and net pay', caption: 'How the lines on a central government payslip fit together.' },
	'macp-ladder': { w: 1200, h: 675, alt: 'Timeline of the three MACP financial upgrades after 10, 20 and 30 years of service', caption: 'The three MACP upgrades and when they apply.' },
	'who-is-covered': { w: 1200, h: 470, alt: 'Three cards showing who the 8th Pay Commission covers: central employees, with states and PSUs handled separately', caption: 'Scope of the 8th Pay Commission.' },
	'pay-commission-chairs': { w: 1200, h: 675, alt: 'Timeline of the chairpersons of the first to eighth Central Pay Commissions', caption: 'Chairpersons of the eight Central Pay Commissions.' },
	'pay-matrix-levels': { w: 1200, h: 600, alt: 'Four cards summarising the 18 levels of the 7th CPC pay matrix with entry pay ranges', caption: 'The 7th CPC pay matrix grouped into four bands of levels.' },
	'level-1-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 1 basic pay today (Rs 18,000), basic plus 63 percent DA (Rs 29,340) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 1 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-3-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 3 basic pay today (Rs 21,700), basic plus 63 percent DA (Rs 35,371) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 3 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-5-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 5 basic pay today (Rs 29,200), basic plus 63 percent DA (Rs 47,596) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 5 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-6-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 6 basic pay today (Rs 35,400), basic plus 63 percent DA (Rs 57,702) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 6 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-7-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 7 basic pay today (Rs 44,900), basic plus 63 percent DA (Rs 73,187) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 7 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-8-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 8 basic pay today (Rs 47,600), basic plus 63 percent DA (Rs 77,588) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 8 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-9-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 9 basic pay today (Rs 53,100), basic plus 63 percent DA (Rs 86,553) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 9 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-10-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 10 basic pay today (Rs 56,100), basic plus 63 percent DA (Rs 91,443) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 10 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'level-11-salary-scenarios': { w: 1200, h: 675, alt: 'Bar chart of Level 11 basic pay today (Rs 67,700), basic plus 63 percent DA (Rs 1,10,351) and 8th CPC scenarios at 1.92, 2.28, 2.57, 2.86 and the staff demand of 3.83', caption: 'Level 11 basic pay today and under illustrative 8th CPC fitment factors. No official factor has been announced.' },
	'calculators-overview': { w: 1200, h: 500, alt: 'Grid of eight calculators on 8PayCommission: salary, arrears, pension, gratuity, DA HRA TA, current salary, in-hand salary and pay matrix lookup', caption: 'Every calculator on this site and the question each one answers.' },
	'pay-matrix-entry-pay-by-level': { w: 1200, h: 675, alt: 'Bar chart of entry basic pay for every pay level from Level 1 at Rs 18,000 to Level 18 at Rs 2,50,000 under the 7th CPC', caption: 'Entry basic pay by level in the 7th CPC pay matrix.' },
	'in-hand-salary-by-level': { w: 1200, h: 675, alt: 'Bar chart of estimated in-hand monthly salary at the entry cell of pay levels 1, 3, 5, 6, 7, 8, 9, 10 and 11 after a 10 percent NPS or UPS contribution', caption: 'Estimated in-hand salary by pay level at the entry cell, Class X city, DA 63%.' },
	'8th-cpc-2026-timeline': { w: 1200, h: 675, alt: 'Timeline of 2026 showing the memorandum window opening on 5 March, DA at 60 percent in April, the final memorandum date of 15 June, stakeholder visits in September and DA at 63 percent on 28 October', caption: 'Key 8th Pay Commission and DA events in 2026.' },
	'when-8th-pay-commission-start-timeline': { w: 1200, h: 675, alt: 'Timeline with three scenarios showing the commission report, Cabinet decision and first revised payslip between 2027 and 2028', caption: 'Three illustrative timelines for the 8th Pay Commission, based on gaps seen in the 6th and 7th commissions.' },
	'effective-date-vs-payment-date': { w: 1200, h: 675, alt: 'Chart showing arrears of about 20, 24 and 33 months between an effective date of 1 January 2026 and a payment date in three scenarios', caption: 'Arrears build up between the effective date and the payment date.' },
	'cabinet-approval-stages': { w: 1200, h: 560, alt: 'Five-stage diagram of the 8th Pay Commission approval process showing two completed stages and three pending stages', caption: 'Approval stages for the 8th Pay Commission and where each stands.' },
	'da-calculation-formula': { w: 1200, h: 500, alt: 'Four-step diagram of the DA formula: take 12 months of AICPI-IW, average them, convert and apply the formula, then round and announce', caption: 'How the Dearness Allowance rate is worked out from the consumer price index.' },
	'basic-pay-fixation-steps': { w: 1200, h: 500, alt: 'Four-step diagram of pay fixation: take existing basic pay, multiply by the fitment factor, find the level, fix at the same or next higher cell', caption: 'How basic pay is fixed after a pay commission.' },
	'allowances-linked-to-da': { w: 1200, h: 500, alt: 'Four-step diagram showing HRA rates rising from 24 percent to 27 and then 30 percent as DA crosses 25 and 50 percent', caption: 'Allowance rates that move when DA crosses set thresholds.' },
	'pension-revision-scenarios': { w: 1200, h: 675, alt: 'Bar chart of a Rs 30,000 basic pension: Rs 48,900 with 63 percent DR today versus Rs 57,600, 68,400, 77,100 and 85,800 at factors 1.92, 2.28, 2.57 and 2.86', caption: 'Revised pension on a Rs 30,000 basic pension under illustrative fitment factors.' },
	'pay-matrix-chart-preview': { w: 1200, h: 675, alt: 'Table preview of the 7th CPC pay matrix showing levels 1 to 10 and cells 1 to 8 in rupees', caption: 'Preview of the pay scale chart: 7th CPC pay matrix cells for levels 1 to 10.' },
};
