<!--
此文件为开发者工具生成，生成时间: 2023/8/24上午10:39:30
使用方法：
在 D:\FrontEndProject\jcvv-shop\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\FrontEndProject\jcvv-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view class="search">
        <view class="input">
          <text
            class="icon-search sk-transparent sk-text-14-2857-255 sk-text sk-pseudo sk-pseudo-circle"
            >女靴</text
          >
        </view>
      </view>
      <view class="categories">
        <scroll-view :scroll-y="true" class="primary">
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-874 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-214 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-110 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-246 sk-text">母婴</text>
          </view>
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-191 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-886 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-377 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-248 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-679 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary">
          <view is="components/XtxSwiper" class="banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel">
            <view class="title">
              <text class="name sk-transparent sk-text-27-2727-807 sk-text">家庭清洁</text>
              <navigator
                class="more sk-transparent sk-text-30-3030-973 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section">
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-74 sk-text"
                  >随用随丢，懒人真爱地板清洁/除菌湿巾</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-32 sk-text">8.90</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-449 sk-text"
                  >日式和风简约无盖垃圾桶11L</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-896 sk-text">9.90</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-748 sk-text"
                  >添加茂金属更强韧，金属色垃圾袋</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-975 sk-text">8.90</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-260 sk-text"
                  >分场景使用不污染，超细纤维抹布分类5件套</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-146 sk-text">14.90</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-588 sk-text"
                  >灰尘毛发静电吸附地板除尘干巾40片/包</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-147 sk-text">7.90</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-979 sk-text"
                  >大容量干湿分类，脚踏缓降静音垃圾桶</view
                >
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-419 sk-text">89.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2023/8/24上午10:39:30

在 D:\FrontEndProject\jcvv-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-255 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-874 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-214 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-110 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-246 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-191 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-886 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-377 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-248 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-679 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-27-2727-807 {
  background-image: linear-gradient(
    transparent 27.2727%,
    #eeeeee 0%,
    #eeeeee 72.7273%,
    transparent 0%
  ) !important;
  background-size: 100% 59.7826rpx;
  position: relative !important;
}
.sk-text-30-3030-973 {
  background-image: linear-gradient(
    transparent 30.303%,
    #eeeeee 0%,
    #eeeeee 69.697%,
    transparent 0%
  ) !important;
  background-size: 100% 59.7826rpx;
  position: relative !important;
}
.sk-text-14-2857-74 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-32 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-449 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-14-2857-896 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-748 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-14-2857-975 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-260 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-14-2857-146 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-588 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-14-2857-147 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-979 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.4348rpx;
  position: relative !important;
}
.sk-text-14-2857-419 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
