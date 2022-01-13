
const run = require('./lib/program.js');

//add modules
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');

//display title
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
Please fill out the following prompts. To finish select "Done" when prompted.
Doing so will generate an HTML file containing your data!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
`);

//run program
function main() {
     run.initializePrompt()
     .then(run.saveEmployee(answer)
     .then(({ empoyeeType }) => run.getGeneralInfo(empoyeeType)
     .then(

     )));
     
}

main();



//data.employeeArray conatins all empoyee objects