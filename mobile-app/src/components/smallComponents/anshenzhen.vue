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
        { src: "../../../static/images/anshenzhen1.png" },
        { src: "../../../static/images/anshenzhen2.png" },
        { src: "../../../static/images/anshenzhen3.png" },
        { src: "../../../static/images/anshenzhen4.png" },
        { src: "../../../static/images/anshenzhen5.png" }
      ],
      msg:{
          title:'安神枕',
          item1:'安神枕，是指有一定保健作用，可以起到舒缓神经，舒缓神经，保护颈椎等作用的健康型枕头。保健枕必须在结构和功能上下功夫，结构合理更具人性化，真正能起到保健作用。据中医理论及民间使用证明：石膏性寒，使用石膏磨制而成的膏能以寒克热控制血压升高，坚持使用能将血压逐步降低至正常水平。',
          item2:'180',
          item3:'5000',
          item4:'1000',
          item5:'5',
          item6:'舒缓神经,舒缓神经'
        }
    }
  },
  components: { heads, contents }
};
</script>
<style >

</style>
