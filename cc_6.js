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
 
    //Step 4: Create Sample Employees and Managers

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
     
    //Step 6: Instantiate the Company and Add Employees

    const myCompany = new Company();
    myCompany.addEmployee(emp1);
    myCompany.addEmployee(emp2);
    myCompany.addEmployee(mgr1);

    myCompany.listEmployees();
