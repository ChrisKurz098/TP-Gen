
// const run = require('./lib/program.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const run = require('./util/createHTML.js');


let employeeArray = [];

console.log(`
::::::::::: :::::::::                ::::::::  :::::::::: ::::    ::: 
    :+:     :+:    :+:              :+:    :+: :+:        :+:+:   :+:  
     +:+     +:+    +:+              +:+        +:+        :+:+:+  +:+   
      +#+     +#++:++#+ +#++:++#++:++ :#:        +#++:++#   +#+ +:+ +#+    
       +#+     +#+                     +#+   +#+# +#+        +#+  +#+#+#     
        #+#     #+#                     #+#    #+# #+#        #+#   #+#+#      
         ###     ###                      ########  ########## ###    ####   

--------------------------Team Profile Generator---------------------------
-------------------------------by Chris Kurz-------------------------------
 
 
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  Welcome! 
    Please fill out the following prompts. To finish select "Done" when 
prompted. Doing so will generate an HTML file containing your data!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
`);


//add modules






 
    //saved employee data 
    function  saveEmployee(answer) {
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
             employeeArray.push(teamMember);
             askForEmployees();
        
    }

          //asks if more employees
   function askForEmployees() {
    inquirer
        .prompt({
            type: 'list',
            name: 'empoyeeType',
            message: "Please choose a team member type to add: ",
            choices: ["Engineer", "Intern", "Done"]
        }).then(({ empoyeeType }) => getGeneralInfo(empoyeeType))
}
  
    //prompts for basic info
    function getGeneralInfo(type) {
        
        type = type.toLowerCase();
        if (type === "done") {
            console.log("All Done! ");
            run.generateHTML(employeeArray);
            return employeeArray;
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
            ]).then(answer => saveEmployee(answer));
    }




//inits the program
getGeneralInfo('manager');


