<template>
    <div>
        <commonhead :message='logmes'></commonhead>
        <router-view/>
        <foot ></foot>

    </div>
</template>

<script>
import commonhead from '@/components/common/commonhead'
import foot from '@/view/footer'
import contents from '@/view/homeContent'
export default {
    components: { commonhead, foot, contents },
    data() {
        return {
            logmes: '首页'
        }
    }
}
</script>
<style>

</style>
