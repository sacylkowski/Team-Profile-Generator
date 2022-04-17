const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const employeeValue = "Brian";
const idValue = 123;
const emailValue = "email@test.com";
const githubUserName = "ban84";

test ("get engineer GitHub username", () => {
    const employee = new Engineer(employeeValue, idValue, emailValue, githubUserName);
    expect(employee.githubUserName).toBe(this.gitHub);
});

test("can get GitHub username when getGitHub() is called", () => {
    const employee = new Engineer(employeeValue, idValue, emailValue, githubUserName);
    expect(employee.getGitHub()).toBe(this.github);
});

test("can get engineer role when getRole() is called", () => {
    const engineer = "engineer"
    const employee = new Engineer(employeeValue, idValue, emailValue, githubUserName);
    expect(employee.getRole()).toEqual(engineer);
});