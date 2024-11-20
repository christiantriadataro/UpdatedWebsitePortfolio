import LinkWrapper from "../wrappers/LinkWrapper.tsx";
import HeaderLink from "./HeaderLink.tsx";

const Links = () => {
    return (
        <LinkWrapper>
            <HeaderLink text="_hello" to="/home"/>
            <HeaderLink text="_about-me" to="/about-me"/>
            <HeaderLink text="_projects" to="/projects"/>
            <HeaderLink text="_contact-me" to="/contact-me"/>
        </LinkWrapper>
    )
}

export default Links;