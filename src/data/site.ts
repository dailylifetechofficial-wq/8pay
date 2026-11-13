// Central site data: used by the layout, footer, HTML sitemap and related-link cards.
export const SITE_NAME = '8PayCommission';
export const SITE_URL = 'https://8paycommission.com';
export const ADSENSE_CLIENT = 'ca-pub-7557955393674418';
export const DA_NOW = 63;
export const UPDATED_ISO = '2026-11-03';
export const UPDATED_LABEL = '3 November 2026';
export const PUBLISHED_ISO = '2026-03-28';

export interface PageInfo {
	slug: string; // '' = home
	title: string; // short label for navigation and cards
	group: 'Latest' | 'Calculators' | 'Pay and allowances' | 'Pension' | 'Guides' | 'About';
	blurb: string;
}

export const PAGES: PageInfo[] = [
	{ slug: '8th-pay-commission-latest-news', title: 'Latest News', group: 'Latest', blurb: 'Verified timeline of the 8th Pay Commission, updated as new orders arrive.' },
	{ slug: '8th-pay-commission-implementation-date', title: 'Implementation Date', group: 'Latest', blurb: 'When revised pay is likely to start and how arrears work.' },
	{ slug: '8th-pay-commission-members-and-terms-of-reference', title: 'Members and Terms of Reference', group: 'Latest', blurb: 'Who is on the commission and what it must examine.' },
	{ slug: 'da-hike-latest-news', title: 'DA Hike (63%)', group: 'Latest', blurb: 'Latest Dearness Allowance rate, history and a DA hike calculator.' },
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
	{ slug: 'about-us', title: 'About Us', group: 'About', blurb: 'Who runs this site and how we verify facts.' },
	{ slug: 'editorial-policy', title: 'Editorial Policy', group: 'About', blurb: 'Sourcing standards, corrections and update practice.' },
	{ slug: 'contact-us', title: 'Contact Us', group: 'About', blurb: 'Send corrections, questions or feedback.' },
	{ slug: 'privacy-policy', title: 'Privacy Policy', group: 'About', blurb: 'How data, cookies and advertising are handled.' },
	{ slug: 'terms-of-condition', title: 'Terms of Use', group: 'About', blurb: 'Rules for using this website and its calculators.' },
];

export const NAV_GROUPS: { label: string; slugs: string[] }[] = [
	{ label: 'Latest', slugs: ['8th-pay-commission-latest-news', '8th-pay-commission-implementation-date', 'da-hike-latest-news', '8th-pay-commission-demands-interim-relief', '8th-pay-commission-memorandum-submission', '8th-pay-commission-members-and-terms-of-reference'] },
	{ label: 'Calculators', slugs: ['8th-pay-commission-salary-calculator', '8th-pay-commission-arrears-calculator', '8th-pay-commission-pension-calculator', 'gratuity-limit-8th-pay-commission', 'da-hra-calculator-8th-pay-commission'] },
	{ label: 'Pay and allowances', slugs: ['fitment-factor-8th-pay-commission', 'minimum-basic-pay-8th-pay-commission', '8th-pay-commission-pay-matrix', 'da-merger-8th-pay-commission', 'hra-slabs-8th-pay-commission', 'central-government-payslip-explained', 'macp-scheme-explained'] },
	{ label: 'Guides', slugs: ['7th-vs-8th-pay-commission', 'pay-commissions-in-india-history', '8th-pay-commission-who-is-covered', 'ups-unified-pension-scheme-8th-cpc', '8th-pay-commission-railway-employees', '8th-pay-commission-defence-armed-forces', 'state-government-8th-pay-commission', 'pay-commission-glossary', '8th-pay-commission-faq'] },
];

export const HI_PAGES: { slug: string; title: string }[] = [
	{ slug: 'hi/8th-pay-commission', title: '8वां वेतन आयोग: ताज़ा जानकारी' },
	{ slug: 'hi/8th-pay-commission-fitment-factor', title: 'फिटमेंट फैक्टर' },
	{ slug: 'hi/da-hike-63-percent', title: 'DA 63%: महंगाई भत्ता' },
	{ slug: 'hi/8th-pay-commission-salary-calculator', title: 'सैलरी कैलकुलेटर' },
	{ slug: 'hi/8th-pay-commission-kab-lagu-hoga', title: 'कब लागू होगा' },
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
};
