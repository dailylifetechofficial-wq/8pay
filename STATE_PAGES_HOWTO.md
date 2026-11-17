# State pages: how to add or update a state

Pages for states are data-driven (`src/data/states.ts`). A state page is published only when its figures are backed by a dated report or official order.

## Add a state
1. In `src/data/states.ts`, find the state and set `ready: true`. Fill `da` (total DA %, only if the source states the total), `rise` (size of the latest rise in points), `arrearsMonths` (only if stated), `facts`, `structure`, `extra`, `eightNote` and `checks`. Use `noCompare: true` when the DA % cannot be compared with the central rate (for example after a pay revision).
2. Create `src/pages/<slug>-pay-commission-calculator.astro` with:
   ```
   ---
   import StatePage from '../components/StatePage.astro';
   ---
   <StatePage slug="<slug>" />
   ```
3. In `src/data/site.ts` add a `PAGES` entry (group `'States'`) and add the slug to the `States` group in `NAV_GROUPS`.
4. Add `public/images/og/<slug>-pay-commission-calculator.png` (1200x630).
5. Add the state to the list in `src/pages/site-map.astro`.

## Update DA when a state announces a new rate
Edit `da`, `rise`, `arrearsMonths` and the `facts` in `states.ts`, and update `STATE_DATA_AS_OF` and `STATE_SOURCE` at the top. Do this after every central or state DA announcement (usually March/April and October/November).

## Quality rules (AdSense)
- Never add a state with guessed numbers. If the source gives only the size of the rise, leave `da: null`.
- Every page must keep its source line and "checked on" date.
- Do not copy text between states. Each page needs its own facts.
