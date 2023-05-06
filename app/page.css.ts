import { style } from "@vanilla-extract/css";

export const appContainer = style({
  minWidth: "100vw",
  minHeight: "100vh",
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "0.7fr 0.3fr",
});

export const traitHeader = style({
  display: "flex",
  flexDirection: "column",
});

export const traitContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const traitsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  height: "100%",
});
