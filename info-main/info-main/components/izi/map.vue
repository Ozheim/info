<template>
  <div
    :id="mapBoxContainerId"
    class="w-full h-96 rounded-r-xl border-b border-black"
  ></div>
</template>

<script lang="ts">
import { useRuntimeConfig } from 'nuxt/app'
import mapboxgl, { Map, Marker, ScaleControl } from 'mapbox-gl'
import type { PropType } from 'vue'

type Address = {
  latitude: string
  longitude: string
}

export default {
  props: {
    address: {
      type: Object as PropType<Address>,
      required: true,
    },
  },
  data() {
    return {
      mapBoxContainerId: 'contact-map',
    }
  },
  mounted() {
    this.initMapBox()
  },
  methods: {
    initMapBox(): void {
      const config = useRuntimeConfig()

      mapboxgl.accessToken = config.app.MAPBOX_PUBLIC_TOKEN || ''
      if (!this.address) {
        return
      }
      const map: Map = new Map({
        container: this.mapBoxContainerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [parseFloat(this.address.longitude), parseFloat(this.address.latitude)],
        zoom: 9,
        interactive: true,
      })
      // Create a default Marker and add it to the map.
      const marker1: Marker = new Marker()
        .setLngLat([parseFloat(this.address.longitude), parseFloat(this.address.latitude)])
        .addTo(map)
      console.log(marker1)
      // Add a scale control to the map
      map.addControl(new ScaleControl())

      this.disableMapScroll(map)
      map.getCanvas().addEventListener('mouseover', () => this.enableMapScroll(map), true)
      map.getCanvas().addEventListener('mouseout', () => this.disableMapScroll(map), true)
      map.getCanvas().addEventListener('focus', () => this.enableMapScroll(map), true)
      map.getCanvas().addEventListener('blur', () => this.disableMapScroll(map), true)
    },
    enableMapScroll(map: Map): void {
      map.scrollZoom.enable()
    },

    disableMapScroll(map: Map): void {
      map.scrollZoom.disable()
    },
  },
}
</script>
