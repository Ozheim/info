<template>
  <MetaSeoLayout>
    <NuxtLayout class="w-full min-h-screen">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </MetaSeoLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MetaSeoLayout from '~/layouts/MetaSeoLayout.vue'

export default defineComponent({
  components: { MetaSeoLayout },
})
</script>

<style>
/* html {
  font-size: 15px;
} */
</style>
