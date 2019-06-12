<template>
    <div class="re-film-class">
        <recommend title="视频推荐"></recommend>
        <re-film v-for="(item,index) in filmItem" :key="index" :item="item" :index="index"></re-film>
    </div>
</template>

<script>
import reFilm from './reFilm'
import recommend from '../recommend'

export default {
    data(){
        return {
            filmItem: {}
        }
    },
    components: {
        reFilm,
        recommend
    },
    methods: {
        getData(){
            this.axios.get('/api/videoCategoryDetails?id=14').then((data)=>{
                this.filmItem = data.data.result;
            })
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style>

</style>
