<template>
    <div class="re-film">
        <div class="re-film-header">
            <img :src="item.data.content.data.provider.icon" alt="">
            {{item.data.content.data.provider.name}}
        </div>
        <div class="re-film-content">
            
        </div>
        <div class="re-film-footer">
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
                
        }
    },
    props: {
        item:Object,
        defalut: function(){
            return {}
        }
    }
}
</script>

<style>
    .re-film{
        
    }
    .color{
        
    }
</style>
