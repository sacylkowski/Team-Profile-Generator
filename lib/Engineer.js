// Extend from employee and also has
//github   username
//getGithub()
//getRole()  Overrideen to return Engineer

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.githubName = github;
        this.role = this.getRole();
    }

    getGitHub() {
        return this.githubUserName;
    }

    getRole() {
        return "engineer";
    }
}

module.exports = Engineer;