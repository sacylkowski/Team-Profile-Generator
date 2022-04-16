// Extends from Employee and also has
// officeNumber
// getOfficeNumber()
// getRole() overridden to return "Manager"

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office);
        this.officeNumber = office;
        this.role = this.getRole();
    }

    getOfficeNumber() {
        return this.officeNum;
    }

    getRole() {
        return "manager";
    }
}


module.exports = Manager;