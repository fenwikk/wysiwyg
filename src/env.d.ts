/// <reference types="astro/client" />

type PageData = {
  [i: string]: Editable;
};

type Editable = {
  type: EditableType;
  string?: string;
};

type EditableType = "string" | "image" | "error";

type Button = {
  href: string;
  label: string;
};
