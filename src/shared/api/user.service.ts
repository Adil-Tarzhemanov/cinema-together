import { axiosWithAuth } from '../api/interceptors'
import { API_URL } from '../config/api.config'
import { IUser } from '../types/user.types'

class UserService {
  async getProfileMiddleware(refreshToken: string) {
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
}

export const userService = new UserService()
