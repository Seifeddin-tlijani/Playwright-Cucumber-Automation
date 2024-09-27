# Playwright-Cucumber Automation Project

![Playwright-Cucumber](https://img.shields.io/badge/Playwright-Cucumber-green.svg)  
Automated end-to-end tests using **Playwright** and **Cucumber.js** to validate the web application features, including login, adding items to the cart, and more.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Directory Structure](#directory-structure)
- [Writing New Tests](#writing-new-tests)
- [Screenshots and Reports](#screenshots-and-reports)
- [Troubleshooting](#troubleshooting)

## Project Overview

This project is designed to test the UI functionalities of a web application. It leverages **Playwright** for browser automation and **Cucumber.js** for writing feature files in a behavior-driven development (BDD) style.

### Features Tested:
- **Login functionality**
- **Searching for products**
- **Adding products to the cart**
- **Validation of error messages**

## Tech Stack

- **Playwright** - Browser automation tool for Chromium, Firefox, and WebKit.
- **Cucumber.js** - BDD framework for writing test scenarios in natural language.
- **TypeScript** - Strongly typed programming language that builds on JavaScript.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Seifeddin-tlijani/Playwright-Cucumber-Automation.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd Playwright-Cucumber-Automation
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Configure the environment (optional)**:
    - Ensure Playwright browsers are installed by running:
    ```bash
    npx playwright install
    ```

## Running the Tests

1. **Run all tests**:
    ```bash
    npm test
    ```

2. **Run specific test feature**:
    ```bash
    npx cucumber-js --name "login.feature"
    ```

3. **Run tests in headed mode** (to visually see the browser interaction):
    ```bash
    npx playwright test --headed
    ```

## Directory Structure

```bash
├── src
│   ├── test
│   │   ├── features    # Cucumber feature files
│   │   ├── steps       # Step definitions for Playwright actions
│   │   └── pages       # Page Object Model (POM) classes
├── reports             # Test reports (screenshots, logs)
├── package.json        # Project configuration and dependencies
└── README.md           # Project documentation
