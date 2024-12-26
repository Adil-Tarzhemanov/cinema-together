import { useGetProfile } from '@/entities/user/api/queries/userQueries/useGetUserProfile'

export const useProfile = () => {
  const { data: user, isLoading } = useGetProfile()

  return { user, isLoading }
}
