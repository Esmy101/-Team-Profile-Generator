const Intern = require("../lib/Intern");

test("Intern must have a school", () => {
    let testIntern = new Intern ('Esmy', 72, 'something@.com', 'UWU')
    expect(testIntern.getSchool()).toBe("UWU")
    expect(testIntern.getRole()).toBe('Intern')
})