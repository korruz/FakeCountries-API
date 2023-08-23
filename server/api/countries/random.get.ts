import { countries } from '@doubco/countries'

export default eventHandler(() => {
  const countriesArr = Object.values(countries)
  return {
    random_country:
      countriesArr[Math.floor(Math.random() * countriesArr.length)]
  }
})