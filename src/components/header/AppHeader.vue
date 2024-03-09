<template>
    <div class="header q-pa-lg justify-between items-center row">
        <img
            src="/img/logo.svg"
            style="height: 64px"
            class="col-auto"
        >
        <div class="buttons">
            <UserBar />
        </div>
    </div>
</template>

<script setup lang="ts">
import UserBar from 'src/components/auth/UserBar.vue'

</script>

<style scoped>
</style>
