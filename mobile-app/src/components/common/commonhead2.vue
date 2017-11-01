<template>
    <div id="head2">
        <mt-header :title="message">
            <router-link :to="link" slot="left" class="but">
                <mt-button icon='back'>
                    
                </mt-button>
            </router-link>
        </mt-header>
    </div>
</template>
<script>
export default {
props:['message','link']
}
</script>
<style scoped>
#head2{
    overflow: hidden;
}
.mint-header {
    width: 100%;
    position: fixed;
    top: 0;
    height: 4.75rem;
    background: #13c0ab;
    color: #ffffff;
    z-index: 10;
}
</style>
