import {ReactNode} from "react";

const TitlesWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="titles-wrapper">{children}</div>
    )
}

export default TitlesWrapper;