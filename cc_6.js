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

// Step 3: Create Manager Class 

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} people.`;
    }
    }
 
    //Step 4: Create Sample Empoyees and Managers

    const emp1 = new Employee("Nicole", "Product Development");
    const emp2 = new Employee("Ian", "Operations");
    const mgr1 = new Manager("Sarah", "Product Development", 5);

    // Step 5: Create COmpany Class

    class Company{
        constructor() {
            this.employees = [];
         }
         addEmployee(employee) {
            this.employees.push(employee);
         }
         listEmployees() {
            this.employees.forEach(emp => {
                console.log(emp.describe());
            });
         }
    }
    


    