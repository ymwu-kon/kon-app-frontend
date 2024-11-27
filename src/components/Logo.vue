<template>
    <div class="logo-text-container">
        <div class="logo-container">
            <img :src="logoSrc" alt="Logo" class="logo" />
        </div>
        <div class="text-container">
            <slot></slot>
            <!-- 使用slot插槽来插入文本 -->
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

// 定义 props
const props = defineProps({
    logoSrc: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.logo-text-container {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    justify-content: flex-start; /* 水平居左对齐 */
}

.logo-container {
    height: 60px;
    background-color: var(--text-color);
    border-radius: 50%;
}

.logo {
    width: 60px; /* 设置Logo的宽度，根据需要调整 */
    height: auto; /* 高度自适应 */
}

.text-container {
    /* 根据需要添加文本样式 */
    color: var(--text-color);
    font-size: 26px;
    font-weight: bold;
    margin-left: 12px;
}
</style>
