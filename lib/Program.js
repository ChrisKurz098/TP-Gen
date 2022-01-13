
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
    initializePrompt() {

       this.getGeneralInfo().then(answer =>{
        console.log(answer);
        inquirer
            .prompt(
                [
                    {
                        type: 'input',
                        name: 'userName',
                        message: "Please eneter the Team Managers first and last name: ",
                        validate: input => {
                            if (input.split(' ').length === 2 && input.split(' ')[1].trim() != '') {
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
                        message: "Please eneter the Team Managers Employee ID: ",
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
                        message: "Please eneter the Team Managers contact email: ",
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
                    name: 'office',
                    message: "Please eneter the Team Managers Office Number: ",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter a valid data!');
                            return false;
                        }
                    }
                }
                ]).then(({ userName, idNumber, email, office }) => {

                const nameArray = userName.split(' ');
                const manager = new Manager(nameArray, idNumber, email, office);
                this.employeeArray.push(manager);
                console.log(this.employeeArray[0]);
                console.log(this.employeeArray[0].fullName);
            });
        })

    }

    //prompts for basic info
      getGeneralInfo() {
      
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'userName',
                    message: "Please eneter the Team Managers first and last name: ",
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
                    message: "Please eneter the Team Managers Employee ID: ",
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
                    message: "Please eneter the Team Managers contact email: ",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log(' - Please enter a valid data!');
                            return false;
                        }
                    }
                }
            ]).then(answer => {return answer});

    }

    //end of class
}

module.exports = Program;