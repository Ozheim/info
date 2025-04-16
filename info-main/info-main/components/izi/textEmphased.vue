<template>
  <span :class="globalClass">
    <span
      v-for="titlePart in text"
      :key="titlePart.text"
      :class="[
        titlePart.emphase || titlePart.class
          ? titlePart.class || 'px-3 py-1 bg-izi-black-100 text-izi-orange-400 rounded-xl font-semibold'
          : defaultClass,
      ]"
    >
      {{ titlePart.text }}
    </span>
  </span>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: Array<{ text: string; emphase?: boolean; class?: string }>,
      default: [
        { text: 'Pour les' },
        { text: "pro de l'outdoor", emphase: true },
        { text: 'qui veulent' },
        { text: 'booster leur saison', emphase: true },
      ],
    },
    globalClass: {
      type: String,
      default: 'space-x-2',
    },
    defaultClass: {
      type: String,
      default: '',
    },
  },
}
</script>
