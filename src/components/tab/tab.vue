<template>
    <div class="toolbar-wrapper">
      <div class="toolbar border-1px-before">
        <div class="toolbar-item">
          <router-link :to="{path:'/index'}">外卖</router-link>
        </div>
        <div class="toolbar-item">
          <router-link :to="{path:'/find'}">发现</router-link>
        </div>
        <div class="toolbar-item">
          <router-link :to="{path:'/order'}">订单</router-link>
        </div>
        <div class="toolbar-item">
          <router-link :to="{path:'/me'}">我的</router-link>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"

  .toolbar-wrapper
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    .toolbar
      display: flex
      height: 48px
      line-height: 48px
      border-1px-before(rgba(7, 17, 27, 0.1))
      .toolbar-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(0, 160, 220)
</style>
