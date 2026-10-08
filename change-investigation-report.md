# 🔎 Change Investigation Report

**Target**: `src/components/Footer.jsx:171`
**Interpretation**: Line 171 is the closing `>` of the `<Link to="/contact" ...>` opening tag. I investigated the whole "Contact Us" block (lines 167–175, the `<Tooltip>` wrapping the `<Link>`).
**Investigation Date**: 2026-10-05
**Repository**: https://github.com/tkousek2002/job-portal-ui.git
**Branch**: master

---

## 📋 Investigation Summary

| Detail                  | Value                                         |
| ----------------------- | --------------------------------------------- |
| File(s) Analyzed        | src/components/Footer.jsx                     |
| Lines Investigated      | 167–175 (target line 171); file is 192 lines  |
| Total Commits on File   | 5                                             |
| Unique Authors          | 1 (tkousek2002, two emails)                   |
| File Age (First Commit) | 2026-10-01                                    |
| Last Modified           | 2026-10-02 21:45 -0500 by tkousek2002         |

---

## 👥 Author Breakdown

| #   | Author       | Email                              | Commits | Lines Owned | First Contribution | Last Contribution |
| --- | ------------ | ---------------------------------- | ------- | ----------- | ------------------ | ----------------- |
| 1   | tkousek2002  | tkousek2002@yahoo.com (initial)    | 1       | see below   | 2026-10-01         | 2026-10-01        |
| 1   | tkousek2002  | theron.kousek@gmail.com (4 others) | 4       | see below   | 2026-10-02         | 2026-10-02        |

`git blame` attributes all 192 lines (100%) to the author name `tkousek2002`.

**Primary Owner**: tkousek2002 (100%)
**Most Recent Contributor**: tkousek2002 (bcba4b1, 2026-10-02)
**CODEOWNERS**: Not configured

---

## 📅 Change Timeline

### 07a3f5e — 2026-10-02 08:27 -0500 (the commit that owns line 171)

- **Author**: tkousek2002 <theron.kousek@gmail.com>
- **Message**: fix: add tooltip to footer contact us link (#5)
- **Body**: Wrap the Contact Us link in the shared Tooltip component so it shows "Send us a request and we will get back to you" on hover and focus, matching the other footer links. Co-authored-by: tkousek2002 <tkousek2002@yahoo.com>, Claude Sonnet 5.5
- **Ticket References**: #5
- **Lines Changed**: +9 / -7
- **What Changed**:
  > Wrapped the existing Contact Us `<Link>` in `<Tooltip>`, which re-indented the whole block, so every line in 167–175 (including 171) blames to this commit. It also added `focus:text-white focus:outline-none` to the Link and `group-focus:opacity-100` to the highlight `div`, so keyboard focus matches hover.

### bcba4b1 — 2026-10-02 21:45 -0500
- **Message**: feat: add tooltip to footer companies link (#13)
- **Ticket References**: #13 · **Lines**: +9 / -7
- **What Changed**: Same tooltip wrapping for a different footer link. It does not touch lines 167–175.

### f6095d1 — 2026-10-02 12:41 -0500
- **Message**: fix: add tooltip to footer browse jobs link (#7) (#9)
- **Ticket References**: #7, #9 · **Lines**: +9 / -7
- **What Changed**: Tooltip wrap for the Browse Jobs link ("Go to job listings"). Not in the target block.

### 03fdaa3 — 2026-10-02 08:16 -0500
- **Message**: fix: add tooltip to footer policy links (#3)
- **Body**: Privacy Policy, Terms of Service and Cookie Policy anchors had no href or hover content. Adds a reusable Tooltip component and wraps the three links.
- **Ticket References**: #3 · **Lines**: +20 / -13
- **What Changed**: Introduced the Tooltip pattern in the footer. Not in the target block.

### 8126c0e — 2026-10-01 20:06 -0500
- **Author**: tkousek2002 <tkousek2002@yahoo.com>
- **Message**: Initial commit
- **Ticket References**: None · **Lines**: +179 / -0
- **What Changed**: Created the file. The original un-tooltipped Contact Us `<Link>` came from here (it was replaced in 07a3f5e).

---

## 🔬 Line-by-Line Blame (Current State)

| Line    | Code (truncated)                                                    | Author      | Date       | Commit  |
| ------- | ------------------------------------------------------------------- | ----------- | ---------- | ------- |
| 167     | `<Tooltip text="Send us a request and we will get back to you">`    | tkousek2002 | 2026-10-02 | 07a3f5e |
| 168     | `<Link`                                                             | tkousek2002 | 2026-10-02 | 07a3f5e |
| 169     | `to="/contact"`                                                     | tkousek2002 | 2026-10-02 | 07a3f5e |
| 170     | `className="group relative hover:text-white focus:text-white ...`   | tkousek2002 | 2026-10-02 | 07a3f5e |
| **171** | `>`                                                                 | tkousek2002 | 2026-10-02 | 07a3f5e |
| 172     | `<span className="relative z-10">Contact Us</span>`                 | tkousek2002 | 2026-10-02 | 07a3f5e |
| 173     | `<div className="absolute bg-gradient-to-r from-primary-600/20 ...` | tkousek2002 | 2026-10-02 | 07a3f5e |
| 174     | `</Link>`                                                           | tkousek2002 | 2026-10-02 | 07a3f5e |
| 175     | `</Tooltip>`                                                        | tkousek2002 | 2026-10-02 | 07a3f5e |

---

## 🎫 Linked Tickets & References

| Ticket ID | Commit  | Author      | Date       | Commit Subject                                 |
| --------- | ------- | ----------- | ---------- | ---------------------------------------------- |
| #3        | 03fdaa3 | tkousek2002 | 2026-10-02 | fix: add tooltip to footer policy links        |
| #5        | 07a3f5e | tkousek2002 | 2026-10-02 | fix: add tooltip to footer contact us link     |
| #7, #9    | f6095d1 | tkousek2002 | 2026-10-02 | fix: add tooltip to footer browse jobs link    |
| #13       | bcba4b1 | tkousek2002 | 2026-10-02 | feat: add tooltip to footer companies link     |

---

## 💡 Insights

- **Churn Assessment**: The file had 5 commits in about 1.5 days, 4 of them on 2026-10-02. They are one-link-per-commit tooltip changes, so this is an incremental rollout and not instability. The target block was touched once after creation.
- **Bus Factor**: One author owns 100% of the lines. Commits are co-authored with Claude. The author appears under two emails (yahoo for the initial commit, gmail for the rest).
- **Stale Code Risk**: None. The file is 4 days old and the target block was last changed on 2026-10-02.
- **Review Gaps**: Only the initial commit lacks a ticket reference, which is expected for a repo bootstrap. The other four commits all reference issues or PRs.
- **Observation**: The Cookie Policy anchor directly above (lines 161–166) has no `href`, which is inherited from the initial commit. The Contact Us link does route to `/contact`.
