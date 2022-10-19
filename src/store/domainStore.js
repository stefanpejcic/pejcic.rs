import { defineStore } from "pinia";

export const useDomainStore = defineStore("domainStore", {
  state: () => ({
    domains: [
      {
        id: 1,
        name: "👨‍💻 PC✘3.com",
        description:
          "Guides on how to solve common cPanel and Linux problems.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://pcx3.com/",
      },
      {
        id: 2,
        name: "wp✘SS",
	description:
          "WordPress tutorials and instructions for advanced users.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://wpxss.com/",
      },
      {
        id: 3,
		name: "🐝 Pčelarstvo Pejčić",
        description:
          "Med i ostali pčelinji proizvodi iz srca Stare Planine.",
        tech: ["JS", "Node.js", "MongoDB", "Heroku"],
        link: "https://pcelarstvopejcic.com",
		featured: true,
      },
      {
        id: 4,
        name: "CpanelPlugins.com",
        description:
          "a github-hosted collection of awesome cPanel plugins.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://cpanelplugins.com",
        featured: true,
      },
	  {
        id: 5,
        name: "🔌 plugins.club",
        description:
          "Free & Premium WordPress plugins.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://plugins.club",
      },
    ],
  }),
  getters: {
    getAllDomains: (state) => state.domains,
    getFeaturedDomains: (state) =>
      state.domains.filter((domain) => domain.featured),
    getGraveDomains: (state) => state.grave,
  },
});
