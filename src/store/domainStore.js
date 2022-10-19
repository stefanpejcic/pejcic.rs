import { defineStore } from "pinia";

export const useDomainStore = defineStore("domainStore", {
  state: () => ({
    domains: [
      {
        id: 1,
        name: "👨‍💻 PC✘3.com",
        description:
          "Guides on how to solve common cPanel and Linux problems.",
        link: "https://pcx3.com/",
      },
      {
        id: 2,
        name: "wp✘SS",
	description:
          "WordPress tutorials and instructions for advanced users.",
        link: "https://wpxss.com/",
      },
      {
        id: 3,
		name: "🐝 Pčelarstvo Pejčić",
        description:
          "Med i ostali pčelinji proizvodi iz srca Stare Planine.",
        link: "https://pcelarstvopejcic.com",
		featured: true,
      },
      {
        id: 4,
        name: "CpanelPlugins.com",
        description:
          "a github-hosted collection of awesome cPanel plugins.",
        link: "https://cpanelplugins.com",
        featured: true,
      }
    ],
  }),
  getters: {
    getAllDomains: (state) => state.domains,
    getFeaturedDomains: (state) =>
      state.domains.filter((domain) => domain.featured),
    getGraveDomains: (state) => state.grave,
  },
});
