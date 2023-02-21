import { globalCss } from "@stitches/react";

export const setupStyles = globalCss({
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "$background",

    color: "$text",
    fontFamily: "$mulish",
    fontSize: "$default",
    lineHeight: "24px",

    transition: "$long",

    "&.overflow-hidden": {
      overflow: "hidden",
    },
  },
  a: {
    cursor: "pointer",

    color: "inherit",
    textDecoration: "none",
  },
  ul: {
    margin: "0",
    padding: "0",
  },
  button: {
    padding: 0,

    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",

    fontFamily: "$mulish",
  },
  "*, ::before, ::after": {
    boxSizing: "border-box",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  ".visually-hidden": {
    position: "absolute",

    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,

    whiteSpace: "nowrap",

    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  },
});
