<template>
  <div>
    <div class="py-24 lg:mt-0 space-y-3">
      <div class="flex justify-center">
        <div
          class="text-center px-2 sm:px-0 sm:w-4/5 lg:w-3/4 overflow-hidden text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          <IziTextEmphased
            :text="title"
            globalClass="space-x-2"
          />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-center w-3/4 md:w-3/4 whitespace-normal text-izi-black-200 text-lg">
          <IziTextEmphased
            :text="message"
            globalClass="space-x-2"
          />
        </div>
      </div>
      <div class="flex justify-center pt-3">
        <IziButton
          color="black"
          size="lg"
        >
          <span>{{ callToAction }}</span>
          <i class="fa-solid fa-arrow-right"></i>
        </IziButton>
      </div>
      <div class="flex justify-center mt-3">
        <p class="font-extralight text-xs">{{ subCallToAction }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: Array<{ text: string; emphase?: boolean; class?: string }>,
      default: [
        { text: 'Pour les', emphase: false },
        { text: "pro de l'outdoor", emphase: true },
        { text: 'qui veulent', emphase: false },
        { text: 'booster leur saison', emphase: true },
      ],
    },
    callToAction: {
      type: String,
      default: 'Découvrez notre logiciel',
    },
    subCallToAction: {
      type: String,
      default: undefined,
    },
    message: {
      type: Array<{ text: string; emphase?: boolean; class?: string }>,
      default: [
        { text: 'Izidoor vous accompagne pour optimiser les revenus et la gestion de vos activités.', emphase: false },
        { text: 'touristiques et sportives', emphase: true },
      ],
    },
    imageUrl: {
      type: String,
      default: undefined,
    },
  },
}
</script>
