import {ReactNode} from "react";

const FooterLinksWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="footer-links-wrapper">{children}</div>
    )
}

export default FooterLinksWrapper