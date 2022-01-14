
//add modules
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const inquirer = require('inquirer');


class Program {
    constructor() {
        this.employeeArray = [];
    };

    //Inits the prompt
 
    //saved employee data 
    saveEmployee(answer) {
             //configure answer data
             const { userName, idNumber, email } = answer;
             const nameArray = userName.split(' ');
             let teamMember;
             if (answer.github) {
                 const { github } = answer;
                 teamMember = new Engineer(nameArray, idNumber, email, github);
             } else if (answer.school) {
                 const { school } = answer;
                 teamMember = new Intern(nameArray, idNumber, email, school);
             } else if (answer.office){
                const { office } = answer;
                 teamMember = new Manager(nameArray, idNumber, email, office);
             }

             console.log(`Added: `, nameArray[0], nameArray[1]);
             this.employeeArray.push(teamMember);
             this.askForEmployees();
        
    }

    //asks if more employees
    askForEmployees() {
        inquirer
            .prompt({
                type: 'list',
                name: 'empoyeeType',
                message: "Please choose a team member type to add: ",
                choices: ["Engineer", "Intern", "Done"]
            }).then(({ empoyeeType }) => this.getGeneralInfo(empoyeeType))
    }
    //prompts for basic info
    getGeneralInfo(type) {
        type = type.toLowerCase();
        if (type === "done") {
            console.log("All Done! ", this.employeeArray);
            return;
        }

        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'userName',
                    message: `Please enter ${type}'s first and last name: `,
                    validate: input => {
                        if (input.split(' ').length === 2) {
                            return true;
                        } else {
                            console.log(' - Please enter a valid first and last name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'idNumber',
                    message: `Please enter the ${type}'s Employee ID: `,
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter a valid data!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter the ${type}'s contact email: `,
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter a valid data!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: `Please enter ${type}'s GitHub user name: `,
                    when: () => {
                        if (type === 'engineer') {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter valid data!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: `Please enter ${type}'s school name: `,
                    when: () => {
                        if (type === 'intern') {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter valid data!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'office',
                    message: "Please enter the Team Managers Office Number: ",
                    when: () => {
                        if (type === 'manager') {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter valid data!');
                            return false;
                        }
                    }
                }
            ]).then(answer => this.saveEmployee(answer));
    }

    //end of class
}

module.exports = Program;