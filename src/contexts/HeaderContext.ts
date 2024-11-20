import {createContext, Dispatch, SetStateAction} from "react";

interface IHeaderContext {
    isHeaderClicked: boolean;
    setIsHeaderClicked: Dispatch<SetStateAction<boolean>>
    handleClicked: () => void;
}

const headerInitialState = {
    isHeaderClicked: true,
    setIsHeaderClicked: () => {
    },
    handleClicked: () => {
    }
}

export const HeaderContext = createContext<IHeaderContext>(headerInitialState);

