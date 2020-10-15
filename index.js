const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const mark = require("./utils/generateMarkdown");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "README.md");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure a title is entered.";
    }
  },
  {
    type: "list",
    name: "needLink",
    message: "Does your project have a link to where it is deployed?",
    choices: ["Yes", "No"]
  },
  {
    type: "input",
    name: "link",
    message: "Please type the URL where the project is deployed: ",
    when: answers => answers.needLink === "Yes",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure a URL is entered.";
    }
  },
  {
    type: "input",
    name: "description",
    message: "Please type a description of your project: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure a name is entered.";
    }
  },
  {
    type: "list",
    name: "needInstall",
    message: "Does your project require installation?",
    choices: ["Yes", "No"]
  },
  {
    type: "input",
    name: "installation",
    message: "Please type the installation instructions: ",
    when: answers => answers.needInstall === "Yes",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure instructions are entered.";
    }
  },
  {
    type: "input",
    name: "usage",
    message: "Please type the instructions for your project's usage: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure instructions are entered.";
    }
  },
  {
    type: "list",
    name: "needLicense",
    message: "Does your project use a license?",
    choices: ["Yes", "No"]
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use? ",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense"
    ],
    when: answers => answers.needLicense === "Yes"
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter guidelines for contributing: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure guidelines are entered.";
    }
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter testing instructions: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure instructions are entered.";
    }
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub user name: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please make sure your user name is entered.";
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address: ",
    validate: answer => {
      if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(answer)) {
        return true;
      }
      return "Please make sure a valid email address is entered.";
    }
  }
];

// function to write README file
function writeToFile(data) {
  return fs.writeFile(outputPath, mark(data), err => {
    if (err) throw err;
    console.log("Successfully created README file!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(data => writeToFile(data));
}

// function call to initialize program
console.clear();
init();
