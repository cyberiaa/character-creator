import { style } from "@vanilla-extract/css";

export const characterSection = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const characterWrapper = style({
  //   width: "calc(33vh * 0.5625)",
  //   height: "33vh",
  width: "100%",
  height: "100%",
  maxWidth: "40vw",
  maxHeight: "80vh",
  borderRadius: "8px",
  boxShadow: "0 0 0 0.8px rgba(255,255,255,0.2)",
  zIndex: 1,

  "@media": {
    "(max-width: 580px)": {
      width: "calc(50vh * 0.5625)",
      height: "50vh",
      maxHeight: "50vh",
    },
    "(max-width: 300px)": {
      width: "calc(40vh * 0.5625)",
      height: "40vh",
      maxHeight: "40vh",
    },
  },

  transition: "box-shadow 0.125s ease-in-out",
  ":hover": {
    boxShadow: "0px 0px 10px 3px rgba(123, 97, 255, 0.3)",
  },
});
