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
6. [Key Features](#key-features)
7. [Clone the Project](#clone-the-project)
8. [Project Structure](#project-structure)
9. [Launching the Tests](#launching-the-tests)
10. [Running the Tests](#running-the-tests)
11. [API Test Scripts](#api-test-scripts)
12. [UI Test Scripts](#ui-test-scripts)
13. [What's Next](#whats-next)


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

## Pre-requisites:
* Node version 10 or above should be installed. For more information follow steps [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
* Code editor like VSCode in installed

## Install cypress
Cypress can be downloaded directly from the Cypress website (https://www.cypress.io/). The direct download will always download the latest version for your platform. It will download a zip file, which can be extracted by the user.

OR

You can use npm command to install cypress using Visual Studio Code editor and launch a terminal window..

```
npm install cypress --save-dev
```

## Clone the Project
Using a shell window, cd into the folder path where you would like to clone the repository and use the command below

```
git clone https://github.com/sherrybath12/cypress.git
```

## Project Structure
`Cypress config file` is located in the root folder and is named <mark>cypress.config.js</mark>

&emsp;&emsp;![alt text](/cypress/assets/cyconfig.png)

`Cypress Test Script Files` follow a strict format for naming script files. They should be suffixed with the highlighted text  
/folderpath/filename<mark>.cy.js</mark> and reside in the e2e folder.
In this repostory you will find two script files:
- e2e/api/api.cy.js
- e2e/ui/ui.cy.js

&emsp;&emsp;![alt text](/cypress/assets/specpattern.png)

## Launching the Tests
Open a new terminal in VS Code and type the command:
```
npx cypress open
```

This command will load the `Welcome to Cypress` GUI
Click on the `E2E Testing` to load the file with the test scripts

&emsp;&emsp;![alt text](/cypress/assets/welcome.png)

&emsp;&emsp;![alt text](/cypress/assets/loadspecs.png)

## Running the Tests

**API Tests** - The test can simply be run by clicking on the api.cy.js file. Below is a snapshot of the all tests run successfully.

&emsp;&emsp;![alt text](/cypress/assets/apitest.png)

A snapshot of the requests and responses can be seen in the console window

&emsp;&emsp;![alt text](/cypress/assets/apirunconsole.png)

**UI Tests** - The test can simply be run by clicking on the ui.cy.js file. Below is a snapshot of the all tests run successfully.

&emsp;&emsp;![alt text](/cypress/assets/uirun.png)


## API Test Scripts
1. The API test scripts are located under `cypress/e2e/api/api.cy.js`.
2. For this project, I have used the open source fake API's at (https://jsonplaceholder.typicode.com/).
3. The tests are implemented for atleast each of the following request methods - GET, POST, PUT, DELETE.
4. The assertion checks for a 200 or 201 response and logs the response.

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

## UI Test Scripts
1. The UI test scripts are located under `cypress/e2e/ui/ui.cy.js`.
2. For this project, I have used the Nasa website (https://nasa.gov/).
3. The tests implemented assert loading the website and presence of certain components on the UI.

&emsp;&emsp;![alt text](/cypress/assets/uitests.png)

## What's Next

The tests can be configured to take create customized configurations, take screesnhots, videos, generate reports. 
