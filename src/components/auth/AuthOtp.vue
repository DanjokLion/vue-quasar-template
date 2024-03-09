<template>
    <div class="auth-otp">
        <div
            v-if="isMobile"
            class="auth-otp__logo"
        >
            <q-img
                src="~assets/img/icons/logo.svg"
                width="103px"
                height="64px"
            />
        </div>
        <div class="auth-otp__content">
            <div
                v-if="!isMobile"
                class="auth-otp__logo"
            >
                <q-img
                    src="~assets/img/icons/logo.svg"
                    width="103px"
                    height="64px"
                />
            </div>
            <div class="auth-otp__info text-center">
                <base-title
                    :tag-name="computedTitleTagName"
                    class="auth-otp__title"
                >{{ title }}
                </base-title>
                <div class="auth-otp__text">
                    <p>Мы отправили вам OTP код.</p>
                    <p>Пожалуйста, введите этот код в поле ниже</p>
                </div>
            </div>
            <div class="auth-otp__form">
                <label class="base-input__label">OTP код</label>
                <q-input
                    v-model="otp"
                    mask="### ###"
                    unmasked-value
                    fill-mask
                    class="base-input auth-otp__code"
                    outlined
                    placeholder="Пример: 004 053"
                    dense
                    color="s-purple"
                >
                    <template #prepend>
                        <q-icon name="vpn_key" />
                    </template>
                </q-input>
                <div class="auth-otp__timer">
                    <span>Отправить новый OTP код</span>
                    <span>01:00</span>
                </div>
                <q-btn
                    class="base-button auth-otp__button"
                    outline
                    unelevated
                    no-caps
                    color="s-blue"
                    label="Продолжить"
                    :disabled="!otp"
                    @click="handleClickBtn"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTitle from 'components/base/BaseTitle.vue'
import { useAdaptive } from 'src/composables'
import { computed } from 'vue'
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

const { isMobile, isTablet, isDesktop } = useAdaptive()
const authStore = useAuthStore()

const { otp } = storeToRefs(authStore)

const computedTitleTagName = computed(() => {
    return isMobile.value ? 'h4' : isTablet.value ? 'h3' : isDesktop ? 'h2' : 'h1'
})

const handleClickBtn = () => {
    emit('onNext')
}
</script>

<style scoped lang="scss">
.auth-otp {
    align-self: stretch;
    width: 65%;
    max-width: 1200px;
    margin-right: auto;

    @include desktop {
        max-width: 1040px;
    }

    @include tablet {
        max-width: unset;
    }

    @include mobile {
        width: 100%;
        margin: 0 auto;
        border-radius: 8px;
    }

    &__content {
        height: 100%;
        padding: 120px;
        background-color: $white;
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: contain;
        background-image: url('assets/img/bg/stub-page-bg-1.png'), url('assets/img/bg/stub-page-bg-2.png');

        @include desktop {
            padding: 60px;
        }

        @include tablet {
            padding: 32px 24px;
        }

        @include mobile {
            height: calc(100% - 90px);
            padding: 20px;
            border-radius: 8px;
        }
    }

    &__logo {
        margin-bottom: 64px;

        @include desktop {
            margin-bottom: 32px;
        }

        @include tablet {
            text-align: center;
        }
    }

    &__title {
        margin-bottom: 48px;

        @include desktop {
            margin-bottom: 24px;
        }

        @include mobile {
            margin-bottom: 16px;
        }
    }

    &__text {
        margin-bottom: 48px;

        @include desktop {
            margin-bottom: 24px;
        }

        @include mobile {
            margin-bottom: 18px;
        }

        p {
            margin: 0;
            @include font-actay(30px);

            @include desktop {
                @include font-actay(26px);
            }

            @include tablet {
                @include font-actay(24px);
            }

            @include mobile {
                @include font-nunito(16px);
            }
        }
    }

    &__form {
        max-width: 530px;
        margin: 0 auto;

        @include tablet {
            max-width: 320px;
        }
    }

    &__code {
        margin-bottom: 16px;
    }

    &__timer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        @include font-actay(24px);

        @include desktop {
            @include font-actay(21px);
        }

        @include tablet {
            @include font-actay(18px);
        }

        @include mobile {
            @include font-actay(16px);
        }
    }

    &__button {
        @include desktop-lg {
            min-height: 64px;
            @include font-actay-wide-bold(24px);
        }
    }
}
</style>
