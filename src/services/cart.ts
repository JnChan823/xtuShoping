import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

/**
 * 加入购物车
 * POST
 * /member/cart
 * @param data
 * @returns
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
 * 获取购物车列表
 * GET
 * /member/cart
 */

export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 * 删除/清空购物车商品
 * DELETE
 * /member/cart
 * @param data 请求体参数 ids SKUID 集合
 */

export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

/**
 * 修改购物车单品
 * PUT
 * /member/cart/${skuId}
 * @param skuId  SKUID
 * @param data selected 选中状态 count 数量
 * @returns
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}


/**
 * 购物车全选/取消全选
 * PUT
 * /member/cart/selected
 * @param data  selected 是否选中
 * @returns 
 */
export const putMemberCartSelectedAPI = (data:{selected:boolean}) => {
  return http({
    method: 'PUT',
    url: "/member/cart/selected",
    data,
  })
}
