<template>
    <div id="product">
        <mt-header title="适老化产品">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-search  class=""></mt-search>

<!-- 条件过滤区域 -->
        <filter-nav     
                    @diliverDafault='fatherDafault'
                    @diliverCredit='fatherCredit'
                    @diliverMoneyHeight='fatherMoneyHeight'
                    @diliverMoneyLow='fatherMoneyLow'
          ></filter-nav>
<!-- 内容区域 -->
        <div  id="itemdetails">
           
                <div class='fl box' v-for="(item,index) in message" :price='item.money'>
                     <router-link :to='item.link'>
                    <div>
                        <img :src="item.imgSrc">
                    </div>
                    <div class="details">
                        <h4>{{item.title}}</h4>
                        <div>
                            <span class=" bgwhite bgRed">{{item.status}}</span>
                            <span class="fr bggray">{{item.location}}</span>
                        </div>
                        <div class="mgtop">
                            <span class="bgred clear">￥<span class="bigfont price">{{item.money}}</span></span>
                            <span class="linethrough">{{item.originalMoney}}</span>
                        </div>
                        <div>
                            <h5  class="fl bggray">已售出<span>{{item.soldOut}}</span>件</h5>
                            
                        </div>
                    </div>
                     </router-link>
                        <i class="iconfont fr bggray " @click='alertDetail(index) '>...</i> 
                     <div class="clear quotoBox" v-if='index==j' @click='cancelalert'>
                         <ul @click.stop='func'>
                             <li><span class="bgdefine">无同款</span><span class="bgdefine2">找相似</span></li>
                             <li><span>{{item.seller}}&nbsp;{{item.ranke}}</span></li>
                             <li><span>描述&nbsp;{{item.quote}}</span><span>评论&nbsp;{{item.discuss}}</span></li>
                             <li><span>服务&nbsp;{{item.serve}}</span><span>有图&nbsp;{{item.hasImg}}</span></li>
                             <li><span>物流&nbsp;{{item.transport}}</span><span>追加&nbsp;{{item.addTo}}</span></li>
                        </ul>     
                     </div>
                </div>  
        </div>
    </div>

</template>
<script>
import filterNav from "@/components/common/filter";
export default {
  data() {
    return {
      message: [
        {
          imgSrc: "../../../static/images/laohuajing.jpg",
          title: "老花镜",
          status: "包邮",
          location: "上海",
          money: "80",
          originalMoney: "￥500",
          soldOut: "20",
          seller: "小明",
          ranke: "12",
          quote: "4.6",
          discuss: "46",
          serve: "4.8",
          hasImg: "2",
          transport: "4.8",
          addTo: "2",
          link:'/laohuajing'
        },
        {
          imgSrc: "../../../static/images/zhutingqi.jpg",
          title: "莲花助听器",
          status: "包邮",
          location: "武汉",
          money: "130",
          originalMoney: "￥400",
          soldOut: "15",
           seller: "小红",
          ranke: "13",
          quote: "4.5",
          discuss: "12",
          serve: "4.5",
          hasImg: "45",
          transport: "4.5",
          addTo: "3",
          link:'/zhutingqi'
        },
        {
          imgSrc: "../../../static/images/xuetangyi.jpg",
          title: "安稳免调血糖仪",
          status: "包邮",
          location: "杭州",
          money: "190",
          originalMoney: "￥300",
          soldOut: "10",
           seller: "小花",
          ranke: "14",
          quote: "4.6",
          discuss: "23",
          serve: "4.6",
          hasImg: "2",
          transport: "4.4",
          addTo: "22",
          link:'/xuetangyi'
        },
        {
          imgSrc: "../../../static/images/anshenzhen.jpg",
          title: "远红外磁疗安神枕",
          status: "包邮",
          location: "北京",
          money: "180",
          originalMoney: "￥199",
          soldOut: "5",
           seller: "小龙",
          ranke: "15",
          quote: "4.8",
          discuss: "12",
          serve: "4.3",
          hasImg: "22",
          transport: "4.0",
          addTo: "1",
          link:'/anshenzhen'
        }
      ],
      isalertshow:false,
      j:-1
    };
  },
  methods: {
    fatherDafault() {},
    fatherCredit() {},
    fatherMoneyHeight() {
      var box = document.getElementById("product");
      var div = box.getElementsByClassName("box"),
        arr = [];
      for (var i = 0; i < div.length; i++) {
        arr.push(div[i]);
      }
      arr.sort(function(a, b) {
        return b.getAttribute("price") - a.getAttribute("price");
      });
      for (var i = 0; i < arr.length; i++) {
        document.getElementById("itemdetails").appendChild(arr[i]);
      }
    },
    fatherMoneyLow() {
      var box = document.getElementById("product");
      var div = box.getElementsByClassName("box"),
        arr = [];
      for (var i = 0; i < div.length; i++) {
        arr.push(div[i]);
      }
      arr.sort(function(a, b) {
        return a.getAttribute("price") - b.getAttribute("price");
      });
      for (var i = 0; i < arr.length; i++) {
        document.getElementById("itemdetails").appendChild(arr[i]);
      }
    },
    alertDetail(index) {
     this.j=index
     },
     cancelalert(e){
        this.j = -1
     },
     func(){

     }

  },
  components: { filterNav }
};
</script>
<style scoped>
.box {
  width: 48%;
  background: #ffffff;
  margin: 0.5rem 1% 0.5rem 1%;
  padding: 1rem;
  position: relative;
}
.box .details {
  line-height: 1.8rem;
}
.bgred {
  color: red;
}
h4 {
  padding-top: 1rem;
}
img {
  width: 90%;
  padding: 5%;
  padding-bottom: 0;
}
.bigfont {
  font-size: 2.2rem;
}
.mgtop {
  margin-top: 1rem;
}
.bggray {
  color: gray;
}
.bgRed {
  background: #fb8047;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
}
.quotoBox{
    position: absolute;
    bottom: 0;
    left: 0;
    width:100%;
    height: 100%;
    margin:0;
    padding:0;
    z-index: 10;
}
.quotoBox ul {
    position: absolute;
    width:100%;
    bottom: 0;
    background:#ffffff;
    z-index: 11;
}
.quotoBox ul li span{
    display: inline-block;
    width:50%;
    padding: 0.2rem;
}
.bgdefine{
    background:#fe6520;
}
.bgdefine2{
    background:#fea832;
}
</style>