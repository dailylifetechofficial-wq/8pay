// State-wise pay pages. A page is published ONLY when `ready` is true, which means its facts are
// backed by a dated report or order. Add a state by filling the fields and setting ready: true,
// then add its slug to PAGES/NAV_GROUPS in site.ts and create the page file (see src/pages/*-pay-commission-calculator.astro).

export const CENTRE_DA = 63; // % from 1 July 2026
export const STATE_DATA_AS_OF = '8 November 2026';
export const STATE_SOURCE = 'PTI-sourced reports compiled by Upstox News (updated 8 November 2026)';

export interface StateInfo {
	name: string;
	slug: string; // page address is /<slug>-pay-commission-calculator/
	kind: 'State' | 'Union Territory';
	ready: boolean;
	da?: number | null; // current DA % when the source states the total
	source?: string; // overrides STATE_SOURCE when this state's facts come from other reports
	checkedOn?: string; // overrides STATE_DATA_AS_OF
	hubNote?: string; // extra footnote shown under the hub table
	noCompare?: boolean; // true when the DA % cannot be compared with the central rate
	rise?: number | null; // size of the latest DA rise in percentage points, when the source states it
	arrearsMonths?: number; // months of arrears, only when the source states it
	daNote?: string; // how the DA figure should be read
	facts?: string[]; // dated facts from the source
	structure?: string[]; // who gets the DA and which pay structure applies
	extra?: string; // one state-specific point worth knowing
	eightNote?: string;
	checks?: string[];
}

