---
name: react-python-fullstack
description: 'Build and ship full-stack features with React frontend and Python backend. Use for planning, implementing, integrating, testing, and reviewing API-driven features end-to-end.'
argument-hint: 'Feature request, API contract, or bug to implement end-to-end'
user-invocable: true
---

# React + Python Full-Stack Delivery

## What This Skill Produces
A completed feature or bug fix across React frontend and Python backend, including:
- a clear API contract,
- synchronized backend + frontend implementation,
- tests and validation checks,
- a concise change summary with risks and follow-ups.

## When to Use
- New feature touches both UI and API.
- Frontend and backend behavior are out of sync.
- Refactoring shared DTO/schema/validation rules.
- Full-stack bug investigation that crosses client/server boundaries.

## Inputs to Gather First
- Product goal and acceptance criteria.
- Existing API routes, models, and auth constraints.
- UI entry points and affected state/data-fetching paths.
- Non-functional constraints: performance, security, compatibility.

## Procedure
1. Define scope and contract.
- Restate user outcome in one sentence.
- Identify impacted React screens/components and Python endpoints/services.
- Draft or confirm request/response shape, status codes, and error model.

2. Inspect current code paths.
- Trace frontend flow: route -> component -> hooks/state -> API client.
- Trace backend flow: route -> schema/serializer -> service -> DB/external calls.
- List coupling points and assumptions that may break.

3. Choose implementation strategy.
- If backend contract is missing/incorrect: implement backend first, then frontend wiring.
- If backend is stable and UI is broken: fix frontend integration first.
- If both are risky: ship behind a feature flag or use incremental toggles.

4. Implement backend changes.
- Update route/controller, validation schema, service logic, and persistence mapping.
- Preserve backward compatibility where required (versioning/fallback fields).
- Add tests for success path, validation failures, and authorization rules.

5. Implement frontend changes.
- Update API layer/types first, then UI components and state handling.
- Handle loading, empty, success, and error states explicitly.
- Keep accessibility intact for interactive controls and form feedback.

6. Integrate and verify end-to-end.
- Run backend tests and frontend lint/tests.
- Manually validate the user journey from UI action to backend side effects.
- Confirm error messages map to backend error codes consistently.

7. Final review and delivery.
- Summarize changed files by concern (API, UI, tests).
- Call out risks, migration needs, and rollback plan.
- Provide quick manual QA checklist for the exact feature behavior.

## Decision Points
- Contract drift detected:
  - Choose single source of truth (backend schema or shared typed client) and align both sides.
- Validation duplicated in UI and API:
  - Keep API as authoritative; UI validation is ergonomic only.
- Breaking API change required:
  - Prefer additive change first; use versioning for hard breaks.
- Performance regression risk:
  - Add pagination/caching/debouncing before broad rollout.

## Completion Checks
- API contract documented in code and reflected in frontend usage.
- Tests cover happy path + critical failures on both layers.
- No unresolved type/schema mismatch between client and server.
- Lint/build/test pass for touched projects.
- User-facing behavior matches acceptance criteria.

## Output Format
- Problem and scope (2-4 bullets).
- Backend changes.
- Frontend changes.
- Tests and verification run.
- Risks and next actions.

## Example Prompts
- /react-python-fullstack Add profile photo upload with preview and secure backend storage.
- /react-python-fullstack Fix order status updates not refreshing in dashboard.
- /react-python-fullstack Implement search API + debounced React results list with pagination.
