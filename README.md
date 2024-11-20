
# Playwright Automation Project

This project automates the registration workflow of a web application using **Playwright**. The code is organized using the **Page Object Model (POM)** pattern, ensuring scalability, maintainability, and reusability.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)

---

## Features

- **Playwright Integration:** High-speed and reliable automation framework for end-to-end testing.
- **Page Object Model (POM):** Encapsulated actions and selectors for each page.
- **Data-Driven Testing:** Centralized data for easy configuration and reusability.
- **Scalable Architecture:** Easily extendable to add more tests or pages.
- **Cross-Browser Testing:** Supports testing in multiple browsers.

---

## Project Structure

```plaintext
project-root/
│
├── pages/                    # Page Object Models (POM)
│   ├── base.ts               # Base class with common functionality
│   ├── application.ts        # Application-level handler for multiple pages
│   └── registrationPage.ts   # Encapsulation of registration page elements and actions
│
├── tests/                    # Test cases
│   └── registration.test.ts  # End-to-end test for the registration workflow
│
├── support/                  # Test support files
│   └── data.ts               # Data for tests (user details, inputs, etc.)
│
├── playwright.config.ts      # Playwright configuration file
├── README.md                 # Documentation file
├── package.json              # Node.js dependencies and scripts
└── playwright.config.ts      # TypeScript configuration
```

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## Usage

### Run Tests
To execute the tests:
```bash
npx playwright test
```

### Debug Tests
To run tests in headed mode:
```bash
npx playwright test --headed
```

### View Test Report
Generate and view an HTML report after the test run:
```bash
npx playwright show-report
```

### Customize Test Data
Edit `support/data.ts` to provide different test data, such as user inputs.

---

## Scripts

### Run Tests
```bash
npm test
```

### Debug Tests
```bash
npm run debug
```

### Install Browsers
```bash
npx playwright install
```

---

- Ensure the application under test is accessible before running tests.
- Customize selectors and test data to match the specific requirements of your application.
