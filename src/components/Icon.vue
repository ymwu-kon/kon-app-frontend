<template>
    <div class="button-with-tooltip">
        <button
            @mouseover="showTooltip = true"
            @mouseleave="showTooltip = false"
            class="icon-button"
            ref="buttonRef"
        >
            <img :src="iconUrl" alt="Icon" class="icon-image" />
        </button>
        <div v-if="showTooltip" class="tooltip" :style="tooltipStyle">
            <img :src="imageUrl" alt="Tooltip Image" />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect } from "vue";

const props = defineProps({
    iconUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const showTooltip = ref(false);
const buttonRef = ref(null);
const tooltipStyle = reactive({
    left: "0px",
});

watchEffect(() => {
    if (showTooltip.value && buttonRef.value) {
        const buttonRect = buttonRef.value.getBoundingClientRect();
        tooltipStyle.left = `${buttonRect.left + buttonRect.width / 2 + 20}px`;
    }
});
</script>

<style scoped>
.icon-button {
    width: 36px;
    height: 36px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background-color: var(--background-color);
    color: var(--icon-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    overflow: hidden; /* 防止图片溢出按钮 */
}

.icon-image {
    width: 30px;
    height: 30px;
    object-fit: cover; /* 确保图片填充整个按钮而不变形 */
}

.tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    background-color: var(--card-color);
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 140px;
    height: 140px;
    margin-bottom: 10px;
    z-index: 10;
}

.tooltip img {
    max-width: 100px;
    max-height: 100px;
}
</style>
