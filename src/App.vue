<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab';

  export default {
    components: {
      Tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
