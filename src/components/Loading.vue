<!-- LoaderMask.vue -->
<template>
    <div v-if="visible" class="loader-overlay">
        <div class="loader"></div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LoaderMask",
    setup(_, { expose }) {
        const visible = ref(false);

        function showMask() {
            visible.value = true;
        }

        function hideMask() {
            visible.value = false;
        }

        // 将 showMask 和 hideMask 方法暴露给组件的 ref
        expose({
            showMask,
            hideMask,
        });

        return {
            visible,
        };
    },
};
</script>

<style>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
