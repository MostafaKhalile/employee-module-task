import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentLang: string;
  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }
  get getTodayDate(): string {
    const today = new Date();
    const date = today.toDateString();
    return date;
  }
  dropDownElements: string[] = ['profile', 'settings', 'Department', 'logout'];
  changeCurrentLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  ngOnInit(): void {}
}
