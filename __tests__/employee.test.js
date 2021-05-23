const employee = require("../lib/employee");

test ("Example Name", () => {
    var testemployee = new employee("mitch", 86, "mitchell@yahoo.com")
    expect(testemployee.name).toBe("mitch");
});

test ("Example ID", () => {
    var testemployeeID = new employee("mitch", 86, "mitchell@yahoo.com")
    expect(testemployeeID.id).toBe(86);
});

test ("Example Email", () => {
    var testemployeeEmail = new employee("mitch", 86, "mitchell@yahoo.com")
    expect(testemployeeEmail.email).toBe("mitchell@yahoo.com");
});
