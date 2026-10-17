class TestResult {
    constructor(testName, status) {
        this.testName = testName;
        this.status = status;
    }

    showResult() {
        console.log("Test Name:", this.testName);
        console.log("Status:", this.status);
        console.log("");
    }
}

const login = new TestResult("Login Test", "Passed");
const checkout = new TestResult("Checkout Test", "Failed");

login.showResult();
checkout.showResult();
