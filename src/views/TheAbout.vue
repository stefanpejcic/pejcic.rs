<template>
  <div class="flex flex-col gap-8">
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I'm a SysAdmin who dabble with WordPress, crypto and blogging.
	  Some day it will hopefully all fit together into a unified entity.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I have over 8 years of experience working in <LinkBtn link="https://profiles.wordpress.org/stefanpejcic/#content-plugins" target="_blank">WordPress</LinkBtn> and <LinkBtn link="https://forums.cpanel.net/members/stefanpejcic.1058429/" target="_blank">cPanel</LinkBtn>.
	  Currently, I work as as a System Administrator and Team Leader at <LinkBtn link="https://netops.com" target="_blank">NETOPS Group</LinkBtn> delivering exceptional support to customers through phone, email, and chat. I lead by example, organize work, build reports, handle escalations, and help with ad hoc projects, and training.
    </p>
	
	<p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
    For the past several years, I’ve been working more closely with cPanel servers on a daily basis providing fully managed cPanel and WordPress support to thousands of customers. I’ve picked up many tricks and written many scripts in this time frame that I want to share with the world.
    </p>
	<p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
    I recently got the chance to write a technical article for my employer and it ignited a fire in my heart. I’ve discovered a new passion for technical writing and this is going to be the focus of my endeavors moving forward.
    </p>
	<p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
   Throughout my career, I’ve worked with companies large and small to meet their business goals and I’ve been fortunate enough to contribute to such global brands as Michelin and Raiffeisen Bank.
    </p>
<p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
If you want to work together, have an idea or simply want to say hello, then <LinkBtn link="mailto:stefan@pejcic.rs">send me an email</LinkBtn>.
	</p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <a
          class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
          v-for="work in works"
          :key="work.id"
          :href="work.link"
        >
          <span class="font-theme_bold text-head_text">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">{{
            work.position
          }}</span>
          <span class="text-sm sm:text-base"
            >{{ work.from }} - {{ work.to }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { useWorkStore } from "../store/workStore";

export default {
  setup() {
    const workStore = useWorkStore();
    const works = workStore.getAllWorks;

    return { works };
  },
};
</script>
