import { defineStore } from "pinia";

export const useDomainStore = defineStore("domainStore", {
  state: () => ({
    domains: [
      {
        id: 1,
        name: "👨‍💻 PC✘3.com",
          .href,
        description:
          "Guides on how to solve common cPanel and Linux problems.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://pcx3.com/",
      },
      {
        id: 2,
        name: "wp✘SS",
          .href,
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
    grave: [
      {
        id: 1,
        name: "ćirilica u ošišanu latinicu",
          .href,
        description:
          "Prevodi cirilicu u latinicu i obrnuto.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/stefanpejcic/Cirilica-u-Latinicu",
      },
      {
        id: 2,
        name: "WordPress Malware Collection",
          .href,
        description:
          "Collection of malware files found on WordPress sites.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/stefanpejcic/wordpress-malware",
      },
      {
        id: 3,
        name: "ColdFusion Cheat Sheet",
        description:
          "Master CF in no-time with these easy to remember cheat codes!",
        tech: ["Python", "MathLib"],
        link: "https://stefanpejcic.github.io/coldfusion/",
      },
	  {
        id: 4,
        name: "FixPermissions cPanel plugin",
        description:
          "Fix permissions for each domain under a cpanel account.",
        tech: ["Python", "MathLib"],
        link: "https://github.com/stefanpejcic/fixPermissions-cpanel-plugin",
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
