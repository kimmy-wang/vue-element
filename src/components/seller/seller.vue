<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="item">
            <h2 class="title">起送价</h2>
            <div class="content">
              <span class="price">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="item">
            <h2 class="title">商家配送</h2>
            <div class="content">
              <span class="price">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="item">
            <h2 class="title">平均配送时间</h2>
            <div class="content">
              <span class="price">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="collect-wrapper">
          <span @click="collectSeller" class="icon-favorite" :class="{'collected':collected}"></span>
          <span class="text">{{collected?'已收藏':'收藏'}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-show="seller.supports && seller.supports.length" class="supports">
          <li v-for="support in seller.supports" class="support border-1px">
            <span class="icon" :class="classMap[support.type]"></span>
            <span class="desc">{{support.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic" v-for="pic in seller.pics">
              <img width="120" height="90" :src="pic">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item border-1px" v-for="info in seller.infos">
            <span class="content">{{info}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import star from 'components/star/star';
  import split from 'components/split/split';

  import {saveToLocal, loadFromLocal} from 'common/js/store';

  export default {
    props: {
      seller: {
        type: Object
      },
      selectFoods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        collected: (() => {
          return loadFromLocal('123', 'collected', false);
        })()
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    watch: {
      'seller'() {
        this._initScroll();
        this._initPicsScroll();
      }
    },
    mounted() {
      this._initScroll();
      this._initPicsScroll();
    },
    methods: {
      collectSeller(event) {
        if (!event._constructed) {
          return;
        }
        this.collected = !this.collected;
        saveToLocal('123', 'collected', this.collected);
      },
      _initScroll() {
        if (!this.sellerScroll) {
          this.sellerScroll = new BScroll(this.$refs.seller, {
            click: true
          });
        } else {
          this.sellerScroll.refresh();
        }
      },
      _initPicsScroll() {
        if (this.seller.pics) {
          let picWidth = 120;
          let margin = 6;
          let width = (picWidth + margin) * this.seller.pics.length - margin;
          this.$refs.picList.style.width = width + 'px';
          this.$nextTick(() => {
            if (!this.picScroll) {
              this.picScroll = new BScroll(this.$refs.picWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            } else {
              this.picScroll.refresh();
            }
          });
        }
      }
    },
    components: {
      star,
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .seller
    position: absolute
    top: 174px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
    .overview
      position: relative
      padding: 18px
    .name
      margin-bottom: 8px
      line-height: 14px
      font-size: 14px
      color: rgb(7, 17, 27)
    .star-wrapper
      padding-bottom: 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .star
        display: inline-block
        vertical-align: top
        margin-right: 8px
        font-size: 10px
      .text
        display: inline-block
        margin-right: 12px
        line-height: 18px
        vertical-align: top
        font-size: 10px
        color: rgb(77, 85, 93)
    .remark
      display: flex
      padding-top: 18px
      font-size: 0
      .item
        flex: 1
        text-align: center
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border-right: 0
        .title
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
        .content
          margin-top: 4px
          font-size: 10px
          .price
            line-height: 24px
            font-size: 24px
            color: rgb(7, 17, 27)
    .collect-wrapper
      position: absolute
      top: 18px
      right: 13px
      width: 45px
      text-align: center
      font-size: 0
      .icon-favorite
        display: block
        margin-bottom: 4px
        line-height: 24px
        font-size: 24px
        color: #d4d6d9
        &.collected
          color: rgb(240, 20, 20)
      .text
        line-height: 10px
        font-size: 10px
        color: rgb(77, 85, 93)
    .bulletin
      padding: 18px 18px 0 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        font-size: 14px
        color: rgb(7, 17, 27)
      .content-wrapper
        padding: 0 12px 16px 12px
        border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height: 24px
          font-size: 12px
          color: rgb(240, 20, 20)
      .supports
        .support
          padding: 16px 12px
          font-size: 0
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
          .icon
            display: inline-block
            vertical-align: top
            width: 16px
            height: 16px
            margin-right: 6px
            background-size: 16px 16px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_4')
            &.discount
              bg-image('discount_4')
            &.invoice
              bg-image('invoice_4')
            &.special
              bg-image('special_4')
            &.guarantee
              bg-image('guarantee_4')
          .desc
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
    .pics
      padding: 18px 0 18px 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        font-size: 14px
        color: rgb(7, 17, 27)
      .pic-wrapper
        width: 100%
        white-space: nowrap
        overflow: hidden
        .pic-list
          font-size: 0
          .pic
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin-right: 0
    .info
      padding: 18px 18px 0 18px
      .title
        padding-bottom: 12px
        line-height: 14px
        font-size: 14px
        color: rgb(7, 17, 27)
        border-1px(rgba(7, 17, 27, 0.1))
      .info-item
        padding: 16px 12px
        line-height: 16px
        font-size: 12px
        color: rgb(7, 17, 27)
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()

</style>
