import { getToken }  from './TokenService'

export const APIRequest = (url, method, body) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    headers: {
      'Authorization': getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: (typeof body === 'undefined') ? null : JSON.stringify(body),
    method: method
  })
}
