<template>
    <div class="footer_guide">
        <span class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
            <span class="item_icon">
                <i class="iconfont iconU"></i>
            </span>
            <span>外卖</span>
        </span>
        <span class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont iconicon-search"></i>
            </span>
            <span>搜索</span>
        </span>
        <span class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont iconorder-fill"></i>
            </span>
            <span>订单</span>
        </span>
        <span class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont iconuser-fill"></i>
            </span>
            <span>我的</span>
        </span>
    </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl";
.footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    width 100%
    height 60px
    bottom 0
    left 0
    right 0
    background-color #ffffff
    display flex
    .guide_item
        display flex
        flex 1
        flex-direction column
        text-align center
        // 居中对齐弹性盒的各项元素
        align-items center
        margin 5px
        color #999999
        &.on
            color #02a774
        span
            font-size 14px
            margin-top 2px
            margin-bottom 2px
            .iconfont
                font-size 30px
</style>
