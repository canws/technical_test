<template>
    <Header />
    <slot />
</template>
<script>
import Header from './Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Frontend',
    components: {
        Header
    },
})
</script>