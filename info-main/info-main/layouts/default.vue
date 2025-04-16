<template>
  <div class="w-full bg-izi-orange-100 flex flex-col text-izi-black-100">
    <!-- HEADER -->
    <SliceNavbar />
    <!-- <SliceStickyNavBar /> -->
    <!-- BODY -->
    <main class="w-full">
      <slot></slot>
    </main>
    <!-- FOOTER -->
    <SliceFooter />
  </div>
</template>

<script lang="ts">
import { DateTime } from 'luxon'
import { Crisp } from 'crisp-sdk-web'

export default {
  data() {
    return {
      currentYear: DateTime.now().year,
    }
  },
  mounted() {
    Crisp.configure(
      '8d781dbd-dc87-4738-96da-e3f5a6c12ae8', // WEBSITE_ID
      {
        cookieDomain: 'izidoor.io',
      },
    )
  },
}
</script>
