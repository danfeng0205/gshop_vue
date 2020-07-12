<template>
    <div class="header">
        <slot name="left"></slot>
        <span class="header_title ellipsis">{{title}}</span>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="stylus">
.header
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    background-color #02a774
    height 45px
    width 100%
    display flex
    span
      justify-content space-between
      flex 1
      flex-direction column
      text-align center
      align-self center
    .header_title
      flex 1.5
      font-size 20px
      color #fff
      margin-right 12px
</style>
