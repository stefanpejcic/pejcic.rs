<template>
  <div class="flex flex-col gap-16 slg:gap-24">
    <div class="flex flex-col gap-5 slg:gap-12">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text"
      >
        Websites<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-base slg:text-lg">

Outside of work, I like doing side projects to try out new tech and build something fun.</p>
        
<p class="text-base slg:text-lg">
I spend the majority of my free time on these projects.
      </p>
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="flex flex-col items-center justify-center gap-28">
      <MainProjectItem
        v-for="proj in projects"
        :key="proj.id"
        :name="proj.name"
        :image="proj.image"
        :description="proj.description"
        :link="proj.link"
      />
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="flex flex-col gap-2">
      <h3 id="opensource" class="text-3xl font-theme_bold text-head_text">Open Source</h3>
      <p>mostly cPanel and WordPress stuff..</p>
      <div class="flex flex-col mt-10 gap-8">
        <div v-for="proj in grave" :key="proj.id" class="flex flex-col gap-1">
          <a class="font-theme_bold text-head_text text-lg" :href="proj.link"
            >{{ proj.name }}
            <Icon class="inline text-xl" icon="ep:top-right" color="#eaeaea"
          /></a>
          <p class="font-theme text-sm lg:text-lg">{{ proj.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import { useProjectStore } from "../store/projectStore";

export default {
  components: { MainProjectItem },
  setup() {
    const projectStore = useProjectStore();
    const projects = projectStore.getAllProjects;
    const grave = projectStore.getGraveProjects;

    return { projects, grave };
  },
};
</script>
