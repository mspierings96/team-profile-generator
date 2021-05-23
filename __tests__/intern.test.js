const intern = require("../lib/intern");

test ("Example Name", () => {
    var testintern = new intern("mitch", 86, "mitchell@yahoo.com")
    expect(testintern.name).toBe("mitch");
});

test ("Example ID", () => {
    var testinternID = new intern("mitch", 86, "mitchell@yahoo.com")
    expect(testinternID.id).toBe(86);
});

test ("Example Email", () => {
    var testinternEmail = new intern("mitch", 86, "mitchell@yahoo.com")
    expect(testinternEmail.email).toBe("mitchell@yahoo.com");
});

test ("Example School", () => {
    var testinternSchool = new intern("mitch", 86, "mitchell@yahoo.com", "Uw-oshkosh")
    expect(testinternSchool.school).toBe("Uw-oshkosh");
});
