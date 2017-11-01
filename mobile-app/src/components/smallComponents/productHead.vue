<template>
  <div class="productHead">
      <heads :message='msg' :link='link'></heads>
      <mt-swipe :auto="0">
            <mt-swipe-item v-for="(item,index) in images">
                <div :class="{alertImg:isshow}">
                    <img class="alertimg" :class="{ afterChange:isshow  }" :src="item.src" @click='alertImg(index)'>
                </div>
            </mt-swipe-item>
    </mt-swipe>
  </div>

</template>
<script>
import heads from "@/components/common/commonhead2";
export default {
  data() {
    return {
      msg: "适老化产品",
      link: "/product",
      isshow: false
    };
  },
  props: ["images"],
  components: { heads },
  methods: {
    alertImg(index) {
      this.isshow = !this.isshow;
    }
  }
};
</script>
<style scoped>
.productHead img {
  width: 100%;
}
.alertImg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  top: 0;
  z-index: 1001;
}
.afterChange{
    width:90%;
    margin:50%;
    transform: translate(-50%,-25%)
}
</style>
