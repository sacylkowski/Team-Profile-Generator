const Intern = require("../lib/Intern");
const employeeValue = "Brian";
const idValue = 123;
const emailValue = "email@test.com";
const schoolName = "UT";

test("get intern school name", () => {
    const employee = new Intern(employeeValue, idValue, emailValue, schoolName);
    expect(employee.schoolName).toBe(this.school);
});

test("can get school name when getSchool() is called", () => {
    const employee = new Intern(employeeValue, idValue, emailValue, schoolName);
    expect(employee.getSchool()).toBe(this.school);
});

test("can get intern role when getRole() is called", () => {
    const intern = "intern"
    const employee = new Intern(employeeValue, idValue, emailValue, schoolName);
    expect(employee.getRole()).toEqual(intern);
});