import { ReactElement, ReactNode, ChangeEvent } from "react";

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

export interface BooleanOptions {
    watchLater: boolean,
    streaming: boolean;
}

export interface Genres {
    categories: {
        id?: number,
        name?: string
    }[]
}

export interface ButtonContainer {
    icon: JSX.Element;
    tooltipMessage: string;
}

export interface DialogInterface {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=>void;
    content: ReactNode;
}
export interface IHomeFilterField {
    onFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

export interface CallToAction {
    title: string | ReactNode;
    subtitle: string;
    redirect: string;
    redirectMessage: string;
    onClickFn?: ()=>void;
    onClickMessage?: string;
}