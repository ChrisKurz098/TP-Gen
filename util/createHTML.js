const run = require('./generate-file.js');
module.exports = {
    generateHTML(data) {
        console.log(data[0].constructor.name);
        const string = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <style>
    * {
    text-align: center;
}
h1{
    font-size: 37px;
    text-decoration: underline;
}

h2 {
    border: black solid;
    background-color: beige;
    font-size: 28px;
}

table {
    font-size: 21px;
    border: 1px solid black;
}

th,td {
    width:25%;
    background-color:rgb(247, 247, 247);
    border: 1px solid black;
}

       
    </style>
</head>

<body>
    <h1>Team Roster</h1>
    <h2>Team Manager</h2>
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Office Number</th>
        </tr>
        ${addEngineers(data, 'Manager')}
    </table>

    <h2>Engineers</h2>
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>GitHub Account</th>
        </tr>
        ${addEngineers(data, 'Engineer')}
      
    </table>

    <h2>Interns</h2>
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>School</th>
        </tr>
        ${addEngineers(data, 'Intern')}
    </table>

</body>

</html>
`;
        run.writeFile(string);
    }
};




function addEngineers(data, type) {
    let string = '';

    for (let i = 0; i < data.length; i++) {

        if (data[i].constructor.name === type) {
            string += `
    <tr>
    <td>${data[i].fullName[0]} ${data[i].fullName[1]}</td>
    <td>${data[i].id}</td>
    <td><a <a href = "mailto:${data[i].email}">${data[i].email}</a></td>
    `;
            switch (type) {
                case 'Manager': string += `
    <td>${data[i].officeNumber}</td>
    </tr >`
                    break;
                case 'Engineer': string += `
    <td><a href = "https://github.com/${data[i].github}" target="_blank">${data[i].github}</a></td>
    </tr >`
                    break;
                case 'Intern': string += `
    <td>${data[i].school}</td>
    </tr >`
                    break;

            }
        }
    }
    return string;
}