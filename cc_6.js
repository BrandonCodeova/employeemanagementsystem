// Employee Management System

// Step 1: Create Employee Base Class

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
} 

// Quick test:

const emp1 = new Employee("Alice", "Marketing");
console.log(emp1.describe()); // Alice works in the Marketing department.

