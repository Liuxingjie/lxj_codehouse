<template>
  <div id="healthmeans2">
      <heads :link='links' :message='msg'></heads>
      <div class="section">
          <h3>{{this.list.h3}}</h3>
          <p>
            <span>{{this.list.span}}</span>
            <span>{{this.list.time}}</span>
            <span>{{this.list.hours}}</span>
          </p>
          <img :src="this.list.imgSrc">
          <p class="text1">
              <span>{{this.list.blodfont1}}</span>
              <span>{{this.list.content1}}</span>
          </p>
          <p class="text2">
              <span>{{this.list.boldfont2}}</span>
              <span>{{this.list.content2}}</span>
          </p>
      </div>
  </div>
</template>
<script>
import heads from "@/components/common/commonhead2";
export default {
  data() {
    return {
      links: "/healthMeans",
      msg: "专题详解",
      list: 
        {
          h3: "老年人便秘怎么办？",
          span: "专题",
          time: "2015-12-01",
          hours: "15:43:20",
          imgSrc: "../../../static/images/images_74.jpg",
          blodfont1: "一、要改变不良的饮食习惯：",
          content1: "食物不可过于精细，主食要多样化，粗细粮食搭配，不要忽视豆制品的摄入，冬天不忘红小豆",
          boldfont2: "二、要增加饮水量：",
          content2: "有些老年人不喜欢喝粥，不喜欢喝水，更不喜欢喝汤，因为已经坚持了很多年，养成了习惯，并不觉得口渴；"
        }
   
    };
  },
  components: { heads }
};
</script>
<style scoped>
.section{
    padding:1.5rem;
    }
.section p:nth-of-type(1){
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.section img{
    width:100%;
    padding-bottom: 1rem;
}
.text2,.text1{
    margin-bottom:1rem;
}
</style>
