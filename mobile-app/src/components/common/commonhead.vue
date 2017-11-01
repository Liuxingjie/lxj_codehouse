<template>
    <div id="commonhead">
        <mt-header :title="message">
            <router-link to="/about" slot="left" class="but">
                <mt-button>
                    <i class="iconfont">&#xe655;</i>
                </mt-button>
            </router-link>
            <mt-button slot="right" @click='showAlertBox' id="alertbtn" >
                <i class="iconfont" >
                    &#xe67a; 
                </i>
            </mt-button>
            
        </mt-header>
        <div id="head">
            <div class="alertBox">
                <div class="oUl">
                    <ul>
                        <li v-for="item in list"><a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=file%3A%2F%2F%2FC%3A%2FUsers%2FAdministrator%2FDesktop%2Fshare.html&title=Document&pics=&summary="><p><img :src="item.src"></p><span>{{item.title}}</span></a></li>
                       
                    </ul>
                </div> 
                <!-- JiaThis Button BEGIN -->

                <button class="btn" @click='cancelAlertBox'>取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["message"],
  data(){
    return{
      list:[
      {src:'../../static/images/images_52.gif',title:'微博'},
      {src:'../../../static/images/images_53.gif',title:'微信'},
      {src:'../../../static/images/images_54.gif',title:'朋友圈'},
      {src:'../../static/images/images_55.gif',title:'信息'},
      {src:'../../../static/images/images_61.gif',title:'联系人'},
      {src:'../../../static/images/images_72.gif',title:'上传'},
      {src:'../../../static/images/images_73.gif',title:'email'}
      ]
    }
  },
  methods: {
    showAlertBox: function() {
      var alertBox = document.getElementsByClassName("alertBox")[0];
      // var alertbtn=document.getElementById('alertbtn')
      var head = document.getElementById("head");
      head.style.zIndex = 1000;
      alertBox.style.zIndex = 10000;
      head.style.display = "block";
      alertBox.style.display = "block";
    },
    cancelAlertBox: function(event) {
      var alertBox = document.getElementsByClassName("alertBox")[0];
      var head = document.getElementById("head");
      head.style.zIndex = 1000;
      alertBox.style.zIndex = 10000;
      alertBox.style.display = "none";
      head.style.display = "none";
    }
  }
};
window.onclick = function(e) {
  var head = document.getElementById("head");
  var alertBox = document.getElementsByClassName("alertBox")[0];
  if (e.target == head) {
    head.style.zIndex = -1;
    alertBox.style.display = "none";
    head.style.display = "none";
    head.style.zIndex = 1000;
    alertBox.style.zIndex = 10000;
  } 
};
</script>
<style scoped>
#commonhead {
  overflow: hidden;
}
#head {
  height: 100%;
  width: 100%;
  background: rgba(153, 153, 153, 0.7);
  position: absolute;
  top: 0;
  display: none;
}
.iconfont {
  font-size: 1.6rem;
  color: white;
}

.mint-header {
  width: 100%;
  position: fixed;
  top: 0;
  height: 4.75rem;
  background: #13c0ab;
  color: #ffffff;
  z-index: 10;
}

.mintui {
  font-size: 2.2rem;
}

.mint-header-title {
  font-size: 2.2rem;
}
.alertBox {
  width: 100%;
  height: 15.6rem;
  text-align: center;
  background: #ffffff;
  position: absolute;
  opacity: 1;
  bottom: 0;
  display: none;
}
.oUl {
  width: 100%;
  height: 11rem;
  overflow: scroll;
}
.alertBox ul {
  width: 200%;
  height: 11rem;
  border-bottom: 1px solid #b5b5b5;
}
.alertBox ul li {
  width: 7rem;
  float: left;
  height: 11rem;
}
.alertBox ul li img {
  width: 5rem;
  height: 5rem;
  margin-top: 2rem;
}
.btn {
  text-align: center;
  line-height: 4.6rem;
  border: none;
  width: 60%;
  background: inherit;
}
</style>
