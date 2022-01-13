const Employee = require('../lib/Employee.js');

test('Checks if employee datat is generated', () => {
    const employee = new Employee(['Bob', 'Beltcher'],'123ABC','bob@gmail.com');

    expect(employee.fullName).toEqual(expect.arrayContaining(["Bob", "Beltcher"]));
    expect(employee.id).toBe('123ABC');
    expect(employee.email).toBe('bob@gmail.com');
});