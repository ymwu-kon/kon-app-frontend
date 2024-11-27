import { ref, onMounted } from "vue";
import yakuman from "@/static/yakuman.json";
import user from "@/static/user.json";

export const useYakuman = () => {
    let yakumanList = ref([]);

    onMounted(async () => {
        yakumanList.value = (yakuman || []).sort((a, b) => {
            if (a.date === b.date) {
                return Number(a.timestamp) - Number(b.timestamp);
            }

            return Number(a.date) - Number(b.date);
        });

        yakumanList.value = yakumanList.value.map((item) => {
            const userInfo = user.find((user) => user.tag === item.tag);
            return {
                ...item,
                nickName: userInfo?.nickName,
            };
        });
    });

    return {
        yakumanList
    }
};
