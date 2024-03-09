<template>
    <component
        :is="tagName"
        :class="['base-title', themeClass]"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
    tagName: string
    theme?: string
}
const props = withDefaults(defineProps<IProps>(), {
    tagName: 'h1'
})

const themeClass = computed(() => {
    return props.theme ? `${props.theme}` : ''
})
</script>

<style scoped lang="scss">
.base-title {
    margin: 0;
}

h1.base-title {
    @include font-actay-wide-bold(60px);
    line-height: 68px;
}

h2.base-title {
    @include font-actay-wide-bold(48px);
    line-height: 60px;
}

h3.base-title {
    @include font-actay-wide-bold(32px);
    line-height: 40px;
}

h4.base-title {
    @include font-nunito(24px, 700);
    line-height: 32px;
}
</style>
