import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  get getTodayDate(): string {
    const today = new Date();
    const date = today.toDateString();
    // today.getFullYear() +
    // '-' +
    // (today.getMonth() + 1) +
    // '-' +
    // today.getDate();
    return date;
  }
  dropDownElements: string[] = ['profile', 'settings', 'Department', 'logout'];
  ngOnInit(): void {}
}
