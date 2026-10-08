# Technical Specification — Issue #2

## 1. Issue Overview

| Field | Value |
| --- | --- |
| Title | Inside the footer, when hover onto the "Cookie Policy" nothing is being displayed |
| Description | Hovering "Cookie Policy" in the footer shows no text; expected a short cookie-policy explanation. Screenshot attached. |
| Labels | None (no milestone, no comments; assigned to tkousek2002) |
| State | CLOSED |
| Priority | Low (cosmetic, no functional impact) |

## 2. Problem Analysis

- At the time of the report, the footer's Privacy Policy, Terms of Service and Cookie Policy items were plain `<a>` elements with no hover content.
- Git history shows the fix already landed: commit `03fdaa3 fix: add tooltip to footer policy links (#3)` introduced the `Tooltip` component (`src/components/Tooltip.jsx`) and wrapped the policy links in `src/components/Footer.jsx`.
- Current state (verified in code): `Footer.jsx` lines 161-166 wrap "Cookie Policy" in `<Tooltip text="We use essential cookies ...">`. The tooltip is shown via `group-hover/tip:opacity-100` and `group-focus-within/tip:opacity-100`, so it also works on keyboard focus.
- Later commit `bcba4b1` (#13) applied the same pattern to the Companies link, confirming the component is stable.

Conclusion: the issue is already resolved in the repository; no root-cause defect remains. The only unverified item is a visual check in the browser.

## 3. Proposed Solution

No code change required. Close-out actions only:

- Confirm the tooltip renders on hover/focus in the running app.
- Link issue #2 to PR #3 if not already linked.

Optional follow-up (not required): the links have no `href`, so they are not real navigation targets. A real policy page is a separate feature.

## 4. Step-by-Step Implementation

1. Verify — run `npm run dev`, scroll to the footer, hover and Tab-focus "Cookie Policy"; the tooltip should appear above the link.
2. Check responsive layout — at mobile width, confirm the `w-64` tooltip is not clipped off-screen at the left edge.
3. Close out — reference PR #3 on the issue (issue already closed).

## 5. Verification Strategy

### Unit Tests

- Render `<Tooltip text="x"><a>Link</a></Tooltip>` → element with `role="tooltip"` contains "x"; child has `aria-describedby` equal to the tooltip id and `tabIndex=0`.

(The repo has no test runner configured, so this is only applicable if one is added.)

### Integration Tests

- Render `Footer` → "Cookie Policy" link is described by a tooltip containing "essential cookies".

### Manual Checks

- Hover "Cookie Policy" → tooltip with cookie text appears (fade-in 300ms).
- Tab to "Cookie Policy" → tooltip appears on focus.
- Narrow viewport (<640px) → tooltip fully visible.

## 6. Files to Modify

| File Path | Nature of Change |
| --- | --- |
| None | Already implemented in `src/components/Footer.jsx` and `src/components/Tooltip.jsx` |

## 7. New Files to Create

| File Path | Purpose |
| --- | --- |
| None | — |

## 8. Existing Utilities to Leverage

| Utility | Benefit |
| --- | --- |
| `Tooltip` (`src/components/Tooltip.jsx`) | Hover and focus tooltip with a11y wiring (`role="tooltip"`, `aria-describedby`) |

## 9. Acceptance Criteria

- Hovering "Cookie Policy" displays cookie-policy text (met).
- Keyboard focus shows the same text (met).
- No regressions to other footer links (Privacy, Terms, Contact, Companies use the same component).

## 10. Out of Scope

- Creating real Privacy/Terms/Cookie policy pages or routes.
- Cookie consent banner.
- Changing tooltip styling or adding a test framework.
