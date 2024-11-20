import {ReactNode} from "react";

const NameWrapper = ({children}: { children: ReactNode }) => (
    <div className="name-wrapper">{children}</div>
)

export default NameWrapper