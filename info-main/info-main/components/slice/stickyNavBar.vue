<template>
  <div
    class="hidden xs:flex bg-white py-3 w-full fixed z-50 md:h-[60px] items-center border-b shadow-md"
    :class="isScrolled ? 'top-0 transition-top duration-500 ease-in-out' : '-top-24'"
  >
    IziStickyNavBar!!!
    <header class="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-28 2xl:px-36 flex items-center">
      <div class="flex flex-col md:flex-row justify-between items-center w-full gap-6">
        <nuxt-link
          property="item"
          typeof="WebPage"
          to="/"
        >
          <IziLogo :size="125" />
        </nuxt-link>

        <nav>
          <ul class="flex gap-6">
            <li
              v-for="section in sections"
              :key="section.id"
            >
              <a
                :href="'#' + section.id"
                class="hover:text-accent hover:opacity-70 transition-opacity duration-300 ease-in-out active:text-accent active:opacity-100 text-sm sm:text-base"
                :class="[activeSectionId === section.id ? 'text-accent' : 'text-black']"
                @click="handleClickSection(section.id, $event)"
              >
                {{ section.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { slideToSection } from '~/lib/domUtils'

export default {
  data() {
    return {
      scrollPoint: 200,
      scrollOffsetActiveSection: 300,
      isScrolled: false,
      activeCheckEnabled: true,
      activeSectionId: null as string | null,
      sections: [
        {
          name: 'En savoir plus',
          id: 'about',
        },
        {
          name: 'Activités',
          id: 'activities',
        },
        {
          name: 'Disciplines',
          id: 'disciplines',
        },
        {
          name: 'Contact',
          id: 'contact',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    slideToSection,
    handleScroll() {
      this.isScrolled = window.scrollY > this.scrollPoint
      this.checkActiveSection()
    },
    handleClickSection(sectionId: string, event: MouseEvent) {
      event.preventDefault()
      this.activeSectionId = sectionId
      this.activeCheckEnabled = false
      slideToSection(sectionId)
      // Wait for the scroll to finish
      setTimeout(() => {
        this.activeCheckEnabled = true
      }, 3000)
    },
    checkActiveSection() {
      if (!this.activeCheckEnabled) {
        return
      }
      let currentSection = null

      for (const section of this.sections) {
        const sectionElement = document.getElementById(section.id)
        if (sectionElement) {
          const bounds = sectionElement.getBoundingClientRect()
          if (bounds.top <= this.scrollOffsetActiveSection && bounds.bottom > this.scrollOffsetActiveSection) {
            currentSection = section.id
            break
          }
        }
      }

      this.activeSectionId = currentSection
    },
  },
}
</script>
