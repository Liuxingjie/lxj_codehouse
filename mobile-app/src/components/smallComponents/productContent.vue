<template>
    <div class="productContent">
        <div>
            <h3>{{content.title}}</h3>
            <p class="fontsmall bggray">&nbsp;&nbsp;{{content.item1}}</p>

            <span> ￥</span> <span class="bgred">{{content.item2}}</span> 
            <span class="bggray ">￥{{content.item3}}</span> 
            <span class="bggray">（ {{content.item4}} ）</span>&nbsp;&nbsp;&nbsp;
            <span class="bggray">已售出{{content.item5}}件</span>
        </div>
        <div>
            <h5 class="fl">订购电话：0791-8888666</h5>
            <h5 class="fr">服务时间：9：00-18：00</h5>
            <h5 class="clear">配送到：江西省南昌市高新大道1000号</h5>
        </div>
        <div>
            <h4>产品提供商介绍</h4>
            <p class="fontsmall bggray">易奉亲只能养老服务平台是国家发改委批示的只能养老服务平台。我们的愿景是让父母有尊严的独立生活，让子女放心的在外工作.</p>
            <h4>产品详情介绍</h4>
            <p class="fontsmall bggray">{{content.item6}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['content'],
    data(){
        return{
         
        }
    }
};
</script>
<style scoped>
.productContent {
  background: #f5f5f5;
}
.productContent div {
  margin-top: 1rem;
  background: #ffffff;
  padding: 1rem;
}
.productContent div:nth-child(1) {
  border-top: 1px solid gray;
  margin-top: 0;
}
.bggray {
  font-size: 1.5rem;
  padding: 0.5rem;
}
.bgred {
  color: red;
  font-size: 2.5rem;
  display: inline-block;
  padding-top: 1rem;
}
h3,
h4,
h5 {
  padding: 0.5rem 0 0 0.5rem;
}
h4::before {
  content: "|";
  color: red;
  padding: 0.2rem;
  font-weight: bold;
}
h5{
    padding-bottom:0.5rem;
}
</style>
