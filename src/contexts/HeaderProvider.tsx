import {ReactNode, useState} from "react";
import {HeaderContext} from "./HeaderContext";


const HeaderProvider = ({children}: { children: ReactNode }) => {
    const [isHeaderClicked, setIsHeaderClicked] = useState<boolean>(false)

    const handleClicked = () => {
        setIsHeaderClicked(!isHeaderClicked)
    }

    return (
        <HeaderContext.Provider value={
            {
                isHeaderClicked,
                setIsHeaderClicked,
                handleClicked
            }
        }
        >
            {children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider