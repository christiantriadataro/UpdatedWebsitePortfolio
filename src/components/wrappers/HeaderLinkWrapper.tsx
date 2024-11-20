import {ReactNode} from "react";
import {NavLink} from "react-router-dom";

const HeaderLinkWrapper = ({children, to}: { children: ReactNode, to: string }) => {
    return (
        <NavLink to={to} className={({isActive}) =>
            `${isActive ? "heading-link-active" : "heading-link-default"} heading-link`
        }>{children}</NavLink>
    )
}

export default HeaderLinkWrapper;