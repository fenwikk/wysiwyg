/// <reference types="astro/client" />

type PageData = {
  [i: string]: Editable;
};

type Editable = {
  type: EditableType;
  string?: string;
  image?: Image;
  button?: Button;
};

type EditableType = "string" | "image" | "button" | "error";

type Image = {
  src: string;
  alt: string;
};

type Button = {
  href: string;
  label: string;
};
