import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from './countries/country.model';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-itdd';
  countries$: Observable<Country[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.list();
  }
}
