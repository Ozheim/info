<template>
  <div class="breadcrumbs">
    <ul
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
    >
      <li
        property="itemListElement"
        typeof="ListItem"
      >
        <nuxt-link
          property="item"
          typeof="WebPage"
          to="/"
        >
          <span property="name"><i class="fa-solid fa-house"></i></span>
        </nuxt-link>
        <meta
          property="position"
          content="1"
        />
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <nuxt-link
          property="item"
          typeof="WebPage"
          :to="crumb.path"
        >
          <span property="name">{{ crumb.title }}</span>
        </nuxt-link>
        <meta
          property="position"
          :content="String(index + 2)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs(): Array<{ title: string; path: string }> {
      const fullPath = useRoute().fullPath
      const subPathes: Array<string> = fullPath.startsWith('/') ? fullPath.substring(1).split('/') : fullPath.split('/')
      let path = ''
      const crumbs: Array<{ title: string; path: string }> = subPathes.reduce(
        (acc, subPath) => {
          path = `${path}/${subPath}`
          acc.push({
            title: subPath.replaceAll('-', ' '),
            path,
          })
          return acc
        },
        [] as Array<{ title: string; path: string }>,
      )
      return crumbs
    },
  },
}
</script>
