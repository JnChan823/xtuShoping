import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取个人信息
 * GET
 * /member/profile
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改个人信息
 * PUT
 * /member/profile
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
