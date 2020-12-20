import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor() {}
  employees: Employee[] = [
    new Employee(
      1,
      'Ahmed Mohamed',
      '111',
      'Frontend development',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
    new Employee(
      2,
      'maha Hamed',
      '222',
      'UI/Ux development',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
    new Employee(
      3,
      'Islam Mouneer',
      '333',
      'Project Management',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
    new Employee(
      4,
      'Motaz Kamel',
      '444',
      'HR Management',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
  ];
}
