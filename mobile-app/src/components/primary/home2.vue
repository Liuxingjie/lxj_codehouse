<template>
  <div id="contents">
      <mt-swipe :auto="4000">
            <mt-swipe-item class="bg1">1</mt-swipe-item>
            <mt-swipe-item class="bg2">2</mt-swipe-item>
            <mt-swipe-item class="bg3">3</mt-swipe-item>
        </mt-swipe>
      <contents></contents>
  </div>
</template>
<script>
import contents from '@/view/homeContent'
export default {
  components:{contents}
}
</script>
<style>

</style>
