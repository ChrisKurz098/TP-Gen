
const Manager = require('../lib/Manager.js');

test('Checks if employee datat is generated', () => {
    const manager = new Manager(['Bob', 'Beltcher'],'123ABC','bob@gmail.com','45b');

    expect(manager.fullName).toEqual(expect.arrayContaining(["Bob", "Beltcher"]));
    expect(manager.id).toBe('123ABC');
    expect(manager.email).toBe('bob@gmail.com');
    expect(manager.officeNumber).toBe('45b');
});