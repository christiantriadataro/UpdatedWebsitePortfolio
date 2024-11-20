import {ReactNode, useContext} from "react";
import {HeaderContext} from "../../contexts/HeaderContext.ts";

const LinkWrapper = ({children}: { children: ReactNode }) => {
    const {isHeaderClicked} = useContext(HeaderContext);
    return (
        <div
            className={`${isHeaderClicked ? "hidden" : ""} link-wrapper`}>{children}</div>
    )
}

export default LinkWrapper