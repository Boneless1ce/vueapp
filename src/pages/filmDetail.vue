<template>
    <div class="page-film-detail">
        <go-back></go-back>
        detail
    </div>
</template>

<script>
import goBack from '../components/goBack'

export default {
    components: {
        goBack
    }
}
</script>

<style>
    .page-film-detail{
        min-height: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
