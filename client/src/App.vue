<script>
import Frontend from './layouts/Frontend.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "App",
  components: {
    Frontend,
  },
  setup() {
    const layout = ref('Frontend')
    return { layout }
  }
})
</script>

<template>
  <component :is="this.$route.meta.layout">
    <router-view></router-view>
  </component>

</template>
