<template>
  <div class="h-256 px-12 py-24 space-y-4">
    <div class="flex justify-center">
      <div class="rounded-full py-3 px-4 border border-izi-black-300">
        {{ badgeText }}
      </div>
    </div>
    <div class="flex justify-center">
      <h2
        class="md:w-3/4 lg:w-3/4 text-center font-semibold text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl/[4.5rem] text-accent"
      >
        <IziTextEmphased
          :text="title"
          globalClass="space-x-3"
        />
      </h2>
    </div>
    <div class="flex justify-center">
      <p class="lg:w-3/4 text-center w-full overflow-x-hidden whitespace-normal text-izi-black-300 text-lg">
        {{ text }}
      </p>
    </div>
    <div class="flex justify-center pt-8">
      <figure>
        <img
          :src="imageUrl"
          class="object-contain rounded-xl border-4 border-izi-black-200"
        />
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: Array<{ text: string; emphase?: boolean; class?: string }>,
      default: [
        { text: 'Pour les', class: false },
        { text: "pro de l'outdoor", emphase: true },
        { text: 'qui veulent', emphase: false },
        { text: 'booster leur saison', emphase: true },
      ],
    },
    text: {
      type: String,
      required: true,
    },
    badgeText: {
      type: String,
      required: true,
    },
  },
}
</script>
