
const run = require('./lib/program.js');

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

//run program
const data =  run.getGeneralInfo('manager');


