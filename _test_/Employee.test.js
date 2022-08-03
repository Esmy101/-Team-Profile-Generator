const Employee = require("../lib/Employee");


test ('employee must have all information', () => {
    let testEmployee = new Employee ('Esmy', 72, 'something@.com')
    expect(testEmployee.getName()).toBe('Esmy')
    expect(testEmployee.getEmail()).toBe('something@.com')
    expect(testEmployee.getId()).toBe(72)
})