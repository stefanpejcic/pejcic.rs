import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "PCx3.com",
        image: new URL("../assets/featured/pcx3.png", import.meta.url)
          .href,
        description:
          "Guides on how to solve common cPanel and Linux problems.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://pcx3.com/",
      },
      {
        id: 2,
        name: "WPXSS",
        image: new URL("../assets/featured/portfolioprev.png", import.meta.url)
          .href,
        description:
          "WordPress tutorials and instructions for advanced users.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://wpxss.com/",
      },
      {
        id: 3,
		name: "Pčelarstvo Pejčić",
        image: new URL("../assets/featured/pcelarstvopejcic.png", import.meta.url).href,
        description:
          "Med i ostali pčelinji proizvodi iz srca Stare Planine.",
        tech: ["JS", "Node.js", "MongoDB", "Heroku"],
        link: "https://pcelarstvopejcic.com",
		featured: true,
      },
      {
        id: 4,
        name: "CpanelPlugins.com",
        image: new URL("../assets/featured/cpanelplugins.png", import.meta.url).href,
        description:
          "a github-hosted collection of awesome cPanel plugins.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://cpanelplugins.com",
        featured: true,
      },
      {
        id: 5,
        name: "plugins.club",
        image: new URL("../assets/featured/advice-gen.png", import.meta.url)
          .href,
        description:
          "Premium WordPress plugins club",
        tech: ["HTML", "CSS", "JS", "REST APIs"],
        link: "https://plugins.club/",
      },
    ],
    grave: [
      {
        id: 1,
        name: "ćirilica u ošišanu latinicu",
        image: new URL("../assets/featured/case_changer.jpg", import.meta.url)
          .href,
        description:
          "Prevodi cirilicu u latinicu i obrnuto, cilj je napisati konverter u svim jezicima.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/stefanpejcic/Cirilica-u-Latinicu",
      },
      {
        id: 2,
        name: "WordPress Malware Collection",
        image: new URL("../assets/featured/tic_tac_toe.jpg", import.meta.url)
          .href,
        description:
          "Collection of malware files found on WordPress sites.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/stefanpejcic/wordpress-malware",
      },
      {
        id: 3,
        name: "ColdFusion Cheat Sheet",
        image: new URL("../assets/featured/calc.jpg", import.meta.url).href,
        description:
          "Master CF in no-time with these easy to remember cheat codes!",
        tech: ["Python", "MathLib"],
        link: "https://stefanpejcic.github.io/coldfusion/",
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});
