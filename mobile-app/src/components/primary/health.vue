<template>
    <div>
        <commonhead :message='Msg'></commonhead>
        
 </div>
</template>
<script >
import commonhead from '@/components/common/commonhead'
import foot from '@/view/footer'
require('../../../static/data.js')
export default {
    components: { commonhead,foot },
    data(){
        return {
            Msg:'健康'
        }
    }

}
</script>
 <style>

</style>