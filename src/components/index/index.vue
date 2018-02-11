<template>
  <div class="index" ref="index">
    <div class="index-content">
      <div class="index-wrapper">
        <slider :showList="showList" :ShowCountInRow="countInRow" :showRowsInPage="rowsInPage"></slider>
        <div class="vip-wrapper">
          <!--<img :src=""/>-->
          <div class="content-wrapper">
            <div class="content">
              <span class="title">成为<span class="stress">超级会员</span> 每月获<span class="stress">20元</span>红包</span>
              <span class="icon-keyboard_arrow_right"></span>
            </div>
            <div class="desc">下单再送奖励金，可等额兑现红包</div>
          </div>
        </div>
        <div class="discounts-wrapper">
          <div class="discount-top">
            <div class="discount-top-wrapper">
              <div class="discount-top-content">
                <span class="title">限量抢购</span>
                <span class="desc">超值美味 9.9元起</span>
                <span class="description">2855人正在抢<span class="icon-keyboard_arrow_right"></span></span>
                <!--<img width="120" height="60" src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/">-->
              </div>
              <div class="discount-top-img">
                <img width="120" height="60" src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/">
              </div>
            </div>
            <div class="discount-top-wrapper">
              <div class="discount-top-content">
                <span class="title stress">外卖节特惠</span>
                <span class="desc">2亿红包瓜分中</span>
                <!--<img width="120" height="60" src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>-->
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
                <img v-lazy="seller.avatar" width="80" height="80"/>
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
  import slider from 'components/slider/slider';
  import {getSellers} from 'api/index'

  const RES_OK = 0;

  export default {
    data() {
      return {
        sellers: [],
        selectedSeller: {},
        sellerSelected: false,
        showList: [
          {
            img: '//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: '//fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '晚餐'
          },
          {
            img: '//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '商超便利'
          },
          {
            img: '//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '果疏生鲜'
          },
          {
            img: '//fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '大牌5折'
          },
          {
            img: '//fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '医药健康'
          },
          {
            img: '//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '浪漫鲜花'
          },
          {
            img: '//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '麻辣烫'
          },
          {
            img: '//fuss10.elemecdn.com/7/43/0947110c24c620a767745054d798bjpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '地方菜系'
          },
          {
            img: '//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '披萨意面'
          },
          {
            img: '//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '地方小吃'
          }
        ],
        countInRow: 5,
        rowsInPage: 2
      };
    },
    created() {
      getSellers().then((res) => {
        console.log(res)
        if (res.errno === RES_OK) {
          this.sellers = res.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.index, {
              click: true
            });
          });
        }
      })
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
      slider
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
    .index-wrapper
      .vip-wrapper
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
      .discounts-wrapper
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
                display: inline-block
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
                display: inline-block
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
                display: inline-block
                padding-right: 4px
                color: rgb(147, 153, 159)
                font-size: 12px
                border-right: 1px solid rgba(7, 17, 27, 0.1)
                &:last-child
                  border: 0
                  padding-right: 0
                  padding-left: 4px
        .index-supports-wrapper
          margin-left: 90px
</style>
