import { useQuery } from '@tanstack/react-query'

import { axiosWithAuth } from '@/shared/api/interceptors'
import { API_URL } from '@/shared/config/api.config'
import { IUser } from '@/shared/types/user.types'

const getAllQueries = async searchTerm => {
  const { data } = await axiosWithAuth.get<IUser[]>(API_URL.users(''), {
    params: searchTerm ? { searchTerm } : {}
  })
  return data
}

export const useGetAllUsers = (searchTerm?: string) => {
  return useQuery({
    queryFn: () => getAllQueries(searchTerm),
    queryKey: ['users', searchTerm]
  })
}
