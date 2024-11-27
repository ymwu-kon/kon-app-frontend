<template>
    <div class="toolbar">
        <logo :logoSrc="logoSrc">{{ logoName }}</logo>

        <div class="button-container">
            <button
                v-for="(item, index) in buttonData"
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
import Logo from "./Logo.vue";
import Icon from "./Icon.vue";
import logoSrc from "../assets/logo.png";
import { useToobar } from "./hooks/useToobar";

const { buttonData, footerData, selectItem, logoName } = useToobar();
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
</style>
