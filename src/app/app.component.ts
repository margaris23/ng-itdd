import { Component } from '@angular/core';

import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-itdd';

  constructor(private countryService: CountryService) { }
}
