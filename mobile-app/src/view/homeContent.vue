<template>
    <div class="main-content">
        <ul>
            <li v-for="item in lists">
                <router-link :to="item.link">
                    <span>
                        <div class="imgBox">
                            <img :src="item.srcs" />
                        </div>
                        {{item.title}}
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: [{ title: '居家照料服务', link: '/service', srcs: '../static/images/images_32.gif' },
                { title: '健康保险', link: '/health', srcs: "../static/images/images_34.gif" },
                { title: '专家团队', link: '/expertTeam', srcs: "../static/images/images_36.gif" },
                { title: '健康知识', link: '/healthMeans', srcs: "../static/images/images_39.gif" },
                { title: '适老化产品', link: '/product', srcs: "../static/images/images_41.gif" },
                { title: '适老化设计', link: '/design', srcs: "../static/images/images_43.gif" }
            ]
        }
    }
  
}
</script>
<style scoped>
span {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    background: #ffffff;
    border-top: 1px solid gray;
    border-right: 1px solid gray;
}

img {
    display: inline-block;
    margin-bottom: 1rem;
    width: 6rem;
}

.imgBox {
    text-align: center;
    margin-top: 1rem;
}
</style>
