<h1 align="left">:computer: Sketch - Code Task  </h1>

This is a project related to the Sketch hiring process code task.

## Introduction

This project contains a code task for E2E test automation of the <a href="https://www.sketch.com/signin">Sketch website onboarding</a>.
The automation will cover the onboarding scenarios described in this document. Follow the documentation and perform the proper setup and execution guidelines.

## Environment Setup

**Prerequisites:**
* <a href="https://nodejs.org/en/download/"> NodeJS </a>

1. Clone the project

2. To initialize the project issue the below command in project root directory.
```
npm install
```
3. Configure Cypress dotenv file.

The <a href="https://www.npmjs.com/package/cypress-dotenv">Cypress dotenv</a> is a NPM library that will load any environment variables defined in your `cypress.env.json` file so you can access them via Cypress.env() from within your tests as you would expect.

- Create and add variable in the *cypress.env.json* file in the root:
Since we are going to login in the application using these info. This file won't be commited since it contains sensitive data.
```
{
  "EMAIL": "@yourEmail",
  "PASSWORD": "@yourPassword",
  "USERNAME": "@yourUsername"
}
```

## Executing this E2E tests

Issue the below command in project root directory and get the tests on the Cypress IDE:
```
npx cypress open
```

Or issue the bellow command in project root directory to run all tests in headless mode:
```
npx cypress run
```

## Test Cases
The test cases in this suite are the following:
- Valid login (Positive case)
- Invalid login (Negative cases)
    - No email, No password
    - No email, valid password
    - Valid email, No password
    - Valid email, wrong password
    - Invalid email
    - Invalid email

## Author
<a target="_blank" href="https://github.com/diegohdb/diegohdb">👤 Diego Bezerra </a>

<a target="_blank" href="https://www.linkedin.com/in/diegohdb/">
  <img align="left" alt="LinkdeIN" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>

<a target="_blank" href="https://www.instagram.com/diegohdb/">
  <img align="left" alt="Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>

<a target="_blank" href="mailto:diegohdb@gmail.com">
  <img align="left" alt="Gmail" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />
</a>
