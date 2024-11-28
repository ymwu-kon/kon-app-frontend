<template>
    <div class="toolbar">
        <!-- 企业LOGO -->
        <logo />

        <!-- 导航栏  -->
        <div class="button-container">
            <button
                v-for="(item, index) in tabsData"
                :key="index"
                :class="{ 'is-selected': item.isSelected, 'custom-button': true }"
                @mouseover="item.hover = true"
                @mouseleave="item.hover = false"
                @click="selectItem(item)"
            >
                <img :src="item.icon" class="icon-size" />
                <span class="text">{{ item.text }}</span>
            </button>
        </div>

        <!-- 底部联系栏  -->
        <div class="footer">
            <Icon
                v-for="(item, index) in footerData"
                :key="index"
                v-bind="item"
                :class="[index === 0 ? '' : 'footer-icon-size']"
            />
        </div>
    </div>
</template>

<script setup name="Toolbar">
/**
 * @file 导航栏组件
 * 企业LOGO+导航栏+底部联系栏
 */
import Logo from "./Logo.vue";
import Icon from "./Icon.vue";
import { useToolbar } from "./hooks/useToolbar";

const { tabsData, footerData, selectItem } = useToolbar();
</script>

<style scoped lang="scss">
.button-container {
    display: flex;
    flex-direction: column;
    gap: 4px; /* 按钮之间的间隔 */
    margin-top: 32px;
}

.custom-button {
    display: flex;
    align-items: center;
    padding: 0 16px;
    // justify-content: center;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.custom-button .icon {
    color: #fff;
    margin-right: 8px;
}

.custom-button .text {
    color: #fff;
}

/* 悬停状态样式 */
.custom-button:hover,
.custom-button:focus {
    background-color: #151618;
}

/* 选中状态样式，确保它在:hover之后定义 */
.is-selected {
    background-color: #191a1f; /* 选中状态的颜色 */
}

/* 如果按钮被选中，即使在悬停时也保持选中状态的背景颜色 */
.is-selected:hover,
.is-selected:focus {
    background-color: #191a1f; /* 与.is-selected相同的颜色 */
}

.icon-size {
    width: 20px;
    height: 20px;
    object-fit: cover; /* 图片可能被裁剪以填充整个区域 */
    margin-right: 8px;
}

.toolbar {
    position: relative;
    height: 100%;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
}

.footer-icon-size {
    margin-left: 16px;
}

/* 移动端样式 */
@media (max-width: 600px) {
    /* 适用于手机屏幕的样式 */
    .button-container {
        margin-top: 16px;
    }

    .icon-size {
        width: 8px;
        height: 8px;
    }

    .footer-icon-size {
        margin-left: 4px;
    }

    .custom-button {
        height: 32px;
        padding: 0 8px;
        font-size: 12px;
    }
}

/* 平板端样式 */
@media (min-width: 601px) and (max-width: 1024px) {
    /* 适用于平板屏幕的样式 */

    .icon-size {
        width: 14px;
        height: 14px;
    }

    .footer-icon-size {
        margin-left: 10px;
    }

    .custom-button {
        height: 40px;
    }
}
</style>
