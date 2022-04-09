const Employee = require("../lib/Employee");
const employeeValue = "Brian";

test("creates a new employee object", () => {
    const employee = new Employee(employeeValue);
    expect(employee.name).toBe(employeeValue);
});

test("get employee name", () => {
    const employee = new Employee(employeeValue);
    expect(employee.name).toBe(employeeValue);
});

test("get employee id", () => {
    const idValue = 123;
    const employee = new Employee(employeeValue, idValue);
    expect(employee.id).toEqual(idValue);
});

test("get employee email", () => {
    const emailValue = "email@test.com";
    const idValue = 123;
    const employee = new Employee(employeeValue, idValue, emailValue);
    expect(employee.email).toBe(emailValue);
});

test("can get name when getName() is called", () => {
    const employee = new Employee(employeeValue);
    expect(employee.getName()).toBe(employeeValue);
});

test("can get id when getId() is called", () => {
    const idValue = 123;
    const employee = new Employee(employeeValue, idValue);
    expect(employee.getId()).toBe(idValue);
});

test("can get email when getEmail() is called", () => {
    const idValue = 123;
    const emailValue = "email@test.com";
    const employee = new Employee(employeeValue, idValue, emailValue);
    expect(employee.getEmail()).toBe(emailValue);
});

test("can get role when getRole() is called", () => {
    const idValue = 123;
    const emailValue = "email@test.com";
    const employee = new Employee(employeeValue, idValue, emailValue);
    expect(employee.getRole()).toBe("employee");
});