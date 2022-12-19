import { ReactNode } from "react";

export interface SpeedDialMenu {
    actions: Actions[],
    ariaLabel: string,
    containerIcon: ReactNode
}

interface Actions {
    name: string;
    icon: ReactNode
}

export interface ChipContainer {
    labels: string,
    title: string
}

export interface Genres {
    categories: {
        id?: number,
        name?: string
    }[]
}