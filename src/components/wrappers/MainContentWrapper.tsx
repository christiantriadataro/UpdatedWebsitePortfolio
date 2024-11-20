import {ReactNode} from "react";

const MainContentWrapper = ({children}: { children: ReactNode }) => {
    return <div className="main-content-wrapper">{children}</div>
}

export default MainContentWrapper;