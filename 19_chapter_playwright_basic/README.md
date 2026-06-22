# Chapter 19 - Playwright Basics

This chapter covers Playwright setup, installation, and browser automation fundamentals.

## Files

| File | Description |
|------|-------------|
| `package.json` | Project configuration with Playwright and @playwright/test dependencies |
| `playwright.config.ts` | Playwright test configuration (browsers, reporters, test directory) |
| `tests/example.spec.ts` | Example test: navigating to TTACart and verifying page title |
| `.gitignore` | Ignores node_modules, test results, and Playwright cache |

## Key Takeaways

- Playwright is a Node.js library for browser automation.
- Supports Chromium, Firefox, and WebKit browsers.
- Used for end-to-end testing, web scraping, and UI automation.
- Installation: `npm init -y` then `npm install playwright @playwright/test`.
- Install browsers: `npx playwright install`.
- Run tests: `npx playwright test`.
- View HTML report: `npx playwright show-report`.
- Tests use `test` and `expect` from `@playwright/test`.
- The `page` fixture is automatically provided for browser interactions.
