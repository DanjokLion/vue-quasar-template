<template>
    <q-page-container class="auth-page">
        <auth-form />
    </q-page-container>
</template>

<script setup lang="ts">
import AuthForm from 'components/AuthForm.vue'
</script>

<style scoped lang="scss">
.auth-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: $blue-light;

    @include mobile {
        padding: 16px;
    }
}
</style>
