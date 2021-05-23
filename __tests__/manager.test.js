const manager = require("../lib/manager");

test ("Example Name", () => {
    var testmanager = new manager("mitch", 86, "mitchell@yahoo.com")
    expect(testmanager.name).toBe("mitch");
});

test ("Example ID", () => {
    var testmanagerID = new manager("mitch", 86, "mitchell@yahoo.com")
    expect(testmanagerID.id).toBe(86);
});

test ("Example Email", () => {
    var testmanagerEmail = new manager("mitch", 86, "mitchell@yahoo.com")
    expect(testmanagerEmail.email).toBe("mitchell@yahoo.com");
});

test ("Example Github", () => {
    var testmanagerOffice = new manager("mitch", 86, "mitchell@yahoo.com", "115")
    expect(testmanagerOffice.officeNumber).toBe(115);
});
