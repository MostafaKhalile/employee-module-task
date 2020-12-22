import { Employee } from './../../../../models/employee.model';
import { EmployeesService } from './../../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss'],
})
export class SearchEmployeeComponent implements OnInit {
  employees: Employee[];
  selection: Employee[];
  all = false;
  searchEmployees: FormGroup;
  page = 1;
  pageSize = 4;
  collectionSize = this.employeesService.employees.length;
  Departments: string[] = [
    'HR Management',
    'UI/UX development',
    'Frontend development',
    'Backend development',
    'Project Management',
  ];
  totalItems = 64;
  currentPage = 4;
  constructor(
    public formBuilder: FormBuilder,
    private employeesService: EmployeesService
  ) {
    this.employees = this.employeesService.employees;
    this.selection = [];
    this.refreshEmployees();
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  ngOnInit(): void {
    this.searchEmployees = this.formBuilder.group({
      empName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      department: new FormControl('', [Validators.required]),
    });
  }

  get isAllSelected(): boolean {
    const numSelected = this.selection?.length;
    const numRows = this.employees.length;
    return numSelected === numRows;
  }

  public rowToggle(id: number): void {
    const employee = this.employees.find((element) => element.id === id);
    this.selection?.includes(employee)
      ? this.selection?.splice(this.selection?.indexOf(employee), 1)
      : this.selection?.push(employee);
    console.log(this.selection);
  }

  public allToggle(): void {
    if (this.isAllSelected) {
      this.selection = [];
      this.all = false;
    } else {
      this.selection = [...this.employees];
      this.all = true;
    }
    console.log(this.selection);
  }

  public submitForm(): void {
    if (this.searchEmployees.valid) {
      this.onSearch(
        this.searchEmployees.value.empName,
        this.searchEmployees.value.department
      );
    } else {
      this.searchEmployees.markAllAsTouched();
    }
  }
  public onSearch(inputValue: string, inputValue2: string): void {
    const employee = this.employees.find(
      (element) =>
        element.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase() &&
        element.department.toLocaleLowerCase() ===
          inputValue2.toLocaleLowerCase()
    );

    const result =
      employee != null ? [employee] : this.employeesService.employees;

    this.employees = [...result];
    this.searchEmployees.reset();
  }

  refreshEmployees(): void {
    this.employees = this.employeesService.employees
      .map((emp, i) => ({
        id: i + 1,
        ...emp,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
