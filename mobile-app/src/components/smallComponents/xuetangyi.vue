<template>
  <div id="product2">
      <heads :images='images' ></heads>
      <contents :content='msg'></contents>
  </div>
</template>
<script>
import heads from "@/components/smallComponents/productHead";
import contents from "@/components/smallComponents/productContent";
export default {
  data() {
    return {
      images: [
        { src: "../../../static/images/xuetangyi1.png" },
        { src: "../../../static/images/xuetangyi2.png" },
        { src: "../../../static/images/xuetangyi3.png" },
        { src: "../../../static/images/xuetangyi4.png" },
        { src: "../../../static/images/xuetangyi5.png" }
      ],
      msg:{
          title:'血糖仪',
          item1:'血糖仪又称血糖计，是一种测量血糖水平的电子仪器。血糖仪从工作原理上分为光电型和电极型两种。电极型血糖仪的测试原理更科学，电极可内藏。',
          item2:'190',
          item3:'300',
          item4:'4000',
          item5:'10',
          item6:'称血糖，保健'
        }
    }
  },
  components: { heads, contents }
};
</script>
<style >

</style>
