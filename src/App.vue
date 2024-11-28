<script setup lang="ts">
import Toolbar from "./components/Toolbar.vue";
</script>

<template>
    <div class="mainCls">
        <div class="leftCls">
            <Toolbar />
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
    overflow: hidden;
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
    overflow-y: auto;
    border-left: 1px solid var(--border-color); /* 添加1px的白色细线 */
}

/* 移动端样式 */
@media (max-width: 600px) {
    /* 适用于手机屏幕的样式 */
    .leftCls {
        width: 80px;
        padding: 4px;
    }
    .rightCls {
        padding: 10px;
    }
}

/* 平板端样式 */
@media (min-width: 601px) and (max-width: 1024px) {
    /* 适用于平板屏幕的样式 */
    .leftCls {
        width: 160px;
        padding: 16px;
    }
    .rightCls {
        padding: 16px;
    }
}
</style>
