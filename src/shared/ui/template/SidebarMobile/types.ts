export interface SidebarMobileProps {
  isOpened: boolean;
  handleClose?: () => void;
}

export interface UserActionsProps {
  title: string;
  href: string;
  icon: string;
  id: number;
}
