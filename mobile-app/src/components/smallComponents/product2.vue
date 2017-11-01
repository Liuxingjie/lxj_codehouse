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
          item1:'1',
          item2:'2',
          item3:'3',
          item4:'4',
          item5:'5',
          item6:'6'
        }
    }
  },
  components: { heads, contents }
};
</script>
<style >

</style>
