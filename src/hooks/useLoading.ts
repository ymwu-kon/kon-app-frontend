import { ref } from "vue";

/**
 * 搭配Loading组件使用
 */
export const useLoading = () => {
    const loaderMaskRef = ref(null);

    function showLoading() {
        if (loaderMaskRef.value) {
            loaderMaskRef.value.showMask();
        }
    }

    function hideLoading() {
        if (loaderMaskRef.value) {
            loaderMaskRef.value.hideMask();
        }
    }

    return {
        loaderMaskRef,
        showLoading,
        hideLoading,
    };
};
