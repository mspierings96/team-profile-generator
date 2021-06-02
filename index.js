const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const manager = require("./lib/manager");
const intern = require("./lib/intern");
const generateHtml = require("./generateHtml");
const teamMembers = [];

function init() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team name?",
        name: "teamName",
      },
      {
        type: "input",
        message: "What is your manager Name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "what is your manager ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "what is your email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "managerOffice",
      },
    ])
    .then(function (answers) {
      console.log("answerssss", answers);
      var newManager = new manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOffice
      );
      teamMembers.push(newManager);
      addAnother();
    });
}

function addAnother() {
  //prompt do u wanna add another emplye y or n
  //{
  //  type: "confirm",
  // message: "Would u like to add more emplyees?",
  //name: "addMore"
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "addAnother",
      },
    ])
    .then(function (answers) {
      if (answers.addAnother) {
        pickEmployeeType();
      } else {
        console.log(teamMembers);
        const fakeHtml = generateHtml(teamMembers);
        console.log("fake html!!", fakeHtml);
        fs.writeFile("team.html", fakeHtml, function (err) {});
      }
    });
}

function pickEmployeeType() {
  //inquiere with list type - pick form intern or engineer
  inquirer
    .prompt([
      {
        type: "list",
        message: "What employee do you want to select?",
        name: "pickEmployeeType",
        choices: ["intern", "engineer", "manager"],
      },
    ])
    .then(function (answers) {
      if (answers.pickEmployeeType === "intern") {
        addIntern();
      } else if (answers.pickEmployeeType === "engineer") {
        addEngineer();
      } else if (answers.pickEmployeeType === "manager") {
        addManager();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name",
      },
      {
        type: "input",
        name: "id",
        message: "id:",
      },
      {
        type: "input",
        name: "email",
        message: "email:",
      },
      {
        type: "input",
        name: "github",
        message: "github:",
      },
    ])
    .then(function (answers) {
      var newEngineer = new engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(newEngineer);
      addAnother();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name",
      },
      {
        type: "input",
        name: "id",
        message: "id:",
      },
      {
        type: "input",
        name: "email",
        message: "email:",
      },
      {
        type: "input",
        name: "school",
        message: "school:",
      },
    ])
    .then(function (answers) {
      var newintern = new intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(newintern);

      addAnother();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name",
      },
      {
        type: "input",
        name: "id",
        message: "id:",
      },
      {
        type: "input",
        name: "email",
        message: "email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number:",
      },
    ])
    .then(function (answers) {
      var newManager = new manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(newManager);

      addAnother();
    });
}

//addEngineer ()
init();
