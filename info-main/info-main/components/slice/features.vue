<template>
  <div class="py-12">
    <div class="bg-gradient-to-br from-izi-orange-400 to-izi-orange-100 py-3 md:py-6 lg:py-24 space-y-24">
      <IziFeature
        v-for="(featureItem, index) in featuresItems"
        :key="featureItem.title[0].text"
        :title="featureItem.title"
        :message="featureItem.message"
        :callToAction="featureItem.callToAction"
        :subCallToAction="featureItem.subCallToAction"
        :imageUrl="featureItem.imageUrl"
        :reverse="index % 2 === 0"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    featuresItems: {
      type: Array<{
        title: Array<{ text: string; emphase?: boolean; class?: string }>
        message: Array<{ text: string; emphase?: boolean; class?: string }>
        callToAction: string
        subCallToAction: string
        imageUrl: string
      }>,
      required: true,
    },
  },
}
</script>
