<template>
    <div class="get-started">
        <div class="get-started__content">
            <base-title
                :tag-name="computedTitleTagName"
                class="get-started__title"
            >{{ title }}</base-title>
            <p class="get-started__subtitle">Вы успешно создали свой аккаунт на Quniq!</p>
            <q-btn
                class="base-button get-started__button"
                outline
                unelevated
                no-caps
                color="s-blue"
                label="Работаем!"
                @click="handleClickBtn"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTitle from 'components/base/BaseTitle.vue'
import { useAdaptive } from 'src/composables'
import { computed } from 'vue'

interface Emits {
    (event: 'onNext'): void
}
const emit = defineEmits<Emits>()

interface Props {
    title: string
}
defineProps<Props>()

const { isMobile, isTablet } = useAdaptive()

const computedTitleTagName = computed(() => {
    return isMobile.value ? 'h4' : isTablet.value ? 'h3' : 'h1'
})

const handleClickBtn = () => {
    emit('onNext')
}
</script>

<style scoped lang="scss">
.get-started {
    width: 100%;
    max-width: 760px;
    height: 660px;
    padding: 56px 48px;
    border-radius: 17px;
    box-shadow: 0 0 10px rgba(136, 136, 136, .25);
    background-color: $white;
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: contain;
    background-image: url('assets/img/bg/stub-page-bg-1.png'), url('assets/img/bg/stub-page-bg-2.png');

    @include mobile {
        height: 500px;
        padding: 24px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__title {
        margin-bottom: 32px;
        text-align: center;
    }

    &__subtitle {
        max-width: 420px;
        margin-bottom: 56px;
        @include font-actay(30px);
        text-align: center;

        @include tablet {
            @include font-actay(24px);
        }

        @include mobile {
            @include font-actay(16px);
            margin-bottom: 40px;
        }
    }

    &__button {
        max-width: 520px;
    }
}
</style>
