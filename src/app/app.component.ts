import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  siteLanguage : string ='English';
  siteLocale = 'en';

  languageList = [
    { code: 'en', label : 'English' }, 
    { code: 'nl', label : 'Netherlands'},
    { code: 'sr', label : 'Serbian'},
  ]

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1];

    const selectedLanguage = this.languageList
      .find((language) => language.code === this.siteLocale)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
    }
  }
}
