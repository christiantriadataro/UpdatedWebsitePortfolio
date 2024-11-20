import {ReactNode} from "react";

const FooterWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className="footer-wrapper">
            {children}
        </div>
    )
}

export default FooterWrapper;