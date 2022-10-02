import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  siteLanguage : string ='English';
  

  languageList = [
    { code: 'en', label : 'English' }, 
    { code: 'nl', label : 'Netherlands'},
    { code: 'sr', label : 'Serbian'},
  ]

  constructor(){}

}
