import { ref } from "vue";
import { useRouter } from "vue-router";

import yakumanIcon from "@/assets/yakuman.png";
import chatIcon from "@/assets/chat.png";
import miniIcon from "@/assets/mini.png";
import contactQr from "@/assets/contact-qr.jpg";
import miniQr from "@/assets/mini-qr.png";


export const useToobar = () => {
    const logoName = ref("轻音日麻馆");

    const buttonData = ref([{ icon: yakumanIcon, text: "役满墙", isSelected: true, path: "/yakuman" }]);

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

    const selectItem = item => {
        router.push(item.path);
    };

    return {
        buttonData,
        footerData,
        selectItem, logoName
    }
};
