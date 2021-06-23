import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CountryService } from './country.service';
import { Country } from './models/country.model';

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
