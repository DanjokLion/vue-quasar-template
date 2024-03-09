<template>
    <div class="auth-mail">
        <div class="auth-mail__content">
            <base-title
                :tag-name="computedTitleTagName"
                class="auth-mail__title"
            >{{ title }}</base-title>
            <p class="auth-mail__subtitle">Введите email, чтобы продолжить</p>
            <div class="auth-mail__form">
                <q-input
                    v-model="email"
                    outlined
                    :class="['base-input', 'auth-mail__email', { 'invalid-email': !emailValid }]"
                    placeholder="Введите свой email"
                    dense
                    :color="emailValid ? 's-purple' : 'red'"
                >
                    <template #prepend>
                        <q-icon name="mail_outline" />
                    </template>
                </q-input>
                <p
                    v-if="!emailValid"
                    class="error-text"
                >Пожалуйста, проверьте написание email адреса</p>
                <q-btn
                    class="base-button auth-mail__button"
                    outline
                    unelevated
                    no-caps
                    color="s-blue"
                    label="Продолжить"
                    @click="handleClickBtn"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTitle from 'components/base/BaseTitle.vue'
import { useAdaptive } from 'src/composables'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from 'stores/auth2'

interface Emits {
    (event: 'onNext'): void
}
const emit = defineEmits<Emits>()

interface Props {
    title: string
}
defineProps<Props>()

const { isMobile, isTablet } = useAdaptive()
const authStore = useAuthStore()

const emailValid = ref(true)
const { email } = storeToRefs(authStore)

const computedTitleTagName = computed(() => {
    return isMobile.value ? 'h4' : isTablet.value ? 'h3' : 'h1'
})

const handleClickBtn = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    emailValid.value = emailPattern.test(email.value)

    if (emailValid.value) {
        emit('onNext')
    }
}
</script>

<style scoped lang="scss">
.auth-mail {
    width: 100%;
    max-width: 770px;
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

    &__title {
        margin-bottom: 24px;
        text-align: center;
    }

    &__subtitle {
        margin-bottom: 60px;
        @include font-actay(30px);
        text-align: center;

        @include tablet {
            margin-bottom: 40px;
            @include font-actay(24px);
        }

        @include mobile {
            @include font-actay(16px);
        }
    }

    &__form {
        max-width: 530px;
        margin: 0 auto;
    }

    &__button {
        margin-top: 24px;
    }
}

.error-text {
    color: red;
    margin: 16px 0 0;
}
</style>
