# Cypress Testing Framework

## Overview
Cypress is a JavaScript test automation solution for web applications.
It is an all-in-one testing framework that provides a chai assertion library with mocking and stubbing.Moreover, it supports the Mocha test framework, which can be used to develop API as well as web test automations supporting Chrome, Firefox, Edge and Electron browsers.
Learn more at the Cypress [official website](https://www.cypress.io/).

![alt text](/cypress/assets/pic.png)

## Key Features

- **Mocking** - By mocking the server response, it has the ability to test edge cases.
- **Time Travel** - Take snapshots as tests run, allowing to go back and forth in time during testing.
- **Flake Resistant** – It automatically waits for commands and assertions before moving on.
- **Real Time Reloads** - It automatically reloads whenever you make changes to your tests.
- **Consistent Results** - It gives consistent and reliable tests that aren’t flaky.
- **Network Traffic Control** - Easily control, stub, and test edge cases without involving your server.
- **Automatic Waiting** - It automatically waits for commands/assertions without adding waits or sleeps.
- **Screenshots and Videos** - View screenshots taken automatically on failure, or videos of entire test.
- **Debugging** - Readable error messages help you debug quickly.

## Getting Started
This guide explains to you in detail how to get started with installing cypress and getting to build your first specification for API and UI tests.

### Pre-requisites:
* Node version 10 or above should be installed. For more information follow steps [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
* Code editor like VSCode in installed

### Install cypress
Cypress can be downloaded directly from the Cypress website (https://www.cypress.io/). The direct download will always download the latest version for your platform. It will download a zip file, which can be extracted by the user.

OR

You can use npm command to install cypress using Visual Studio Code editor and launch a terminal window..

```
npm install cypress --save-dev
```

### Clone the project
Using a shell window, cd into the folder path where you would like to clone the repository and use the command below

```
git clone https://github.com/sherrybath12/cypress.git
```

### Config file
Cypress config file is located in the root folder and is named <mark>cypress.config.js</mark>

![alt text](/cypress/assets/cyconfig.png)

### Cypress test script files
Cypress allows a strict format for naming script files. They should be suffixed with the highlighted text  
/folderpath/filename<mark>.cy.js</mark> and reside in the e2e folder.
In this repostory you will find two script files:
- e2e/api/api.cy.js
- e2e/ui/ui.cy.js

![alt text](/cypress/assets/specpattern.png)
<img src="/cypress/assets/specpattern.png" width=50% height=50%/>

### Running the tests
Open a new terminal in VS Code and type the command:
```
npx cypress open
```

This command will load the Cypress GUI 

![alt text](/cypress/assets/loadspecs.png =500x500)

#### API test scripts
The API test scripts are located under `cypress/e2e/api/api.cy.js`


#### UI test scripts
The UI test scripts are located under `cypress/e2e/ui/ui.cy.js`

#### Config Files
1. There is a master config `cypress.json` at the root directory that holds configuration that applies to all the specs files.
2. There is an environment specific config file, can build one for each environment (staging/uat/partner/prod), located at e2e-tests-cypress/cypress/config.
3. Sensitive configurations are stored in the gitlab CI CD pipeline environment variables.

### Tags
1. Tags are a means to filter tests for running against a partiular environment. For ex: TestA should be run on Staging only, but not on UAT.
2. Test tags uses a module called TestFilter.js  which is defined in e2e-tests-cypress/cypress/support/TestFilter.js.
3. Each test in the spec file requires this tag 
ex: `TestFilter(['staging', 'uat'])` implies this test will run on both staging and uat
ex: `TestFilter(['staging'])` implies this test will run only on staging
4. The config json has the test_tags env variable with the tagname expected for the environment

### Screenshots
1. Once tests are run locally, any screenshot for failures will be generated under the /cypress/screenshots folder.

### Report
1. Locally, the report will be generated under /cypress/mochawesome-report folder with one json file per spec file.
2. In order to aggregate the report for multiple spec files run locally, run the below command in terminal, after deleting any existing merged report mochawesome.json and run from terminal

npm run e2e:mochawesome

### CI/CD Integration:
1. At the project root dir, is the .gitlab-ci.yml file that has the configuration to run the tests in the ci cd pipeline
2.	Any check-in to the project, will kick of a build that can be tracked under – CI/CD Pipelines
3.	Screenshots: Saved under the Job artifacts > cypress > screenshots > spec
4.	Report: Saved under the Job artifacts > cypress > public > mochawesome-report, contains the individual and combined report
