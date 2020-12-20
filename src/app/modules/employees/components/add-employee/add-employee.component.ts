import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  model: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {}
}
