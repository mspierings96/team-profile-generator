class employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = "employee";
        this.email = email;
    };

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getRole() {
        return this.title;
    }

    getEmail() {
        return this.email;
    }

}

module.exports = employee;