import axios from 'axios'

export function getSellers() {
  const url = 'api/sellers'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
