<template>
  <div class="index" ref="index">
    <div class="index-content">
      <div class="index-wrapper">
        <swiper :showList="showList" :ShowCountInRow="countInRow" :showRowsInPage="rowsInPage"></swiper>
      </div>
      <split></split>
      <div class="tip-wrapper">
        <div class="tip">
          <div class="line"></div>
          <div class="text">推荐商家</div>
          <div class="line"></div>
        </div>
        <ul>
          <li @click="select(seller, $event)" class="seller-item border-1px" v-for="seller in sellers">
            <div class="seller-wrapper">
              <div class="avatar">
                <img :src="seller.avatar" width="80" height="80"/>
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <span class="band"></span><span class="name">{{seller.name}}</span>
                </div>
                <div class="desc">
                  <star :size="24" :score="seller.score"></star>
                  <span class="text">{{seller.score}}</span>
                  <span class="text">月售{{seller.sellCount}}单</span>
                </div>
                <div class="price">
                  <span class="min-price">￥{{seller.minPrice}}起送</span>
                  <span class="delivery-price">配送费￥{{seller.deliveryPrice}}</span>
                </div>
              </div>
              <div class="desc-content">
                <div class="intro-wrapper">
                  <span class="intro">保</span>
                  <span class="intro">票</span>
                </div>
                <span class="description">{{seller.description}}</span>
                <div class="distance-wrapper">
                  <span class="distance">200m</span>
                  <span class="distance">{{seller.deliveryTime}}分钟</span>
                </div>
              </div>
            </div>
            <div class="index-supports-wrapper">
              <supports :supports="seller.supports"></supports>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import supports from 'components/supports/supports';
  import split from 'components/split/split';
  import star from 'components/star/star';
  import seller from 'components/seller/seller';
  import swiper from 'components/swiper/swiper';

  const RES_OK = 0;

  export default {
    data() {
      return {
        sellers: [],
        selectedSeller: {},
        sellerSelected: false,
        showList: [
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '美食'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '晚餐'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '商超便利'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '果疏生鲜'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '炸鸡炸串'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '大牌5折'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '甜品饮品'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '医药健康'
          },
          {
            img: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
            title: '浪漫鲜花'
          }
        ],
        countInRow: 4,
        rowsInPage: 2
      };
    },
    created() {
      this.$http.get('/api/sellers').then((response) => {
        response = response.body;
        if (response.errno === RES_OK) {
          this.sellers = response.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.index, {
              click: true
            });
          });
        }
      });
    },
    methods: {
      select(seller, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedSeller = seller;
        this.sellerSelected = true;
        this.$emit('selectSeller', this.selectedSeller);
      }
    },
    components: {
      supports,
      split,
      star,
      seller,
      swiper
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .index
    position: absolute
    top: 0
    bottom: 48px
    width: 100%
    overflow: hidden
    .tip-wrapper
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
      .seller-item
        padding: 14px 10px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
        .seller-wrapper
          display: flex
          position: relative
          font-size: 0
          .avatar
            flex: 0 0 80px
            width: 80px
            display: inline-block
            vertical-align: top
            img
              border-radius: 2px
          .content-wrapper
            margin: 0 40px 0 16px
            flex: 1
            padding: 10px 0
            font-size: 16px
            overflow: hidden
            .title
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
              .band
                display: inline-block
                vertical-align: top
                width: 30px
                height: 18px
                bg-image('brand')
                background-size: 30px 18px
                background-repeat: no-repeat
              .name
                margin-left: 6px
                height: 18px
                line-height: 18px
                font-weight: bold
                font-size: 16px
            .desc
              margin: 8px 0
              font-size: 0
              .star
                display: inline-block
                margin: 1px 4px auto 0
                vertical-align: top
              .text
                margin-right: 4px
                font-size: 14px
                color: rgb(147, 153, 159)
            .price
              margin-top: 8px
              font-size: 0
              color: rgb(147, 153, 159)
              .min-price
                padding-right: 4px
                border-right: 1px solid rgba(7, 17, 27, 0.1)
                font-size: 12px
              .delivery-price
                margin-left: 4px
                font-size: 12px
          .desc-content
            position: absolute
            top: 10px
            right: 0
            text-align: right
            font-size: 0
            .intro-wrapper
              margin-bottom: 8px
              font-size: 0
              .intro
                font-size: 12px
                margin-right: 2px
                color: rgb(147, 153, 159)
                border: 1px solid rgba(7, 17, 27, 0.1)
                &:last-child
                  margin-right: 0
            .description
              font-size: 12px
              color: #fff
              border-radius: 2px
              background: rgb(0, 160, 220)
            .distance-wrapper
              margin-top: 8px
              font-size: 0
              .distance
                padding-right: 4px
                color: rgb(147, 153, 159)
                font-size: 12px
                // border-right: 1px solid rgba(7, 17, 27, 0.1)
                &:last-child
                  border: 0
                  padding-right: 0
                  padding-left: 4px

        .index-supports-wrapper
          margin-left: 90px
</style>
