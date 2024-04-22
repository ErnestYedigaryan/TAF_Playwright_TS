# Automated Testing for Auto.am Product

This project is a suite of automated tests for the Auto.am product, a robust platform for car trading.

## Setup

Follow these steps to set up the project:

1. Clone the repository: `git clone https://github.com/ErnestYedigaryan/TAF_Playwright_TS.git`

2. Navigate into the project folder: `cd TAF_Playwright_TS`

3. Install the package dependencies: `npm install`

## Running tests

To execute the tests, we provide the following commands:

- Run tests in headed mode (browser GUI mode): `npm run test`
- Run tests in headless mode (without browser GUI): `npm run test:headless`

## Linting

This project uses ESLint for maintaining code quality. To run the linter, execute the following command:

`npm run lint`

## Code Formatting
Prettier is used in this project to enforce a consistent coding style. It reformats code according to the style rules defined in the `.prettierrc` file.

Run Prettier using the following command:

`npm run prettier:fix`

## Suggestions For Further Improvements

### CI/CD:
Implementing a Continuous Integration and Continuous Deployment (CI/CD) process can remarkably speed up your development process and minimize the risk of bugs getting merged. Many platforms like Jenkins, GitHub Actions, GitLab, and CodeFresh offer robust features for creating a CI/CD pipeline. This way, we can automate our testing and deployment steps.

### Husky Pre-commit Hook:
We can use Husky to set up a pre-commit hook which checks lint errors before committing any changes. Check their [quick start guide](https://typicode.github.io/husky/#/?id=quick-start) for how to add it.

### Allure Reporter:
Allure can be used to generate a nice test execution report.

### Winston Logger:
Winston is a multi-transport async logging library for node.js. It can be flexible and customizable for various log outputs such as console, file, or database. We can integrate it to maintain a proper logging mechanism.

### JSDoc:
Using JSDoc can provide benefit. It keeps the documentation up-to-date with the code and also helps in better code understanding. Check their [official guide](https://jsdoc.app/about-getting-started.html) to learn how to use it.

## License

Standard [MIT](LICENSE) License applies.