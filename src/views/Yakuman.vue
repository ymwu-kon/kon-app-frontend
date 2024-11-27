<template>
    <div>
        <loading ref="loaderMaskRef"></loading>

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
import Loading from "@/components/Loading.vue";

import { useLoading } from "@/hooks/useLoading";
const { showLoading, hideLoading, loaderMaskRef } = useLoading();

import { useYakuman } from "./hooks/useYakuman";
const { yakumanList } = useYakuman({ showLoading, hideLoading });
</script>

<style scoped>
/* styles */
.yakuman-card {
    margin-top: 20px;
}
</style>
