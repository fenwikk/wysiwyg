import { writable } from "svelte/store";

const pageData = writable<PageData>({
  title: {
    type: "string",
    string: "Hem"
  },
  Logo: {
    type: "image",
    string: "/logo.png",
  },
  HeroH: {
    type: "string",
    string: "Hi",
  },
  HeroB: {
    type: "string",
    string: "yeah",
  },
  AboutH: {
    type: "string",
    string: "Hi",
  },
  AboutB: {
    type: "string",
    string: "yeah",
  },
});
export default pageData;
