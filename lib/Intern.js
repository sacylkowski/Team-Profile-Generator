// extends from Employee and also has
// school
//getSchool()
//getRole()  overriden to return "Intern"

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.schoolN = school;
        this.role = this.getRole();
    }

    getSchool() {
        return this.schoolName;
    }

    getRole() {
        return "intern";
    }
}

module.exports = Intern;