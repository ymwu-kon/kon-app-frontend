import { ref, } from "vue";
import { useRouter, } from "vue-router";

import yakumanIcon from "@/assets/yakuman.png";
import chatIcon from "@/assets/chat.png";
import miniIcon from "@/assets/mini.png";
import contactQr from "@/assets/contact-qr.jpg";
import miniQr from "@/assets/mini-qr.png";

export const useToolbar = () => {
    const tabsData = ref([{ icon: yakumanIcon, text: "役满墙", isSelected: true, path: "/yakuman" }]);

    const footerData = ref([
        {
            iconUrl: chatIcon,
            imageUrl: contactQr,
        },
        {
            iconUrl: miniIcon,
            imageUrl: miniQr,
        },
    ]);

    const router = useRouter();
    const selectItem = (item: any) => {
        router.push(item.path);
    };

    return {
        tabsData,
        footerData,
        selectItem,
    }
};
