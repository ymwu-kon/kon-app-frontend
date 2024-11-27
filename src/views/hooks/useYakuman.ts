import { ref, onMounted } from "vue";
import yakuman from "@/static/yakuman.json";

export const useYakuman = () => {
    let yakumanList = ref([]);

    onMounted(async () => {
        yakumanList.value = (yakuman || []).sort((a, b) => {
            if (Number(a.date) === Number(b.date)) {
                return Number(b.timestamp) - Number(a.timestamp);
            }

            return Number(b.date) - Number(a.date);
        });
    });

    return {
        yakumanList
    }
};
