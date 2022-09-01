/// <reference types="astro/client" />

type PageData = {
  [i: string]: Editable;
};

type Editable = {
  type: EditableType;
  string?: string;
  image?: Image;
};

type EditableType = "string" | "image" | "error";

type Image = {
  src: string;
  alt: string;
};

type Button = {
  href: string;
  label: string;
};
