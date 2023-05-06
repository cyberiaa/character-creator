import { style } from "@vanilla-extract/css";

export const itemWrapper = style({
  width: "100%",
  height: "100%",
  // maxHeight: "80px",
  maxHeight: "fit-content",
  maxWidth: "80px",
  borderRadius: "8px",
  // boxShadow: "0 0 0 0.8px rgba(255,255,255,0.2)",
  border: "1px solid red",
  zIndex: 1,
});

export const item = style({
  maxWidth: "100%",
  borderRadius: "8px",
  height: "100%",
  objectFit: "contain",
  pointerEvents: "none",
});
