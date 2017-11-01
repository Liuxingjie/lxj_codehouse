<template>
    <div id="navbar">
        <ul class="zIndexHeight navsort">
            <li class="sort"  @click='child($index)' tabindex="1"><span >{{msg}}
                <i class="fa fa-caret-down " :class="{'class-a' : isA}"></i>
               </span> 
               </li>
            <li tabindex="2">销量优先</li>
            <li tabindex="3" @click='showfilter'>筛选<i class="fa fa-filter"></i></li>
        </ul>
        <div class="sortalert " v-show="isA" @click='sortalert'>
                    <ul >
                       <li tabindex="1" @click='defaultSort'>综合排序<i class="fa fa-check fr  focusShow"></i></li>
                       <li tabindex="2" @click='creditSort'>信用<i class="fa fa-check fr  focusShow"></i></li>
                       <li tabindex="3" @click='moneyHeight'>价格由高到低<i class="fa fa-check fr  focusShow"></i></li>
                       <li tabindex="4" @click='moneyLow'>价格由低到高<i class="fa fa-check fr  focusShow"></i></li>
                    </ul>
         </div>
         <div class="shadeBox" v-show='isShow' @click='cancelAlert'>
            <div class="filter  fontSmall " @click.stop='stop'>
                <div v-for="item in lists"   class="filterBox"  > 
                    <ul>
                    <p>{{item.item1}}</p>
                      <li>{{item.item2}}</li>
                      <li>{{item.item3}}</li>
                      <li>{{item.item4}}</li>
                      <li>{{item.item5}}</li>
                      <li>{{item.item6}}</li>
                      <li>{{item.item7}}</li>
                      <li>{{item.item8}}</li>
                      <li>{{item.item9}}</li>
                      <li>{{item.item10}}</li>
                      <li>{{item.item11}}</li>
                      <li>{{item.item12}}</li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isA: false,
      msg: "默认排序",
      a: -1,
      isShow:false,
      lists: [
          {
              item1:'美容护肤/美体/精油',
              item2:'面部护理套装',
              item3:'乳液/面霜',
              item4:'面膜',
              item5:'男式护理套装',
              item6:'化妆水/爽肤水',
              item7:'手工皂/精油皂',
              item8:'眼部护理',
              item9:'卸妆',
              item10:'洁面',
              item11:'面部精华',
              item12:''
         },
          {
              item1:'折扣和服务',
              item2:'包邮',
              item3:'天猫',
              item4:'消费者保障',
              item5:'全球购',
              item6:'天猫国际',
              item7:'套金币抵钱',
              item8:'7+天内退货',
              item9:'货到付款',
              item10:'花呗分期',
              item11:'赠送运费险',
              item12:''
         }
      ]
    };
  },
  methods: {
    child: function($index) {
      this.isA = !this.isA;
      this.a = $index;
    },
    defaultSort() {
      this.msg = "综合排序";
      this.isA = !this.isA;
      this.$emit("diliverDafault", "我是1");
    },
    creditSort() {
      this.msg = "信用";
      this.isA = !this.isA;
      this.$emit("diliverCredit", "我是2");
    },
    moneyHeight() {
      this.msg = "价格从高到低";
      this.isA = !this.isA;
      this.$emit("diliverMoneyHeight");
    },
    moneyLow() {
      this.msg = "价格从低到高";
      this.isA = !this.isA;
      this.$emit("diliverMoneyLow");
    },
    sortalert(e) {
      if (e.target == document.getElementsByClassName("sortalert")[0]) {
        document.getElementsByClassName("sortalert")[0].style.display = "none";
        this.isA = !this.isA;
      }
    },
    showfilter(){
          this.isShow= !this.isShow
      document.getElementsByClassName('.filter')[0].style.width='70%'
  
    },
    cancelAlert(){
      this.isShow=!this.isShow
    }
  }
};
</script>
<style scoped>
#navbar {
  width: 100%;
  height: 5rem;
  text-align: center;
  border-top: 1px solid #adadad;
}
#navbar li {
  width: 33.333%;
  line-height: 5rem;
  background: #ffffff;
  float: left;
  position: relative;
  border: none;
}
.navsort li:focus {
  color: red;
}
.fa {
  color: #13c0ab;
}
.class-a {
  transform: rotate(180deg);
}
.sortalert {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(153, 153, 153, 0.7);
  padding-top: 5rem;
  z-index: 100;
}
.sortalert ul {
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 100;
}
#navbar .sortalert li {
  width: 100%;
  line-height: 3rem;
  clear: both;
  text-align: left;
  padding-left: 1rem;
}
.sortalert li:focus {
  color: red;
  border: none;
}
.sortalert li:focus .focusShow {
  display: inline;
}
.focusShow {
  line-height: 3rem;
  padding-right: 1rem;
  color: red;
  display: none;
}
.fontSmall{
    font-size: 1rem;
}
.filter{
    position: absolute;
    width:70%;
    height: 100%;
    top: 0;
    z-index: 1000;
    right:0;
    background:white;
   transition: all 2s;
}
#navbar .filter li{
  width:33.33%;
  line-height: 3rem;
}
#navbar .filter p{
  line-height: 3rem;
  color: gray;
}
.filterBox{
    width:100%;
    height: 15rem;
    float: right;
    background:#ffffff;
}
.shadeBox{
width:100%;
position: fixed;
height: 100%;
overflow: hidden;
top: 0;
z-index: 1000;
}
</style>
