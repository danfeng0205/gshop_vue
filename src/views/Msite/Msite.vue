<template>
  <div>
      <!-- 首页头部 -->
    <HeaderTop title="山东省潍坊市昌邑市柳疃镇">
      <span slot="left" class="header_search">
        <i class="iconfont iconsearch"></i>
      </span>
      <span slot="right" class="header_login">
        <span>登录 | 注册</span>
      </span>
    </HeaderTop>
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="javascript:;">
                    <div class="food_container">
                        <img src="" alt="">
                    </div>
                    <span></span>
                </a>
            </div>
            <div class="swiper-slide">
                2
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
        <div class="shop_header">
            <ShopList/>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import ShopList from '@/components/ShopList/ShopList'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    //   创建一个swiper实例对象，来实现轮播
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true, // 可以轮播循环
      // 如果需要分页器
      pagination: {
        el: 'swiper-pagination'
      }
    })
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl";
.header_search {
  .iconfont {
    margin-left: 15px;
    font-size: 40px;
    color: #ffffff;
    float: left;
  }
}

.header_login {
  span {
    font-size: 16px;
    color: #fff;
    margin-right: 15px;
    float: right;
  }
}
.msite_nav
    width 100%
    height 200px
    background-color red
</style>
