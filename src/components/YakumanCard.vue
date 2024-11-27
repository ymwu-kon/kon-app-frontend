<template>
    <div class="yakuman-card">
        <div class="yakuman-header">
            <div class="yakuman-header-left">
                <span class="yakuman-nickname">{{ nickName }}</span>
                <span class="yakuman-date">（{{ date }}）</span>
            </div>
            <div class="yakuman-header-right">
                <div class="yakuman-desc">{{ yakumanDesc }}</div>
            </div>
        </div>
        <div class="yakuman-content majongs">
            <div
                v-for="(item, index) in mahjongs"
                :key="index"
                :class="item === '-' ? 'gapLeft' : `majong ${item}`"
            ></div>
        </div>
    </div>
</template>

<script setup name="YakumanCard">
import { ref, defineProps, computed } from "vue";
const props = defineProps({
    yakuman: {
        type: Object,
        required: true,
    },
});

const date = computed(() => {
    return new Date(Number(props.yakuman.date)).toLocaleDateString();
});

const nickName = computed(() => {
    return props.yakuman.nickName;
});

const mahjongs = computed(() => {
    return props.yakuman.mahjongs.split(",") || [];
});

const yakumanDesc = computed(() => {
    return props.yakuman.desc;
});
</script>

<style scoped lang="scss">
/* styles */
.yakuman-card {
    border-radius: 20px;
    background-color: var(--card-color);
    color: var(--text-color);
}

.yakuman-header {
    height: 70px;
    display: flex;
    padding: 0 20px;
}

.yakuman-content {
    padding: 20px;
    background-color: var(--card-color-light);
    border-radius: 20px;
}

.yakuman-header-left {
    flex: 1;
    line-height: 70px;
}

.yakuman-header-right {
    width: 100px;
    line-height: 70px;
}

.majongs {
    .majong {
        width: 48px;
        height: 69px;
        display: inline-block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .gapLeft {
        display: inline-block;
        margin-left: 4px;
    }
}
</style>
