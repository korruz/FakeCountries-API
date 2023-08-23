import { countries } from '@doubco/countries'

export default eventHandler(() => {
  const countriesArr = Object.values(countries)
  return {
    countries: countriesArr
  }
})