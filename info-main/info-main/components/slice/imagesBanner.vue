<template>
  <div class="py-12 space-y-6">
    <h2
      v-if="title"
      class="text-center text-sm font-bold"
    >
      {{ title }}
    </h2>
    <div class="flex items-center gap-12 lg:gap-24 overflow-x-auto">
      <div
        v-for="imageUrl in imagesUrls"
        :key="imageUrl"
        class="translate-x-24 md:translate-x-48"
      >
        <figure class="h-24 sm:h-24 md:h-20 xl:h-30 w-16 md:w-24 lg:w-36 w-fit-content">
          <img
            :src="imageUrl"
            class="grayscale-[0.6] h-full object-contain"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    imagesUrls: {
      type: Array<string>,
      required: true,
    },
    title: {
      type: String,
      default: undefined,
    },
  },
}
</script>
