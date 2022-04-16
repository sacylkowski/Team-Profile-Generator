const Manager = require("../lib/Manager");
const employeeValue = "Brian";
const officeNum = 7;
const idValue = 123;
const emailValue = "email@test.com";

test("get manager office number", () => {
    const employee = new Manager(employeeValue, idValue, emailValue, officeNum);
    expect(employee.officeNum).toBe(this.office);
});

test("can get office number when getOfficeNumber() is called", () => {
    const employee = new Manager(employeeValue, idValue, emailValue, officeNum);
    expect(employee.getId()).toBe(idValue);
});

test("can get manager role when getRole() is called", () => {
    const manager = "manager"
    const employee = new Manager(employeeValue, idValue, emailValue, officeNum);
    expect(employee.getRole()).toEqual(manager);
});