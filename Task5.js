class LoginTest {
    constructor(username) {
        this.username = username;
    }

    displayUser() {
        console.log("Login User:", this.username);
    }
}

const test = new LoginTest("admin");
test.displayUser();
