import {ReactNode} from "react";

const HomeWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="home-wrapper">{children}</div>
    )
}

export default HomeWrapper;