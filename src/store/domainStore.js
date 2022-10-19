import { defineStore } from "pinia";

export const useDomainStore = defineStore("domainStore", {
  state: () => ({
    domains: [
      {
        id: 1,
        name: "plugins.club",
        description:
          "Premium .club domain name",
        link: "https://plugins.club/",
      },
      {
        id: 2,
        name: "TE.ST",
	description:
          "Short .st domain used for testing",
        link: "https://te.st/",
      },
      {
        id: 3,
		name: "sh.guide",
        description:
          ".guide",
        link: "https://sh.guide",
		featured: true,
      },
      {
        id: 4,
        name: "zu.rs",
        description:
          "short .rs",
        link: "https://zu.rs",
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
