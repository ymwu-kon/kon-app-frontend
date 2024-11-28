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
/**
 * @file 役满卡片组件
 */
import { computed } from "vue";
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
    width: auto;
    line-height: 70px;
    float: right;
    color: var(--primary-color);
}

.majongs {
    .majong {
        width: 50px;
        height: 72px;
        display: inline-block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .gapLeft {
        display: inline-block;
        margin-left: 10px;
    }
}

/* 移动端样式 */
@media (max-width: 600px) {
    /* 适用于手机屏幕的样式 */
    .yakuman-header {
        height: 40px;
        font-size: 12px;
    }

    .yakuman-header-left {
        line-height: 40px;
    }

    .yakuman-header-right {
        line-height: 40px;
    }

    .majongs {
        .majong {
            width: 14px;
            height: 20px;
        }

        .gapLeft {
            margin-left: 4px;
        }
    }

    .yakuman-content {
        padding: 10px;
        border-radius: 10px;
    }

    .yakuman-card {
        border-radius: 10px;
    }
}

/* 平板端样式 */
@media (min-width: 601px) and (max-width: 1024px) {
    /* 适用于平板屏幕的样式 */
    .yakuman-header {
        height: 50px;
    }

    .yakuman-header-left {
        line-height: 50px;
    }

    .yakuman-header-right {
        line-height: 50px;
    }

    .majongs {
        .majong {
            width: 32px;
            height: 46px;
        }

        .gapLeft {
            margin-left: 8px;
        }
    }
}
</style>
