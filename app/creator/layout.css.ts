import { style } from "@vanilla-extract/css";

export const section = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  padding: "24px",
});

export const appContainer = style({
  minWidth: "100vw",
  minHeight: "100vh",
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "0.7fr 0.3fr",
});
