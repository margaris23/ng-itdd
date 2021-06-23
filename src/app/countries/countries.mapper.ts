import { Country, CountryView } from '../models/country.model';

export function toCountriesView(countries: Country[] | null): CountryView[] {
  const toCountryView = (country: Country): CountryView => ({
    name: 'NO NAME',
    code: 'NO CODE',
  });
  return countries?.map(toCountryView);
}
