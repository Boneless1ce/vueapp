<template>
    <div class="page-film-detail">
        <go-back></go-back>
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
        width: 100%;
        background: red;
        position: fixed;
    }
</style>
