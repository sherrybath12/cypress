---
layout: default
title: Getting Started with Cypress
permalink: /
---

# Cypress Framework

## Table of contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
4. [Pre-requisites](#pre-requisites)
5. [Install Cypress](#install-cypress)
6. [Clone the Project](#clone-the-project)
7. [Project Structure](#project-structure)
8. [Launching the Tests](#launching-the-tests)
9. [Running the Tests](#running-the-tests)
10. [More About API Test Scripts](#more-about-api-test-scripts)
11. [More About UI Test Scripts](#more-about-ui-test-scripts)
12. [Reports](#reports)


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

## Pre-requisites
* Node version 10 or above should be installed. For more information follow steps [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
* Code editor like VSCode in installed

## Install cypress
Cypress can be downloaded directly from the Cypress website (https://www.cypress.io/) for the version of your choice. This will download a zip file, which can be extracted by the user.

OR

You can use npm command to install cypress using Visual Studio Code editor and launch a terminal window..

```bash
npm install cypress --save-dev
```

## Clone the Project
Using a shell window, cd into the folder path where you would like to clone the repository and use the command below

```bash
git clone https://github.com/sherrybath12/cypress.git
```

## Project Structure

After cloning this project, Cypress will scaffold out the below folder structure:

![alt text](/cypress/assets/structure.png)

<mark>Fixtures</mark> – Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in JSON format.

![alt text](/cypress/assets/fixture.png)

<mark>Integration</mark> – Integration folder includes all the test files. The test files may be written as .js, .jsx, .coffee and .cjsx. Usually the preferred extension is .js and the test file name format is `testname.spec.js`.
> In this repostory you will find two script files:  
> integration/api/api.cy.js  
> integration/ui/ui.cy.js

![alt text](/cypress/assets/integration.png)

<mark>Plugins</mark> – This folder includes index.js file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress.

![alt text](/cypress/assets/index.png)

<mark>Screenshots</mark> – Cypress comes with the ability to take screenshots, whether you are running via cypress open or cypress run, even in CI. To take a manual screenshot you can use the cy.screenshot() command. Additionally, Cypress will automatically capture screenshots when a failure happens during cypress run.

![alt text](/cypress/assets/screenshots.png)

<mark>Support</mark> – This folder contains index.js and commands.js files. This index.js file is run before every single spec file. The support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your spec files.

![alt text](/cypress/assets/command.png)

<mark>Videos</mark> – Cypress records a video for each spec file when running tests during cypress run. Videos are not automatically recorded during cypress open. Videos are stored in the videos folder which is set to cypress/videos by default.

![alt text](/cypress/assets/videos.png)

<mark>Cypress.json</mark> – It is used to save different cypress related configurations for eg. base URL, timeouts, etc. The default behavior of Cypress can be modified by supplying configuration options.

![alt text](/cypress/assets/cyconfig.png)

<mark>Package.json</mark> – It is used to save all npm dependencies and scripts names in the case where the tests are to be triggered directly from the terminal.

![alt text](/cypress/assets/pkg.png)

> Line 8 depicts the syntax for the script name

## Launching the Tests
Open a new terminal in VS Code and type the command:
```bash
npx cypress open
```
This will launch the cypress runner with the tests loaded.

![alt text](/cypress/assets/welcome.png)

> Alternatively, the tests can be kicked off from the terminal by referencing the script name from the package.json
```bash
npm run <scriptname>
```

## Running the Tests

**API Tests** - The test can simply be run by clicking on the `api.spec.js` file. 
Below is a snapshot of the all tests run successfully.

&emsp;&emsp;![alt text](/cypress/assets/apirun.png)

&emsp;&emsp;![](/cypress/videos/api/api.spec.js.mp4)

A snapshot of the requests and responses can be seen in the console window

&emsp;&emsp;![alt text](/cypress/assets/apirunconsole.png)

**UI Tests** - The test can simply be run by clicking on the `ui.spec.js` file. 
Below is a snapshot of the all tests run successfully.

&emsp;&emsp;![alt text](/cypress/assets/uirun.png)

## More About API Test Scripts
>1. The API test scripts are located under `cypress/integration/api/api.spec.js`.
>2. For this project, I have used the open source fake API's at (https://jsonplaceholder.typicode.com/).
>3. The tests are implemented for atleast each of the following request methods - GET, POST, PUT, DELETE.
>4. The assertion checks for a 200 or 201 response and logs the response.

- **GET METHOD**
  The method signature is `GET` and displays all resources.

&emsp;&emsp;&emsp;&emsp;![alt text](/cypress/assets/getapi.png)

- **GET METHOD with Querystring**
  The method signature is `GET` and has a querystring parameter passed in.

&emsp;&emsp;&emsp;&emsp;![alt text](/cypress/assets/getapiqs.png)

- **POST METHOD**
The method signature is `POST` and requires a request body with the resource to be created.

&emsp;&emsp;&emsp;&emsp;![alt text](/cypress/assets/postapi.png)

- **PUT METHOD**
The method signature is `PUT` and does requires a request body with the resource parameters to be updated.

&emsp;&emsp;&emsp;&emsp;![alt text](/cypress/assets/putapi.png)

- **DELETE METHOD**
The method signature is `DELETE` and requires the resource id to be deleted.

&emsp;&emsp;&emsp;&emsp;![alt text](/cypress/assets/delapi.png)

## More About UI Test Scripts
1. The UI test scripts are located under `cypress/integration/ui/ui.spec.js`.
2. For this project, I have used the Nasa website (https://nasa.gov/).
3. The tests implemented assert loading the website and presence of certain components on the UI.

&emsp;&emsp;![alt text](/cypress/assets/uitests.png)

## Reports

The tests can be configured to generate beautiful reports using report generation packages like mochawesome using the steps below:

```bash
npm i mochawesome
```

Update the `cypress.json` for report parameters like format and target output directory.

```json
 "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "mochawesome-report",
      "overwrite": false,
      "html": false,
      "json": true,
      "timestamp": "mmddyyyy_HHMMss"
    }
```
> The reports can be found at: /mochawesome-report/*.html

![alt text](/cypress/assets/report-api.png)

![alt text](/cypress/assets/report-ui.png)