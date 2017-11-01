
<template>
  <!-- 版本信息 -->
  <div id="versionMessage">
    <mt-header title="版本信息">
      <router-link to="/about" slot="left" class="but">
        <mt-button icon='back'>
        </mt-button>
      </router-link>
    </mt-header>
    <div class="myMessage">
      <div class="txt">
        <h1>刘星杰</h1>
        <h3>联系电话186-9639-9993</h3>
        <h3>email:429583810@qq.com</h3>
      </div>
    </div>
    <div>
      <ul>
        <li>版本更新：mr Liuxingjie</li>
        <li>版本编号：45</li>
        <li>版本名称：V2.2.0</li>
        <li>版本支持：Android 2.2,ios 7.0</li>
        <li>服务网址：</li>
        <li>服务电话：18696399993</li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style>
#versionMessage {
  width: 100%;
  position: relative;
}

.myMessage {
  width: 100%;
  height: 20rem;
  background: url(../../assets/images/timg.jpg);
  background-size: cover;
  position: relative;

}

.myMessage .txt {
  margin: 1rem;
  color: white;
  position: absolute;
  margin:50% 0 0 50%;
  transform: translate(-50%,-100%);
}

#versionMessage li {
  height: 5.3rem;
  line-height: 5.3rem;
  background: #ffffff;
  padding-left: 1rem;
  border-top:1px solid #f5f5f5;
}
</style>
