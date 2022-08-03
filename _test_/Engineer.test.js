const Engineer = require("../lib/Engineer");

test("Engineer must have a GitHub", () => {
    let testEngineer = new Engineer ('Esmy', 72, 'something@.com', 'Esmy101')
    expect(testEngineer.getGithub()).toBe('Esmy101')
    expect(testEngineer.getRole()).toBe('Engineer')
})