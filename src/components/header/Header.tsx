import HeaderWrapper from "../wrappers/HeaderWrapper.tsx";
import NameComponent from "./NameComponent.tsx";
import Links from "./Links.tsx";


const Header = () => {

    return (
        <HeaderWrapper>
            <NameComponent/>
            <Links/>
        </HeaderWrapper>
    )
}

export default Header