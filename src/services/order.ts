import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

/**
 * 填写订单-获取预付订单
 * GET
 * /member/order/pre
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 * GET
 * /member/order/pre/now
 */

export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}
