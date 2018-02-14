<template>
  <div class="index" ref="index">
    <div class="index-content">
      <div class="index-wrapper">
        <slider :showList="showList" :ShowCountInRow="countInRow" :showRowsInPage="rowsInPage"></slider>
        <vip></vip>
        <discount></discount>
      </div>
      <split></split>
      <recommend-seller :sellers="sellers"></recommend-seller>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import RecommendSeller from 'components/recommend-seller/recommend-seller';
  import Split from 'components/split/split';
  import Seller from 'components/seller/seller';
  import Slider from 'components/slider/slider';
  import {getSellers} from 'api/index'
  import Scroll from 'base/scroll/scroll';
  import Vip from 'components/vip/vip';
  import Discount from 'components/discount/discount';

  const RES_OK = 0;

  export default {
    data() {
      return {
        sellers: [],
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
    },
    components: {
      RecommendSeller,
      Vip,
      Discount,
      Scroll,
      Split,
      Seller,
      Slider
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"

  .index
    position: absolute
    top: 0
    bottom: 48px
    width: 100%
    overflow: hidden

</style>
