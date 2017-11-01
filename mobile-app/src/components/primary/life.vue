<template>
    <div>   
        <commonhead :message='Msg'></commonhead>
        <router-link to='/'></router-link>

    </div>
</template>
<script>
import commonhead from '@/components/common/commonhead'
import foot from '@/view/footer'
export default {
    components: { commonhead,foot },
    data:function(){
        return {
            Msg:'生活'
        }
    }

}
</script>
 <style>

</style>