import { defineAsyncComponent } from 'vue'

export const authComponents = [
    {
        component: defineAsyncComponent(() => import('components/auth/AuthMail.vue')),
        title: 'Добро пожаловать!'
    },
    {
        component: defineAsyncComponent(() => import('components/auth/AuthNamePhone.vue')),
        title: 'Создадим новый аккаунт'
    },
    {
        component: defineAsyncComponent(() => import('components/auth/AuthOtp.vue')),
        title: 'Проверьте свой email'
    },
    {
        component: defineAsyncComponent(() => import('components/auth/GetStarted.vue')),
        title: 'Приступаем к работе'
    }
]
