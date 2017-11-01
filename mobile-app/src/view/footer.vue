<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in footerNav"  class="fl">
                <router-link :to="item.link" >
                    <span @click='add'  class="transColor">
                     <i :class="'icon-'+item.icons" class='iconfont'></i>
                    {{ item.title }}</span>
                    </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data(){
      return {
          footerNav:[{title:'首页',link:'/',tabindex:1,icons:'shouye'},
                    {title:'品质生活',link:'/life',tabindex:2,icons:'shenghuo'},
                    {title:'我的服务',link:'/myService',tabindex:3,icons:'wodefuwu'},
                    {title:'社区',link:'/community',tabindex:4,icons:'shequ'}
          ]
          ,
      mess:'nut'
      }
  },
  methods:{
      add:function(event){
         
          var span=document.getElementsByClassName('transColor')
           
          for(var i=0;i<span.length;i++){
              span[i].style.color=''
          }
          
        event.target.style.color='#13c0ab'
      }
  }
}
window.onload=function(){
     var span=document.getElementsByClassName('transColor')
     span[0].style.color='#13c0ab'
}


</script>
<style scoped>
#footer{
    width:100%;
    height: 5.35rem;
    overflow: hidden;
    text-align:center;
    position: fixed;
    bottom:0;
}

.iconfont{
 font-size: 3rem;
display: block;
position: relative;
z-index:-10;
}
/* span :after{
    content:'&#xe637;'
} */
span:nth-of-type(1){
    color:#13c0ab;
}
</style>

