<template>
  <div class="px-8 md:px-24 py-12">
    <div class="rounded-3xl p-6 md:p-12 bg-gradient-to-br from-izi-orange-400 to-izi-orange-100 text-izi-black-100">
      <div class="grid grid-cols-2 gap-12 lg:gap-6 xl:gap-12">
        <!-- Left column -->
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
          <div class="space-y-3">
            <div
              v-for="item in items"
              :key="item.text"
              class="grid grid-cols-[auto,1fr] p-3 lg:p-6 rounded-3xl gap-3 lg:gap-6 bg-izi-white-100"
            >
              <div class="text-2xl flex items-center">
                <i
                  class="fa-xl fa-fw fa-2xl"
                  :class="[item.fontAwesomeIconClass]"
                ></i>
              </div>
              <div class="space-y-3">
                <h3 class="text-normal lg:text-lg font-semibold md:font-bold text-izi-black-100">
                  {{ item.text }}
                </h3>
                <p class="text-sm text-izi-black-300">
                  {{ item.subText }}
                </p>
              </div>
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
        <!-- Right column -->
        <img
          class="object-fut rounded-3xl w-full h-auto"
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
    items: {
      type: Array<{ text: string; subText: string; fontAwesomeIconClass: string }>,
      required: true,
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
  },
}
</script>
