<template>
  <div class="supports" @click.stop>
    <div class="supports-content" v-show="supports && supports.length>0">
      <div class="supports-wrapper" ref="supportsWrapper">
        <ul>
          <li class="support-item support-item-hook" v-for="(support, index) in supports" v-show="index<2">
            <span class="icon" :class="classMap[support.type]"></span><span class="text">{{support.description}}</span>
          </li>
        </ul>
      </div>
      <div @click="toggleIcon" class="toggle-wrapper" v-show="supports.length>2">
        <span class="content">{{supports.length}}个活动</span><span class="icon" :class="iconDesc?'icon-desc':'icon-asc'"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      supports: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        iconDesc: true
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {
      toggleIcon(event) {
        if (!event._constructed) {
          return;
        }
        console.log('support')
        this.iconDesc = !this.iconDesc;
        this._toggleList(this.iconDesc);
      },
      _toggleList(iconDesc) {
        if (iconDesc) {
          let supports = this.$refs.supportsWrapper.getElementsByClassName('support-item-hook');
          if (supports.length <= 2) {
            return;
          }
          let count = supports.length;
          while ((count--) > 2) {
            let el = supports[count];
            el.style.display = 'none';
          }
        } else {
          let supports = this.$refs.supportsWrapper.getElementsByClassName('support-item-hook');
          for (let i = 0; i < supports.length; i++) {
            let el = supports[i];
            el.style.display = '';
          }
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"

  .supports
    width: 100%
    .supports-content
      display: flex
      position: relative
      .supports-wrapper
        flex: 1
        overflow: hidden
        .support-item
          margin-bottom: 6px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          &:first-child
            padding-top: 10px
            border-top: 1px dashed rgba(7, 17, 27, 0.1)
          &:last-child
            margin-bottom: 0
          .icon
            display: inline-block
            width: 16px
            height: 16px
            vertical-align: top
            margin-right: 6px
            background-size: 16px 16px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
            &.guarantee
              bg-image('guarantee_3')
          .text
            line-height: 16px
            font-size: 12px
      .toggle-wrapper
        display: table
        position: absolute
        top: 13px
        right: 0
        height: 14px
        .content
          display: table-cell
          vertical-align: middle
          font-size: 12px
        .icon
          display: table-cell
          vertical-align: middle
          font-size: 12px


</style>
