
const Intern = require('../lib/Intern.js');

test('Checks if employee datat is generated', () => {
    const intern = new Intern(['Bob', 'Beltcher'],'123ABC','bob@gmail.com','UofO');

    expect(intern.fullName).toEqual(expect.arrayContaining(["Bob", "Beltcher"]));
    expect(intern.id).toBe('123ABC');
    expect(intern.email).toBe('bob@gmail.com');
    expect(intern.school).toBe('UofO');
});