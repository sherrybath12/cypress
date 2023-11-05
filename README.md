# E2E Cypress Tests

E2E Cypress Tests are the suite of automated tests written in Cypress for TrueView, Alight and IPD applications. Each application has its own spec file which contains all the tests. The tests run in the gitlab CI CD pipeline.
Cypress is a JavaScript-based test automation tool that supports Chrome, Firefox, Edge and Electron browsers. Support for Safari is under consideration based on the community updates.
Detailed information available at - https://www.cypress.io/

## Local Installation

### Pre-requisites:
* Node version 10 or above should be installed.
* Code editor like VSCode in installed

### Steps:

#### Clone the git repository for E2E-Cypress-Tests

tbd

#### Install cypress

npm install cypress@6.0.1 --save-dev

#### Running tests locally via cypress test runner
Open new terminal in VS Code and type the command:

npx cypress open --env configFile=staging

#### Running tests locally via command line
Get the script name from package.json, open new terminal in VS Code and type the command:

npm run test:staging:chrome

#### Running tests in CI CD 
1. Naviagte to the project in gitlab
2. On the sidebar, click on the CI / CD > Pipelines link
3. Click on the `Run Pipeline` button on the top right corner


#### Spec Files
All the tests are maintained in spec files and below are their locations:There are three spec files located under the `\cypress\integration` folder and contain all the tests tied to the 

`e2e-tests-cypress/cypress/integration/xyz.spec.js`


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
