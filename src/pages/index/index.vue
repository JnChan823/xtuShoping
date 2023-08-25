<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
//引入头部组件
import PageSkeleton from './componets/PageSkeleton.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './componets/CustomNavbar.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './componets/CategoryPanel.vue'
import HotPanel from './componets/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/components'

//获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

//获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
//是否加载中标记
const isLoading = ref(false)
//页面加载
onLoad(() => {
  isLoading.value = true
  Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
//获取猜你喜欢实例
const guessRef = ref<XtxGuessInstance>()
//滚动触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
const isTriggered = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画
  isTriggered.value = true
  /** 
  //加载数据,同时写三个await性能过慢
  await getHomeBannerData()
  await getHomeCategoryData()
  await getHomeHotData() 
  */
  //重置猜你喜欢组件的数据
  guessRef.value?.resetData()
  //性能调优
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  //关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <!-- 需要滚动的组件，滚动容器 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
