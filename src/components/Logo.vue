<template>
    <div class="logo-text-container">
        <div class="logo-container">
            <img :src="logoSrc" alt="Logo" class="logo" />
        </div>
        <div class="text-container">
            <slot>{{ companyName }}</slot>
        </div>
    </div>
</template>

<script setup name="Logo">
/**
 * @file 企业Logo组件
 */
import LogoSrc from "@/assets/logo.png";
import { companyName } from "@/static/company";

const props = defineProps({
    logoSrc: {
        type: String,
        default: LogoSrc,
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

/* 移动端样式 */
@media (max-width: 600px) {
    .logo-text-container {
        display: block;
    }

    /* 适用于手机屏幕的样式 */
    .logo-container {
        width: 25px;
        height: 25px;
        margin: 0 auto;
        margin-top: 2vh;
    }

    .logo {
        width: 25px; /* 设置Logo的宽度，根据需要调整 */
    }
    .text-container {
        /* 根据需要添加文本样式 */
        font-size: 12px;
        margin-top: 1vh;
        margin-left: 0px;
        text-align: center;
    }
}

/* 平板端样式 */
@media (min-width: 601px) and (max-width: 1024px) {
    /* 适用于平板屏幕的样式 */
    .logo-container {
        height: 25px;
    }

    .logo {
        width: 25px; /* 设置Logo的宽度，根据需要调整 */
    }
    .text-container {
        /* 根据需要添加文本样式 */
        font-size: 18px;
        margin-left: 8px;
    }
}
</style>
