# Week 6 — Testing & Debugging

## Overview
This project implements unit, integration, and end-to-end tests for a MERN starter app. The stack uses Jest, React Testing Library, Supertest, mongodb-memory-server, and Cypress.

## How to run
1. Install dependencies:
   npm run install-all

2. Start test DB (optional manual):
   cd server && npm run setup-test-db

3. Run all tests:
   npm test

4. Run only unit tests:
   npm run test:unit

5. Run integration tests:
   npm run test:integration

6. Run E2E:
   cd client && npm run test:e2e

## Testing strategy
- Unit tests cover pure functions, reducers, middleware, and isolated React components.
- Integration tests cover API endpoints using Supertest + mongodb-memory-server.
- E2E tests use Cypress to simulate real user flows (registration, login, CRUD).
- Coverage thresholds are enforced: 70% on statements, branches, functions, lines.

## Debugging techniques implemented
- Winston + morgan logging
- Global Express error handler
- React ErrorBoundary
- Node/Chrome inspector (`node --inspect`)
- Steps to reproduce and sample debug logs in `/docs/debugging.md`.
