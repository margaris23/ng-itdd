import { Country, CountryView } from '../models/country.model';

export function toCountriesView(countries: Country[] | null): CountryView[] {
  const toCountryView = (country: Country): CountryView => ({
    name: country.name,
    code: country.alpha2Code,
  });
  return countries?.map(toCountryView);
}
