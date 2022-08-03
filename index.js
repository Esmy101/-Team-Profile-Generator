const {prompt} = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');

let employees = []

async function employeeInfo(){
    let answers = await prompt([ 
        //takes employee Info input
        {
            type: 'input',
          message: 'Name:',
          name: 'name',
        },
        {
            type: 'list',
          message: 'Position:',
          name: 'title',
          choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
          message: 'ID:',
          name: 'id',
        },
        {
            type: 'input',
          message: 'Email:',
          name: 'email',
        }
    ])
    .then ((answers) => {
        return answers
    })

    if (answers.title === 'Manager'){
        let phone_number = await prompt((
            {
                type: 'input',
              message: 'Office Phone:',
              name: 'officeNumber',
            }
        ))
        .then((answers)=>{return answers.officeNumber})

        // make my Manager
            let newEmployee = new Manager(answers.name, answers.id, answers.email, phone_number)

            //console.log(newEmployee)
            //console.log(newEmployee.generateHTML())
        //Add manager to list
        employees.push(newEmployee)    
    } 
    else if (answers.title === 'Engineer'){
        let github = await prompt ((
            {
                type: 'input',
                message: 'Enter GitHub:',
                name:'github',
            }
        ))
        .then((answers)=>{return answers.github})
        
        //make my Engineer 
            let newEmployee = new Engineer(answers.name, answers.id, answers.email, github)

            //console.log(newEmployee)
           // console.log(newEmployee.generateHTML())
        //Add engineer to list
        employees.push(newEmployee)  
    } 
    else{
        let school = await prompt ((
            {
                type: 'input',
                message: 'School:',
                name:'school',
            }
        ))
        .then((answers)=>{return answers.school})
        
        //make my Engineer 
            let newEmployee = new Intern(answers.name, answers.id, answers.email, school)

            //console.log(newEmployee)
            //console.log(newEmployee.generateHTML())
        //Add engineer to list
        employees.push(newEmployee)     
    }

}

employeeInfo()

// TODO: make while loop to ask if they want to add more employees, make HTML template, make the TEST file work, if time make style adjustments 