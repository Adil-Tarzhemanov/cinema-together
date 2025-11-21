const getServerUrl = () => {
  if (typeof window === 'undefined') {
    // на сервере (SSR, middleware, RSC) ходим по внутреннему адресу
    return process.env.INTERNAL_API_URL as string
  }

  // в браузере — по публичному URL (localhost:4200)
  return process.env.NEXT_PUBLIC_SERVER_URL as string
}

export const SERVER_URL = `${getServerUrl()}/api` as string

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,

  auth: (url = '') => API_URL.root(`/auth${url}`),
  users: (url = '') => API_URL.root(`/users${url}`),
  movies: (url = '') => API_URL.root(`/movies${url}`),
  genres: (url = '') => API_URL.root(`/genres${url}`),
  actors: (url = '') => API_URL.root(`/actors${url}`),
  reviews: (url = '') => API_URL.root(`/reviews${url}`),
  files: (url = '') => API_URL.root(`/files${url}`),
  statistics: (url = '') => API_URL.root(`/statistics${url}`),
  payments: (url = '') => API_URL.root(`/payments${url}`)
}
