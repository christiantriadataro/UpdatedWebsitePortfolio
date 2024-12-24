import FooterLinksWrapper from "../wrappers/FooterLinksWrapper.tsx";
import FOOTER_TABS from "../../constants/footerTabs.tsx";
import FooterLink from "./FooterLink.tsx";

const FooterLinks = () => {
    return (
        <FooterLinksWrapper>
            {FOOTER_TABS.map(tab => (
                <FooterLink
                    key={tab.link}
                    to={tab.link}
                    icon={tab.icon}
                    text={tab.text}
                />
            ))}
        </FooterLinksWrapper>
    )
}

export default FooterLinks;