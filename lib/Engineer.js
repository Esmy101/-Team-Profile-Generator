const Employee = require("./Employee"); //grabs Employee js file

class Engineer extends Employee {
    //pass original parameter of employee to super function
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
    generateHTML(){ //Engineer HTML Layout
        return `
        <div class="col">
              <div class="card shadow-lg" style="width: 18rem">
                <h5 class="card-header text-bg-primary mb-3" >${this.name}<br /><br />&#128295 Engineer</h5>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id} </li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}?Subject=Thanks%20for%20stopping%20by" class="card-link"> 
                        ${this.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank" class="card-link">${this.github}</a></li>
                    </ul>
                </div>
              </div>
            </div>
        `
    }
}

module.exports = Engineer;