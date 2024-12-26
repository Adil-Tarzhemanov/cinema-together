import { useQuery } from '@tanstack/react-query'

import { axiosWithAuth } from '@/shared/api/interceptors'
import { API_URL } from '@/shared/config/api.config'
import { IUser } from '@/shared/types/user.types'

const getUserProfile = async () => {
  const { data } = await axiosWithAuth.get<IUser>(API_URL.users('/profile'))
  return data
}

export const useGetProfile = () => {
  return useQuery({
    queryFn: () => getUserProfile(),
    queryKey: ['profile']
  })
}