export const STATES: StateInfo[] = [
	{ name: 'Andhra Pradesh', slug: 'andhra-pradesh', kind: 'State', ready: false },
	{ name: 'Arunachal Pradesh', slug: 'arunachal-pradesh', kind: 'State', ready: true, rise: 3, da: 63,
		facts: ['The state raised DA and DR by 3 percentage points, from 60% to 63%, ahead of Diwali 2026.', 'The hike benefits state government employees and pensioners.', 'All India Services (AIS) officers serving under the state government also receive the revised DA.', 'Earlier in 2026 the state had raised DA and DR by 2 points to 60% from 1 January 2026, covering more than 69,000 employees and over 40,000 pensioners (BusinessToday, June 2026).'],
		structure: ['Arunachal Pradesh pays DA and Dearness Relief at the same percentage, so pensioners see the same rise as serving staff.', 'Because AIS officers on state cadres are included, the rate is tied closely to the central decision rather than to a separate state formula.'],
		extra: 'Arunachal Pradesh has moved in step with the central DA rate through 2026, going from 60% to 63% after the Centre approved the same rate.',
		eightNote: 'This site has not found an official Arunachal Pradesh notification on adopting the 8th Pay Commission. The state follows central DA closely, so it is reasonable to watch for a state decision after the central report.',
		checks: ['Confirm the effective date of the 63% rate in the order issued by the state Finance Department.', 'Check whether arrears for the period since the central effective date are being paid.'] },
	{ name: 'Assam', slug: 'assam', kind: 'State', ready: false },
	{ name: 'Bihar', slug: 'bihar', kind: 'State', ready: true, rise: 3, arrearsMonths: 4, da: 63, daNote: 'Bihar sets DA separately for each pay commission category, so check the rate for your own category.',
		facts: ['Bihar raised DA by 3 percentage points, from 60% to 63%, ahead of Diwali and Chhath 2026.', 'The hike benefits about 8.5 lakh employees and 3 lakh pensioners.', 'The rate is effective from 1 July 2026, and the state will pay arrears for four months.', 'Earlier in 2026, Bihar introduced different DA increases depending on the pay commission category (BusinessToday, June 2026).'],
		structure: ['Bihar pays DA at different rates to people under different pay commission categories. The 63% reported in November 2026 is the headline rate, so check which category your own pay falls under.', 'Pensioners receive the corresponding Dearness Relief.'],
		extra: 'Four months of arrears (July to October 2026) are due because the hike is effective from 1 July 2026 but was announced in the festival season.',
		eightNote: 'The 8th Pay Commission is a central body. Bihar has not announced its own adoption in the reports reviewed here, and the state already runs several pay scales side by side.',
		checks: ['Find which pay scale category your payslip falls under, because the DA rate differs by category.', 'Check the arrears for July to October 2026 on your pay slip when it is paid.'] },
	{ name: 'Chhattisgarh', slug: 'chhattisgarh', kind: 'State', ready: true, rise: 2, da: 60,
		facts: ['Chhattisgarh announced on 29 October 2026 a 2 percentage point DA hike, from 58% to 60% of basic pay.', 'The new rate applies with effect from 1 November 2026.'],
		structure: ['The state pays DA on basic pay.', 'The rate is below the central 63% and takes effect from 1 November 2026, later than the central effective date of 1 July 2026.'],
		extra: 'Chhattisgarh\'s 60% from 1 November 2026 is a prospective date, so employees should not assume arrears for the months before it.',
		eightNote: 'No Chhattisgarh decision on the 8th Pay Commission has been reported. State employees generally wait for the central report and then a state cabinet decision.',
		checks: ['Compare your November 2026 payslip with the 60% rate.', 'Confirm in the order whether any earlier arrears are payable.'] },
	{ name: 'Goa', slug: 'goa', kind: 'State', ready: false },
	{ name: 'Gujarat', slug: 'gujarat', kind: 'State', ready: true, rise: 3, da: 63, daNote: 'Reported as a 3 point rise "in line with the Centre". The report does not print the new total, so confirm 63% in the state order.',
		facts: ['Gujarat announced a 3 percentage point DA hike, in line with the Centre\'s decision, effective 1 July 2026.', 'It benefits 4.62 lakh serving employees and 5.07 lakh pensioners, 9.69 lakh people in all.', 'Beneficiaries include state government departments, panchayat services and other organisations.', 'Retired employees covered under the Sixth and Seventh Pay Commissions also benefit.'],
		structure: ['Gujarat has more pensioners than serving employees in this announcement, which shows how much pension spending the DA decision moves.', 'Pensioners under both the Sixth and Seventh Pay Commissions receive the hike, so the state runs two pay structures for retirees.'],
		extra: 'More than half of the beneficiaries (5.07 lakh out of 9.69 lakh) are pensioners.',
		eightNote: 'Gujarat has not announced adoption of the 8th Pay Commission in the sources reviewed. The state already pays pensioners under two earlier pay commissions.',
		checks: ['Confirm the 63% total and the effective date in the Finance Department order.', 'Pensioners should check which pay commission their pension falls under.'] },
	{ name: 'Haryana', slug: 'haryana', kind: 'State', ready: true, da: 60, daNote: 'The report describes a 3 point rise but gives a total of 60% from 58%. Confirm the exact rate in the Finance Department order.',
		facts: ['Haryana announced a DA hike on 6 November 2026.', 'It will benefit about 2.78 lakh regular state employees and 2.6 lakh pensioners.', 'The revised DA also applies to employees of boards, corporations and autonomous bodies.', 'The report gives the total as 60% of basic pay, up from 58%.'],
		structure: ['DA applies to regular employees, to pensioners as Dearness Relief, and to staff of boards, corporations and autonomous bodies.', 'The figures in the news reports are not consistent (3 points versus 58% to 60%), so the order is the final word.'],
		extra: 'The Haryana announcement covers staff in boards and corporations as well as government departments.',
		eightNote: 'Haryana has not announced a decision on the 8th Pay Commission in the reports reviewed.',
		checks: ['Read the Finance Department order for the exact DA rate.', 'Check if board and corporation staff have the same effective date.'] },
	{ name: 'Himachal Pradesh', slug: 'himachal-pradesh', kind: 'State', ready: true, rise: 5, da: null, daNote: 'The report gives the 5 point rise but not the new total. Enter your own rate in the calculator.',
		facts: ['On 23 October 2026 the Himachal Pradesh government announced a 5 percentage point DA increase for state government employees.', 'It also approved an additional payment of Rs 10,000 to Class IV employees ahead of Deepawali, according to PTI.'],
		structure: ['The 5 point rise is larger than the 2 to 3 point rises announced by most other states in this round.', 'The additional Rs 10,000 payment is a one-time festival benefit for Class IV staff, not part of DA.'],
		extra: 'A 5 point rise on a basic pay of Rs 35,400 adds Rs 1,770 a month before any HRA or tax effects.',
		eightNote: 'The state has not announced adoption of the 8th Pay Commission.',
		checks: ['Find the new total DA rate in the state order, because the news report gives only the 5 point increase.', 'Check the effective date and whether arrears are payable.'] },
	{ name: 'Jharkhand', slug: 'jharkhand', kind: 'State', ready: false },
	{ name: 'Karnataka', slug: 'karnataka', kind: 'State', ready: true, noCompare: true, rise: 2.25, da: 18, daNote: 'Applies to staff on the 2024 Revised Pay Scales. The report also calls the rise 2.5%; confirm the exact figure in the order.',
		facts: ['On 5 November 2026 Karnataka raised DA and DR for employees and pensioners on the 2024 Revised Pay Scales.', 'DA went from 15.75% to 18%, effective 1 July 2026.', 'The 7th State Pay Commission was constituted in November 2022 and its recommendations led to the 2024 revised scales.'],
		structure: ['Karnataka\'s DA rate looks far lower than the central 63% because it is counted on the 2024 Revised Pay Scales, after the pay revision, so the two numbers are not directly comparable.', 'Staff still on older pay scales are paid under a different DA rate, so check which scale applies to you.'],
		extra: 'Because the 2024 revision reset the DA base, the percentage gap with the Centre does not show the true pay gap.',
		eightNote: 'Karnataka already revised pay under its own 7th State Pay Commission, so its next cycle is a state decision and not automatically tied to the 8th Central Pay Commission.',
		checks: ['Confirm whether your pay is on the 2024 Revised Pay Scales.', 'Do not compare the 18% figure with the central 63% without allowing for the pay revision.'] },
	{ name: 'Kerala', slug: 'kerala', kind: 'State', ready: false },
	{ name: 'Madhya Pradesh', slug: 'madhya-pradesh', kind: 'State', ready: true, rise: 2, arrearsMonths: 9, da: null, daNote: 'The report gives the 2 point rise but not the new total. Enter your own rate in the calculator.',
		facts: ['On 30 October 2026 Madhya Pradesh announced a 2 percentage point DA hike.', 'The hike is effective from 1 January 2026.', 'The state will pay arrears for nine months, January to September 2026, in three monthly instalments.'],
		structure: ['The hike is retrospective to 1 January 2026, so the arrears cover nine months, longer than in states that apply the hike from 1 July 2026.', 'Arrears are paid in three monthly instalments rather than as one lump sum.'],
		extra: 'Madhya Pradesh applies its latest rise from 1 January 2026, which is earlier than the 1 July 2026 date used in many states.',
		eightNote: 'Madhya Pradesh has not announced adoption of the 8th Pay Commission in the reports reviewed.',
		checks: ['Track the three monthly arrears instalments on your payslip.', 'Confirm your total DA rate in the order.'] },
	{ name: 'Maharashtra', slug: 'maharashtra', kind: 'State', ready: true, rise: 2, da: 60,
		source: 'Angel One (21 May 2026) and Deccan Herald (27 December 2018)', checkedOn: '16 November 2026',
		hubNote: 'Maharashtra\'s 60% is from a May 2026 report (rate effective January 2026). The reports reviewed do not show the July 2026 rise being announced for the state yet.',
		daNote: 'This is the latest state rate found in the reports reviewed. The central 63% (from 1 July 2026) had not been reported as announced for Maharashtra, so check for a newer Government Resolution.',
		facts: ['Maharashtra raised DA by 2 percentage points, from 58% to 60%, in a decision reported on 21 May 2026.', 'It affects about 5.16 lakh state government employees and 8.72 lakh pensioners, at a reported cost of Rs 800 crore.', 'The decision covers employees and pensioners under the 5th, 6th and 7th Pay Commissions.', 'Before that, in February 2026, the state raised DA by 3 points to 58%, effective from July 2025.', 'The central DA is 63% from 1 July 2026. The reports reviewed do not show the same rise announced for Maharashtra yet.'],
		structure: ['Maharashtra pays DA separately to employees on the 5th, 6th and 7th Pay Commission scales, so the percentage on your payslip depends on which scale you are on. The 60% figure is the headline rate reported for the state.', 'The state\'s 7th Pay Commission was approved by the Cabinet on 27 December 2018, applied from 1 January 2019 with retrospective effect from 1 January 2016 (36 months), and revised scales were paid from 1 February 2019.', 'That decision covered nearly 20 lakh people, including officers, staff, teachers from unaided schools and Zilla Parishad employees, at an annual cost of Rs 14,000 crore.'],
		extra: 'Maharashtra applied the 7th Pay Commission three years after the central date, which shows how long a state revision can lag the Centre.',
		eightNote: 'Maharashtra implemented the central 7th Pay Commission with cash benefits from 2019, three years after the central effective date of 2016. This site has not found an official Maharashtra decision on the 8th Pay Commission.',
		checks: ['Look for a new Government Resolution (GR) raising DA to match the central 63% from 1 July 2026.', 'Find which pay commission scale (5th, 6th or 7th) your pay falls under, because the DA rate differs.', 'Pensioners should check the DR rate for their own pay commission category.'] },
	{ name: 'Manipur', slug: 'manipur', kind: 'State', ready: false },
	{ name: 'Meghalaya', slug: 'meghalaya', kind: 'State', ready: false },
	{ name: 'Mizoram', slug: 'mizoram', kind: 'State', ready: false },
	{ name: 'Nagaland', slug: 'nagaland', kind: 'State', ready: false },
	{ name: 'Odisha', slug: 'odisha', kind: 'State', ready: false },
	{ name: 'Punjab', slug: 'punjab', kind: 'State', ready: true, rise: 3, da: 53,
		facts: ['On 4 November 2026 the Punjab government announced a 3 percentage point DA hike for state employees and pensioners, taking the DA rate to 53%.', 'The hike benefits about 8 lakh employees and pensioners, and the increase will show in December salaries and pensions.', 'Separately, 6,507 computer teachers (PICTES) got a 40 point DA rise, from 181% to 221%, and the services of 1,007 non-teaching Samagra Shiksha staff were regularised.'],
		structure: ['Punjab\'s 53% is 10 points below the central 63%.', 'Computer teachers are on a different pay structure with a much higher DA percentage (221%), so DA percentages cannot be compared across scales.'],
		extra: 'A 10 point gap on a basic of Rs 35,400 is Rs 3,540 a month, or about Rs 42,480 a year.',
		eightNote: 'Punjab has its own pay commission process and has not announced adoption of the 8th Pay Commission in the reports reviewed. Pending DA dues were also under review earlier in 2026.',
		checks: ['Check your December 2026 payslip for the 53% rate.', 'If you are a PICTES computer teacher, check the 221% rate separately.'] },
	{ name: 'Rajasthan', slug: 'rajasthan', kind: 'State', ready: true, rise: 3, da: 63,
		facts: ['On 30 October 2026 Rajasthan announced a 3 percentage point DA hike, from 60% to 63% of basic pay.', 'It benefits about 7 lakh government employees and 5 lakh pensioners.', 'The hike applies from 1 July 2026.'],
		structure: ['Rajasthan\'s DA is calculated on basic pay only.', 'The state also runs its own 9-18-27 year time-bound promotion scheme, which affects when employees move up in pay.'],
		extra: 'Rajasthan\'s rate now equals the central 63%, so there is no DA gap with the Centre.',
		eightNote: 'Rajasthan has not announced adoption of the 8th Pay Commission in the reports reviewed. It follows its own pay revision process.',
		checks: ['Confirm the effective date and arrears in the order.', 'Check your 9-18-27 scheme eligibility dates.'] },
	{ name: 'Sikkim', slug: 'sikkim', kind: 'State', ready: false },
	{ name: 'Tamil Nadu', slug: 'tamil-nadu', kind: 'State', ready: true, rise: 3, da: 63,
		facts: ['On 31 October 2026 Tamil Nadu announced a 3 percentage point DA hike, from 60% to 63% of basic pay.', 'It benefits about 16 lakh employees and pensioners, including teachers and family pensioners.', 'Earlier in 2026 the state raised DA from 58% to 60% from 1 January 2026, at an extra annual cost of about Rs 1,230 crore (BusinessToday, June 2026).'],
		structure: ['Tamil Nadu pays the same DA to employees, teachers, pensioners and family pensioners.', 'Teachers are included in the figure of 16 lakh beneficiaries, which makes education staff a large share of the state wage bill.'],
		extra: 'Tamil Nadu has now matched the central DA of 63%.',
		eightNote: 'Tamil Nadu has not announced adoption of the 8th Pay Commission in the reports reviewed. The state last implemented a pay revision in October 2017 and runs its own pay commission cycle.',
		checks: ['Confirm the effective date of the 63% rate in the order.', 'Teachers should check whether aided school staff are included.'] },
	{ name: 'Telangana', slug: 'telangana', kind: 'State', ready: false },
	{ name: 'Tripura', slug: 'tripura', kind: 'State', ready: false },
	{ name: 'Uttar Pradesh', slug: 'uttar-pradesh', kind: 'State', ready: true, rise: 3, da: 63,
		facts: ['The Uttar Pradesh government raised DA by 3 percentage points, from 60% to 63%, in an order dated 7 November 2026.', 'The rate applies from 1 July 2026, and employees receive it with their November 2026 salary.', 'Earlier in 2026, DA rose from 58% to 60% from 1 January 2026, benefiting about 16 lakh employees and 12 lakh pensioners (BusinessToday, June 2026).'],
		structure: ['The hike covers state employees, staff in aided educational and technical institutions, regular and full-time employees of urban local bodies, work-charged employees and those on UGC pay scales.', 'The rate applies from 1 July 2026 but is paid with the November salary, so arrears for the earlier months are normally due. Confirm the arrears schedule in the order.'],
		extra: 'Uttar Pradesh has the largest workforce of any state in this list, with about 16 lakh employees and 12 lakh pensioners reported in June 2026.',
		eightNote: 'Uttar Pradesh has not announced adoption of the 8th Pay Commission in the reports reviewed. In past cycles it followed the Centre after the central report.',
		checks: ['Check the November 2026 payslip for the 63% rate.', 'Confirm how the arrears for July to October will be paid.'] },
	{ name: 'Uttarakhand', slug: 'uttarakhand', kind: 'State', ready: true, rise: 3, arrearsMonths: 4, da: 63,
		facts: ['Uttarakhand announced a 3 percentage point DA hike, taking DA to 63% of basic pay under the 7th Pay Commission.', 'The hike is effective from 1 July 2026, like the central decision.', 'Employees will also receive DA arrears from 1 July to 31 October 2026.'],
		structure: ['The hike covers state government employees, eligible staff in local bodies, aided educational institutions, state universities and technical educational institutions, and those on UGC pay scales.', 'The state describes the 63% as DA under the 7th Pay Commission pay structure.'],
		extra: 'Four months of arrears (1 July to 31 October 2026) are due to Uttarakhand employees.',
		eightNote: 'Uttarakhand has not announced adoption of the 8th Pay Commission. Its pay structure is currently based on the 7th Pay Commission.',
		checks: ['Look for the arrears for July to October 2026 in your payslip.', 'University and UGC-scale staff should check their own order.'] },
	{ name: 'West Bengal', slug: 'west-bengal', kind: 'State', ready: false },
	{ name: 'Delhi', slug: 'delhi', kind: 'Union Territory', ready: false },
	{ name: 'Jammu and Kashmir', slug: 'jammu-and-kashmir', kind: 'Union Territory', ready: false },
	{ name: 'Ladakh', slug: 'ladakh', kind: 'Union Territory', ready: false },
	{ name: 'Puducherry', slug: 'puducherry', kind: 'Union Territory', ready: false },
	{ name: 'Chandigarh', slug: 'chandigarh', kind: 'Union Territory', ready: false },
	{ name: 'Andaman and Nicobar Islands', slug: 'andaman-and-nicobar-islands', kind: 'Union Territory', ready: false },
	{ name: 'Dadra and Nagar Haveli and Daman and Diu', slug: 'dadra-nagar-haveli-daman-diu', kind: 'Union Territory', ready: false },
	{ name: 'Lakshadweep', slug: 'lakshadweep', kind: 'Union Territory', ready: false },
];

export const stateSlug = (s: StateInfo) => `${s.slug}-pay-commission-calculator`;
export const readyStates = STATES.filter((s) => s.ready);
export const HUB_SLUG = 'state-pay-commission-calculators';
