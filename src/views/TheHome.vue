<script>
import FeaturedWebsites from "../components/layouts/FeaturedWebsites.vue";
import TheHero from "../components/layouts/TheHero.vue";
import TheSocials from "../components/layouts/TheSocials.vue";
export default {
  setup() {},
  components: { TheHero, TheSocials, FeaturedWebsites },
};
</script>

<template>
  <div class="flex flex-col gap-16 mb-16">
    <TheHero />
    <TheSocials />
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <FeaturedWebsites />
  </div>
</template>
