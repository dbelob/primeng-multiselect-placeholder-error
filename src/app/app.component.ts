import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectButtonOptionClickEvent } from 'primeng/selectbutton';

interface City {
  name: string,
  code: string
}

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities!: City[];
  staticSelectedCities!: City[];
  dynamicSelectedCities!: City[];

  languages: Language[] = [{name: 'English', code: 'en'}, {name: 'German', code: 'de'}];
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.use('en');

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  changeLanguage(event: SelectButtonOptionClickEvent) {
    this.translateService.use(event.option.code);
  }
}
