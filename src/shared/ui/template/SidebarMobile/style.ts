import { styled } from "@/shared/lib/styles";
import Link from "next/link";
import Image from "next/image";

export const SidebarOverlay = styled("div", {
  position: "fixed",
  zIndex: "$sidebarMobile",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",

  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "$overlay",
  transition: "$default",
  opacity: "0",

  variants: {
    isOpened: {
      true: {
        visibility: "visible",
        opacity: "1",
      },
    },
  },
});

export const SidebarInnerWrapper = styled("div", {
  overflowY: "scroll",
});

export const Sidebar = styled("div", {
  width: "70%",
  backgroundColor: "$background",
  boxShadow: "$default",
  transform: "translateX(-100%)",
  transition: "$default",
  height: '100%',

  variants: {
    isActive: {
      true: {
        transform: "translateX(0)",
      },
    },
  },

  '@fromWideMobile': {
    width: '330px',
  },

  '@fromTablet': {
    width: '400px',
  }
});

export const UserWrapper = styled("div", {
  backgroundColor: "$accent",
  display: "flex",
  justifyContent: "left",
  flexDirection: "column",
  padding: "15px",

  '@fromWideMobile': {
    padding: "25px",
  },

  '@fromTablet': {
    padding: "35px",
  }
});

export const UserActions = styled("ul", {
  padding: "15px 15px 0 15px",

  '@fromWideMobile': {
    padding: "25px 25px 0 25px"
  },

  '@fromTablet': {
    padding: "25px 35px 0 35px"
  }
});

export const UserActionsItem = styled(Link, {
  fontFamily: "$mulish",
  fontSize: "$default",
  color: "$text",
  display: "flex",
  alignItems: "center",
  margin: "20px 0",

  "&:first-child": {
    marginTop: "0",
  },

  '@fromTablet': {
    margin: "25px 0",
    fontSize: "$medium",
  }
});

export const UserHelperActions = styled("ul", {
  padding: "0px 15px 10px 15px",

  '@fromWideMobile': {
    padding: "0 25px 25px 25px"
  },

  '@fromTablet': {
    padding: "0 35px 35px 35px"
  }
});

export const UserHelperActionsItem = styled(Link, {
  fontFamily: "$mulish",
  fontSize: "$default",
  color: "$text",
  display: "flex",
  alignItems: "center",
  padding: "20px 0",
  borderTop: "1px solid $gray",
  borderBottom: "1px solid $gray",

  "&:first-child": {
    color: "$accent",
    borderBottom: "none",
  },

  '@fromTablet': {
    padding: "25px 0",
    fontSize: "$medium",
  }
});

export const ImageIcons = styled(Image, {
  marginRight: "15px",
});

export const UserPhoto = styled(Image, {});

export const UserPhotoWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "$white",
  opacity: "0.9",
  marginBottom: "20px",

  '@fromTablet': {
    marginBottom: "25px",
  }
});

export const LinkAuth = styled(Link, {
  color: "$textWhite",
  fontFamily: "$mulish",
  fontSize: "$default",

  '@fromTablet': {
    fontSize: "$medium",
  }
});
