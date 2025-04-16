<template>
  <div class="sticky w-full py-2 top-0 z-10 bg-izi-orange-100 opacity-80">
    <header class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-12">
      <div class="w-full flex justify-between items-center gap-6 overflow-hidden">
        <nuxt-link
          property="item"
          typeof="WebPage"
          to="/"
        >
          <IziLogo :size="125" />
        </nuxt-link>
        <div class="flex items-center gap-8">
          <a
            class="text-sm shrink-0"
            @click="onDemo"
          >
            Réserver une démo
          </a>
          <IziButton
            class="shrink-0"
            @click.stop="onStart"
          >
            Commencer
          </IziButton>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    onStart() {
      alert('Start')
    },
    onDemo() {
      alert('Demo')
    },
  },
}
</script>
