import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("websiteStore", {
  state: () => ({
    websites: [
      {
        id: 1,
        name: "PCx3.com",
        image: new URL("../assets/featured/scarlet_dyn.png", import.meta.url)
          .href,
        description:
          "Guides on how to solve common cPanel and Linux problems.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://pcx3.com/",
        featured: true,
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
        name: "CpanelPlugins.com",
        image: new URL("../assets/featured/stust.png", import.meta.url).href,
        description:
          "CpanelPlugins is a github-hosted collection of awesome cPanel plugins.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://cpanelplugins.com",
        featured: true,
      },
      {
        id: 4,
        name: "Pčelarstvo Pejčić",
        image: new URL("../assets/featured/mikey.jpg", import.meta.url).href,
        description:
          "Med i pčelinji proizvodi iz srca Stare Planine",
        tech: ["JS", "Node.js", "MongoDB", "Heroku"],
        link: "https://discord.com/oauth2/authorize?client_id=819239364395532370&permissions=3912576065&scope=bot%20applications.commands",
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
        name: "Text Case Changer",
        image: new URL("../assets/featured/case_changer.jpg", import.meta.url)
          .href,
        description:
          "A simple text case modifier to change case of text as need.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/mightykillrr/case_changer",
      },
      {
        id: 2,
        name: "Tic Tac Toe",
        image: new URL("../assets/featured/tic_tac_toe.jpg", import.meta.url)
          .href,
        description:
          "A game I made as a school project which I am very proud of.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/mightykillrr/tic-tac-toe",
      },
      {
        id: 3,
        name: "Advanced Calculator",
        image: new URL("../assets/featured/calc.jpg", import.meta.url).href,
        description:
          "An advanced calculator and my first ever HUGE Python project.",
        tech: ["Python", "MathLib"],
        link: "https://github.com/mightykillrr/advanced_calc",
      },
    ],
  }),
  getters: {
    getAllWebsites: (state) => state.websites,
    getFeaturedWebsites: (state) =>
      state.websites.filter((website) => website.featured),
    getGraveWebsites: (state) => state.grave,
  },
});
