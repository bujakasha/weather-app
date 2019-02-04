import axios from 'axios'

const WEATHER_API_KEY = process.env.REACT_APP_OWM_TOKEN

export const feacthOwm = (url, callback) => {
  url += `&appid=${WEATHER_API_KEY}&lang=en&units=metric`
  console.log(url)
  return axios
    .get(url)
    .then(result => {
      console.log(result)
      if (result.status === 200) {
        return result.data
      } else {
        console.log('errrrrrr', result)
      }
    })
    .catch(err => {
      console.log(err)
    })
}
