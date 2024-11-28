<template>
    <div>
        <YakumanCard
            v-for="(yakuman, index) in yakumanList"
            :key="index"
            :yakuman="yakuman"
            class="yakuman-card"
        />
    </div>
</template>

<script setup name="Yakuman">
import YakumanCard from "@/components/YakumanCard.vue";

import { useYakuman } from "./hooks/useYakuman";
const { yakumanList } = useYakuman();
</script>

<style scoped>
/* styles */
.yakuman-card {
    margin-top: 20px;
}

@media (max-width: 600px) {
    /* 适用于手机屏幕的样式 */
    .yakuman-card {
        margin-top: 8px;
    }
}
</style>
