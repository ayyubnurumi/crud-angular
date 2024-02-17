import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})

export class AddEmployeeComponent {
  newEmployee: any = {};

  constructor(private employeeService: EmployeeService, private router: Router) { }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    // Clear input fields after adding employee
    this.newEmployee = {};
    this.router.navigateByUrl('/list');
  }
}

