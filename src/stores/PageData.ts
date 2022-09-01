import { writable } from "svelte/store";

const pageData = writable<PageData>({
  title: {
    type: "string",
    string: "Hem",
  },
  Logo: {
    type: "image",
    image: {
      src: "/logo.png",
      alt: "Davidsons Logo",
    },
  },
  HeroH: {
    type: "string",
    string: `Ett <b><u>riktigt</u></b> smart<br>sätt att odla`,
  },
  HeroB: {
    type: "string",
    string:
      "Genom hydroponiska lösningar odlar vi våra växter i vatten istället för vanlig jord. Spara pengar, vatten och rädda världen du med idag!",
  },
  Florist: {
    type: "image",
    image: {
      src: "/florist.png",
      alt: "Kid playing with hydroponics",
    },
  },
  Plant: {
    type: "image",
    image: {
      src: "/plant.png",
      alt: "Hydroponics setup",
    },
  },
  AboutH: {
    type: "string",
    string: "Om Oss",
  },
  AboutB: {
    type: "string",
    string:
      "Davidsons grundades av Aldwin Velazco tillsammans med hans syskon. Aldwins intresse för odling började när han hjälpte till hans föräldrar och morföräldrar att odla kaffebönor och annanas. Hans intresse för hydroponik började efter hans examen från college när han läste om en jordbruksartikel om hydroponik. Detta ledde till att han startade hydrogården i ACV Agri-Farm i Silang, Filippinerna. Nu startar han nytt i Sverige och hjälper andra komma igång med hydroponik",
  },
});
export default pageData;
