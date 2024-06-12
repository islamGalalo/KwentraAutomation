
# Kwentra Cypress Test Automation 

* Task created using Cypress Test Automation tool
* Programming language : JavaScript
* Using Page Object model Design Pattern
* Tests written by Cucumber Testing Framework


## Installation Instructions
#### Prerequisites
- installing VS Code or Webstorm IDE
- To Run this project system must have node v18 at least 
https://nodejs.org/en/download/package-manager

#### then open the terminal and clone the repo then run  the following command
```bash
  npm install cypress@9.7.0 -dev -save
```
#### then to install cypress-cucumber-preprocessor run  the following command
```bash
  npm install --save-dev cypress-cucumber-preprocessor
```
I'm using old version of Cypress **V9.0** to be compatible with cucumber package as Instructions provided here : 
https://www.npmjs.com/package/cypress-cucumber-preprocessor

#### RUN TESTS using command 
```bash
  npx cypress open 
```

#### RUN TESTS continuously as Suite  
```bash
npx cypress run --spec "cypress/integration/*" --headed 
```


 
