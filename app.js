
const Program = require('./lib/Program.js');

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
`);

//run program
 const program = new Program();
program.initializePrompt();



//data.employeeArray conatins all empoyee objects