import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service'; // Import the service

@Component({
  selector: 'app-view-detail-employee',
  standalone: true,
  imports: [],
  templateUrl: './view-detail-employee.component.html',
  styleUrl: './view-detail-employee.component.css'
})
export class ViewDetailEmployeeComponent implements OnInit {
  employee: any; // Define employee object to hold fetched data
  age: number | undefined;
  zodiac: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { } // Inject ActivatedRoute and EmployeeService

  ngOnInit(): void {
    this.getEmployee(); // Call method to fetch employee data when component initializes
  }

  // Method to fetch employee data from the service
  getEmployee() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get employee ID from route params
    this.employee = this.employeeService.getEmployeeById(id); // Call service method to get employee data
    
    // Calculate age
    const dob = new Date(this.employee.dob);
    const today = new Date();
    this.age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      this.age--;
    }

    // Determine zodiac sign
    this.zodiac = this.getZodiacSign(dob.getMonth(), dob.getDate());
  }

  // Method to determine zodiac sign based on month and day
  getZodiacSign(month: number, day: number): string {
    const zodiacSigns = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    const signStartDates = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22]; // Starting day of each zodiac sign in month (0-indexed)

    if (day < signStartDates[month]) {
      return zodiacSigns[month > 0 ? month - 1 : 11]; // Return the previous zodiac sign for December
    } else {
      return zodiacSigns[month];
    }
  }
}
