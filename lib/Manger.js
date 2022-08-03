const { title } = require("process");
const Employee = require ("./Employee"); //grabs Employee js file

class Manager extends Employee {
    //pass original parameter of employee to super function
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    generateHTML(){ //Manger HTML Layout
        return `
        <div class="col">
              <div class="card shadow-lg" style="width: 18rem">
                <h5 class="card-header text-bg-primary mb-3" >${this.name}<br /><br />&#9749 Manager</h5>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id} </li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}?Subject=Thanks%20for%20stopping%20by" class="card-link"> 
                        ${this.email}</a></li>
                        <li class="list-group-item">Office Phone: ${this.officeNumber}</li>
                    </ul>
                </div>
              </div>
            </div>
        `
    }
}

module.exports = Manager;