import GithubIcon from "./GithubIcon.jsx";
import LinkedInIcon from "./LinkedInIcon.jsx";
import WebsiteIcon from "./WebsiteIcon.jsx";
import {Link, NavLink} from "react-router-dom";

const Footer = ({isHeaderClicked}) => {
    return (
        <>
            <div
                className={`${isHeaderClicked ? "" : "hidden"} text-[16px] lg:text-[12px] text-[#607B96] flex justify-between items-center h-[56px] lg:h-[39px] border-t border-[#1E2D3D]`}>
                <div className="w-1/2 lg:w-[121px] border-l border-[#1E2D3D] flex items-center pl-4">
                    <p>find me in:</p>
                </div>
                <div className="h-full flex items-center">
                    {/*<div*/}
                    {/*    className="w-1/2 h-full border-l border-[#1E2D3D] flex items-center justify-center group hover:bg-gray-800">*/}
                    {/*    <Link reloadDocument target="_blank" to={"https://www.linkedin.com/in/christiantriadataro/"}*/}
                    {/*          className="w-[52px] ">*/}
                    {/*        <LinkedInIcon className="w-[24ppx] h-[24px]"/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                        <Link reloadDocument target="_blank" to={"https://www.linkedin.com/in/christiantriadataro/"}
                              className="w-[52px] h-full border-l border-[#1E2D3D] flex items-center justify-center group hover:bg-gray-800">
                            <LinkedInIcon className="fill-[#607B96] w-[24px] h-[24px]"/>
                        </Link>
                    <Link reloadDocument target="_blank" to={"https://www.linkedin.com/in/christiantriadataro/"}
                              className="w-[52px] h-full border-l border-[#1E2D3D] flex items-center justify-center group hover:bg-gray-800">
                            <GithubIcon className="fill-[#607B96] w-[24px] h-[24px]"/>
                        </Link>
                    {/*<div*/}
                    {/*    className="w-1/2 h-full border-l border-[#1E2D3D] flex items-center justify-center group hover:bg-gray-800">*/}
                    {/*    <Link reloadDocument target="_blank" to={"https://www.linkedin.com/in/christiantriadataro/"}*/}
                    {/*          className="w-[52px] flex items-center justify-center">*/}
                    {/*        <GithubIcon className="w-[24ppx] h-[24px]"/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

export default Footer