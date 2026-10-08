# Technical Specification — Issue #12

## 1. Issue Overview

| Field | Value |
| --- | --- |
| Title | The companies link under Browse Jobs in the front page does not have help text |
| Description | Hovering the "Companies" link under "Browse Jobs" (footer, "For Job Seekers") should show a tooltip reading "Go to companies". |
| Labels | none |
| State | OPEN on GitHub (code fix already merged, see below) |
| Priority | Low |

## 2. Problem Analysis

- The link lives in `src/components/Footer.jsx` (the "For Job Seekers" list). Sibling links ("Browse Jobs", "Contact Us", legal links) are wrapped in the shared `Tooltip` component (`src/components/Tooltip.jsx`); "Companies" was not.
- Issue comments: the owner asked `@claude` to fix it; the bot pushed branch `claude/issue-12-20261003-0238` and noted lint/app were not run.
- Repository evidence: commit `bcba4b1 feat: add tooltip to footer companies link (#13)` is on `master`. `Footer.jsx` now wraps the Companies link in `<Tooltip text="Go to companies">` with the same `group`/focus classes as "Browse Jobs".
- Conclusion: the root cause (missing `Tooltip` wrapper) is already resolved. The issue is still open, likely because the PR did not use a closing keyword, or was not linked.

## 3. Proposed Solution

No further code change is required. Remaining work is verification and closing the issue.

- Reuse `Tooltip` as-is (it applies `aria-describedby` and `tabIndex=0`, and shows on hover and focus-within).
- Trade-off: none; this is the smallest patch and matches the existing pattern.

## 4. Step-by-Step Implementation

1. Confirm fix on `master` — check `Footer.jsx` wraps the Companies link in `Tooltip` with text "Go to companies" (done).
2. Run `npm run lint` — the bot did not run it.
3. Manual browser check (see section 5).
4. Close issue #12 referencing PR #13, and delete the stale remote branch `claude/issue-12-20261003-0238` per git conventions.

## 5. Verification Strategy

### Unit Tests
- The project has no test runner configured (no `test` script in `package.json`); none added, to avoid new tooling for a one-line UI change.

### Integration Tests
- None applicable.

### Manual Checks
- Hover "Companies" in the footer → tooltip "Go to companies" appears above the link.
- Keyboard Tab to the link → tooltip appears on focus; link still navigates to `/companies` on Enter.
- Mobile width → tooltip (w-64, centered) is not clipped off-screen.
- Compare with "Browse Jobs" tooltip → identical styling and behaviour.

## 6. Files to Modify

| File Path | Nature of Change |
| --- | --- |
| `src/components/Footer.jsx` | Already done: wrap Companies link in `Tooltip` |

## 7. New Files to Create

| File Path | Purpose |
| --- | --- |
| none | |

## 8. Existing Utilities to Leverage

| Utility | Benefit |
| --- | --- |
| `src/components/Tooltip.jsx` | Consistent tooltip styling, hover and focus support, ARIA wiring |

## 9. Acceptance Criteria

- Hovering or focusing the footer "Companies" link shows "Go to companies".
- Link navigation unchanged.
- `npm run lint` passes.
- No regressions to other footer tooltips.

## 10. Out of Scope

- Adding a test framework.
- Tooltips for other links (already covered by issues #5, #7).
- Changing `Tooltip` placement or styling.
