import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  pieChart: any;
  barChart: any;
  
  // Data for the pie chart
  genderData: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // Fetch employee data
    const employees = this.employeeService.getAllEmployees();

    // Calculate gender distribution
    const maleCount = employees.filter(employee => employee.gender === 'Male').length;
    const femaleCount = employees.filter(employee => employee.gender === 'Female').length;

    // Prepare data for the pie chart
    this.genderData = [ maleCount, femaleCount ];
    
    this.createPieChart();
    this.createBarChart();
  }

  createPieChart(): void {
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          label: 'Employee Gender Distribution',
          data: this.genderData,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: true
      }
    });
  }
  createBarChart(): void {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          label: 'Employee Gender Distribution',
          data: this.genderData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Red color with transparency
            'rgba(54, 162, 235, 0.5)', // Blue color with transparency
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', // Solid red color
            'rgba(54, 162, 235, 1)', // Solid blue color
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
