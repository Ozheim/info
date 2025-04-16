<template>
  <div class="bg-white py-8 px-3">
    <div class="w-full px-1 sm:px-4 md:px-6 lg:px-8 xl:px-28 2xl:px-36">
      <footer class="footer items-center">
        <aside>
          <IziLogo :size="150" />
          <p class="mt-2">Expériences touristiques et sportives</p>
        </aside>
        <nav class="flex xs:items-center flex-col xs:flex-row justify-between md:justify-end w-full gap-6">
          <div class="flex items-center gap-3">
            <span class="link link-hover hover:underline"> Mentions légales </span>
            <span class="link link-hover hover:underline"> CGV </span>
          </div>
          <!-- <a
            class="btn btn-primary btn-md"
            href="/all-destinations"
          >
            Réserver une activité
          </a> -->
        </nav>
      </footer>
      <div class="h-8 border-t mt-8"></div>
      <footer class="footer">
        <aside>
          <p class="space-x-2">
            <span>Copyright</span>
            <span>©</span>
            <span>{{ currentYear }}</span>
            <span>Izidoor</span>
          </p>
        </aside>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import { DateTime } from 'luxon'

export default {
  computed: {
    currentYear(): number {
      return DateTime.now().year
    },
  },
}
</script>
