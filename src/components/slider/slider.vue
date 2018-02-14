<template>
  <div class="slider" ref="slider">
    <div class="slider-wrapper" ref="sliderWrapper">
        <span class="page" v-for="page in pages">
          <div class="row" v-for="row in page">
            <div class="cell" v-for="cell in row">
              <div class="cell-wrapper">
                <span class="img-wrapper">
                  <img :src="cell.img" width="45" height="45" v-show="cell.img"/>
                </span>
                <span class="cell-content">{{cell.title}}</span>
              </div>
            </div>
          </div>
        </span>
    </div>
    <div class="dots-wrapper" v-show="showDots">
      <i class="dot-item" v-for="(dot, index) in pages"
         :class="{'icon-point-active':index===currentIndex, 'icon-point':index!=currentIndex}"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  const EMPTY_OBJ = {};

  export default {
    props: {
      showList: {
        type: Array,
        default() {
          return [];
        }
      },
      ShowCountInRow: {
        type: Number,
        default: 4
      },
      showRowsInPage: {
        type: Number,
        default: 2
      },
      showDots: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        pages: [],
        currentIndex: 0
      };
    },
    created() {
      let countPerPage = this.showRowsInPage * this.ShowCountInRow;
      let pageCount = Math.ceil(this.showList.length / countPerPage);
      let totalCount = pageCount * this.showRowsInPage * this.ShowCountInRow;
      let list = this.showList;
      while (list.length < totalCount) {
        list.push(EMPTY_OBJ);
      }
      let totalRows = [];
      let totalRowsLength = this.showRowsInPage * pageCount;
      for (let i = 0; i < totalRowsLength; i++) {
        let row = [];
        while (row.length < this.ShowCountInRow) {
          let ele = list.shift();
          row.push(ele);
        }
        totalRows.push(row);
      }
      for (let i = 0; i < pageCount; i++) {
        let page = [];
        while (page.length < this.showRowsInPage) {
          let ele = totalRows.shift();
          page.push(ele);
        }
        this.pages.push(page);
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth();
        this._initSlider();
      }, 20);
      window.addEventListener('resize', () => {
        if (!this.slider || !this.slider.enabled) {
          return;
        }
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          this._setSliderWidth();
          this.slider.refresh();
        }, 60);
      });
    },
    methods: {
      _setSliderWidth() {
        let children = this.$refs.sliderWrapper.children;
        let width = 0;
        let clientWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          child.style.width = clientWidth + 'px';
          width += clientWidth;
        }
        this.$refs.sliderWrapper.style.width = width + 'px';
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: false,
            threshold: 0.3,
            speed: 400
          }
        });

        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX;
          this.currentIndex = pageIndex;
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slider
    .slider-wrapper
      padding: 18px 0
      .page
        float: left
        .row
          display: flex
          margin-bottom: 10px
          .cell
            flex: 1
            font-size: 0
            .cell-wrapper
              /*display: table-cell*/
              .img-wrapper
                display: block
                margin: 0 auto
                width: 45px
                height: 45px
                img
                  border-radius: 50%
              .cell-content
                display: block
                margin-top: 8px
                text-align: center
                font-size: 12px
                color: #7c7b7c
    .dots-wrapper
      text-align: center

</style>
