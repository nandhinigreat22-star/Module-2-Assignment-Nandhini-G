class Employee {
    #salary;

    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.#salary = salary;
    }

    displaySalary() {
        console.log("Salary:", this.#salary);
    }
}

const employee = new Employee("Arun", "Automation", 45000);

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
employee.displaySalary();
