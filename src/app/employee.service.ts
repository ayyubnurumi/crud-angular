// employee.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'John Doe', gender: 'Male', dob: '1990-01-01' },
    { id: 2, name: 'Jane Doe', gender: 'Female', dob: '1992-05-15' },
    { id: 3, name: 'Alice Smith', gender: 'Female', dob: '1988-09-30' },
    { id: 4, name: 'Bob Johnson', gender: 'Male', dob: '1985-03-20' },
    // Add more dummy data as needed
  ];

  constructor() {}

  getAllEmployees(): any[] {
    return this.employees;
  }

  getEmployeeById(id: number): any {
    return this.employees.find((employee) => employee.id === id);
  }

  addEmployee(newEmployee: any): void {
    // Generate ID based on timestamp
    const timestamp = new Date().getTime();
    newEmployee.id = timestamp;

    this.employees.push(newEmployee);
  }

  updateEmployee(updatedEmployee: any): void {
    const index = this.employees.findIndex(
      (employee) => employee.id === updatedEmployee.id
    );
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }
}
