import { countries } from '@doubco/countries'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const { currency } = body
  if (!currency) {
    return {
      status: 400,
      message: "No currency provided in body."
    }
  }
  const countriesArr = Object.values(countries)
  return {
    countries: countriesArr.filter((obj) => {
      if (obj.currency) {
        return obj.currency.includes(currency)
      }
    })
  }
})
