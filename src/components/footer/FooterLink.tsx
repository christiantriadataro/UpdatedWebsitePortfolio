import {ReactNode} from "react";
import {Link} from "react-router";



const FooterLink = ({to, icon, text}: { to: string, icon: ReactNode, text?: string }) => {
    return (
        <Link reloadDocument target="_blank" to={to}
              className="footer-link">
            {text && <div>{text}</div>}
            {icon}
        </Link>
    )
}

export default FooterLink;