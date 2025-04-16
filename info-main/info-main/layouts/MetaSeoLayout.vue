<template>
  <div>
    <Html
      lang="fr"
      dir="ltr"
    >
      <Head>
        <Title />
        <Meta
          name="description"
          :content="appDescription"
        />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <Link
          ref="icon"
          href="/favicon.ico"
        />
        <!-- iOS -->
        <Link
          rel="apple-touch-icon"
          href="/images/apple-touch-icon.png"
        />
        <Meta
          name="apple-mobile-web-app-title"
          :content="appTitle"
        />
        <Meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <Meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <!-- Pour Android et autres navigateurs -->
        <!--        <Link-->
        <!--          rel="manifest"-->
        <!--          href="/manifest.json"-->
        <!--        />-->
        <Meta
          name="theme-color"
          content="#5f6bfe"
        />
        <Meta
          name="application-name"
          :content="appTitle"
        />
        <Meta
          name="mobile-web-app-capable"
          content="yes"
        />

        <!-- Open Graph Meta Tags -->
        <Meta
          property="og:title"
          :content="appTitle"
        />
        <Meta
          property="og:description"
          :content="appDescription"
        />
        <Meta
          property="og:image"
          content="/images/thumbnail.png"
        />
        <Meta
          property="og:url"
          :content="app.siteUrl"
        />
        <Meta
          property="og:type"
          content="website"
        />

        <!-- Twitter Meta Tags -->
        <Meta
          name="twitter:card"
          content="summary_large_image"
        />
        <Meta
          name="twitter:title"
          :content="appTitle"
        />
        <Meta
          name="twitter:description"
          :content="appDescription"
        />
        <Meta
          name="twitter:image"
          content="/images/thumbnail.png"
        />

        <Meta
          name="keywords"
          content="Réservation activités en ligne, Activités sportives Bretagne, Surf Bretagne, Ski France, Planche à voile, Pêche sportive, Vacances sportives France, Aventures en plein air, Tourisme sportif, Loisirs actifs, Sports nautiques, Activités de plein air, Réservation surf en ligne, Écoles de ski France, Cours de planche à voile, Expériences de pêche sportive, Destinations surf France, Stations de ski françaises, Bretagne aventure, Tourisme Bretagne, Activités familiales en plein air, Réservation vacances sportives, Séjours actifs en France, Sports extrêmes, Locations matériel sportif"
        />
        <Meta
          name="author"
          :content="app.name"
        />
      </Head>
      <Body>
        <img
          alt="image non visible"
          width="99999"
          height="99999"
          style="
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 99vw;
            height: 99vh;
            max-width: 99vw;
            max-height: 99vh;
          "
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
        />
        <slot />
      </Body>
    </Html>
  </div>
</template>
<script setup lang="ts">
/* HOOKS */
const app = useAppConfig()

const appTitle = 'Izidoor'
const appDescription =
  'Vous vendez des activités sportives et de loisir en plein air ? Adoptez un logiciel nouvelle génération pour simplifier la gestion de vos réservations et de votre activité.'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${app.name}` : `${app.name}`
  },
})
</script>
