import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from './models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  list(): Observable<Country[]> {
    const url = `${this.api}/all`;
    return this.http.get<Country[]>(url);
  }
}
