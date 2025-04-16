<template>
  <div class="px-8 md:px-24 py-12">
    <div
      class="rounded-3xl bg-izi-black-100 text-izi-orange-300 h-full lg:flex py-3 md:py-6 lg:py-24 gap-12"
      :class="[reverse ? 'flex-row-reverse pr-24' : 'pl-24']"
    >
      <!-- Column 1 -->
      <div class="w-1/2 flex items-center">
        <div class="space-y-12">
          <div class="space-y-6 lg:space-y-8">
            <div class="text-5xl font-bold">
              <IziTextEmphased
                :text="title"
                globalClass="space-x-2"
              />
            </div>
            <div class="text-lg">
              <IziTextEmphased
                :text="message"
                globalClass="space-x-2"
              />
            </div>
          </div>
          <div class="space-y-6">
            <IziButton
              :text="callToAction"
              color="pink"
              size="lg"
            >
              <span>{{ callToAction }}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </IziButton>
            <p
              v-if="subCallToAction"
              class="text-xs font-light"
            >
              {{ subCallToAction }}
            </p>
          </div>
        </div>
      </div>
      <!-- Column 2 -->
      <div class="w-1/2 flex items-center">
        <img
          class="w-full h-auto object-scale"
          :class="[reverse ? 'rounded-r-3xl' : 'rounded-l-3xl']"
          :src="imageUrl"
          :alt="imageUrl"
        />
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
    message: {
      type: Array<{ text: string; emphase?: boolean; class?: string }>,
      default: [
        { text: 'Izidoor vous accompagne pour optimiser les revenus et la gestion de vos activités.', emphase: false },
        { text: 'touristiques et sportives', emphase: true },
      ],
    },
    callToAction: {
      type: String,
      default: 'Découvrez notre logiciel',
    },
    subCallToAction: {
      type: String,
      default: "Pas d'engagement, 100% gratuit",
    },
    imageUrl: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
