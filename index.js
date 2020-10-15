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
    name: "testing",
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
function init() {}

// function call to initialize program
init();
