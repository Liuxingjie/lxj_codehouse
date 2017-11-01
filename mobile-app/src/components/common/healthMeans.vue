<template>
    <div id="knowledge">
        <heads :message='msg' :link='links' ></heads>
        <ul>
            <li >
                <router-link to='/healthMeans2'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             <li >
                <router-link to='/healthMeans2'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             <li >
                <router-link to='/healthMeans2'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             <li >
                <router-link to='/healthMeans2'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             <li >
                <router-link to='/'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             <li >
                <router-link to='/'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             <li >
                <router-link to='/'>
                <img src="../../assets/images/images_1.gif" >
                <span class="bgfont">老年人症状<br></span><br>
                <span class="texBox">
                   <h5>年轻人经常熬夜老了是什么样子？？</h5>
                   <p>
                    <span class="smallfont">专题</span>
                    <span class="timeYear smallfont">2015-12-01</span>
                    <span class="timeHours smallfont">15:43:20</span>
                   </p>
                </span>
                </router-link>
            </li>
             
        </ul>
    </div>
</template>
<script>
import heads from '@/components/common/commonhead2'
// var lists=[
//     {title:'老年人症状',secondTitle:'年轻人经常熬夜老了是什么样子'    },
// ]
export default {
 data(){
     return {
         msg:'健康知识',
         links:'/'        
     }
 },
 components:{ heads }
}
</script>
<style scoped>
#knowledge{
    width:100%;
}
li{
    width: 100%;
    height: 8rem;
    background:#ffffff;
    margin-top: 0.5rem;
}
img{
     width: 6rem;
    float: left;
    margin: 1rem;
}
.bgfont{
       font-size:1.8rem;
    font-weight: bold;
     margin-top: 1rem;
     display: inline-block;
}
.smallfont{
    padding-right:1rem;
    font-size:0.1rem;
}
.texBox{
    color: #bababa;
}
</style>