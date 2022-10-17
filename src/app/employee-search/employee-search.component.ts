import { Component, OnInit } from '@angular/core';
import { CriteriaSearch } from './../criteria-search';
import { EmployeeSearch } from './../employee-search';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
})
export class EmployeeSearchComponent implements OnInit {
  employees: Employee[] = [];
  searchCriteria: CriteriaSearch[];
  employeeSearch: EmployeeSearch;

  constructor(private employeeService: EmployeeService) {
    this.searchCriteria = [];
    this.searchCriteria.push(new CriteriaSearch('', '', ''));
    this.employeeSearch = new EmployeeSearch(this.searchCriteria);
    this.employeeSearch.dataOption = 'any';
  }

  search(): void {
    this.employeeService
      .searchEmployees(this.employeeSearch)
      .subscribe((employees) => {
        console.log(employees);
        this.employees = employees;
      });
  }

  ngOnInit(): void {}

  addRow(): void {
    this.searchCriteria.push(new CriteriaSearch('', '', ''));
  }

  removeRow(criteriaSearch: CriteriaSearch): void {
    this.searchCriteria.splice(this.searchCriteria.indexOf(criteriaSearch), 1);
  }

  showModel(): void {
    console.log(this.employeeSearch.dataOption);
    console.log(this.searchCriteria);
  }
}
