const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(fullName,id,email,officeNumber){
        super(fullName,id,email);
        this.officeNumber = officeNumber; 
    }
}

module.exports = Manager;