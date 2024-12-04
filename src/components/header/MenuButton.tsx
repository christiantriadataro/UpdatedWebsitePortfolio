import {useContext} from "react";
import {HeaderContext} from "../../contexts/HeaderContext.ts";
import MenuIcon from "/assets/icons/Menu.svg";

const MenuButton = () => {
    const {handleClicked} = useContext(HeaderContext)
    return (
        <button className="menu-button" onClick={handleClicked}>
            <img src={MenuIcon} alt=""/>
        </button>
    )
}

export default MenuButton;