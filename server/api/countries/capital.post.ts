import { countries } from '@doubco/countries'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const { capital } = body
  if (!capital) {
    return {
      status: 400,
      message: "No capital provided in body."
    }
  }
  const countriesArr = Object.values(countries)
  return {
    countries: countriesArr.filter((obj) => {
      if (obj.capital) {
        return obj.capital.includes(capital)
      }
    })
  }
})
