import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "NETOPS Group",
        position: "System Administrator",
        from: "2020",
        to: "Cur.",
        link: "https://netops.com/",
      },
	  {
        id: 2,
        name: "Mega Computer Engineering",
        position: "Jr. System Administrator",
        from: "2019",
        to: "2020",
        link: "https://mega.rs/",
      },
	  {
        id: 3,
        name: "WPorb d.o.o.",
        position: "Junior PHP Developer",
        from: "2017",
        to: "2018",
        link: "https://atiscom.com/",
      },
	  {
        id: 4,
        name: "Atiscom Sàrl",
        position: "Wordpress Developer",
        from: "2016",
        to: "2017",
        link: "https://atiscom.com/",
      },
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
