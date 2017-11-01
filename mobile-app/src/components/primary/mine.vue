<template>
    <div>
        <commonhead :message='Msg'></commonhead>
        <mt-swipe :auto="4000">
            <mt-swipe-item class="bg1">1</mt-swipe-item>
            <mt-swipe-item class="bg2">2</mt-swipe-item>
            <mt-swipe-item class="bg3">3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>


<script>

import commonhead from '@/components/common/commonhead'
export default {
    components: { commonhead },
    data() {
        return {
            Msg: '我的'
        }
    }

}
</script>
 <style scoped>
#commonhead{
    margin-bottom:0;
}
</style>
 