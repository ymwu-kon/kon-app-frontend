<script setup lang="ts">
import Toobar from "./components/Toobar.vue";
</script>

<template>
    <div class="mainCls">
        <div class="leftCls">
            <Toobar />
        </div>
        <div class="rightCls">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mainCls {
    height: 100%;
    display: flex;
}
.leftCls {
    width: 250px;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 内容在顶部和底部对齐 */
}
.rightCls {
    flex: 1;
    height: 100%;
    padding: 20px;
    border-left: 1px solid var(--border-color); /* 添加1px的白色细线 */
}
</style>
