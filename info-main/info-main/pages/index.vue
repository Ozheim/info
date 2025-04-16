<template>
  <!-- Main page -->
  <div>
    <SliceHeroPage
      :title="[{ text: 'Boostez votre saison', emphase: false }]"
      callToAction="Commencer"
      subCallToAction="Aucune carte de crédit nécessaire."
      :message="[
        { text: 'Augmentez vos revenus', class: 'font-bold' },
        { text: '&' },
        { text: 'gagnez du temps', class: 'font-bold' },
        { text: 'avec le nouveau logiciel dédié aux' },
        // { text: 'pros de l\'outdoor', class: 'font-bold text-pink-500' },
        { text: 'activités de loisir', class: 'font-bold text-pink-500' },
      ]"
      imageUrl="/images/screenshots/2024_03_07_izidoor_planning.png"
    />
    <div class="bg-izi-white-200">
      <SliceImagesBanner
        class="border-t-4 border-izi-black-100 py-12"
        :imagesUrls="[
          '/images/customers_logos/logo-aireole.png',
          '/images/customers_logos/logo-apb.png',
          '/images/customers_logos/logo-fishin-bretagne.png',
          '/images/customers_logos/logo-surfschool.jpg',
          '/images/customers_logos/logo-guy-kayak.jpeg',
          '/images/customers_logos/logo-maison-baie-msm.jpg',
          '/images/customers_logos/logo-nautisurf.jpg',
          '/images/customers_logos/logo-skiaoz.avif',
          '/images/customers_logos/logo-wave-school.png',
        ]"
      />
      <SliceHeroColumns
        imageUrl="/images/inspiration/surf.jpg"
        :title="[
          { text: 'Profitez du super' },
          { text: 'bénéfice', class: 'bg-pink-500 text-white py-1 px-2 rounded-xl' },
          { text: 'de le mort qui tue avec' },
          { text: 'Izidoor', class: 'underline decoration-wavy  decoration-4 underline-offset-8' },
        ]"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero."
        :items="[
          'Gestion des réservations',
          'Gestion des paiements',
          'Gestion des clients',
          'Gestion des disponibilités',
        ]"
        callToAction="Recevoir mes premieres résas"
      />
    </div>
    <div class="bg-izi-orange-200">
      <SliceHeroCentered
        imageUrl="/images/inspiration/mountain.jpg"
        :title="[
          { text: 'Nous sommes des développeurs informatiques' },
          { text: 'passionnés', emphase: true },
          { text: 'par le sport et la nature' },
        ]"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero."
        badgeText="Notre secret"
      />
      <SliceFeatures
        :featuresItems="[
          {
            title: [
              { text: 'La fonctionnalité', emphase: true },
              { text: 'qui va changer' },
              { text: 'votre vie', class: 'underline decoration-wavy  decoration-4 underline-offset-8' },
            ],
            message: [
              { text: 'Dépoussiérez votre canapé', class: 'font-bold' },
              { text: 'en 30 secondes chrono.' },
              { text: 'Vos amis ne vont pas en revenir', class: 'font-bold text-pink-500' },
            ],
            callToAction: 'Je dépoussière',
            subCallToAction: '',
            imageUrl: '/images/screenshots/2025_03_11_izidoor_planning_vertical.png',
          },
          {
            title: [{ text: 'La fonctionnalité 2', emphase: true }, { text: 'qui va aussi changer votre vie' }],
            message: [
              { text: 'Dépoussiérez votre canapé', class: 'font-bold' },
              { text: 'en 30 secondes chrono.' },
              { text: 'Vos amis ne vont pas en revenir', class: 'font-bold text-pink-500' },
            ],
            callToAction: 'Je dépoussière',
            subCallToAction: '',
            imageUrl: '/images/screenshots/2025_03_11_izidoor_checkout.png',
          },
        ]"
      />
      <SliceCustomersTestimonials
        title="Users love us"
        :testimonialsItems="[
          {
            imageUrl: 'https://i.pravatar.cc/300?img=1',
            name: 'Paul Bettany',
            structure: 'Ecole de voile du ponant',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero',
          },
          {
            imageUrl: 'https://i.pravatar.cc/300?img=2',
            name: 'Eloise Livon',
            structure: 'Moniteur de ski indépendant - La Plagne',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero',
          },
          {
            imageUrl: 'https://i.pravatar.cc/300?img=12',
            name: 'Zoé Duval',
            structure: 'Eco Activité',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero',
          },
          {
            imageUrl: 'https://i.pravatar.cc/300?img=4',
            name: 'Julien Bigon',
            structure: 'La pêche aux canards',
            text: 'Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero',
          },
          {
            imageUrl: 'https://i.pravatar.cc/300?img=18',
            name: 'Charles Medusal',
            structure: 'Ho hé matelots',
            text: 'Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero',
          },
        ]"
      />
      <SliceCallToActionHero
        :title="[{ text: 'Ceci est un' }, { text: 'test', emphase: true }]"
        :message="[
          { text: 'Augmentez vos revenus', class: 'font-bold' },
          { text: 'avec le nouveau logiciel conçu spécialement pour les' },
          { text: 'activités de loisir', class: 'font-bold text-pink-500' },
        ]"
        callToAction="C'est parti"
        :items="[
          {
            text: 'Parce que la raison 1',
            subText: 'Voici l explication de tout ça',
            fontAwesomeIconClass: 'fa-solid fa-tag',
          },
          {
            text: 'Parce que la raison 2',
            subText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero.',
            fontAwesomeIconClass: 'fa-solid fa-rocket-launch',
          },
          {
            text: 'Parce que la raison 3',
            subText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero.',
            fontAwesomeIconClass: 'fa-solid fa-cricket-bat-ball',
          },
        ]"
        variant="gray"
      />
    </div>
    <div class="bg-izi-white-200">
      <SliceCallToActionSimple
        :title="[
          {
            text: 'Ne perdez plus d\'argent',
            emphase: true,
            class: 'bg-pink-500 px-2 py-1 rounded-xl text-izi-white-100 font-bold',
          },
          { text: 'avec les annulations' },
        ]"
        callToAction="Essayer"
        :message="[
          { text: 'Les no show peuvent vous faire perdre beaucoup d\'argent. Avec Izidoor, vous êtes' },
          { text: 'payé à chaque réservation.', class: 'font-bold' },
          {
            text: 'Le logiciel récupère les paiements automatiquement pour vous, quelque soit la provenance des réservations (en ligne, par téléphone, par email, en personne, etc...).',
          },
        ]"
      />
      <SliceCallToActionHeroImage
        :title="[{ text: 'Ceci est un' }, { text: 'test', emphase: true }]"
        :message="[
          { text: 'Augmentez vos revenus', class: 'font-bold' },
          { text: 'avec le nouveau logiciel conçu spécialement pour les' },
          { text: 'activités de loisir', class: 'font-bold text-pink-500' },
        ]"
        imageUrl="/images/inspiration/fishing.jpg"
        :items="[
          {
            text: 'Parce que la raison 1',
            subText: 'Voici l explication de tout ça',
            fontAwesomeIconClass: 'fa-solid fa-tag',
          },
          {
            text: 'Parce que la raison 2',
            subText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero.',
            fontAwesomeIconClass: 'fa-solid fa-rocket-launch',
          },
          {
            text: 'Parce que la raison 3',
            subText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos est cum? Architecto ipsum soluta deserunt laudantium fugiat qui maxime doloremque quidem commodi porro harum, molestias inventore atque hic libero.',
            fontAwesomeIconClass: 'fa-solid fa-cricket-bat-ball',
          },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
