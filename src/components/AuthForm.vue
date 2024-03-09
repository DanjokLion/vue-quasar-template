<template>
    <component
        :is="currentComponent.component"
        :title="currentComponent.title"
        @onNext="handleNextStep"
    />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { authComponents } from './auth/constants'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from 'stores/auth2'
import AuthApi from 'src/api/auth'

const authStore = useAuthStore()
const router = useRouter()

const { email, phone, name, nick, otp } = storeToRefs(authStore)
const currentStepNumber = ref(0)

const currentComponent = computed(() => {
    return authComponents[currentStepNumber.value]
})

const handleNextStep = async () => {
    if (currentStepNumber.value === 0) {
        try {
            await AuthApi.sendOtp({ email: email.value })
            currentStepNumber.value = 2
            return
        } catch (error) {
            console.log(error)
        }
    }
    if (currentStepNumber.value === 1) {
        try {
            await AuthApi.register({
                email: email.value,
                phone: phone.value,
                name: name.value,
                nick: nick.value
            })
            await AuthApi.sendOtp({ email: email.value })
        } catch (error) {
            console.log(error)
        }
    }
    if (currentStepNumber.value === 2) {
        try {
            await AuthApi.login({
                email: email.value,
                password: otp.value
            })
        } catch (error) {
            console.log(error)
        }
    }
    if (currentStepNumber.value < authComponents.length - 1) {
        currentStepNumber.value += 1
    } else {
        router.push('main')
    }
}
</script>

<style scoped lang="scss"></style>
