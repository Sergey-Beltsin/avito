export interface BurgerProps {
  onCLick?: () => void;
  isActive?: boolean;
  size?: "small" | "medium";
  theme?: "light" | "dark";
}
