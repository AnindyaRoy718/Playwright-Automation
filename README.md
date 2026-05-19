# Playwright-Automation

A comprehensive TypeScript-based test automation framework using Playwright for end-to-end testing across multiple browsers.

## 🎯 Overview

This project provides a robust automation testing framework built with [Playwright](https://playwright.dev/) and TypeScript. It enables testing web applications across Chrome, Firefox, and Safari browsers with parallel test execution and detailed HTML reporting.

## 🛠️ Tech Stack

- **Playwright**: Modern cross-browser automation framework
- **TypeScript**: Strongly typed JavaScript for better code quality
- **Allure Reporter**: Beautiful test reporting with detailed test results
- **Faker.js**: Generate realistic test data
- **dotenv**: Environment variable management

## 📋 Prerequisites

- **Node.js**: v16 or higher
- **npm**: v8 or higher

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AnindyaRoy718/Playwright-Automation.git
cd Playwright-Automation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

## 🚀 Quick Start

### Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests in headed mode (see the browser):
```bash
npx playwright test --headed
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

Run tests matching a pattern:
```bash
npx playwright test -g "pattern_name"
```

### View Test Results

View HTML test report:
```bash
npx playwright show-report
```

## 📁 Project Structure

```
playwright-automation/
├── src/                          # Source code
├── testCase/                      # Test cases directory
├── .env                          # Environment configuration
├── .gitignore                    # Git ignore rules
├── package.json                  # Project dependencies
├── package-lock.json            # Dependency lock file
├── playwright.config.ts          # Playwright configuration
└── tsconfig.json                # TypeScript configuration
```

## ⚙️ Configuration

### playwright.config.ts

Key configuration options:

- **testDir**: `./testCase` - Directory containing test files
- **fullyParallel**: Tests run in parallel for faster execution
- **retries**: 2 retries on CI environment, 0 locally
- **workers**: 1 worker on CI, auto on local
- **reporter**: HTML reporter for detailed test results
- **trace**: Captures traces on first retry for debugging

### Browser Projects

The framework is configured to run tests on:
- **Chromium** (Chrome/Edge)
- **Firefox**
- **WebKit** (Safari)

Optional configurations (commented out) include:
- Mobile browsers (Chrome, Safari)
- Branded browsers (Microsoft Edge, Google Chrome)

## 🧪 Writing Tests

Example test structure:
```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## 📊 Test Reporting

The framework generates an HTML report after test execution:

```bash
npx playwright show-report
```

Reports include:
- Test execution timeline
- Detailed error messages and stack traces
- Screenshots and videos (when configured)
- Browser/OS information

## 🔒 Environment Variables

Configure your application URLs and credentials in the `.env` file:

```env
BASE_URL=https://example.com
USER_EMAIL=your_email@example.com
USER_PASSWORD=your_password
```

To use environment variables in tests:
```typescript
import * as dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.BASE_URL;
```

## 📦 Dependencies

### Dev Dependencies
- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript definitions for Node.js
- `allure-playwright` - Allure reporting integration

### Dependencies
- `@faker-js/faker` - Generate random test data
- `dotenv` - Load environment variables
- `typescript` - TypeScript compiler

## 🐛 Debugging

### Debug mode:
```bash
npx playwright test --debug
```

### Inspect element:
```bash
npx playwright codegen https://example.com
```

### View traces:
- Traces are automatically captured on first retry
- Locate trace files in the `test-results/` directory
- View with: `npx playwright show-trace trace.zip`

## 🔄 CI/CD Integration

For GitHub Actions or other CI/CD platforms:

```bash
CI=true npm test
```

CI environment automatically:
- Sets retries to 2
- Uses 1 worker (sequential execution)
- Fails on `test.only` to prevent accidental test skipping

## 📝 Best Practices

1. **Use Page Object Model (POM)**: Organize selectors and interactions
2. **Keep tests focused**: One assertion per test when possible
3. **Use meaningful test names**: Describe what the test does
4. **Generate test data**: Use Faker.js for realistic data
5. **Handle waits properly**: Use Playwright's auto-waiting features
6. **Avoid hard-coded delays**: Use Playwright's smart waits instead

## 🤝 Contributing

1. Create a new branch for your feature
2. Write tests for new functionality
3. Ensure all tests pass: `npm test`
4. Submit a pull request

## 📄 License

ISC

## 📞 Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/AnindyaRoy718/Playwright-Automation).

---

**Happy Testing! 🎭**
