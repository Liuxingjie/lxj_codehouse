<template>
    <div class="healthBox">
        <mt-header title="居家照料服务">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <ul>
            <li v-for="item of lists">
                <div class="listBox">
                    <img src="../../assets/images/images_1.gif" class='fl' />
                    <div class="txt">
                        <h3>{{item.h3}}</h3>
                        <p>
                            <span>{{item.span}}</span>{{item.content}}
                        </p>
                    </div>
                    <div class="txt">
                        <span>服务区域：</span>南山区
                        <router-link :to='item.link'><mt-button size="small" type='primary'>查看详情</mt-button></router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: [{ h3: "日常服务中心", span: '日常服务内容:', content: '我是需要提供的服务信息我是需要提供的服务信息我是需要提供的服 务信息我是需要提供的服务信息 我是需要提供的服务信息',link:'/service2' },
            { h3: "日常服务中心", span: '日常服务内容:', content: '我是需要提供的服务信息我是需要提供的服务信息我是需要提供的服 务信息我是需要提供的服务信息 我是需要提供的服务信息',link:'/service2' }
            ]
        }
    }
}
</script>


<style scoped>
li {
    overflow: hidden;
}

.healthBox {
    width: 100%;
    background: #f5f5f5;
    position: relative;
    font-size: 1.4rem;
}

.listBox {
    height: 12.5rem;
    width: 100%;
    margin-top: 1rem;
    background: #ffffff;
    float: left;
}

.listBox img {
    width: 12rem;
    height: 10.3rem;
    max-width: 40%;
    padding: 1rem;
}

span {
    font-weight: bold;
    clear: both;
}

.txt {

    float: left;
    margin-left: 5%;
    height: 7rem;
    overflow: hidden;
    margin-top: 0.5rem;
    max-width: 55%;
}
button{
    margin-left: 0.5rem;
    color: black;
}
p {
    height: 7rem;
    margin-top: 0.5rem;
}
</style>
