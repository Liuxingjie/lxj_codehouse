<template>
  <div id="laohuajing">
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
        { src: "../../../static/images/laohuajing1.png" },
        { src: "../../../static/images/laohuajing2.png" },
        { src: "../../../static/images/laohuajing3.png" },
        { src: "../../../static/images/laohuajing4.png" },
        { src: "../../../static/images/laohuajing5.png" }
      ],
      msg:{
          title:'老花镜',
          item1:'老花镜是用于中老年人补充视力的，它同近视镜一样有许多国家标准规定的光学指标，也有一些特殊的使用规律。它和一般太阳镜相同，只凭款式和颜色顾客就能判断合适不合适购买。',
          item2:'80',
          item3:'500',
          item4:'2000',
          item5:'20',
          item6:'眼睛，远视，老人'
        }
    }
  },
  components: { heads, contents }
};
</script>
<style >

</style>
