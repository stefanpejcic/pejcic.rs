<template>
  <a
    class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
    :href="link"
  >
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">{{
        name
      }}</span>
      <p class="text-sm md:text-base">
        {{ description }}
      </p>
    </div>
  </a>
</template>
<script>
export default {
  setup() {},
  props: ["name", "description", "tech", "link"],
};
</script>
