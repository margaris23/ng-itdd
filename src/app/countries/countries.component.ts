import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Country } from '../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent {
  @Input() countries: Country[];
}
