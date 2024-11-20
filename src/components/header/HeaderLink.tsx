import HeaderLinkWrapper from "../wrappers/HeaderLinkWrapper.tsx";

const HeaderLink = ({text, to}: { text: string, to: string }) => {
    return (
        <HeaderLinkWrapper to={to}>
            <div>{text}</div>
        </HeaderLinkWrapper>
    )
}

export default HeaderLink