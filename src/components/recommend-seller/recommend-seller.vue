<template>
  <div class="recommend-seller">
    <div class="tip">
      <div class="line"></div>
      <div class="text">推荐商家</div>
      <div class="line"></div>
    </div>
    <seller-list :sellers="sellers"></seller-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import SellerList from 'components/seller-list/seller-list';

  export default {
    mixins: [],
    data() {
      return {
      }
    },
    props: {
      sellers: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
    },
    mounted() {
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
      SellerList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .recommend-seller
    .tip
      display: flex
      width: 40%
      margin: 10px auto 10px auto
      .line
        flex: 1
        position: relative
        top: -8px
        border-bottom: 1px solid rgb(147, 153, 159)
      .text
        padding: 0 6px
        font-size: 18px

</style>
