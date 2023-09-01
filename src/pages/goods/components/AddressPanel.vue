<script setup lang="ts">
import { getMemberAddressAPI, deleteMemberAddressByIdAPI } from '@/services/address'
import { useAddressStore } from '@/stores/modules/address'
import type { AddressItem } from '@/types/address'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref, toRefs } from 'vue'

//定义props接收
const props = defineProps<{
  addressList: AddressItem[]
}>()
//使用父组件传递过来的值
const { addressList } = toRefs(props)

const getMemberAddressData = async () => {
  const res = await getMemberAddressAPI()
  addressList.value = res.result
}
//初始化调用
onShow(() => {
  getMemberAddressData()
})
//修改地址
const onChangeAddress = (item: AddressItem) => {
  //修改地址
  const addressStore = useAddressStore()
  addressStore.changeSelectedAddress(item)
  emit('close')
}
// 子调父
const emit = defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <view class="service-panel">
    <!-- 关闭按钮 -->
    <text class="close icon-close" @tap="emit('close')"></text>
    <!-- 标题 -->
    <view class="title">收货地址</view>
    <!-- 内容 -->
    <view class="content">
      <view class="viewport">
        <!-- 地址列表 -->
        <scroll-view class="scroll-view" scroll-y>
          <view v-if="addressList.length" class="address">
            <uni-swipe-action class="address-list">
              <!-- 收货地址项 -->
              <uni-swipe-action-item class="item" v-for="item in addressList" :key="item.id">
                <view class="item-content" @tap="onChangeAddress(item)">
                  <view class="user">
                    {{ item.receiver }}
                    <text class="contact">{{ item.contact }}</text>
                    <text v-if="item.isDefault" class="badge">默认</text>
                  </view>
                  <view class="locate">{{ item.fullLocation }} {{ item.address }}</view>
                  <navigator
                    class="edit"
                    hover-class="none"
                    :url="`/pagesMember/address-form/address-form?id=${item.id}`"
                    @tap.stop="() => {}"
                  >
                    修改
                  </navigator>
                </view>
                <!-- 右侧插槽 -->
                <!-- <template #right>
              <button @tap="onDeleteAddress(item.id)" class="delete-button">删除</button>
            </template> -->
              </uni-swipe-action-item>
            </uni-swipe-action>
          </view>
          <view v-else class="blank">暂无收货地址</view>
        </scroll-view>
        <!-- 添加按钮 -->
        <view class="add-btn">
          <navigator hover-class="none" url="/pagesMember/address-form/address-form">
            新建地址
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  border-radius: 0;
  padding: 0;
  background-color: #cf4444;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 0rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 0rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item-content {
    line-height: 1;
    padding: 40rpx 10rpx 38rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;

    .edit {
      position: absolute;
      top: 36rpx;
      right: 30rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #666;
      line-height: 1;
    }
  }

  .item:last-child .item-content {
    border: none;
  }

  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;

    .contact {
      color: #666;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #333;
  }
}

.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #888;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
.service-panel {
  padding: 0 0rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  background-color: #fff;
}

.title {
  line-height: 1;
  padding: 40rpx 0;
  text-align: center;
  font-size: 32rpx;
  font-weight: normal;
  border-bottom: 1rpx solid #ddd;
  color: #444;
}

.close {
  position: absolute;
  right: 24rpx;
  top: 24rpx;
}
</style>
