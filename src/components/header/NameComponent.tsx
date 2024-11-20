import NameWrapper from "../wrappers/NameWrapper.tsx";
import HeadingName from "./HeadingName.tsx";
import MenuButton from "./MenuButton.tsx";

const NameComponent = () => {
    return (
        <NameWrapper>
            <HeadingName/>
            <MenuButton/>
        </NameWrapper>
    )
}

export default NameComponent