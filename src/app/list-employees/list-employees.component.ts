import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service'; // Import the service

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})

export class ListEmployeesComponent implements OnInit {
  employees!: any[]; // Define employees array to hold fetched data

  constructor(private employeeService: EmployeeService) { } // Inject EmployeeService

  ngOnInit(): void {
    this.getEmployees(); // Call method to fetch employees data when component initializes
  }

  // Method to fetch employees data from the service
  getEmployees() {
    this.employees = this.employeeService.getAllEmployees(); // Call service method
  }
}
