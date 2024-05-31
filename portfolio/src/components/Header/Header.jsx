import {NavLink} from "react-router-dom";
import MenuIcon from "../../assets/icons/Menu.svg"
import HeaderLink from "../AboutMe/Header/HeaderLink.jsx";
const Header = ({setIsHeaderClicked, isHeaderClicked}) => {

    const handleClicked = () => {
        setIsHeaderClicked(!isHeaderClicked)
    }

    return (
        <>
            <div
                className="text-[16px] w-full text-[#607B96] flex lg:flex-row flex-col justify-between items-center h-[56px] border-b border-[#1E2D3D] ">
                <div className="text-[16px] w-full text-[#607B96] flex flex-col justify-between items-center h-[56px] border-b border-[#1E2D3D] ">
                    <div className="flex h-[56px] w-full justify-between items-center px-4">
                        <div className="flex items-center hover:bg-gray-800 h-full w-full">
                            <p>christian-tria-dataro</p>
                        </div>
                        <button className="lg:hidden p-2 pr-4" onClick={handleClicked}>
                            <img src={MenuIcon} alt=""/>
                        </button>
                    </div>
                </div>
                <div className={`${isHeaderClicked ? "block" : "hidden lg:flex"} justify-end  w-full h-full`}>
                    <HeaderLink text="_hello" to="/"/>
                    <HeaderLink text="_about-me" to="/about-me"/>
                    <HeaderLink text="_projects" to="/projects"/>
                    <HeaderLink text="_contact-me" to="/contact-me"/>
                </div>
            </div>

        </>
    )
}

export default Header