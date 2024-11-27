<template>
    <YakumanCard
        v-for="(yakuman, index) in yakumanList"
        :key="index"
        :yakuman="yakuman"
        class="yakuman-card"
    />
</template>

<script setup name="Yakuman">
import { ref, onMounted } from "vue";
import { getYakuman } from "@/axios/yakuman";
import YakumanCard from "@/components/YakumanCard.vue";

let yakumanList = ref([]);
onMounted(async () => {
    const res = await getYakuman();
    yakumanList.value = (res?.data || []).sort((a, b) => {
        if (a.date === b.date) {
            return a.timestamp - b.timestamp;
        }

        return a.date - b.date;
    });
});
</script>

<style scoped>
/* styles */
.yakuman-card {
    margin-top: 20px;
}
</style>
