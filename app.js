
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
-------------------------------by Chris Kurz-------------------------------
 
 
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  Welcome! 
Please fill out the following prompts. To finish select "Done" when prompted.
Doing so will generate an HTML file containing your data!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
`);

//run program
new Program().initializePrompt();




//data.employeeArray conatins all empoyee objects