<template>
  <button
    class="hover:cursor-pointer rounded-lg flex items-center gap-3 transition-colors duration-300 ease-in-out"
    :class="[colorClass, sizeClass]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'text-xxs md:text-xs py-1 md:py-2 px-2 md:px-3'
        case 'md':
          return 'text-xs md:text-sm py-1 md:py-2 px-2 md:px-3'
        case 'lg':
        default:
          return 'text-md md:text-lg py-2 md:py-3 px-3 md:px-4'
      }
    },
    colorClass() {
      switch (this.color) {
        case 'pink':
          return 'bg-pink-500 hover:bg-pink-600 text-white'
        case 'orange':
          return 'bg-izi-orange-200 hover:bg-izi-orange-100 text-izi-black-100'
        case 'white':
          return 'bg-izi-white-100 hover:bg-izi-white-200 text-izi-black-100'
        case 'ghost-white':
          return 'hover:bg-izi-black-300 text-izi-white-100'
        case 'ghost-black':
          return 'hover:bg-izi-white-300 text-izi-black-100'
        case 'black':
        default:
          return 'bg-izi-black-100 hover:bg-izi-black-200 text-white'
      }
    },
  },
}
</script>
