import { style } from "@vanilla-extract/css";

export const traitsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  height: "100%",
});
