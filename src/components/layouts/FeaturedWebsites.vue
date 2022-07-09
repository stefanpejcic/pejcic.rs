<template>
  <div class="flex flex-col gap-2 lg:gap-4">
    <h3 class="font-theme_bold text-2xl text-head_text">Featured Projects</h3>
    <p>Here are some of the projects that I'm proud of.</p>
    <div
      class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
    >
      <WebsiteItem
        v-for="website in websites"
        :key="website.id"
        :name="website.name"
        :image="website.image"
        :description="website.description"
        :tech="website.tech"
        :link="website.link"
      />
    </div>
  </div>
</template>
<script>
import { useWebsiteStore } from "../../store/websiteStore";
import WebsiteItem from "../ui/WebsiteItem.vue";

export default {
  setup() {
    const websiteStore = useWebsiteStore();
    const websites = websiteStore.getFeaturedWebsites;

    return { websites };
  },
  components: { WebsiteItem },
};
</script>
