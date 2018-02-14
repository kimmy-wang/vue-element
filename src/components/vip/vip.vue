<template>
  <div class="vip">
    <div class="content-wrapper">
      <div class="content">
        <span class="title">成为<span class="stress">超级会员</span> 每月获<span class="stress">20元</span>红包</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="desc">下单再送奖励金，可等额兑现红包</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mixins: [],
    data() {
      return {
      }
    },
    props: {
    },
    created() {
    },
    mounted() {
    },
    activated() {
    },
    deactivated() {
    },
    beforeDestroy() {
    },
    computed: {
    },
    filters: {
    },
    methods: {
    },
    watch: {
    },
    components: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .vip
    position: relative
    margin: 10px
    height: 80px
    background: #fbf4d6
    .content-wrapper
      position: absolute
      top: 10px
      left: 10px
      .content
        font-size: 0
        .title
          font-size: 18px
          font-weight: 700
          color: rgb(7, 17, 27)
          .stress
            font-weight: 700
            color: #b89f3c
        .icon-keyboard_arrow_right
          font-size: 18px
      .desc
        margin-top: 8px
        font-size: 14px
        color: rgb(77, 85, 93)
</style>
