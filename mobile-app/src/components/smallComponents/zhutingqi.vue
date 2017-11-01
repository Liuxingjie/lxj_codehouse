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
        { src: "../../../static/images/zhutingqi1.png" },
        { src: "../../../static/images/zhutingqi2.png" },
        { src: "../../../static/images/zhutingqi3.png" },
        { src: "../../../static/images/zhutingqi4.png" },
        { src: "../../../static/images/zhutingqi5.png" }
      ],
      msg:{
          title:'助听器',
          item1:'声音是由物体振动产生，正在发声的物体叫声源。声音只是压力波通过空气的运动。压力波振动内耳的小骨头（听小骨），这些振动被转化为微小的电子脑波，它就是我们觉察到的声音。内耳采用的原理与麦克风捕获声波或扬声器的发音一样，它是移动的机械部分与气压波之间的关系。自然，在声波音调低、移动缓慢并足够大时，我们实际上可以“感觉”到气压波振动身体。1',
          item2:'130',
          item3:'400',
          item4:'1000',
          item5:'15',
          item6:'声源，助听'
        }
    }
  },
  components: { heads, contents }
};
</script>
<style >

</style>
