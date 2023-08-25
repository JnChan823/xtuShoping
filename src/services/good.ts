import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
 * 商品详情
 * GET
 * /goods
 * 规格集合一定要和skus集和下的specs顺序保持一致
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
