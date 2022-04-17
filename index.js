const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's E-mail?"
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the manager's office number?"
        }
    ])
    .then(answers => {
        let { managerName, managerID, managerEmail, managerOfficeNum } = answers;
        console.log(answers);

        team.manager = new Manager(managerName, managerID, managerEmail, managerOfficeNum);

        addTeamMember();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's E-mail?"
        },
        {
            type: "input",
            name: "internSchoolName",
            message: "What is the name of the intern's school?"
        }
    ])
    .then(answers => {
        let { internName, internID, internEmail, internSchoolName } = answers;
        console.log(answers);

        team.intern.push(new Intern(internName, internID, internEmail, internSchoolName));

        addTeamMember();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's E-mail?"
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the manager's office number?"
        }
    ])
    .then(answers => {
        let { managerName, managerID, managerEmail, managerOfficeNum } = answers;
        console.log(answers);

        team.manager = new Manager(managerName, managerID, managerEmail, managerOfficeNum);

        addTeamMember();
    })
}

function generatePage() {

}

addManager();