
const Engineer = require('../lib/Engineer.js');

test('Checks if employee datat is generated', () => {
    const engineer = new Engineer(['Bob', 'Beltcher'],'123ABC','bob@gmail.com','bobGitHub');

    expect(engineer.fullName).toEqual(expect.arrayContaining(["Bob", "Beltcher"]));
    expect(engineer.id).toBe('123ABC');
    expect(engineer.email).toBe('bob@gmail.com');
    expect(engineer.github).toBe('bobGitHub');
});