<template>
  <div class="flex flex-col gap-16 slg:gap-24">
    <div class="flex flex-col gap-5 slg:gap-12">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text"
      >
        Premium Domains<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-base slg:text-lg">

Here are some of my domain names</p>
        
<p class="text-base slg:text-lg">
      </p>
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="flex flex-col items-center justify-center gap-28">
      <MainDomainItem
        v-for="proj in domains"
        :key="proj.id"
        :name="proj.name"
        :description="proj.description"
        :link="proj.link"
      />
    </div>
  </div>
</template>

<script>
import MainDomainItem from "../components/ui/MainDomainItem.vue";
import { useDomainStore } from "../store/domainStore";

export default {
  components: { MainDomainItem },
  setup() {
    const domainStore = useDomainStore();
    const domains = domainStore.getAllDomains;
    const grave = domainStore.getGraveDomains;

    return { domains, grave };
  },
};
</script>
