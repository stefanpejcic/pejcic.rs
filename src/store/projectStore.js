import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "OpenPanel",
        image: new URL("../assets/featured/openpanel.png", import.meta.url)
          .href,
        description:
          "Next generation hosting control panel",
        tech: ["Python", "React", "Flask", "Docker", "Docusaurus"],
        link: "https://openpanel.com/",
		featured: true,
      },
      {
        id: 2,
        name: "Sentinel Firewall",
        image: new URL("../assets/featured/sentinelfirewall.png", import.meta.url)
          .href,
        description:
          "fork of ConfigServer Firewall & Security",
        tech: ["Perl", "Bash"],
        link: "https://sentinelfirewall.org/",
		featured: true,
      },
		{
        id: 3,
        name: "wp✘SS",
        image: new URL("../assets/featured/wpxss.webp", import.meta.url)
          .href,
        description:
          "WordPress tutorials and instructions for advanced users.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://wpxss.com/",
      },
      {
        id: 4,
		name: "🐝 Pčelarstvo Pejčić",
        image: new URL("../assets/featured/pcelarstvopejcic.webp", import.meta.url).href,
        description:
          "Med i ostali pčelinji proizvodi iz srca Stare Planine.",
        tech: ["JS", "Node.js", "MongoDB", "Heroku"],
        link: "https://pcelarstvopejcic.com",
      },
    ],
    grave: [
      {
        id: 1,
        name: "ćirilica u ošišanu latinicu",
        image: new URL("../assets/featured/case_changer.jpg", import.meta.url)
          .href,
        description:
          "Prevodi cirilicu u latinicu i obrnuto.",
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
	  {
        id: 4,
        name: "FixPermissions cPanel plugin",
        image: new URL("../assets/featured/calc.jpg", import.meta.url).href,
        description:
          "Fix permissions for each domain under a cpanel account.",
        tech: ["Python", "MathLib"],
        link: "https://github.com/stefanpejcic/fixPermissions-cpanel-plugin",
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
