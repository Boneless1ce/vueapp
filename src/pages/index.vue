<template>
    <div class="contanier">
        <search-bar @goEmSearch="goSearch"></search-bar>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img src="../assets/images/01.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/images/02.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/images/03.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/images/04.jpg" alt="">
            </swiper-slide>
        </swiper>
        <re-film-class></re-film-class>
        <tabbar></tabbar>
    </div>
    
</template>

<script>
import tabbar from '../components/tabbar'
import searchBar from '../components/searchBar'
import reFilmClass from '../components/film/reFilmClass'
import { swiper,swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    data(){
        return {
            swiperOption: {
                notNextTick:true,
                initialSlide:0,
                autoplay:{
                    delay: 2000
                },
                loop:1,
                effect: 'slide'
            },
            swiperSlides:[1,2,3,4]
        }
    },
    methods: {
        goSearch(){
            this.$router.push('/search')
        }
    },
    components:{
        searchBar,
        swiper,
        swiperSlide,
        tabbar,
        reFilmClass
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
}
</script>

<style>
    .contanier{
        margin-bottom: 51px;
    }
    .swiper-slide img{
        display: block;
        width: 100%;
        height: 150px;
    }
</style>