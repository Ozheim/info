<template>
  <div class="py-12 space-y-6">
    <div class="flex justify-center">
      <div class="rounded-full py-3 px-4 border border-izi-black-300 w-fit">Testimonials</div>
    </div>
    <h2 class="text-center text-6xl font-semibold">
      {{ title }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
      <div
        v-for="testimonialItem in testimonialsItems"
        :key="testimonialItem.name"
        class="border-1 bg-izi-white-100 p-6 rounded-xl space-y-6"
      >
        <div class="grid grid-cols-[auto,1fr] gap-6">
          <figure class="h-20 w-20 rounded-full overflow-hidden">
            <img
              :src="testimonialItem.imageUrl"
              class="h-full object-contain"
            />
          </figure>
          <div>
            <h3 class="text-lg font-bold mt-3">
              {{ testimonialItem.name }}
            </h3>
            <h4 class="text-izi-black-400 font-light">
              {{ testimonialItem.structure }}
            </h4>
          </div>
        </div>
        <p class="">
          {{ testimonialItem.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    testimonialsItems: {
      type: Array<{
        imageUrl: string
        name: string
        structure: string
        text: string
      }>,
      required: true,
    },
  },
}
</script>
