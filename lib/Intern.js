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
    generateHTML(){
        return `
        <div class="col">
              <div class="card shadow-lg" style="width: 18rem">
                <h5 class="card-header text-bg-primary mb-3" >${this.name}<br /><br />&#127891 Intern</h5>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id} </li>
                        <li class="list-group-item">Email: <a href="#" class="card-link"> 
                        ${this.email}</a></li>
                        <li class="list-group-item">School: ${this.school}</li>
                    </ul>
                </div>
              </div>
            </div>
        `
    }
}

module.exports = Intern;