<template>
    <div class="logined">
        <div class="user-image">
            <!-- <img src="" alt=""> -->
        </div>
        <div class="user-content">
            <div class="user-content-name">
                admin
            </div>
            <div class="user-content-uid">
                uid：792540571
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .logined{
        width: 100%;
        display: flex;
    }
    .logined .user-image{
        width: 68px;
        height: 68px;
        margin: 0 20px;
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
    }
    .logined .user-content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .logined .user-content .user-content-name{
        font-size: 22px;
    }
    .logined .user-content .user-content-uid{
        color:#968888;
    }
</style>
