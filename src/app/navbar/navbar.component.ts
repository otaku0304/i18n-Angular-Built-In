import { Component, OnInit } from '@angular/core';
import { hasFlag } from 'country-flag-icons';

hasFlag('NL') === true

import { countries } from 'country-flag-icons';

countries.includes('NL') === true


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  siteLanguage = 'English';
  siteLocale = 'en';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];

    const selectedLanguage = this.languageList
      .find((language) => language.code === this.siteLocale)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
    }
  }

}
