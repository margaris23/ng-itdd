import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Country } from './countries/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  list(): Observable<Country[]> {
    return of([]);
  }
}
