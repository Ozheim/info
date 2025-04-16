<template>
  <div
    class="bg-[url(/images/inspiration/surf.jpg)] bg-[background-size(cover)] lg:h-[100vh] overflow-hidden space-y-6 lg:space-x-0 lg:flex lg:flex-col lg:gap-6"
    :style="{ 'background-size': 'cover' }"
  >
    <div class="pt-8 lg:pt-8 shrink-0">
      <div class="flex justify-center">
        <div
          class="text-center px-2 sm:px-0 sm:w-4/5 lg:w-3/4 overflow-hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl"
        >
          <IziTextEmphased
            :text="title"
            globalClass="space-x-3"
            defaultClass="font-black"
          />
        </div>
      </div>
      <div class="flex justify-center mt-3">
        <div class="text-center w-3/4 md:w-2/3 md:text-lg xl:text-xl font-light">
          <IziTextEmphased
            :text="message"
            defaultClass="font-light"
            globalClass="space-x-2"
          />
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <IziButton size="lg">
          <span>{{ callToAction }}</span>
          <i class="fa-solid fa-arrow-right"></i>
        </IziButton>
      </div>
      <div class="flex justify-center mt-3">
        <p class="font-normal md:font-extralight text-xs">{{ subCallToAction }}</p>
      </div>
    </div>
    <div
      v-if="imageUrl"
      class="h-24 xxs:h-36 xs:h-48 sm:h-64 md:h-96 lg:grow overflow-hidden px-6 xs:px-12 lg:px-24 xl:px-48 2xl:px-64 3xl:px-96"
    >
      <img
        :src="imageUrl"
        alt="background"
        class="object-fill w-full rounded-xl lg:rounded-3xl border-2 md:border-4 border-izi-black-100"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: Array<{ text: string; emphase?: boolean; class?: string }>,
      required: true,
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
        {
          text: 'Izidoor vous accompagne pour optimiser les revenus et la gestion de vos activités touristiques et sportives.',
        },
      ],
    },
    imageUrl: {
      type: String,
      default: undefined,
    },
  },
}
</script>
