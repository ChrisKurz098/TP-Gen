
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


        inquirer
            .prompt(
                [
                    {
                        type: 'input',
                        name: 'userName',
                        message: "Please enter the Team Managers first and last name: ",
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
                        message: "Please enter the Team Managers Employee ID: ",
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
                        name: 'email',
                        message: "Please enter the Team Managers contact email: ",
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
                        validate: input => {
                            if (input) {
                                return true;
                            } else {
                                console.log(' - Please enter valid data!');
                                return false;
                            }
                        }
                    }
                ]).then((answer) => this.saveEmployee(answer));


    }
    //saved employee data 
    saveEmployee(data) {
        //configure answer data
        const { userName, idNumber, email, office } = data;
        const nameArray = userName.split(' ');
        const manager = new Manager(nameArray, idNumber, email, office);
        //store the managers data into the array that holds 
        this.employeeArray.push(manager);
        console.log(this.employeeArray[0]);
        console.log(this.employeeArray[0].fullName);
        this.askForEmployees();
    }

    //asks if more employees
    askForEmployees() {
        inquirer
            .prompt({
                type: 'list',
                name: 'empoyeeType',
                message: "Please choose and team member type to add: ",
                choices: ["Engineer", "Intern", "Done"]
            }).then(({ empoyeeType }) => this.getGeneralInfo(empoyeeType))
    }
    //prompts for basic info
    getGeneralInfo(type) {
        type = type.toLowerCase();
        if (type === "done") {
            console.log(this.employeeArray);
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
                }
            ]).then( answer => {
                let generalInfo = answer;
                if (type === "engineer") {
                    inquirer
                        .prompt(
                            {
                                type: 'input',
                                name: 'github',
                                message: `Please enter ${type}'s GitHub user name: `,
                                validate: input => {
                                    if (input) {
                                        return true;
                                    } else {
                                        console.log(' - Please enter valid data!');
                                        return false;
                                    }
                                }
                            }).then(answer => {
                                //configure answer data
                                const { userName, idNumber, email } = generalInfo;
                                const {github} = answer;
                                const nameArray = userName.split(' ');
                                const engineer = new Engineer(nameArray, idNumber, email, github);
                                //store the managers data into the array that holds 
                                this.employeeArray.push(engineer);
                                console.log(this.employeeArray);
                                console.log("Engineer added!", userName[0], userName[1]);
                                this.askForEmployees();

                            });
                } else {
                    inquirer
                        .prompt(
                            {
                                type: 'input',
                                name: 'school',
                                message: `Please enter ${type}'s school name: `,
                                validate: input => {
                                    if (input) {
                                        return true;
                                    } else {
                                        console.log(' - Please enter valid data!');
                                        return false;
                                    }
                                }
                            }).then(answer => {
                                //configure answer data
                                const { userName, idNumber, email } = generalInfo;
                                const {school} = answer;
                                const nameArray = userName.split(' ');
                                const intern = new Intern(nameArray, idNumber, email, school);
                                //store the managers data into the array that holds 
                                this.employeeArray.push(intern);
                                console.log(this.employeeArray);
                                console.log("Intern added!", userName[0], userName[1]);
                                this.askForEmployees();

                            });
                }
            });

    }

    //end of class
}

module.exports = Program;