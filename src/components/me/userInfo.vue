<template>
    <div class="user-info">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .user-info{
        width: 100;
        background: rgba(250,235,215,.8);
        border-bottom-right-radius: 15px;  
        border-bottom-left-radius: 15px;
        padding: 100px 0 40px;
    }
</style>
