import CloseIcon from "../../assets/icons/close-icon.svg"
import MenuIcon from "../../assets/icons/Menu.svg"
import Text from "../shared/Text.tsx";
import LinkedInIcon from "../icons/LinkedInIcon.tsx";
import GithubIcon from "../icons/GitHubIcon.tsx";
import {useState} from "react";
import {Outlet} from "react-router";

const MainLayout = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const headerClick = () => setIsHeaderOpen(!isHeaderOpen);
    return (
        // <MainLayoutWrapper>
        <div className="text-white border border-lines rounded-lg h-full w-full flex flex-col">
            {/* header */}
            <div className="border-b border-lines h-[56px] flex items-center justify-between px-5">
                <Text text="christian-tria-dataro" variant="" cn="text-secondary-blue"/>
                {/*<img src={MenuIcon} alt="" className="w-5"/>*/}
                <img onClick={headerClick} src={isHeaderOpen ? CloseIcon : MenuIcon} alt="" className="w-5"/>
            </div>
            {/* content */}
            {isHeaderOpen ? (
                <div className="h-full">
                    <div className="py-4 pl-5 border-b border-lines">_hello</div>
                    <div className="py-4 pl-5 border-b border-lines">_about-me</div>
                    <div className="py-4 pl-5 border-b border-lines">_projects</div>
                    <div className="py-4 pl-5 border-b border-lines">x_contact-me</div>
                </div>) : (
                <div className="h-full">
                    {/* content */}
                    <Outlet />
                </div>
            )}
            {/* footer */}
            <div className="h-[50px] border-t border-lines flex justify-between items-center">
                <Text text="find me in" variant="" cn="px-5 text-secondary-blue"/>
                <div className="flex flex-row h-full items-center">
                    <div className="px-5 border-x border-lines h-full flex items-center">
                        <LinkedInIcon className="fill-secondary-blue w-[24px] h-[24px]"/>
                    </div>
                    <div className="px-5 border-x border-lines h-full flex items-center">
                        <GithubIcon className="fill-secondary-blue w-[24px] h-[24px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;