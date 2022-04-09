// Extends from Employee and also has
// officeNumber
// getRole() overridden to return "Manager"

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name) {
        super(name);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // getRole() {

    // }
}