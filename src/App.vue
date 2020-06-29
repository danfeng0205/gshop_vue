<template>
  <div class="app">
    <!-- 引用路由 -->
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus">
.app
  width 100%
  height 100%
  background-color #f5f5f5

</style>
