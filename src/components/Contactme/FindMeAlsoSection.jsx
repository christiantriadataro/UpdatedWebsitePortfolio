import TitleCardDownIcon from "../AboutMe/TitleCardDownIcon.jsx";
import MailIcon from "../AboutMe/MailIcon.jsx";
import PhoneIcon from "../AboutMe/Sidebar/PhoneIcon.jsx";
import {useState} from "react";
import LinkIcon from "../Projects/Icon/LinkIcon.jsx";
import FindMeComponent from "./FindMeComponent.jsx";
const ContactMeSection = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={handleClick} className="h-[35px] w-full border-b border-[#1E2D3D]
                            flex flex-row pl-4 items-center bg-[#1E2D3D] gap-2">
                <TitleCardDownIcon className={`transition duration-100 ${isOpen ? "-rotate-90" : ""}`} />
                <div className="text-gray-50 text-[13px]">find-me-also-in</div>
            </button>
            <div className={`${isOpen ? "" : "hidden "} transition duration-100 flex flex-col pt-2 border-b border-[#1E2D3D]`}>
                <FindMeComponent text="LinkedIn Account" link="https://www.linkedin.com/in/christiantriadataro/" />
                <FindMeComponent text="GitHub Account" link="https://github.com/christiantriadataro/" />
            </div>
        </div>
    )
}

export default ContactMeSection