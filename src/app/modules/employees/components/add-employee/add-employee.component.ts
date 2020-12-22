import { Employee } from './../../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  Departments: string[] = [
    'HR Management',
    'UI/UX development',
    'Frontend development',
    'Backend development',
    'Project Management',
  ];
  addEmployeeForm: FormGroup;

  // date picker min and max values
  minDate: Date;
  maxDate: Date;
  myDateValue: Date;
  constructor(
    private employeesService: EmployeesService,
    public formBuilder: FormBuilder
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 18);
    console.log(this.minDate);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  get department(): any {
    return this.addEmployeeForm.get('department');
  }

  ngOnInit(): void {
    this.myDateValue = new Date();
    this.addEmployeeForm = this.formBuilder.group({
      employeeName: new FormControl(null, Validators.required),
      department: new FormControl('', [Validators.required]),
      employeeCode: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      birthDate: new FormControl(this.myDateValue, Validators.required),
      gender: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.addEmployeeForm);

    if (this.addEmployeeForm.valid) {
      console.log(typeof this.addEmployeeForm.value);
      console.log(
        this.employeesService.employees[
          this.employeesService.employees.length - 1
        ]
      );
      const newEmployee = this.addEmployeeForm.value;
      this.employeesService.employees.push(
        new Employee(
          this.employeesService.employees[
            this.employeesService.employees.length - 1
          ].id + 1,
          newEmployee.employeeName,
          newEmployee.employeeCode,
          newEmployee.department,
          newEmployee.birthDate,
          newEmployee.gender
        )
      );
      // this.addEmployeeForm.reset();
    } else {
      this.addEmployeeForm.markAllAsTouched();
    }
  }
}
