import {ReactNode} from "react";

const HeaderWrapper = ({children}: { children: ReactNode }) => (
    <div
        className="header-wrapper">{children}</div>
)

export default HeaderWrapper