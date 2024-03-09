<template>
    <q-page-container>
        <q-page class="row items-stretch">
            <div class="stub-page">
                <div
                    v-if="isMobile"
                    class="stub-page__logo"
                >
                    <q-img
                        src="~assets/img/icons/logo.svg"
                        width="103px"
                        height="64px"
                    />
                </div>
                <div class="stub-page__content">
                    <div
                        v-if="!isMobile"
                        class="stub-page__logo"
                    >
                        <q-img
                            src="~assets/img/icons/logo.svg"
                            width="103px"
                            height="64px"
                        />
                    </div>
                    <div class="stub-page__info text-center">
                        <base-title
                            :tag-name="computedTitleTagName"
                            class="stub-page__title"
                        >Сайт в разработке
                        </base-title>
                        <div class="stub-page__text">
                            <p>Мы приготовили для вас кое-что особенное! Мы работаем в поте лица, чтобы запустить сайт.</p>
                            <p>Подпишитесь на нас, чтобы ничего не пропустить!</p>
                        </div>
                    </div>
                    <div class="stub-page__form">
                        <q-input
                            v-model="mailInput"
                            class="base-input stub-page__email"
                            outlined
                            placeholder="Оставьте свой email"
                            dense
                            color="s-purple"
                        >
                            <template #prepend>
                                <q-icon name="mail_outline" />
                            </template>
                        </q-input>
                        <q-btn
                            class="base-button stub-page__button"
                            unelevated
                            label="Уведомить меня"
                            no-caps
                            color="blue"
                            @click="router.push('login')"
                        />
                    </div>
                </div>
                <div class="stub-page__img-block">
                    <q-img
                        :src="computedGeometryImgUrl"
                        class="stub-page__img"
                    />
                </div>
            </div>
        </q-page>
    </q-page-container>
</template>

<script setup lang="ts">
import BaseTitle from 'components/base/BaseTitle.vue'
import { useAdaptive } from 'src/composables'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { isMobile, isTablet } = useAdaptive()

const mailInput = ref('')

const computedTitleTagName = computed(() => {
    return isMobile.value ? 'h4' : isTablet.value ? 'h3' : 'h1'
})
const computedGeometryImgUrl = computed(() => {
    return new URL(`/src/assets/img/stub-geometry${isMobile.value ? '-mobile' : isTablet.value ? '-tablet' : ''}.png`, import.meta.url).href
})
</script>

<style scoped lang="scss">
.stub-page {
    display: flex;
    flex-grow: 1;
    background-color: $blue-light;

    @include mobile {
        flex-direction: column;
        padding: 32px 25px;
    }

    &__content {
        width: 65%;
        max-width: 1040px;
        padding: 110px 125px;
        background-color: $white;
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: contain;
        background-image: url('assets/img/bg/stub-page-bg-1.png'), url('assets/img/bg/stub-page-bg-2.png');

        @include desktop {
            padding: 60px;
        }

        @include tablet {
            max-width: 500px;
            padding: 32px 24px;
        }

        @include mobile {
            flex-grow: 1;
            width: 100%;
            padding: 20px;
            margin: 0 auto;
            border-radius: 8px;
        }

        @include mobile-sm {
            max-width: unset;
        }
    }

    &__logo {
        margin-bottom: 25px;

        @include tablet {
            text-align: center;
        }
    }

    &__title {
        margin-bottom: 32px;

        @include mobile {
            margin-bottom: 16px;
        }
    }

    &__text {
        margin-bottom: 64px;

        @include tablet {
            margin-bottom: 50px;
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
        max-width: 590px;
        margin: 0 auto;

        @include tablet {
            max-width: 260px;
        }
    }

    &__email {
        margin-bottom: 24px;
    }

    &__img-block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        @include mobile {
            flex-grow: 0;
            padding: 40px 0 0;
        }
    }

    &__img {
        max-width: 490px;
        margin: auto;

        @include desktop {
            max-width: 400px;
        }

        @include tablet {
            max-width: 190px;
        }

        @include mobile {
            max-width: 310px;
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
