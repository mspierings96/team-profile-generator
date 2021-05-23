const engineer = require("../lib/engineer");

test ("Example Name", () => {
    var testengineer = new engineer("mitch", 86, "mitchell@yahoo.com")
    expect(testengineer.name).toBe("mitch");
});

test ("Example ID", () => {
    var testengineerID = new engineer("mitch", 86, "mitchell@yahoo.com")
    expect(testengineerID.id).toBe(86);
});

test ("Example Email", () => {
    var testengineerEmail = new engineer("mitch", 86, "mitchell@yahoo.com")
    expect(testengineerEmail.email).toBe("mitchell@yahoo.com");
});

test ("Example Github", () => {
    var testengineerGithub = new engineer("mitch", 86, "mitchell@yahoo.com", "mspierings96@github.com")
    expect(testengineerGithub.github).toBe("mspierings96@github.com");
});
