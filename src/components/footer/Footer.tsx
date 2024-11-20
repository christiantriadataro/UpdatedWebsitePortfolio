import FooterWrapper from "../wrappers/FooterWrapper.tsx";
import FooterText from "./FooterText.tsx";
import FooterLinks from "./FooterLinks.tsx";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText/>
            <FooterLinks/>
        </FooterWrapper>
    )
}

export default Footer;