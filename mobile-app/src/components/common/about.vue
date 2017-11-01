<template>
    <div id="about">
        <mt-header title="关于易奉亲">
            <router-link to="/" slot="left" class="but">
                <mt-button icon='back'>
                </mt-button>
            </router-link>
        </mt-header>
        <div class="list">
            <ul>
                <li>
                    <span>版本更新</span>
                   <img src="../../assets/images/right.png" >
                </li>
                <li>
                  <router-link to='/versionMessage'>
                    <span>版本信息</span>
              <img src="../../assets/images/right.png" >
                      </router-link>  
               
                </li>
                <li>
                    <router-link to="/feedback">
                     <span>意见反馈</span>
          <img src="../../assets/images/right.png" >
                    </router-link>
             
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.list{
    margin-top: 1rem;

}
#about .list li{
    width:100%;
    line-height: 6rem;
    height:6rem;
    background:#ffffff;
    border-bottom:1px solid #f7f7f7;
        position:relative;
}
span{
    width:80%;
    float: left;
    margin-left: 4rem;
}
img{
    width:1.6rem;
    position:absolute;
     right:2rem;
     top:50%;
     transform: translate(0,-50%);
}
</style>
