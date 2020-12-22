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
      '1',
      'Frontend development',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
    new Employee(
      2,
      'maha Hamed',
      '2',
      'UI/UX development',
      '2000-12-13T00:00:00.000Z',
      'Female'
    ),
    new Employee(
      3,
      'Islam Mouneer',
      '3',
      'Project Management',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
    new Employee(
      4,
      'Motaz Kamel',
      '4',
      'HR Management',
      '2000-12-13T00:00:00.000Z',
      'Male'
    ),
    new Employee(
      5,
      'Merna Gamil',
      '444',
      'Backend development',
      '2000-12-13T00:00:00.000Z',
      'Female'
    ),
  ];
}
