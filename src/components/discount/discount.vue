<template>
  <div class="discounts">
    <div class="discount-top">
      <div class="discount-top-wrapper">
        <div class="discount-top-content">
          <span class="title">限量抢购</span>
          <span class="desc">超值美味 9.9元起</span>
          <span class="description">2855人正在抢<span class="icon-keyboard_arrow_right"></span></span>
        </div>
        <div class="discount-top-img">
          <img width="120" height="60" src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/">
        </div>
      </div>
      <div class="discount-top-wrapper">
        <div class="discount-top-content">
          <span class="title stress">外卖节特惠</span>
          <span class="desc">2亿红包瓜分中</span>
        </div>
        <div class="discount-top-img">
          <img width="120" height="60" src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
        </div>
      </div>
    </div>
    <div class="discount-bottom">
      <div class="discount-bottom-wrapper">
        <div class="discount-bottom-content">
          <span class="name">天天特价</span>
          <span class="desc stress">低至1折</span>
        </div>
      </div>
      <div class="discount-bottom-wrapper">
        <div class="discount-bottom-content">
          <span class="name">热卖套餐</span>
          <span class="desc">销量最高,好评最多</span>
        </div>
      </div>
      <div class="discount-bottom-wrapper">
        <div class="discount-bottom-content">
          <span class="name">品质优选</span>
          <span class="desc">尖货来袭</span>
        </div>
      </div>
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

  .discounts
    padding: 0 10px 10px 10px
    .discount-top
      display: flex
      justify-content: space-between
      .discount-top-wrapper
        position: relative
        flex: 1
        height: 150px
        margin-right: 6px
        background: #f7f7f8
        &:last-child
          margin-right: 0
        .discount-top-content
          position: absolute
          top: 15px
          left: 15px
          .title
            display: block
            margin-bottom: 8px
            font-size: 20px
            font-weight: 700
            color: #333333
            &.stress
              color: rgb(240, 20, 20)
          .desc
            display: block
            margin-bottom: 10px
            font-size: 16px
            color: #9f9f9f
          .description
            display: block
            font-size: 16px
            color: #a88465
          img
            display: block
            position: absolute
            right: 0
            bottom: 0
        .discount-top-img
          position: absolute
          right: 0
          bottom: 0
    .discount-bottom
      display: flex
      justify-content: space-between
      .discount-bottom-wrapper
        position: relative
        flex: 1
        margin: 6px 6px 0 0
        height: 150px
        background: #f7f7f8
        &:last-child
          margin-right: 0
        .discount-bottom-content
          display: block
          text-align: center
          .name
            display: block
            font-size: 18px
            font-weight: 700
            margin-top: 14px
            margin-bottom: 4px
            color: #333333
          .desc
            display: inline-block
            font-size: 12px
            border: 1px solid rgba(7, 17, 27, 0.1)
            color: #8e8e8e
            &.stress
              color: rgb(240, 20, 20)
              border: 1px solid rgba(240, 20, 20, 0.1)
</style>
