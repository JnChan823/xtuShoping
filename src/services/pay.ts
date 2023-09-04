/**
 * 获取微信支付参数
 * GET
 * /pay/wxPay/miniPay
 * @param data orderId 订单id
 * 🔔重要说明
 * 由于微信支付的限制，仅 appid 为 wx26729f20b9efae3a 的开发者才能调用该接口。此外，开发者还需要微信授权登录。
 * 对于其他开发者，可以使用模拟支付接口进行开发测试，调用后，订单状态将自动更新为已支付。
 */

import { http } from '@/utils/http'

export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/**
 * 模拟支付-内测版
 * GET
 * /pay/mock
 * @param data orderId 订单id
 * 在 DEV 环境中使用，模拟支付，更新订单状态为待发货。
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}
