/// <reference types="astro/client" />

type PageData = {
  [i: string]: Editable;
};

type Editable = {
  type: EditableType;
  string?: string;
  button?: Button;
};

type EditableType = "string" | "image" | "error";

type Button = {
  href: string;
  label: string;
};
