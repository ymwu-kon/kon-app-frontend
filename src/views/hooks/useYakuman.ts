import { ref, onMounted } from "vue";
import { getYakuman } from "@/axios/yakuman";

export const useYakuman = ({ showLoading, hideLoading }) => {
    let yakumanList = ref([]);

    onMounted(async () => {
        showLoading();
        const res = await getYakuman();
        hideLoading();
        yakumanList.value = (res?.data || []).sort((a, b) => {
            if (a.date === b.date) {
                return a.timestamp - b.timestamp;
            }

            return a.date - b.date;
        });
    });

    return {
        yakumanList
    }
};
