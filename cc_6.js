// Step 2: Create Employee base class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Step 3: Create Manager class that extends Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} is a manager in the ${this.department} department and manages a team of ${this.teamSize} employees.`;
    }
}
