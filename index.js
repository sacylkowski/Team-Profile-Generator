const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const generatePage = require("./src/page-template");

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
            name: "engineerName",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's E-mail?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(answers => {
        let { engineerName, engineerId, engineerEmail, engineerGithub } = answers;
        console.log(answers);

        team.engineer.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));

        addTeamMember();
    })
}

function addTeamMember() {
    inquirer.prompt({
        type: "list",
        name: "addTeamMember",
        message: "What type of team member would you like added?",
        choice: ["Engineer", "Intern", "I'm finished adding team members"]
    })
    .then(answers => {
        let { addTeamMember } = answers;
        if (addTeamMember === "Intern") {
            addIntern();
        } else if (addTeamMember === "Engineer") {
            addEngineer();
        } else if (addTeamMember === "I'm finished adding team members") {
            generatePage();
        }
    })
}

function generatePage() {
    fs.writeFile("./dist/index.html", fileContent, function(err) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Your team directory has been made!  Checkout index.html to see the page.")
        }
    })

};

addManager();