import { Component, Input } from '@angular/core';

import { Country } from './country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  @Input() countries: Country[];
}
