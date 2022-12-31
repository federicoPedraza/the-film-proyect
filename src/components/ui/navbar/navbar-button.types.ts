export interface NavbarButtonType {
    content?: string;
    icon?: NavbarButtonIcon;
    variant?: string;
    url: string;
}

export enum NavbarButtonIcon {
    HOME,
    SETTINGS,
}