import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((Employees) => {
      console.log(Employees);
      this.employees = Employees;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.employeeService
      .addEmployee({ name } as Employee)
      .subscribe((Employee) => {
        this.employees.push(Employee);
      });
  }

  delete(Employee: Employee): void {
    this.employees = this.employees.filter((h) => h !== Employee);
    this.employeeService.deleteEmployee(Employee.id).subscribe();
  }
}
