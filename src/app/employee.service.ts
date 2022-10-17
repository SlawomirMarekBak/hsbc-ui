import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeSearch } from './employee-search';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Employee } from './employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private EmployeesUrl = '/employees';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.EmployeesUrl)
      .pipe(catchError(this.handleError<Employee[]>('getEmployees', [])));
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.EmployeesUrl}/${id}`;
    return this.http
      .get<Employee>(url)
      .pipe(catchError(this.handleError<Employee>(`getEmployee id=${id}`)));
  }

  searchEmployees(employeeSearch: EmployeeSearch): Observable<Employee[]> {
    return this.http
      .post<Employee[]>(`${this.EmployeesUrl}/search`, employeeSearch)
      .pipe(catchError(this.handleError<Employee[]>('searchEmployees', [])));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.EmployeesUrl, employee, this.httpOptions)
      .pipe(catchError(this.handleError<Employee>('addEmployee')));
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.EmployeesUrl}/${id}`;

    return this.http
      .delete<Employee>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Employee>('deleteEmployee')));
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http
      .put(this.EmployeesUrl, employee, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateEmployee')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' ' + error);
      return of(result as T);
    };
  }
}
