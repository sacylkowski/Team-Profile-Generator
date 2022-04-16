const Intern = require("../lib/Intern");
const employeeValue = "Brian";
const idValue = 123;
const emailValue = "email@test.com";
const schoolName = "UT";

test("get intern school name", () => {
    const employee = new Intern(employeeValue, idValue, emailValue, schoolName);
    expect(employee.schoolName).toBe(schoolName);
});