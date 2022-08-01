const Employee = require("./Employee"); //grabs Employee js file

class Intern extends Employee {
    //pass original parameter of employee to super function
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;