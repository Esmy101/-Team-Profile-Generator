const Manager = require("../lib/Manger");

test("Manager must have a Ofiice number", () => {
    let testManager = new Manager ('Esmy', 72, 'something@.com', 876-9812)
    expect(testManager.getOfficeNumber()).toBe(876-9812)
    expect(testManager.getRole()).toBe('Manager')
})