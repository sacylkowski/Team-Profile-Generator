const inquirer = require("inquirer");
const fs = require("fs");

// importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const templateHtml = require("./src/page-template");

// empty array for the team
let teamMembers = [];

// first add Manager
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
            const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNum);

            teamMembers.push(manager);

            // once manager is added to the array, then you can add other members
            addTeamMember();
        })
}

// Intern prompt questions
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
            const intern = new Intern(internName, internID, internEmail, internSchoolName);

            teamMembers.push(intern);

            addTeamMember();
        })
}

// Engineer prompt questions
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
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            teamMembers.push(engineer);

            addTeamMember();
        })
}

// picking a type of team member to add or finishing up
function addTeamMember() {
    inquirer.prompt({
        type: "list",
        name: "addTeamMember",
        message: "What type of team member would you like added?",
        choices: ["Engineer", "Intern", "I'm finished adding team members"]
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

function generatePage()
    // writing the data to the new HTML page
    fs.writeFile("./dist/index.html", templateHtml(teamMembers), err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Your team directory has been made!  Checkout index.html to see the page.")
            fs.copyFile("./src/style.css", "./dist/style.css", err => {
                if (err) {
                    console.error(err);
                    return;
                };
            });
        };
    });


    // calling to addManager once the program is running
    addManager();
