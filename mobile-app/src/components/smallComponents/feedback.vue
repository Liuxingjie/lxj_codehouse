<template>
    <!-- 意见反馈 -->
    <div id="feedback">
        <mt-header title='意见反馈'>
            <router-link to='/about' slot='left'>
                <mt-button icon='back'></mt-button>
            </router-link>
        </mt-header>
        <div class="main-content">
            <div class="title">
                <h3>欢迎您提出宝贵的意见和建议</h3>
            </div>

            <textarea name="pre" id="message" placeholder="我们会及时解决您提交的反馈，感谢您对易奉亲手机客户端的使用和支持。">
            </textarea>
            <mt-button type='primary' @click='handel' >提交反馈
            </mt-button>
            <div class="footer">
                <h3 class="fl">请启用远程客服</h3>
                <mt-button type='default' class="bgnone">启动远程客服</mt-button>
                <ul>
                    <p>1.启动语音服务，客服语音指导您来操作。</p>
                    <p>2.启动远程操作服务，客服手把手教您如何操作手机界面。</p>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    methods: {
        handel: function() {
           var  message = document.getElementById('message')
            if (message.value) {
                Toast({
                    message: '提交成功'
                })
                message.value=''
            }
            else{
                Toast(' 请填写反馈信息')
            }
        }
    }

}
</script>
<style scoped>
.title {
    width: 100%;
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.2rem;
}

.main-content {
    width: 100%;
    text-align: center;
}

textarea {
    width: 96%;
    height: 19rem;
    margin: 0 2% 0 2%;
    resize: none;
}

.main-content .mint-button {
    display: inline-block;
    height: 4rem;
    background: #13c0ab;
    width: 20rem;
    border-radius: 2rem;
    margin: 2.4rem;
}

.main-content .bgnone {
    background: none;
    border: 1px solid #13bfaa;
    color: #13bfaa;
}

.footer {
    width: 100%;
    background: #ffffff;
}

.fl {
    padding: 1rem;
    font-size: 1.7rem;
}

.footer p {
    text-align: left;
    padding-left: 1rem;
    color: #b5b5b5;
}
</style>
