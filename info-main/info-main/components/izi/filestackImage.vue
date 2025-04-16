<template>
  <img
    :src="`https://cdn.filestackcontent.com/${filestackHandle}`"
    :srcset="`
      https://cdn.filestackcontent.com/resize=width:180/${filestackHandle} 180w,
      https://cdn.filestackcontent.com/resize=width:360/${filestackHandle} 360w,
      https://cdn.filestackcontent.com/resize=width:540/${filestackHandle} 540w,
      https://cdn.filestackcontent.com/resize=width:720/${filestackHandle} 720w,
      https://cdn.filestackcontent.com/resize=width:900/${filestackHandle} 900w,
      https://cdn.filestackcontent.com/resize=width:1080/${filestackHandle} 1080w,
      https://cdn.filestackcontent.com/resize=width:1296/${filestackHandle} 1296w,
      https://cdn.filestackcontent.com/resize=width:1512/${filestackHandle} 1512w,
      https://cdn.filestackcontent.com/resize=width:1728/${filestackHandle} 1728w,
      https://cdn.filestackcontent.com/resize=width:1944/${filestackHandle} 1944w,
      https://cdn.filestackcontent.com/resize=width:2160/${filestackHandle} 2160w,
      https://cdn.filestackcontent.com/resize=width:2376/${filestackHandle} 2376w,
      https://cdn.filestackcontent.com/resize=width:2592/${filestackHandle} 2592w,
      https://cdn.filestackcontent.com/resize=width:2808/${filestackHandle} 2808w,
      https://cdn.filestackcontent.com/resize=width:3024/${filestackHandle} 3024w`"
    :alt="alt"
    sizes="60vw"
  />
</template>

<script lang="ts">
export default {
  props: {
    filestackImageUrl: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    filestackHandle(): string {
      const urlSubPathes = this.filestackImageUrl?.split('/')
      return urlSubPathes ? urlSubPathes[urlSubPathes.length - 1] : ''
    },
  },
}
</script>
