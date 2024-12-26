import { useQuery } from '@tanstack/react-query'

import { axiosWithAuth } from '@/shared/api/interceptors'
import { API_URL } from '@/shared/config/api.config'
import { IUser } from '@/shared/types/user.types'

const getProfileMiddleware = async refreshToken => {
  const { data: profile } = await axiosWithAuth.get<IUser>(
    API_URL.users('/profile'),
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    }
  )
  return profile
}

export const useGetProfileMiddleware = (refreshToken: string) => {
  return useQuery({
    queryFn: () => getProfileMiddleware(refreshToken),
    queryKey: ['profile-middleware', refreshToken]
  })
}
