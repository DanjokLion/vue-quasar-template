<template>
    <div class="row no-wrap user-bar">
        <q-btn
            v-for="(button, index) in buttons"
            :key="index"
            v-close-popup
            no-caps
            unelevated
            class="user-bar-btns bg-blue text-white"
            :label="button.label || ''"
            :class="{'user-img': button.imgSrc}"
            @click="button.action || ''"
        >
            <template v-if="button.imgSrc">
                <img :src="button.imgSrc" style="height: 32px">
            </template>
        </q-btn>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth/AuthStore'


const { buttons } = useAuthStore()

</script>

<style lang="scss">
@import "./scss/user-bar";
</style>
