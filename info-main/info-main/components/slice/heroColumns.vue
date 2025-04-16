<template>
  <div class="h-256 px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="space-y-6">
      <h2 class="font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl/[4.5rem] text-accent">
        <IziTextEmphased
          :text="title"
          globalClass="space-x-2"
          defaultClass="font-black"
        />
      </h2>
      <p class="w-full overflow-x-hidden whitespace-normal text-izi-black-300 text-lg">
        {{ text }}
      </p>
      <div class="space-y-4">
        <p
          v-for="item in items"
          :key="item"
          class="space-x-3 w-full overflow-x-hidden whitespace-normal text-izi-black-300 text-lg"
        >
          <i class="fa-regular fa-circle-check fa-lg"></i>
          <span>{{ item }}</span>
        </p>
      </div>
      <IziButton
        v-if="callToAction"
        size="lg"
      >
        <span>{{ callToAction }}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </IziButton>
    </div>
    <img
      :src="imageUrl"
      class="object-fit w-full rounded-xl border-izi-black-100 border-4"
    />
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
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    items: {
      type: Array<string>,
      required: true,
    },
    callToAction: {
      type: String,
      default: undefined,
    },
  },
}
</script>
