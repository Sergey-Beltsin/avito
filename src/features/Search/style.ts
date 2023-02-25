import { styled } from "@/shared/lib/styles";
import { Button } from "@/shared/ui/atoms/Button/style";

export const FormSearch = styled("form", {
  width: "600px",
  display: "flex",
  alignItems: "center",
  border: "2px solid $accent",
  borderRadius: "8px",
  backgroundColor: "$accent",
});

export const SearchButton = styled(Button, {
  padding: "0 21px",
  maxWidth: "120px",

  "&:hover": {
    opacity: "0.9",
  },
});
