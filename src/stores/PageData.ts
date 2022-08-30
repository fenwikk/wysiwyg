import { writable } from "svelte/store";

const pageData = writable<PageData>({
  HeroH: {
    type: "html",
    string: "Hi",
  },
  HeroB: {
    type: "html",
    string: "yeah",
  },
  AboutH: {
    type: "html",
    string: "Hi",
  },
  AboutB: {
    type: "html",
    string: "yeah",
  },
});
export default pageData;
