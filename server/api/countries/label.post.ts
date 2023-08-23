import { countryList } from '@doubco/countries'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const { label } = body
  if (!label) {
    return {
      status: 400,
      message: "No label provided in body."
    }
  }
  return {
    countries: countryList.filter((obj) => obj.label.includes(label))
  }
})
