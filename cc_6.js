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

// Step 4: Create sample employees and managers
const employee1 = new Employee("Mitchell Mandell", "Marketing");
const employee2 = new Employee("John Storf", "Sales");

const manager1 = new Manager("Maxim Zakhariyev", "IT", 8);
const manager2 = new Manager("Cole Perullo", "Finance", 5);

