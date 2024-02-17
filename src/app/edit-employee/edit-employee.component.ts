import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  employeeId!: number;
  newEmployee: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {

  }

  ngOnInit(): void {
    // Get the employee ID from the route parameters
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the employee data based on the ID
    this.newEmployee = this.employeeService.getEmployeeById(this.employeeId);    
  }

  updateEmployee(): void {    
    this.employeeService.updateEmployee(this.newEmployee);
    // Redirect to list page after updating employee
    this.router.navigateByUrl('/list');
  }
}
