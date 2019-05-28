<template>
    <div>
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
        <recommend title="视频推荐"></recommend>
        <recommend title="音乐推荐"></recommend>
        <tabbar></tabbar>
        <transition name="fade">
			<router-view></router-view>
            <!-- <p v-show="show">uuuuuuuu</p> -->
		</transition>
    </div>
    
</template>

<script>
import tabbar from '../components/tabbar'
import searchBar from '../components/searchBar'
import recommend from '../components/recommend'
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
            swiperSlides:[1,2,3,4],
            show: true
        }
    },
    methods: {
        getData(){
            this.axios.get('https://cnodejs.org/api/v1/topics').then((res)=>{
                // console.log(res)
            })
        },
        goSearch(){
            this.$router.push('/search')
            // this.show = !this.show
        }
    },
    components:{
        searchBar,
        swiper,
        swiperSlide,
        tabbar,
        recommend
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style>
    .swiper-slide img{
        display: block;
        width: 100%;
        height: 150px;
    }
    .fade-enter-active,.fade-leave-active{
		transition:all .3s;
	}
	.fade-enter,.fade-leave-to{
		transform: translate3d(100%,0,0)
	}
</style>